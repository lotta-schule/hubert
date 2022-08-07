import{c as n}from"./clsx.m.256e9345.js";import{j as t,a as d}from"./jsx-runtime.5f5c6c62.js";import"./index.90767ddd.js";const c="_root_1m0z5_1";var a={root:c};const r=({children:s,className:o,...e})=>t("ul",{className:n(a.root,o),...e,children:s}),i=({children:s,...o})=>t("li",{...o,children:s});try{r.displayName="GridList",r.__docgenInfo={description:"",displayName:"GridList",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/gridlist/GridList.tsx#GridList"]={docgenInfo:r.__docgenInfo,name:"GridList",path:"src/gridlist/GridList.tsx#GridList"})}catch{}try{i.displayName="GridListItem",i.__docgenInfo={description:"",displayName:"GridListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/gridlist/GridList.tsx#GridListItem"]={docgenInfo:i.__docgenInfo,name:"GridListItem",path:"src/gridlist/GridList.tsx#GridListItem"})}catch{}var _={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { GridList, GridListItem } from '../../gridlist';

export default {
  title: 'Layout/GridList',
  component: GridList,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <GridList {...args}>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
    <GridListItem>
      <img src="https://picsum.photos/600/400" alt="" />
    </GridListItem>
  </GridList>
);

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:1,line:29},startBody:{col:24,line:11},endBody:{col:1,line:29}}}}},title:"Layout/GridList",component:r,argTypes:{}};const p=s=>d(r,{...s,children:[t(i,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})}),t(i,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})}),t(i,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})}),t(i,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})}),t(i,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})})]}),m=p.bind({});m.args={};const h=["Default"];export{m as Default,h as __namedExportsOrder,_ as default};
//# sourceMappingURL=GridList.stories.117b469d.js.map
