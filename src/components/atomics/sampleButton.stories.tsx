import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SampleButton, ButtonProps } from './sampleButton';

export default {
    title: 'Atoms/SampleButton',
    component: SampleButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <SampleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Sample Button',
    color: 'teal',
    size: 'sm',
} as ButtonProps;
