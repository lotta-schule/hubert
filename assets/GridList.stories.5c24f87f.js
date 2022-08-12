import{c as n}from"./clsx.m.256e9345.js";import{j as t,a as d}from"./jsx-runtime.3eeaf793.js";import"./index.848129ac.js";import"./iframe.08a327df.js";const c="_root_1m0z5_1",p={root:c},r=({children:i,className:o,...e})=>t("ul",{className:n(p.root,o),...e,children:i}),s=({children:i,...o})=>t("li",{...o,children:i});try{r.displayName="GridList",r.__docgenInfo={description:"",displayName:"GridList",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/gridlist/GridList.tsx#GridList"]={docgenInfo:r.__docgenInfo,name:"GridList",path:"src/gridlist/GridList.tsx#GridList"})}catch{}try{s.displayName="GridListItem",s.__docgenInfo={description:"",displayName:"GridListItem",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/gridlist/GridList.tsx#GridListItem"]={docgenInfo:s.__docgenInfo,name:"GridListItem",path:"src/gridlist/GridList.tsx#GridListItem"})}catch{}const h={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:24,line:11},endLoc:{col:1,line:29},startBody:{col:24,line:11},endBody:{col:1,line:29}}}}},title:"Layout/GridList",component:r,argTypes:{}},a=i=>d(r,{...i,children:[t(s,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})}),t(s,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})}),t(s,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})}),t(s,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})}),t(s,{children:t("img",{src:"https://picsum.photos/600/400",alt:""})})]}),m=a.bind({});m.args={};const g=["Default"];export{m as Default,g as __namedExportsOrder,h as default};
//# sourceMappingURL=GridList.stories.5c24f87f.js.map
