import{r as p}from"./index.14a841ff.js";import{R as o,a}from"./Select.538935e5.js";import"./ComboBox.9aa4706f.js";import{a as t,j as r}from"./jsx-runtime.07d80b3e.js";import"./iframe.932f5277.js";import"./module.085bd9aa.js";import"./module.4883cab8.js";import"./clsx.m.256e9345.js";import"./module.9cf9adba.js";import"./index.e0429d27.js";import"./real-module.f1d2b249.js";import"./module.ee188d51.js";import"./motion.c6ce950e.js";import"./module.ae9dd4e2.js";import"./MenuButton.c20556dc.js";import"./Button.241efdd1.js";import"./usePopper.5c6c08b8.js";import"./ListItemSecondaryText.efba7f07.js";import"./Divider.786c5a90.js";import"./LinearProgress.38ad4236.js";import"./lodash.036bfe7d.js";import"./createSvgIcon.31534729.js";import"./ScrollToTopButton.5a0cca58.js";import"./Tooltip.44b4b6f8.js";import"./Close.60dd5681.js";import"./NavigationButton.07ddcefa.js";const z={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:54,line:11},endLoc:{col:1,line:27},startBody:{col:54,line:11},endBody:{col:1,line:27}},colored:{startLoc:{col:61,line:29},endLoc:{col:1,line:47},startBody:{col:61,line:29},endBody:{col:1,line:47}}}}},title:"Form/Radio",component:o,argTypes:{}},d=e=>{const[n,i]=p.exports.useState("0");return t(a,{...e,name:"radio-group",value:n,onChange:(c,l)=>i(l.toString()),children:[r(o,{value:"0",children:"Option 0"}),r(o,{value:"1",children:"Option 1"}),r(o,{value:"2",children:"Option 2"}),r(o,{value:"3",children:"Option 3"}),r(o,{value:"4",children:"Option 4"})]})},u=e=>t(a,{...e,name:"radio-group",children:[r(o,{featureColor:[255,0,0],value:"0",children:"Option 0"}),r(o,{featureColor:[0,255,0],value:"1",children:"Option 1"}),r(o,{featureColor:[255,255,0],value:"2",children:"Option 2"}),r(o,{featureColor:[255,120,120],value:"3",children:"Option 3"}),r(o,{featureColor:[220,175,175],value:"4",children:"Option 4"})]}),m=d.bind({});m.args={};const s=u.bind({});s.args={};const A=["Default","Colored"];export{s as Colored,m as Default,A as __namedExportsOrder,z as default};
//# sourceMappingURL=Radio.stories.b13ddc2c.js.map
