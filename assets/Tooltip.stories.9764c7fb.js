import{T as t}from"./Tooltip.44b4b6f8.js";import"./index.14a841ff.js";import"./iframe.932f5277.js";import{a as e}from"./Button.241efdd1.js";import"./ScrollToTopButton.5a0cca58.js";import"./NavigationButton.07ddcefa.js";import{j as o}from"./jsx-runtime.07d80b3e.js";import"./motion.c6ce950e.js";import"./clsx.m.256e9345.js";import"./Close.60dd5681.js";import"./createSvgIcon.31534729.js";import"./module.4883cab8.js";import"./module.9cf9adba.js";import"./module.ee188d51.js";import"./module.ae9dd4e2.js";const x={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Tooltip.stories.9764c7fb.js.map
