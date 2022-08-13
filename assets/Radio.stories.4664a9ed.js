import{r as p,a,j as r}from"./jsx-runtime.a295b370.js";import{R as o,a as t}from"./Select.17cf3458.js";import"./ComboBox.64b53fa8.js";import"./iframe.7a8c67e5.js";import"./module.63804bdb.js";import"./module.e09d6e39.js";import"./clsx.m.256e9345.js";import"./module.c5433e63.js";import"./index.84043e3c.js";import"./real-module.cae097ea.js";import"./module.e6643ae1.js";import"./motion.e7803938.js";import"./module.1e5f28f1.js";import"./MenuButton.9a0a3c6a.js";import"./Button.748df8ed.js";import"./usePopper.ec839b13.js";import"./ListItemSecondaryText.29f0bafb.js";import"./Divider.afacd14b.js";import"./LinearProgress.39d309cc.js";import"./lodash.cc5e5112.js";import"./createSvgIcon.61cdea2a.js";import"./ScrollToTopButton.891e11c9.js";import"./Tooltip.f492eb34.js";import"./Close.e5fb054a.js";import"./NavigationButton.02288aa1.js";const w={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Radio.stories.4664a9ed.js.map
