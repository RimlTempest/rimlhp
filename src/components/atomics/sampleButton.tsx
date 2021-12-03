import { Button, Stack } from '@chakra-ui/react';
import React from 'react';

export type ButtonProps = {
    color: string;
    size: string;
    text: string;
};

export const SampleButton: React.VFC<ButtonProps> = (props) => {
    return (
        <Stack spacing={4} direction="row" align="center">
            <Button colorScheme={props.color} size={props.size}>
                {props.text}
            </Button>
        </Stack>
    );
};
