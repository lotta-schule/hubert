import{a as o}from"./Button.2cfaf172.js";import{B as n}from"./ScrollToTopButton.2d36db0a.js";import"./NavigationButton.a60e963d.js";import{T as a}from"./Toolbar.be9144ab.js";import{a as l,F as e,j as t}from"./jsx-runtime.5f5c6c62.js";import{F as u,a as c,b as r}from"./FormatUnderlined.3754b8a5.js";import"./index.90767ddd.js";import"./clsx.m.256e9345.js";import"./Tooltip.622d7c24.js";import"./motion.47b2d96e.js";import"./Close.d3e3497e.js";import"./createSvgIcon.c6efc8b1.js";import"./module.4439b031.js";import"./module.b4c17bae.js";import"./module.0e81a828.js";import"./module.b6da278b.js";import"./iframe.b9d3de60.js";var R={parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{default:{startLoc:{col:5,line:16},endLoc:{col:66,line:16},startBody:{col:5,line:16},endBody:{col:66,line:16}},many:{startLoc:{col:5,line:16},endLoc:{col:66,line:16},startBody:{col:5,line:16},endBody:{col:66,line:16}}}}},title:"Layout/Toolbar",component:a,argTypes:{}};const m=({args:s,content:i})=>t(a,{...s,children:i}),p=m.bind({});p.args={args:{},content:l(e,{children:[t(o,{small:!0,icon:t(u,{}),selected:!0},0),t(o,{small:!0,icon:t(c,{})},1),t(o,{small:!0,icon:t(r,{})},2)]})};const b=m.bind({});b.args={args:{},content:l(e,{children:[t(o,{small:!0,label:"F"},0),t(o,{small:!0,label:"I"},1),l(n,{children:[t(o,{small:!0,label:"U"},2),t(o,{small:!0,label:"U"},3),t(o,{small:!0,label:"U"},4)]}),l(n,{children:[t(o,{small:!0,label:"U"},5),t(o,{small:!0,label:"U"},6),t(o,{small:!0,icon:t(r,{})},7),t(o,{small:!0,label:"U"},8),t(o,{small:!0,label:"U"},9),t(o,{small:!0,label:"U"},10)]})]})};const S=["Default","Many"];export{p as Default,b as Many,S as __namedExportsOrder,R as default};
//# sourceMappingURL=Toolbar.stories.05330fa2.js.map
