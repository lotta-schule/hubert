import{a as o}from"./Button.0b6228df.js";import{B as n}from"./ScrollToTopButton.1e945eb1.js";import"./NavigationButton.18bc6c1d.js";import{j as t}from"./jsx-runtime.87af9f8a.js";import{F as s,a as u,b as e}from"./FormatUnderlined.8c5164b7.js";import"./clsx.m.256e9345.js";import"./Tooltip.b3f77e2f.js";import"./motion.963472fb.js";import"./Close.eb040f5f.js";import"./createSvgIcon.b593cfc3.js";import"./module.f72a2f7f.js";import"./module.c3b99798.js";import"./module.74fb67ee.js";import"./module.2947b28d.js";import"./iframe.7534659a.js";const I={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:5,line:15},endLoc:{col:74,line:15},startBody:{col:5,line:15},endBody:{col:74,line:15}},many:{startLoc:{col:5,line:15},endLoc:{col:74,line:15},startBody:{col:5,line:15},endBody:{col:74,line:15}}}}},title:"Buttons/ButtonGroup",component:n,argTypes:{}},a=({args:r,buttons:l})=>t(n,{...r,children:l}),i=a.bind({});i.args={args:{},buttons:[t(o,{icon:t(s,{}),selected:!0},0),t(o,{icon:t(u,{})},1),t(o,{icon:t(e,{})},2)]};const m=a.bind({});m.args={args:{},buttons:[t(o,{label:"F"},0),t(o,{label:"I"},1),t(o,{label:"U"},2),t(o,{label:"U"},3),t(o,{label:"U"},4),t(o,{label:"U"},5),t(o,{label:"U"},6),t(o,{icon:t(e,{})},7),t(o,{label:"U"},8),t(o,{label:"U"},9),t(o,{label:"U"},10)]};const D=["Default","Many"];export{i as Default,m as Many,D as __namedExportsOrder,I as default};
//# sourceMappingURL=GroupedButtons.stories.d1f7b004.js.map
