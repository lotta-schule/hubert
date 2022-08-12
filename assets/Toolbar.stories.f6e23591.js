import{a as o}from"./Button.241efdd1.js";import{B as n}from"./ScrollToTopButton.5a0cca58.js";import"./NavigationButton.07ddcefa.js";import{T as a}from"./Toolbar.127c4906.js";import{a as l,F as e,j as t}from"./jsx-runtime.07d80b3e.js";import{F as u,a as c,b as r}from"./FormatUnderlined.6b835fd6.js";import"./index.14a841ff.js";import"./iframe.932f5277.js";import"./clsx.m.256e9345.js";import"./Tooltip.44b4b6f8.js";import"./motion.c6ce950e.js";import"./Close.60dd5681.js";import"./createSvgIcon.31534729.js";import"./module.4883cab8.js";import"./module.9cf9adba.js";import"./module.ee188d51.js";import"./module.ae9dd4e2.js";const R={parameters:{storySource:{source:`import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FormatBold, FormatItalic, FormatUnderlined } from '@material-ui/icons';
import { Button, ButtonGroup } from '../../button';
import { Toolbar, ToolbarProps } from '../../layout';

export default {
  title: 'Layout/Toolbar',
  component: Toolbar,
  argTypes: {},
} as Meta;

const Template: Story<{
  args: ToolbarProps;
  content: React.ReactElement;
}> = ({ args, content }) => <Toolbar {...args}>{content}</Toolbar>;

export const Default = Template.bind({});
Default.args = {
  args: {},
  content: (
    <>
      <Button small key={0} icon={<FormatBold />} selected />
      <Button small key={1} icon={<FormatItalic />} />
      <Button small key={2} icon={<FormatUnderlined />} />
    </>
  ),
};

export const Many = Template.bind({});
Many.args = {
  args: {},
  content: (
    <>
      <Button small key={0} label={'F'} />
      <Button small key={1} label={'I'} />
      <ButtonGroup>
        <Button small key={2} label={'U'} />
        <Button small key={3} label={'U'} />
        <Button small key={4} label={'U'} />
      </ButtonGroup>
      <ButtonGroup>
        <Button small key={5} label={'U'} />
        <Button small key={6} label={'U'} />
        <Button small key={7} icon={<FormatUnderlined />} />
        <Button small key={8} label={'U'} />
        <Button small key={9} label={'U'} />
        <Button small key={10} label={'U'} />
      </ButtonGroup>
    </>
  ),
};
`,locationsMap:{default:{startLoc:{col:5,line:16},endLoc:{col:66,line:16},startBody:{col:5,line:16},endBody:{col:66,line:16}},many:{startLoc:{col:5,line:16},endLoc:{col:66,line:16},startBody:{col:5,line:16},endBody:{col:66,line:16}}}}},title:"Layout/Toolbar",component:a,argTypes:{}},m=({args:s,content:i})=>t(a,{...s,children:i}),p=m.bind({});p.args={args:{},content:l(e,{children:[t(o,{small:!0,icon:t(u,{}),selected:!0},0),t(o,{small:!0,icon:t(c,{})},1),t(o,{small:!0,icon:t(r,{})},2)]})};const b=m.bind({});b.args={args:{},content:l(e,{children:[t(o,{small:!0,label:"F"},0),t(o,{small:!0,label:"I"},1),l(n,{children:[t(o,{small:!0,label:"U"},2),t(o,{small:!0,label:"U"},3),t(o,{small:!0,label:"U"},4)]}),l(n,{children:[t(o,{small:!0,label:"U"},5),t(o,{small:!0,label:"U"},6),t(o,{small:!0,icon:t(r,{})},7),t(o,{small:!0,label:"U"},8),t(o,{small:!0,label:"U"},9),t(o,{small:!0,label:"U"},10)]})]})};const S=["Default","Many"];export{p as Default,b as Many,S as __namedExportsOrder,R as default};
//# sourceMappingURL=Toolbar.stories.f6e23591.js.map
