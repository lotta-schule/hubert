import{T as t}from"./Tooltip.37fa832b.js";import"./index.0f3430ae.js";import"./iframe.70440780.js";import{a as e}from"./Button.f221a0cd.js";import"./ScrollToTopButton.92faafa0.js";import"./NavigationButton.57c284fa.js";import{j as o}from"./jsx-runtime.74e8f26d.js";import"./motion.d92c51a2.js";import"./clsx.m.256e9345.js";import"./Close.eaa4f026.js";import"./createSvgIcon.0aa2a8b4.js";import"./module.597b474f.js";import"./module.9d0250e1.js";import"./module.15601152.js";import"./module.9c6536da.js";const x={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:60,line:11},startBody:{col:24,line:11},endBody:{col:60,line:11}},image:{startLoc:{col:24,line:11},endLoc:{col:60,line:11},startBody:{col:24,line:11},endBody:{col:60,line:11}}}}},title:"overlays/Tooltip",component:t},l=n=>o(t,{...n}),r=l.bind({});r.args={children:o(e,{onClick:()=>alert("click"),label:"Hover me"}),label:"Simple Tooltip"};const i=l.bind({});i.args={children:o(e,{onClick:()=>alert("click"),label:"Hover me"}),label:o("img",{src:"https://picsum.photos/600/400",alt:"Wahrscheinlich wundersch\xF6nes Foto"})};const v=["Default","Image"];export{r as Default,i as Image,v as __namedExportsOrder,x as default};
//# sourceMappingURL=Tooltip.stories.cf067c4f.js.map
