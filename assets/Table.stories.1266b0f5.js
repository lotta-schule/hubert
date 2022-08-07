import{r as s}from"./index.90767ddd.js";import{c as d}from"./clsx.m.256e9345.js";import{j as t,a as n,F as c}from"./jsx-runtime.5f5c6c62.js";const i="_root_1isf0_1";var m={root:i};const e=s.exports.forwardRef(({children:a,className:r,...o},l)=>t("table",{ref:l,className:d(m.root,r),...o,children:a}));e.displayName="Table";try{e.displayName="Table",e.__docgenInfo={description:"",displayName:"Table",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/table/Table.tsx#Table"]={docgenInfo:e.__docgenInfo,name:"Table",path:"src/table/Table.tsx#Table"})}catch{}var y={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Table, TableProps } from '../../table';

export default {
  title: 'layout/Table',
  component: Table,
  argTypes: {},
} as Meta;

const Template: Story<{
  args: TableProps;
  content: React.ReactElement;
}> = ({ args, content }) => <Table {...args}>{content}</Table>;

export const Default = Template.bind({});
Default.args = {
  args: {},
  content: (
    <>
      <thead>
        <tr>
          <td>Thema</td>
          <td>Inhalt</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dingsi</td>
          <td>Bumsi</td>
        </tr>
        <tr>
          <td>Dingsi</td>
          <td>Bumsi</td>
        </tr>
      </tbody>
    </>
  ),
};
`,locationsMap:{default:{startLoc:{col:5,line:14},endLoc:{col:62,line:14},startBody:{col:5,line:14},endBody:{col:62,line:14}}}}},title:"layout/Table",component:e,argTypes:{}};const p=({args:a,content:r})=>t(e,{...a,children:r}),T=p.bind({});T.args={args:{},content:n(c,{children:[t("thead",{children:n("tr",{children:[t("td",{children:"Thema"}),t("td",{children:"Inhalt"})]})}),n("tbody",{children:[n("tr",{children:[t("td",{children:"Dingsi"}),t("td",{children:"Bumsi"})]}),n("tr",{children:[t("td",{children:"Dingsi"}),t("td",{children:"Bumsi"})]})]})]})};const _=["Default"];export{T as Default,_ as __namedExportsOrder,y as default};
//# sourceMappingURL=Table.stories.1266b0f5.js.map
