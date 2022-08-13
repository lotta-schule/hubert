import{T as t}from"./Tooltip.95608fc2.js";import{j as o}from"./jsx-runtime.90b06b5b.js";import"./iframe.3950639b.js";import{a as e}from"./Button.bcd665cc.js";import"./ScrollToTopButton.bb3fa0d2.js";import"./NavigationButton.47045a9c.js";import"./motion.8538aaef.js";import"./clsx.m.256e9345.js";import"./Close.e8a5bb08.js";import"./createSvgIcon.fba07d86.js";import"./module.ce0922c4.js";import"./module.d60b3e39.js";import"./module.f01f68c8.js";import"./module.dd8df665.js";const B={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Tooltip.stories.2c77678c.js.map
