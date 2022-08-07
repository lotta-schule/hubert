import{T as t}from"./Tooltip.622d7c24.js";import"./index.90767ddd.js";import"./iframe.b9d3de60.js";import{a as e}from"./Button.2cfaf172.js";import"./ScrollToTopButton.2d36db0a.js";import"./NavigationButton.a60e963d.js";import{j as o}from"./jsx-runtime.5f5c6c62.js";import"./motion.47b2d96e.js";import"./clsx.m.256e9345.js";import"./Close.d3e3497e.js";import"./createSvgIcon.c6efc8b1.js";import"./module.4439b031.js";import"./module.b4c17bae.js";import"./module.0e81a828.js";import"./module.b6da278b.js";var v={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:60,line:11},startBody:{col:24,line:11},endBody:{col:60,line:11}},image:{startLoc:{col:24,line:11},endLoc:{col:60,line:11},startBody:{col:24,line:11},endBody:{col:60,line:11}}}}},title:"overlays/Tooltip",component:t};const l=n=>o(t,{...n}),r=l.bind({});r.args={children:o(e,{onClick:()=>alert("click"),label:"Hover me"}),label:"Simple Tooltip"};const i=l.bind({});i.args={children:o(e,{onClick:()=>alert("click"),label:"Hover me"}),label:o("img",{src:"https://picsum.photos/600/400",alt:"Wahrscheinlich wundersch\xF6nes Foto"})};const x=["Default","Image"];export{r as Default,i as Image,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Tooltip.stories.0f51b0ae.js.map
