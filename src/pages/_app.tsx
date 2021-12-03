import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
import GoogleAnalytics from '@/components/wrapperComponent/GoogleAnalytics';
import { theme } from '@/config/chakra';
import usePageView from '@/hooks/usePageView';

function MyApp({ Component, pageProps }: AppProps) {
    usePageView();
    return (
        <>
            <GoogleAnalytics />
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
