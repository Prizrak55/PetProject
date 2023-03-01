import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Error = Template.bind({});
Error.args = {
  title: 'Тайтл',
  text: 'Текст',
  theme: TextTheme.ERROR,
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Тайтл',
  text: 'Текст',
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Тайтл',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Текст',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Тайтл',
  text: 'Текст',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Тайтл',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Текст',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
