import{T as t}from"./Tooltip.14f13fff.js";import"./index.92f5a256.js";import"./iframe.0870ca85.js";import{a as e}from"./Button.a4f68b89.js";import"./ScrollToTopButton.43bebac9.js";import"./NavigationButton.6caa978f.js";import{j as o}from"./jsx-runtime.e37de2b3.js";import"./motion.0633113d.js";import"./clsx.m.256e9345.js";import"./Close.a97e74f1.js";import"./createSvgIcon.d8fe52fb.js";import"./module.13baac02.js";import"./module.3cdcaba7.js";import"./module.59821bca.js";import"./module.ba8fabce.js";const x={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Tooltip.stories.29de4e01.js.map
