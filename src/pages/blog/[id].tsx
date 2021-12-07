import Link from 'next/link';
import { client } from '@/lib/client';
import { BlogType } from '@/types/blog';
import { BlogResponse } from '@/types/response';

export default function BlogId({ blog }: any) {
    return (
        <main>
            <h1>{blog.title}</h1>
            <p>{blog.publishedAt}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: `${blog.body}`,
                }}
            />
        </main>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: 'blog' });

    const paths = data.contents.map((content: any) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: 'blog', contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};
