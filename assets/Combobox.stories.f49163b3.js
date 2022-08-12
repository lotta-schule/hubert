import{C as r}from"./ComboBox.9aa4706f.js";import{j as e}from"./jsx-runtime.07d80b3e.js";import{H as i,A as a}from"./Home.4a4f6d83.js";import{r as s}from"./index.14a841ff.js";import{c as l}from"./createSvgIcon.31534729.js";import"./MenuButton.c20556dc.js";import"./module.ee188d51.js";import"./motion.c6ce950e.js";import"./module.4883cab8.js";import"./clsx.m.256e9345.js";import"./module.9cf9adba.js";import"./module.ae9dd4e2.js";import"./Button.241efdd1.js";import"./usePopper.5c6c08b8.js";import"./index.e0429d27.js";import"./iframe.932f5277.js";import"./module.085bd9aa.js";import"./real-module.f1d2b249.js";import"./ListItemSecondaryText.efba7f07.js";import"./Divider.786c5a90.js";import"./LinearProgress.38ad4236.js";import"./lodash.036bfe7d.js";import"./ScrollToTopButton.5a0cca58.js";import"./Tooltip.44b4b6f8.js";import"./Close.60dd5681.js";import"./NavigationButton.07ddcefa.js";const c=l(s.exports.createElement("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),E={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Combobox.stories.f49163b3.js.map
