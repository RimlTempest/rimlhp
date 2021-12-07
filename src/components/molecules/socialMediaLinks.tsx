import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

export const SocialMediaLinks: React.VFC<ButtonGroupProps> = (props) => {
    const handler = (path: string) => {
        Router.push(path);
    };

    return (
        <ButtonGroup variant="ghost" color="gray.600" {...props}>
            <IconButton
                as="a"
                aria-label="Facebook"
                icon={<FaFacebookF fontSize="20px" />}
                onClick={() => handler('https://www.facebook.com/R1mlTempest')}
            />
            <IconButton
                as="a"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="20px" />}
                onClick={() => handler('https://twitter.com/Fande4d')}
            />
            <IconButton
                as="a"
                aria-label="Github"
                icon={<FaGithub fontSize="20px" />}
                onClick={() => handler('https://github.com/RimlTempest')}
            />
        </ButtonGroup>
    );
};
