import{r as p}from"./index.848129ac.js";import{R as o,a}from"./Select.a8ba788c.js";import"./ComboBox.5314cda9.js";import{a as t,j as r}from"./jsx-runtime.3eeaf793.js";import"./iframe.08a327df.js";import"./module.cd81ebc8.js";import"./module.6d104aab.js";import"./clsx.m.256e9345.js";import"./module.5e177c95.js";import"./index.b47d1eff.js";import"./real-module.7868aa21.js";import"./module.717d2acf.js";import"./motion.9045314d.js";import"./module.637fc558.js";import"./MenuButton.ed9faba5.js";import"./Button.31d178aa.js";import"./usePopper.a967421a.js";import"./ListItemSecondaryText.3096c513.js";import"./Divider.8397b548.js";import"./LinearProgress.2e1174d7.js";import"./lodash.bd98a741.js";import"./createSvgIcon.8aa67882.js";import"./ScrollToTopButton.90f9d292.js";import"./Tooltip.255dbceb.js";import"./Close.a5f364d8.js";import"./NavigationButton.2aea4d55.js";const z={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Radio.stories.26df81fc.js.map
