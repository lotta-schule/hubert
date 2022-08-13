import{T as t}from"./Tooltip.b3f77e2f.js";import{j as o}from"./jsx-runtime.87af9f8a.js";import"./iframe.7534659a.js";import{a as e}from"./Button.0b6228df.js";import"./ScrollToTopButton.1e945eb1.js";import"./NavigationButton.18bc6c1d.js";import"./motion.963472fb.js";import"./clsx.m.256e9345.js";import"./Close.eb040f5f.js";import"./createSvgIcon.b593cfc3.js";import"./module.f72a2f7f.js";import"./module.c3b99798.js";import"./module.74fb67ee.js";import"./module.2947b28d.js";const B={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tooltip } from '../../util';
import { Button } from '../../button';

export default {
  title: 'overlays/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story = (args: any) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Button onClick={() => alert('click')} label={'Hover me'} />,
  label: 'Simple Tooltip',
};

export const Image = Template.bind({});
Image.args = {
  children: <Button onClick={() => alert('click')} label={'Hover me'} />,
  label: (
    <img
      src="https://picsum.photos/600/400"
      alt="Wahrscheinlich wundersch\xF6nes Foto"
    />
  ),
};
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:60,line:11},startBody:{col:24,line:11},endBody:{col:60,line:11}},image:{startLoc:{col:24,line:11},endLoc:{col:60,line:11},startBody:{col:24,line:11},endBody:{col:60,line:11}}}}},title:"overlays/Tooltip",component:t},l=n=>o(t,{...n}),r=l.bind({});r.args={children:o(e,{onClick:()=>alert("click"),label:"Hover me"}),label:"Simple Tooltip"};const i=l.bind({});i.args={children:o(e,{onClick:()=>alert("click"),label:"Hover me"}),label:o("img",{src:"https://picsum.photos/600/400",alt:"Wahrscheinlich wundersch\xF6nes Foto"})};const x=["Default","Image"];export{r as Default,i as Image,x as __namedExportsOrder,B as default};
//# sourceMappingURL=Tooltip.stories.d03b07e2.js.map
