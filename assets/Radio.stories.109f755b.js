import{r as p,a,j as r}from"./jsx-runtime.87af9f8a.js";import{R as o,a as t}from"./Select.7830a21d.js";import"./ComboBox.20c0bc21.js";import"./iframe.7534659a.js";import"./module.f38a8cdc.js";import"./module.f72a2f7f.js";import"./clsx.m.256e9345.js";import"./module.c3b99798.js";import"./index.e5fe2ab3.js";import"./real-module.31a38cfa.js";import"./module.74fb67ee.js";import"./motion.963472fb.js";import"./module.2947b28d.js";import"./MenuButton.79c00fb8.js";import"./Button.0b6228df.js";import"./usePopper.81cc982e.js";import"./ListItemSecondaryText.a651d2e0.js";import"./Divider.977f6b69.js";import"./LinearProgress.72b86d61.js";import"./lodash.db3e2080.js";import"./createSvgIcon.b593cfc3.js";import"./ScrollToTopButton.1e945eb1.js";import"./Tooltip.b3f77e2f.js";import"./Close.eb040f5f.js";import"./NavigationButton.18bc6c1d.js";const w={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Radio.stories.109f755b.js.map
