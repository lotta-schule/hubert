import{a as o}from"./Button.f221a0cd.js";import{B as n}from"./ScrollToTopButton.92faafa0.js";import"./NavigationButton.57c284fa.js";import{j as t}from"./jsx-runtime.74e8f26d.js";import{F as s,a as u,b as e}from"./FormatUnderlined.e1249242.js";import"./index.0f3430ae.js";import"./iframe.70440780.js";import"./clsx.m.256e9345.js";import"./Tooltip.37fa832b.js";import"./motion.d92c51a2.js";import"./Close.eaa4f026.js";import"./createSvgIcon.0aa2a8b4.js";import"./module.597b474f.js";import"./module.9d0250e1.js";import"./module.15601152.js";import"./module.9c6536da.js";const D={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=GroupedButtons.stories.5dd0bb3f.js.map
