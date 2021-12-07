import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Copyright } from '@/components/atoms/copyright';
import { SocialMediaLinks } from '@/components/molecules/socialMediaLinks';

export const Footer = () => {
    return (
        <Box
            as="footer"
            role="contentinfo"
            mx="auto"
            maxW="7xl"
            py="12"
            px={{ base: '4', md: '8' }}
        >
            <Stack>
                <Stack direction="row" spacing="4" align="center" justify="space-between">
                    {/* <Logo /> */}
                    <SocialMediaLinks />
                </Stack>
                <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
            </Stack>
        </Box>
    );
};
