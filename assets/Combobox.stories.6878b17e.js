import{C as r}from"./ComboBox.926bff02.js";import{j as e}from"./jsx-runtime.74e8f26d.js";import{H as i,A as a}from"./Home.bfa7b98b.js";import{r as s}from"./index.0f3430ae.js";import{c as l}from"./createSvgIcon.0aa2a8b4.js";import"./MenuButton.1f4ea43a.js";import"./module.15601152.js";import"./motion.d92c51a2.js";import"./module.597b474f.js";import"./clsx.m.256e9345.js";import"./module.9d0250e1.js";import"./module.9c6536da.js";import"./Button.f221a0cd.js";import"./usePopper.3a523bef.js";import"./index.550a662e.js";import"./iframe.70440780.js";import"./module.6b1b8b4a.js";import"./real-module.72d2f6e1.js";import"./ListItemSecondaryText.78ba4cde.js";import"./Divider.00eb76dd.js";import"./LinearProgress.07457b7c.js";import"./lodash.a6246bee.js";import"./ScrollToTopButton.92faafa0.js";import"./Tooltip.37fa832b.js";import"./Close.eaa4f026.js";import"./NavigationButton.57c284fa.js";const c=l(s.exports.createElement("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"})),E={parameters:{storySource:{source:`import * as React from 'react';
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
//# sourceMappingURL=Combobox.stories.6878b17e.js.map
