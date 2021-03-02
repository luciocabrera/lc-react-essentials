import React from 'react';
import { NavBar } from '../components/NavBar';
import infoImage from './assets/info.svg';

const routes = [
  { text: 'Home', path: '#home', exact: true, icon: infoImage },
  { text: 'About', path: '#about', exact: true, icon: infoImage },
  { text: 'Contact', path: '#contact', exact: true, icon: infoImage }
];

export default {
  title: 'Components/Core/NavBar',
  component: NavBar
};

const Template = args => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  routes:routes,
   fontColor:'white',
   backgroundColor:'black'
};