import{T as t}from"./Tooltip.6b66cb33.js";import{j as o}from"./jsx-runtime.8b53cab7.js";import"./iframe.46d5377a.js";import{a as e}from"./Button.9d49bc05.js";import"./ScrollToTopButton.7dd12dba.js";import"./NavigationButton.83cefbfb.js";import"./motion.e00851e1.js";import"./clsx.m.256e9345.js";import"./Close.ddb30726.js";import"./createSvgIcon.426d63da.js";import"./module.2bb0376f.js";import"./module.839f4866.js";import"./module.0a61f008.js";import"./module.e9d31b61.js";const B={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Tooltip.stories.ffaa60fc.js.map
