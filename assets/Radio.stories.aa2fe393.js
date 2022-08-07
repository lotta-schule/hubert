import{r as p}from"./index.5d0e9c0b.js";import{R as o,a}from"./Select.90b47758.js";import"./ComboBox.7521d0d8.js";import{a as t,j as r}from"./jsx-runtime.7289b5dc.js";import"./iframe.963a3c39.js";import"./module.e9505d86.js";import"./module.c32c62b2.js";import"./clsx.m.256e9345.js";import"./module.7d41bc01.js";import"./index.712a3b2f.js";import"./real-module.82030947.js";import"./module.e5809dfc.js";import"./motion.76e11fbb.js";import"./module.d9bcc68b.js";import"./MenuButton.30163643.js";import"./Button.0f1518cc.js";import"./usePopper.7b29846b.js";import"./ListItemSecondaryText.692154b5.js";import"./Divider.7e487eda.js";import"./LinearProgress.dcfb8a64.js";import"./lodash.96eb0698.js";import"./createSvgIcon.7de690df.js";import"./ScrollToTopButton.d2eae2ab.js";import"./Tooltip.0ae90a96.js";import"./Close.d7f9f1f4.js";import"./NavigationButton.66bc3d2b.js";const z={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Radio.stories.aa2fe393.js.map
