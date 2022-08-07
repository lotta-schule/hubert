import{r as p}from"./index.90767ddd.js";import{R as o,a as e}from"./Select.652e31de.js";import"./ComboBox.cdf5a1fb.js";import{a as t,j as r}from"./jsx-runtime.5f5c6c62.js";import"./module.e072fada.js";import"./module.4439b031.js";import"./clsx.m.256e9345.js";import"./module.b4c17bae.js";import"./index.b6be83bd.js";import"./real-module.79953120.js";import"./module.0e81a828.js";import"./motion.47b2d96e.js";import"./module.b6da278b.js";import"./MenuButton.b839eab9.js";import"./Button.2cfaf172.js";import"./usePopper.37b19e1e.js";import"./ListItemSecondaryText.ca7049e9.js";import"./Divider.6debd3d1.js";import"./LinearProgress.fbff5bf2.js";import"./lodash.3c3e11b7.js";import"./iframe.b9d3de60.js";import"./createSvgIcon.c6efc8b1.js";import"./ScrollToTopButton.2d36db0a.js";import"./Tooltip.622d7c24.js";import"./Close.d3e3497e.js";import"./NavigationButton.a60e963d.js";var z={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:54,line:11},endLoc:{col:1,line:27},startBody:{col:54,line:11},endBody:{col:1,line:27}},colored:{startLoc:{col:61,line:29},endLoc:{col:1,line:47},startBody:{col:61,line:29},endBody:{col:1,line:47}}}}},title:"Form/Radio",component:o,argTypes:{}};const d=a=>{const[n,i]=p.exports.useState("0");return t(e,{...a,name:"radio-group",value:n,onChange:(c,l)=>i(l.toString()),children:[r(o,{value:"0",children:"Option 0"}),r(o,{value:"1",children:"Option 1"}),r(o,{value:"2",children:"Option 2"}),r(o,{value:"3",children:"Option 3"}),r(o,{value:"4",children:"Option 4"})]})},u=a=>t(e,{...a,name:"radio-group",children:[r(o,{featureColor:[255,0,0],value:"0",children:"Option 0"}),r(o,{featureColor:[0,255,0],value:"1",children:"Option 1"}),r(o,{featureColor:[255,255,0],value:"2",children:"Option 2"}),r(o,{featureColor:[255,120,120],value:"3",children:"Option 3"}),r(o,{featureColor:[220,175,175],value:"4",children:"Option 4"})]}),m=d.bind({});m.args={};const s=u.bind({});s.args={};const A=["Default","Colored"];export{s as Colored,m as Default,A as __namedExportsOrder,z as default};
//# sourceMappingURL=Radio.stories.cfe028bd.js.map
