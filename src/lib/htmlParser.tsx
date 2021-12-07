import { BoxProps, Box, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import highlight from 'highlight.js';
import parse, { domToReact, HTMLReactParserOptions, DOMNode } from 'html-react-parser';
import 'highlight.js/styles/night-owl.css';

type BodyProps = {
    source: string;
} & BoxProps;

// const ChakraMarkdown = chakra(Markdown);

const headingStyle = {
    mt: '10',
    mb: '6',
    fontWeight: 'semibold',
};
const borderBottomStyle = {
    pb: '1',
    borderBottom: '2px',
    borderBottomColor: 'gray.200',
};

const h1 = {
    component: Text,
    props: {
        ...headingStyle,
        ...borderBottomStyle,
        fontSize: '3xl',
        // as: 'h1',
    },
};

const h2 = {
    component: Text,
    props: {
        ...headingStyle,
        fontSize: '2xl',
        // as: 'h2',
    },
};

const h3 = {
    component: Text,
    props: {
        ...headingStyle,
        fontSize: 'xl',
        // as: 'h3',
    },
};

const p = {
    component: Text,
    props: {
        lineHeight: '180%',
        mb: '6',
    },
};

const code = {
    component: Box,
    props: {
        fontSize: 'sm',
        p: '4',
        mb: '6',
    },
};

const blockquote = {
    component: Box,
    props: {
        borderLeft: '2px',
        pl: '4',
        mb: '6',
        color: 'gray.500',
        // as: 'blockquote',
    },
};

const a = {
    component: Link,
    props: {
        isExternal: true,
        textDecoration: 'underline',
    },
};

const languageSubset = ['js', 'html', 'css', 'xml', 'typescript'];

const options: HTMLReactParserOptions = {
    replace: (domNode: any) => {
        if (domNode.type === 'tag') {
            if (domNode.name === 'h1') {
                return (
                    <Text as="h1" {...h1.props}>
                        {domToReact(domNode.children, options)}
                    </Text>
                );
            }
            if (domNode.name === 'h2') {
                return (
                    <Text as="h2" {...h2.props}>
                        {domToReact(domNode.children, options)}
                    </Text>
                );
            }
            if (domNode.name === 'h3') {
                return (
                    <Text as="h3" {...h3.props}>
                        {domToReact(domNode.children, options)}
                    </Text>
                );
            }
            if (domNode.name === 'ul') {
                return <UnorderedList>{domToReact(domNode.children, options)}</UnorderedList>;
            }
            if (domNode.name === 'li') {
                return <ListItem>{domToReact(domNode.children, options)}</ListItem>;
            }
            if (domNode.name === 'blockquote') {
                return (
                    <Box as="blockquote" {...blockquote.props}>
                        {domToReact(domNode.children, options)}
                    </Box>
                );
            }
            if (domNode.name === 'code') {
                const highlightCode = highlight.highlightAuto(
                    domToReact(domNode.children) as string,
                    languageSubset,
                ).value;
                return (
                    <Box as="code" className="hljs" {...code.props}>
                        {parse(highlightCode)}
                    </Box>
                );
            }
            if (domNode.name === 'a') {
                return (
                    <Link {...a.props} href={domNode.attribs.href}>
                        {domToReact(domNode.children, options)}
                    </Link>
                );
            }
            if (domNode.name === 'p') {
                return <Text {...p.props}>{domToReact(domNode.children, options)}</Text>;
            }
        }
    },
};

export const BodyParser = (props: BodyProps) => {
    return <Box>{parse(props.source, options)}</Box>;
};
