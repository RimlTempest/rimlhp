import { Text, TextProps } from '@chakra-ui/layout';
import React from 'react';

export const Copyright: React.VFC = (props: TextProps) => {
    return (
        <Text fontSize="sm" {...props}>
            &copy; {new Date().getFullYear()} Daiki Takahashi. All rights reserved.
        </Text>
    );
};
