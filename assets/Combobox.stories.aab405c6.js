import{C as i}from"./ComboBox.a99ee6f2.js";import{j as e}from"./jsx-runtime.90b06b5b.js";import{H as r,A as a}from"./Home.d2f786c1.js";import{c as s}from"./createSvgIcon.fba07d86.js";import"./MenuButton.67170ee2.js";import"./module.f01f68c8.js";import"./motion.8538aaef.js";import"./module.ce0922c4.js";import"./clsx.m.256e9345.js";import"./module.d60b3e39.js";import"./module.dd8df665.js";import"./Button.bcd665cc.js";import"./usePopper.8905ce5a.js";import"./index.8f2adfa1.js";import"./iframe.3950639b.js";import"./module.775ccd67.js";import"./real-module.9bea5f3d.js";import"./ListItemSecondaryText.a7f27c09.js";import"./Divider.932536c0.js";import"./LinearProgress.c015e516.js";import"./lodash.a03299c9.js";import"./ScrollToTopButton.bb3fa0d2.js";import"./Tooltip.95608fc2.js";import"./Close.e8a5bb08.js";import"./NavigationButton.47045a9c.js";const l=s(e("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),j={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Combobox.stories.aab405c6.js.map
