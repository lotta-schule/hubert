import{r as p,a,j as r}from"./jsx-runtime.90b06b5b.js";import{R as o,a as t}from"./Select.8e07bbda.js";import"./ComboBox.a99ee6f2.js";import"./iframe.3950639b.js";import"./module.775ccd67.js";import"./module.ce0922c4.js";import"./clsx.m.256e9345.js";import"./module.d60b3e39.js";import"./index.8f2adfa1.js";import"./real-module.9bea5f3d.js";import"./module.f01f68c8.js";import"./motion.8538aaef.js";import"./module.dd8df665.js";import"./MenuButton.67170ee2.js";import"./Button.bcd665cc.js";import"./usePopper.8905ce5a.js";import"./ListItemSecondaryText.a7f27c09.js";import"./Divider.932536c0.js";import"./LinearProgress.c015e516.js";import"./lodash.a03299c9.js";import"./createSvgIcon.fba07d86.js";import"./ScrollToTopButton.bb3fa0d2.js";import"./Tooltip.95608fc2.js";import"./Close.e8a5bb08.js";import"./NavigationButton.47045a9c.js";const w={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Radio, RadioGroup, RadioGroupProps } from '../../form';

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {},
} as Meta;

const Template: Story<Omit<RadioGroupProps, 'ref'>> = (args) => {
  const [val, setVal] = React.useState('0');
  return (
    <RadioGroup
      {...args}
      name={'radio-group'}
      value={val}
      onChange={(_e, val) => setVal(val.toString())}
    >
      <Radio value={'0'}>Option 0</Radio>
      <Radio value={'1'}>Option 1</Radio>
      <Radio value={'2'}>Option 2</Radio>
      <Radio value={'3'}>Option 3</Radio>
      <Radio value={'4'}>Option 4</Radio>
    </RadioGroup>
  );
};

const ColoredTemplate: Story<Omit<RadioGroupProps, 'ref'>> = (args) => (
  <RadioGroup {...args} name={'radio-group'}>
    <Radio featureColor={[255, 0, 0]} value={'0'}>
      Option 0
    </Radio>
    <Radio featureColor={[0, 255, 0]} value={'1'}>
      Option 1
    </Radio>
    <Radio featureColor={[255, 255, 0]} value={'2'}>
      Option 2
    </Radio>
    <Radio featureColor={[255, 120, 120]} value={'3'}>
      Option 3
    </Radio>
    <Radio featureColor={[220, 175, 175]} value={'4'}>
      Option 4
    </Radio>
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {};

export const Colored = ColoredTemplate.bind({});
Colored.args = {};
`,locationsMap:{default:{startLoc:{col:54,line:11},endLoc:{col:1,line:27},startBody:{col:54,line:11},endBody:{col:1,line:27}},colored:{startLoc:{col:61,line:29},endLoc:{col:1,line:47},startBody:{col:61,line:29},endBody:{col:1,line:47}}}}},title:"Form/Radio",component:o,argTypes:{}},d=e=>{const[n,i]=p.exports.useState("0");return a(t,{...e,name:"radio-group",value:n,onChange:(c,l)=>i(l.toString()),children:[r(o,{value:"0",children:"Option 0"}),r(o,{value:"1",children:"Option 1"}),r(o,{value:"2",children:"Option 2"}),r(o,{value:"3",children:"Option 3"}),r(o,{value:"4",children:"Option 4"})]})},u=e=>a(t,{...e,name:"radio-group",children:[r(o,{featureColor:[255,0,0],value:"0",children:"Option 0"}),r(o,{featureColor:[0,255,0],value:"1",children:"Option 1"}),r(o,{featureColor:[255,255,0],value:"2",children:"Option 2"}),r(o,{featureColor:[255,120,120],value:"3",children:"Option 3"}),r(o,{featureColor:[220,175,175],value:"4",children:"Option 4"})]}),s=d.bind({});s.args={};const m=u.bind({});m.args={};const z=["Default","Colored"];export{m as Colored,s as Default,z as __namedExportsOrder,w as default};
//# sourceMappingURL=Radio.stories.b8bb3a8e.js.map
