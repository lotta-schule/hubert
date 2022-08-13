import{C as i}from"./ComboBox.20c0bc21.js";import{j as e}from"./jsx-runtime.87af9f8a.js";import{H as r,A as a}from"./Home.4c509ef1.js";import{c as s}from"./createSvgIcon.b593cfc3.js";import"./MenuButton.79c00fb8.js";import"./module.74fb67ee.js";import"./motion.963472fb.js";import"./module.f72a2f7f.js";import"./clsx.m.256e9345.js";import"./module.c3b99798.js";import"./module.2947b28d.js";import"./Button.0b6228df.js";import"./usePopper.81cc982e.js";import"./index.e5fe2ab3.js";import"./iframe.7534659a.js";import"./module.f38a8cdc.js";import"./real-module.31a38cfa.js";import"./ListItemSecondaryText.a651d2e0.js";import"./Divider.977f6b69.js";import"./LinearProgress.72b86d61.js";import"./lodash.db3e2080.js";import"./ScrollToTopButton.1e945eb1.js";import"./Tooltip.b3f77e2f.js";import"./Close.eb040f5f.js";import"./NavigationButton.18bc6c1d.js";const l=s(e("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),j={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Combobox.stories.23a51ba7.js.map
