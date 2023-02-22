import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consecteturadipisicing elit. Culpa voluptatibus qui, in obcaecatisit facere illo ullam dicta eligendi natus, expedita tempora',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consecteturadipisicing elit. Culpa voluptatibus qui, in obcaecatisit facere illo ullam dicta eligendi natus, expedita tempora',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
