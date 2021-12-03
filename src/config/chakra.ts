import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
});

export const theme = extendTheme({
    breakpoints,
    config: {
        initialColorMode: 'light',
        useSystemColorMode: true,
    },
});