import{C as r}from"./ComboBox.297dc901.js";import{j as e}from"./jsx-runtime.3f3ec6f1.js";import{H as i,A as a}from"./Home.91a77117.js";import{r as s}from"./index.3de4b586.js";import{c as l}from"./createSvgIcon.578d9fcc.js";import"./MenuButton.a1c372cd.js";import"./module.ca7fab40.js";import"./motion.b4b9485b.js";import"./module.350c5c3b.js";import"./clsx.m.256e9345.js";import"./module.f9b3285f.js";import"./module.b208df3e.js";import"./Button.2f747c1b.js";import"./usePopper.dd1fe266.js";import"./index.42df17a8.js";import"./iframe.fa893b47.js";import"./module.70359189.js";import"./real-module.836b1973.js";import"./ListItemSecondaryText.278cce88.js";import"./Divider.b692bc9f.js";import"./LinearProgress.a32e22a4.js";import"./lodash.0512f30e.js";import"./ScrollToTopButton.fc8e0e8d.js";import"./Tooltip.a841f18b.js";import"./Close.a434c368.js";import"./NavigationButton.345aad1a.js";const c=l(s.exports.createElement("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),E={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{"with-predefined-items":{startLoc:{col:39,line:12},endLoc:{col:1,line:24},startBody:{col:39,line:12},endBody:{col:1,line:24}},"with-requested-items":{startLoc:{col:39,line:12},endLoc:{col:1,line:24},startBody:{col:39,line:12},endBody:{col:1,line:24}}}}},title:"form/ComboBox",component:r,subcomponents:{}},m=o=>e("div",{style:{width:"auto",height:"auto",display:"flex",alignItems:"center",justifyContent:"center"},children:e(r,{...o})}),p=m.bind({});p.args={title:"Chose an Icon ...wisely",items:[{key:"home",leftSection:e(i,{}),label:"Home"},{key:"alarm",leftSection:e(a,{}),label:"Alarm with right X",selected:!0},{key:"account",leftSection:e(c,{}),label:"Balance"}]};const d=m.bind({});d.args={title:"Chose an Icon ...wisely",items:async o=>(await new Promise(t=>setTimeout(t,1500)),new Array(Math.floor(Math.random()*50)).fill(o).map((t,n)=>({key:t+n,leftSection:e(i,{}),label:t+(n*Math.random()*1024).toString(16)})))};const X=["WithPredefinedItems","WithRequestedItems"];export{p as WithPredefinedItems,d as WithRequestedItems,X as __namedExportsOrder,E as default};
//# sourceMappingURL=Combobox.stories.7dd522f8.js.map
