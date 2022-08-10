import{a as o}from"./Button.a4f68b89.js";import{B as n}from"./ScrollToTopButton.43bebac9.js";import"./NavigationButton.6caa978f.js";import{T as a}from"./Toolbar.06b8519c.js";import{a as l,F as e,j as t}from"./jsx-runtime.e37de2b3.js";import{F as u,a as c,b as r}from"./FormatUnderlined.916f1e82.js";import"./index.92f5a256.js";import"./iframe.0870ca85.js";import"./clsx.m.256e9345.js";import"./Tooltip.14f13fff.js";import"./motion.0633113d.js";import"./Close.a97e74f1.js";import"./createSvgIcon.d8fe52fb.js";import"./module.13baac02.js";import"./module.3cdcaba7.js";import"./module.59821bca.js";import"./module.ba8fabce.js";const R={parameters:{storySource:{source:`import React from 'react';
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
//# sourceMappingURL=Toolbar.stories.2fcaea40.js.map
