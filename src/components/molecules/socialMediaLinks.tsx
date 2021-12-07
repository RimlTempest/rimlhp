import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

export const SocialMediaLinks: React.VFC<ButtonGroupProps> = (props) => {
    return (
        <ButtonGroup variant="ghost" color="gray.600" {...props}>
            <IconButton as="a" aria-label="Facebook" icon={<FaFacebookF fontSize="20px" />} />
            <IconButton as="a" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
            <IconButton as="a" aria-label="Github" icon={<FaGithub fontSize="20px" />} />
        </ButtonGroup>
    );
};
