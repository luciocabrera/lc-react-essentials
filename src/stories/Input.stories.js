import React from 'react';
import { Input } from '../components/Form/Input';

export default {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' }
  }
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  accessor: 'name',
  type: 'input',
  label: 'Please enter the name',
  border: '1px solid blue'
};