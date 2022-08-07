import{C as r}from"./ComboBox.7521d0d8.js";import{j as e}from"./jsx-runtime.7289b5dc.js";import{H as i,A as a}from"./Home.8faf4011.js";import{r as s}from"./index.5d0e9c0b.js";import{c as l}from"./createSvgIcon.7de690df.js";import"./MenuButton.30163643.js";import"./module.e5809dfc.js";import"./motion.76e11fbb.js";import"./module.c32c62b2.js";import"./clsx.m.256e9345.js";import"./module.7d41bc01.js";import"./module.d9bcc68b.js";import"./Button.0f1518cc.js";import"./usePopper.7b29846b.js";import"./index.712a3b2f.js";import"./iframe.963a3c39.js";import"./module.e9505d86.js";import"./real-module.82030947.js";import"./ListItemSecondaryText.692154b5.js";import"./Divider.7e487eda.js";import"./LinearProgress.dcfb8a64.js";import"./lodash.96eb0698.js";import"./ScrollToTopButton.d2eae2ab.js";import"./Tooltip.0ae90a96.js";import"./Close.d7f9f1f4.js";import"./NavigationButton.66bc3d2b.js";const c=l(s.exports.createElement("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),E={parameters:{storySource:{source:`import * as React from 'react';
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
      width: '100vw',
      height: '100vh',
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
`,locationsMap:{"with-predefined-items":{startLoc:{col:39,line:12},endLoc:{col:1,line:24},startBody:{col:39,line:12},endBody:{col:1,line:24}},"with-requested-items":{startLoc:{col:39,line:12},endLoc:{col:1,line:24},startBody:{col:39,line:12},endBody:{col:1,line:24}}}}},title:"form/ComboBox",component:r,subcomponents:{}},m=o=>e("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:e(r,{...o})}),p=m.bind({});p.args={title:"Chose an Icon ...wisely",items:[{key:"home",leftSection:e(i,{}),label:"Home"},{key:"alarm",leftSection:e(a,{}),label:"Alarm with right X",selected:!0},{key:"account",leftSection:e(c,{}),label:"Balance"}]};const d=m.bind({});d.args={title:"Chose an Icon ...wisely",items:async o=>(await new Promise(t=>setTimeout(t,1500)),new Array(Math.floor(Math.random()*50)).fill(o).map((t,n)=>({key:t+n,leftSection:e(i,{}),label:t+(n*Math.random()*1024).toString(16)})))};const X=["WithPredefinedItems","WithRequestedItems"];export{p as WithPredefinedItems,d as WithRequestedItems,X as __namedExportsOrder,E as default};
//# sourceMappingURL=Combobox.stories.eb2106f5.js.map
