import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from './Counter';

export default {
  title: 'Counter Component',
  component: Counter
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => <Counter />;

export const CounterComponent = Template.bind({});
