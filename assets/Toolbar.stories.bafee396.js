import{a as o}from"./Button.748df8ed.js";import{B as n}from"./ScrollToTopButton.891e11c9.js";import"./NavigationButton.02288aa1.js";import{T as a}from"./Toolbar.44bc4148.js";import{a as l,F as e,j as t}from"./jsx-runtime.a295b370.js";import{F as u,a as c,b as r}from"./FormatUnderlined.366d39fb.js";import"./clsx.m.256e9345.js";import"./Tooltip.f492eb34.js";import"./motion.e7803938.js";import"./Close.e5fb054a.js";import"./createSvgIcon.61cdea2a.js";import"./module.e09d6e39.js";import"./module.c5433e63.js";import"./module.e6643ae1.js";import"./module.1e5f28f1.js";import"./iframe.7a8c67e5.js";const j={parameters:{storySource:{source:`import React from 'react';
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
`,locationsMap:{default:{startLoc:{col:5,line:16},endLoc:{col:66,line:16},startBody:{col:5,line:16},endBody:{col:66,line:16}},many:{startLoc:{col:5,line:16},endLoc:{col:66,line:16},startBody:{col:5,line:16},endBody:{col:66,line:16}}}}},title:"Layout/Toolbar",component:a,argTypes:{}},m=({args:s,content:i})=>t(a,{...s,children:i}),p=m.bind({});p.args={args:{},content:l(e,{children:[t(o,{small:!0,icon:t(u,{}),selected:!0},0),t(o,{small:!0,icon:t(c,{})},1),t(o,{small:!0,icon:t(r,{})},2)]})};const b=m.bind({});b.args={args:{},content:l(e,{children:[t(o,{small:!0,label:"F"},0),t(o,{small:!0,label:"I"},1),l(n,{children:[t(o,{small:!0,label:"U"},2),t(o,{small:!0,label:"U"},3),t(o,{small:!0,label:"U"},4)]}),l(n,{children:[t(o,{small:!0,label:"U"},5),t(o,{small:!0,label:"U"},6),t(o,{small:!0,icon:t(r,{})},7),t(o,{small:!0,label:"U"},8),t(o,{small:!0,label:"U"},9),t(o,{small:!0,label:"U"},10)]})]})};const R=["Default","Many"];export{p as Default,b as Many,R as __namedExportsOrder,j as default};
//# sourceMappingURL=Toolbar.stories.bafee396.js.map
