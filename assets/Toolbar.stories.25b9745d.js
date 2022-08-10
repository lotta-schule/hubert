import{a as o}from"./Button.2f747c1b.js";import{B as n}from"./ScrollToTopButton.fc8e0e8d.js";import"./NavigationButton.345aad1a.js";import{T as a}from"./Toolbar.6c396c1f.js";import{a as l,F as e,j as t}from"./jsx-runtime.3f3ec6f1.js";import{F as u,a as c,b as r}from"./FormatUnderlined.cef18635.js";import"./index.3de4b586.js";import"./iframe.fa893b47.js";import"./clsx.m.256e9345.js";import"./Tooltip.a841f18b.js";import"./motion.b4b9485b.js";import"./Close.a434c368.js";import"./createSvgIcon.578d9fcc.js";import"./module.350c5c3b.js";import"./module.f9b3285f.js";import"./module.ca7fab40.js";import"./module.b208df3e.js";const R={parameters:{storySource:{source:`import React from 'react';
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
//# sourceMappingURL=Toolbar.stories.25b9745d.js.map
