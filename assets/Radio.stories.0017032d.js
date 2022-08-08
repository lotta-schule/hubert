import{r as p}from"./index.0f3430ae.js";import{R as o,a}from"./Select.57d4764b.js";import"./ComboBox.926bff02.js";import{a as t,j as r}from"./jsx-runtime.74e8f26d.js";import"./iframe.70440780.js";import"./module.6b1b8b4a.js";import"./module.597b474f.js";import"./clsx.m.256e9345.js";import"./module.9d0250e1.js";import"./index.550a662e.js";import"./real-module.72d2f6e1.js";import"./module.15601152.js";import"./motion.d92c51a2.js";import"./module.9c6536da.js";import"./MenuButton.1f4ea43a.js";import"./Button.f221a0cd.js";import"./usePopper.3a523bef.js";import"./ListItemSecondaryText.78ba4cde.js";import"./Divider.00eb76dd.js";import"./LinearProgress.07457b7c.js";import"./lodash.a6246bee.js";import"./createSvgIcon.0aa2a8b4.js";import"./ScrollToTopButton.92faafa0.js";import"./Tooltip.37fa832b.js";import"./Close.eaa4f026.js";import"./NavigationButton.57c284fa.js";const z={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Radio.stories.0017032d.js.map
