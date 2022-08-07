import{a as o}from"./Button.0f1518cc.js";import{B as n}from"./ScrollToTopButton.d2eae2ab.js";import"./NavigationButton.66bc3d2b.js";import{j as t}from"./jsx-runtime.7289b5dc.js";import{F as s,a as u,b as e}from"./FormatUnderlined.83dd8448.js";import"./index.5d0e9c0b.js";import"./iframe.963a3c39.js";import"./clsx.m.256e9345.js";import"./Tooltip.0ae90a96.js";import"./motion.76e11fbb.js";import"./Close.d7f9f1f4.js";import"./createSvgIcon.7de690df.js";import"./module.c32c62b2.js";import"./module.7d41bc01.js";import"./module.e5809dfc.js";import"./module.d9bcc68b.js";const D={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { FormatBold, FormatItalic, FormatUnderlined } from '@material-ui/icons';
import { Button, ButtonGroup, ButtonGroupProps } from '../../button';

export default {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroup,
  argTypes: {},
} as Meta;

const Template: Story<{
  args: ButtonGroupProps;
  buttons: React.ReactElement[];
}> = ({ args, buttons }) => <ButtonGroup {...args}>{buttons}</ButtonGroup>;

export const Default = Template.bind({});
Default.args = {
  args: {},
  buttons: [
    <Button key={0} icon={<FormatBold />} selected />,
    <Button key={1} icon={<FormatItalic />} />,
    <Button key={2} icon={<FormatUnderlined />} />,
  ],
};

export const Many = Template.bind({});
Many.args = {
  args: {},
  buttons: [
    <Button key={0} label={'F'} />,
    <Button key={1} label={'I'} />,
    <Button key={2} label={'U'} />,
    <Button key={3} label={'U'} />,
    <Button key={4} label={'U'} />,
    <Button key={5} label={'U'} />,
    <Button key={6} label={'U'} />,
    <Button key={7} icon={<FormatUnderlined />} />,
    <Button key={8} label={'U'} />,
    <Button key={9} label={'U'} />,
    <Button key={10} label={'U'} />,
  ],
};
`,locationsMap:{default:{startLoc:{col:5,line:15},endLoc:{col:74,line:15},startBody:{col:5,line:15},endBody:{col:74,line:15}},many:{startLoc:{col:5,line:15},endLoc:{col:74,line:15},startBody:{col:5,line:15},endBody:{col:74,line:15}}}}},title:"Buttons/ButtonGroup",component:n,argTypes:{}},r=({args:a,buttons:l})=>t(n,{...a,children:l}),i=r.bind({});i.args={args:{},buttons:[t(o,{icon:t(s,{}),selected:!0},0),t(o,{icon:t(u,{})},1),t(o,{icon:t(e,{})},2)]};const m=r.bind({});m.args={args:{},buttons:[t(o,{label:"F"},0),t(o,{label:"I"},1),t(o,{label:"U"},2),t(o,{label:"U"},3),t(o,{label:"U"},4),t(o,{label:"U"},5),t(o,{label:"U"},6),t(o,{icon:t(e,{})},7),t(o,{label:"U"},8),t(o,{label:"U"},9),t(o,{label:"U"},10)]};const L=["Default","Many"];export{i as Default,m as Many,L as __namedExportsOrder,D as default};
//# sourceMappingURL=GroupedButtons.stories.09c1b384.js.map
