import{T as t}from"./Tooltip.f492eb34.js";import{j as o}from"./jsx-runtime.a295b370.js";import"./iframe.7a8c67e5.js";import{a as e}from"./Button.748df8ed.js";import"./ScrollToTopButton.891e11c9.js";import"./NavigationButton.02288aa1.js";import"./motion.e7803938.js";import"./clsx.m.256e9345.js";import"./Close.e5fb054a.js";import"./createSvgIcon.61cdea2a.js";import"./module.e09d6e39.js";import"./module.c5433e63.js";import"./module.e6643ae1.js";import"./module.1e5f28f1.js";const B={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Tooltip.stories.93dbaf09.js.map
