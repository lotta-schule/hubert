import{r as p,a,j as r}from"./jsx-runtime.a54fbd10.js";import{R as o,a as t}from"./Select.a6a5bb1e.js";import"./ComboBox.26046ed1.js";import"./iframe.659ccbe6.js";import"./module.fcfe7f1a.js";import"./module.140e216c.js";import"./clsx.m.256e9345.js";import"./module.a679f63c.js";import"./index.cc7fa163.js";import"./real-module.5563e54a.js";import"./module.6cf8961a.js";import"./motion.0d3d7b57.js";import"./module.3f991d62.js";import"./MenuButton.fbdc9379.js";import"./Button.5c131876.js";import"./usePopper.53702cf2.js";import"./ListItemSecondaryText.45ca7435.js";import"./Divider.d7d89c5e.js";import"./LinearProgress.5985ea93.js";import"./lodash.313caa0d.js";import"./createSvgIcon.1ce5e722.js";import"./ScrollToTopButton.a2c9f45c.js";import"./Tooltip.f8fd70d5.js";import"./Close.c231b24e.js";import"./NavigationButton.58918163.js";const w={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Radio.stories.6525b85f.js.map
