import{C as i}from"./ComboBox.7a293665.js";import{j as e}from"./jsx-runtime.8b53cab7.js";import{H as r,A as a}from"./Home.f7b64ce6.js";import{c as s}from"./createSvgIcon.426d63da.js";import"./MenuButton.be271e8c.js";import"./module.0a61f008.js";import"./motion.e00851e1.js";import"./module.2bb0376f.js";import"./clsx.m.256e9345.js";import"./module.839f4866.js";import"./module.e9d31b61.js";import"./Button.9d49bc05.js";import"./usePopper.815f22f6.js";import"./index.b5822cc9.js";import"./iframe.46d5377a.js";import"./module.b3952970.js";import"./real-module.bbebefba.js";import"./ListItemSecondaryText.b1389f99.js";import"./Divider.67656d93.js";import"./LinearProgress.f33a08e4.js";import"./lodash.6d2a7485.js";import"./ScrollToTopButton.7dd12dba.js";import"./Tooltip.6b66cb33.js";import"./Close.ddb30726.js";import"./NavigationButton.83cefbfb.js";const l=s(e("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),j={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Combobox.stories.34ae778e.js.map
