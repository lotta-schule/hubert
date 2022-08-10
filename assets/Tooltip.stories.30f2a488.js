import{T as t}from"./Tooltip.a841f18b.js";import"./index.3de4b586.js";import"./iframe.fa893b47.js";import{a as e}from"./Button.2f747c1b.js";import"./ScrollToTopButton.fc8e0e8d.js";import"./NavigationButton.345aad1a.js";import{j as o}from"./jsx-runtime.3f3ec6f1.js";import"./motion.b4b9485b.js";import"./clsx.m.256e9345.js";import"./Close.a434c368.js";import"./createSvgIcon.578d9fcc.js";import"./module.350c5c3b.js";import"./module.f9b3285f.js";import"./module.ca7fab40.js";import"./module.b208df3e.js";const x={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Tooltip.stories.30f2a488.js.map
