import { Container, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { client } from '@/lib/client';
import { BodyParser } from '@/lib/htmlParser';
import { BlogType } from '@/types/blog';
import { BlogResponse } from '@/types/response';

type BlogDetailProps = {
    blog: BlogType;
};

const BlogId: React.VFC<BlogDetailProps> = ({ blog }) => {
    console.log(blog.body);
    return (
        <main>
            <Header />
            <Container maxW={'7xl'} p="12">
                <Heading as="h1">{blog.title}</Heading>
                <p>投稿日: {blog.publishedAt}</p>
                <BodyParser source={blog.body} />
                {/* <div
                dangerouslySetInnerHTML={{
                    __html: `${blog.body}`,
                }}
            /> */}
            </Container>
            <Footer />
        </main>
    );
};

export default BlogId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: 'blog' });

    const paths = data.contents.map((content: BlogType) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context: any) => {
    const id = context.params.id;
    const data: BlogType = await client.get({ endpoint: 'blog', contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};
