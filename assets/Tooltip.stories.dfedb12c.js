import{T as t}from"./Tooltip.0ae90a96.js";import"./index.5d0e9c0b.js";import"./iframe.963a3c39.js";import{a as e}from"./Button.0f1518cc.js";import"./ScrollToTopButton.d2eae2ab.js";import"./NavigationButton.66bc3d2b.js";import{j as o}from"./jsx-runtime.7289b5dc.js";import"./motion.76e11fbb.js";import"./clsx.m.256e9345.js";import"./Close.d7f9f1f4.js";import"./createSvgIcon.7de690df.js";import"./module.c32c62b2.js";import"./module.7d41bc01.js";import"./module.e5809dfc.js";import"./module.d9bcc68b.js";const x={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Tooltip.stories.dfedb12c.js.map
