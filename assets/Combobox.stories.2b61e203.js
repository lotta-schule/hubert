import{C as i}from"./ComboBox.26046ed1.js";import{j as e}from"./jsx-runtime.a54fbd10.js";import{H as r,A as a}from"./Home.cada1002.js";import{c as s}from"./createSvgIcon.1ce5e722.js";import"./MenuButton.fbdc9379.js";import"./module.6cf8961a.js";import"./motion.0d3d7b57.js";import"./module.140e216c.js";import"./clsx.m.256e9345.js";import"./module.a679f63c.js";import"./module.3f991d62.js";import"./Button.5c131876.js";import"./usePopper.53702cf2.js";import"./index.cc7fa163.js";import"./iframe.659ccbe6.js";import"./module.fcfe7f1a.js";import"./real-module.5563e54a.js";import"./ListItemSecondaryText.45ca7435.js";import"./Divider.d7d89c5e.js";import"./LinearProgress.5985ea93.js";import"./lodash.313caa0d.js";import"./ScrollToTopButton.a2c9f45c.js";import"./Tooltip.f8fd70d5.js";import"./Close.c231b24e.js";import"./NavigationButton.58918163.js";const l=s(e("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),j={parameters:{storySource:{source:`import * as React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ComboBox, ComboBoxProps } from '../../form/comboBox';
import { AccessAlarm, Home, AccountBalance } from '@material-ui/icons';

export default {
  title: 'form/ComboBox',
  component: ComboBox,
  subcomponents: {},
} as ComponentMeta<typeof ComboBox>;

const Template: Story<ComboBoxProps> = (args) => (
  <div
    style={{
      width: 'auto',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <ComboBox {...args} />
  </div>
);

export const WithPredefinedItems = Template.bind({});
WithPredefinedItems.args = {
  title: 'Chose an Icon ...wisely',
  items: [
    { key: 'home', leftSection: <Home />, label: 'Home' },
    {
      key: 'alarm',
      leftSection: <AccessAlarm />,
      label: 'Alarm with right X',
      selected: true,
    },
    {
      key: 'account',
      leftSection: <AccountBalance />,
      label: 'Balance',
    },
  ],
};

export const WithRequestedItems = Template.bind({});
WithRequestedItems.args = {
  title: 'Chose an Icon ...wisely',
  items: async (value: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return new Array(Math.floor(Math.random() * 50))
      .fill(value)
      .map((content, i) => ({
        key: content + i,
        leftSection: <Home />,
        label: content + (i * Math.random() * 1024).toString(16),
      }));
  },
};
`,locationsMap:{"with-predefined-items":{startLoc:{col:39,line:12},endLoc:{col:1,line:24},startBody:{col:39,line:12},endBody:{col:1,line:24}},"with-requested-items":{startLoc:{col:39,line:12},endLoc:{col:1,line:24},startBody:{col:39,line:12},endBody:{col:1,line:24}}}}},title:"form/ComboBox",component:i,subcomponents:{}},m=o=>e("div",{style:{width:"auto",height:"auto",display:"flex",alignItems:"center",justifyContent:"center"},children:e(i,{...o})}),c=m.bind({});c.args={title:"Chose an Icon ...wisely",items:[{key:"home",leftSection:e(r,{}),label:"Home"},{key:"alarm",leftSection:e(a,{}),label:"Alarm with right X",selected:!0},{key:"account",leftSection:e(l,{}),label:"Balance"}]};const p=m.bind({});p.args={title:"Chose an Icon ...wisely",items:async o=>(await new Promise(t=>setTimeout(t,1500)),new Array(Math.floor(Math.random()*50)).fill(o).map((t,n)=>({key:t+n,leftSection:e(r,{}),label:t+(n*Math.random()*1024).toString(16)})))};const _=["WithPredefinedItems","WithRequestedItems"];export{c as WithPredefinedItems,p as WithRequestedItems,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=Combobox.stories.2b61e203.js.map
