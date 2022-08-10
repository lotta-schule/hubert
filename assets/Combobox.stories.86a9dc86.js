import{C as r}from"./ComboBox.4471eaae.js";import{j as e}from"./jsx-runtime.e37de2b3.js";import{H as i,A as a}from"./Home.40cf7d85.js";import{r as s}from"./index.92f5a256.js";import{c as l}from"./createSvgIcon.d8fe52fb.js";import"./MenuButton.b336a247.js";import"./module.59821bca.js";import"./motion.0633113d.js";import"./module.13baac02.js";import"./clsx.m.256e9345.js";import"./module.3cdcaba7.js";import"./module.ba8fabce.js";import"./Button.a4f68b89.js";import"./usePopper.5ac07529.js";import"./index.4f397d8c.js";import"./iframe.0870ca85.js";import"./module.b28b0159.js";import"./real-module.fee8ecae.js";import"./ListItemSecondaryText.ac9a7eda.js";import"./Divider.de227043.js";import"./LinearProgress.2d9ca23c.js";import"./lodash.fe602c62.js";import"./ScrollToTopButton.43bebac9.js";import"./Tooltip.14f13fff.js";import"./Close.a97e74f1.js";import"./NavigationButton.6caa978f.js";const c=l(s.exports.createElement("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),E={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Combobox.stories.86a9dc86.js.map
