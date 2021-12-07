import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { client } from '@/lib/client';
import { BlogType } from '@/types/blog';

interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

interface BlogAuthorProps {
    date: Date;
    name: string;
    image: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src={props.image}
                alt={`Avatar of ${props.name}`}
            />
            <Link href={'/#profile'} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Text fontWeight="medium">{props.name}</Text>
            </Link>
            <Text>投稿日: </Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const Blog = ({ blog }: any) => {
    const bgGradient = useColorModeValue(
        'radial(orange.600 1px, transparent 1px)',
        'radial(orange.300 1px, transparent 1px)',
    );
    const textColor = useColorModeValue('gray.700', 'gray.200');

    return (
        <Box>
            <Header />
            <Container maxW={'7xl'} p="12">
                <Heading as="h1">ブログ一覧</Heading>
                {blog.map((item: BlogType) => (
                    <Box key={item.id}>
                        <Box
                            marginTop={{ base: '1', sm: '5' }}
                            display="flex"
                            flexDirection={{ base: 'column', sm: 'row' }}
                            justifyContent="space-between"
                        >
                            <Box
                                display="flex"
                                flex="1"
                                marginRight="3"
                                position="relative"
                                alignItems="center"
                            >
                                <Box
                                    width={{ base: '100%', sm: '85%' }}
                                    zIndex="2"
                                    marginLeft={{ base: '0', sm: '5%' }}
                                    marginTop="5%"
                                >
                                    <Link
                                        href={`/blog/${item.id}`}
                                        textDecoration="none"
                                        _hover={{ textDecoration: 'none' }}
                                    >
                                        <Image
                                            borderRadius="lg"
                                            src={
                                                item.og_image?.url
                                                    ? item.og_image.url
                                                    : '/NoImage.png'
                                            }
                                            alt="some good alt text"
                                            objectFit="contain"
                                        />
                                    </Link>
                                </Box>
                                <Box zIndex="1" width="100%" position="absolute" height="100%">
                                    <Box
                                        bgGradient={bgGradient}
                                        backgroundSize="20px 20px"
                                        opacity="0.4"
                                        height="100%"
                                    />
                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                flex="1"
                                flexDirection="column"
                                justifyContent="center"
                                marginTop={{ base: '3', sm: '0' }}
                            >
                                <BlogTags tags={item.category.map((tag) => tag.category_name)} />
                                <Heading marginTop="1">
                                    <Link
                                        href={`/blog/${item.id}`}
                                        textDecoration="none"
                                        _hover={{ textDecoration: 'none' }}
                                    >
                                        {item.title}
                                    </Link>
                                </Heading>
                                <Text as="p" marginTop="2" color={textColor} fontSize="lg">
                                    {item.description}
                                </Text>
                                <BlogAuthor
                                    name={item.writer.name}
                                    date={new Date(item.publishedAt)}
                                    image={item.writer.image.url}
                                />
                            </Box>
                        </Box>
                        <Divider marginTop="5" />
                    </Box>
                ))}
            </Container>
            <Footer />
        </Box>
    );
};

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'blog' });
    return {
        props: {
            blog: data.contents,
        },
        revalidate: 10,
    };
};
export default Blog;
