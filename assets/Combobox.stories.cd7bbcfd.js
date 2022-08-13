import{C as i}from"./ComboBox.64b53fa8.js";import{j as e}from"./jsx-runtime.a295b370.js";import{H as r,A as a}from"./Home.fc4b241a.js";import{c as s}from"./createSvgIcon.61cdea2a.js";import"./MenuButton.9a0a3c6a.js";import"./module.e6643ae1.js";import"./motion.e7803938.js";import"./module.e09d6e39.js";import"./clsx.m.256e9345.js";import"./module.c5433e63.js";import"./module.1e5f28f1.js";import"./Button.748df8ed.js";import"./usePopper.ec839b13.js";import"./index.84043e3c.js";import"./iframe.7a8c67e5.js";import"./module.63804bdb.js";import"./real-module.cae097ea.js";import"./ListItemSecondaryText.29f0bafb.js";import"./Divider.afacd14b.js";import"./LinearProgress.39d309cc.js";import"./lodash.cc5e5112.js";import"./ScrollToTopButton.891e11c9.js";import"./Tooltip.f492eb34.js";import"./Close.e5fb054a.js";import"./NavigationButton.02288aa1.js";const l=s(e("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),j={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Combobox.stories.cd7bbcfd.js.map
