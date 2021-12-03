import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Parameters, StoryContext } from '@storybook/react';
import React from 'react';
import { withPerformance } from 'storybook-addon-performance';

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
    direction: {
        name: 'Direction',
        description: 'Direction for layout',
        defaultValue: 'LTR',
        toolbar: {
            icon: 'globe',
            items: ['LTR', 'RTL'],
        },
    },
};

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

const withChakra = (StoryFn: Function, context: StoryContext) => {
    const { direction } = context.globals;
    const dir = direction.toLowerCase();

    React.useEffect(() => {
        document.documentElement.dir = dir;
    }, [dir]);

    return (
        <ChakraProvider theme={extendTheme({ direction: dir })}>
            <div dir={dir} id="story-wrapper" style={{ minHeight: '100vh' }}>
                <StoryFn />
            </div>
        </ChakraProvider>
    );
};

export const parameters: Parameters = {
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};

export const decorators = [withChakra, withPerformance];
