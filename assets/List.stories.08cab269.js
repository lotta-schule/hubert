import{a as r,L as e,b as a}from"./ListItemSecondaryText.ac9a7eda.js";import{A as o}from"./AvatarGroup.5876a5b3.js";import{a as c}from"./Button.a4f68b89.js";import"./ScrollToTopButton.43bebac9.js";import"./NavigationButton.6caa978f.js";import{a as n,j as t}from"./jsx-runtime.e37de2b3.js";import{r as l}from"./index.92f5a256.js";import{c as L}from"./createSvgIcon.d8fe52fb.js";import"./clsx.m.256e9345.js";import"./Divider.de227043.js";import"./Tooltip.14f13fff.js";import"./motion.0633113d.js";import"./Close.a97e74f1.js";import"./module.13baac02.js";import"./module.3cdcaba7.js";import"./module.59821bca.js";import"./module.ba8fabce.js";import"./iframe.0870ca85.js";const m=L(l.exports.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})),O={parameters:{storySource:{source:`import * as React from 'react';
import { Meta } from '@storybook/react';
import { OpenInNew } from '@material-ui/icons';
import { List, ListItem, ListItemSecondaryText, ListProps } from '../../list';
import { Avatar } from '../../avatar';
import { Button } from '../../button';

export default {
  title: 'layout/List',
  component: List,
  subcomponents: {
    ListItem,
  },
} as Meta;

const getRandomAvatarUrl = () =>
  \`https://avatars.dicebear.com/api/avataaars/\${Math.floor(
    Math.random() * 1000
  )}.svg\`;

export const Default = (args: ListProps) => (
  <List {...args}>
    <ListItem>Test</ListItem>
    <ListItem>Test</ListItem>
    <ListItem>Test</ListItem>
    <ListItem>Test</ListItem>
  </List>
);

export const WithSecondaryText = (args: ListProps) => (
  <List {...args}>
    <ListItem>
      Test
      <ListItemSecondaryText>Secondary Text</ListItemSecondaryText>
    </ListItem>
    <ListItem>
      Test
      <ListItemSecondaryText>Secondary Text</ListItemSecondaryText>
    </ListItem>
    <ListItem>
      Test
      <ListItemSecondaryText>Secondary Text</ListItemSecondaryText>
    </ListItem>
    <ListItem>
      Test
      <ListItemSecondaryText>Secondary Text</ListItemSecondaryText>
    </ListItem>
  </List>
);

export const AvatarList = (args: ListProps) => (
  <List {...args}>
    <ListItem leftSection={<Avatar src={getRandomAvatarUrl()} />}>
      Test
    </ListItem>
    <ListItem leftSection={<Avatar src={getRandomAvatarUrl()} />}>
      Test
    </ListItem>
    <ListItem leftSection={<Avatar src={getRandomAvatarUrl()} />}>
      Test
    </ListItem>
    <ListItem leftSection={<Avatar src={getRandomAvatarUrl()} />}>
      Test
    </ListItem>
  </List>
);

export const ActionList = (args: ListProps) => (
  <List {...args}>
    <ListItem
      leftSection={<Avatar src={getRandomAvatarUrl()} />}
      rightSection={<Button icon={<OpenInNew />} />}
    >
      Test
    </ListItem>
    <ListItem rightSection={<Button icon={<OpenInNew />} />}>Test</ListItem>
    <ListItem rightSection={<Button icon={<OpenInNew />} />}>Test</ListItem>
    <ListItem rightSection={<Button icon={<OpenInNew />} />}>Test</ListItem>
  </List>
);
`,locationsMap:{default:{startLoc:{col:23,line:21},endLoc:{col:1,line:28},startBody:{col:23,line:21},endBody:{col:1,line:28}},"with-secondary-text":{startLoc:{col:33,line:30},endLoc:{col:1,line:49},startBody:{col:33,line:30},endBody:{col:1,line:49}},"avatar-list":{startLoc:{col:26,line:51},endLoc:{col:1,line:66},startBody:{col:26,line:51},endBody:{col:1,line:66}},"action-list":{startLoc:{col:26,line:68},endLoc:{col:1,line:80},startBody:{col:26,line:68},endBody:{col:1,line:80}}}}},title:"layout/List",component:r,subcomponents:{ListItem:e}},s=()=>`https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random()*1e3)}.svg`,U=i=>n(r,{...i,children:[t(e,{children:"Test"}),t(e,{children:"Test"}),t(e,{children:"Test"}),t(e,{children:"Test"})]}),N=i=>n(r,{...i,children:[n(e,{children:["Test",t(a,{children:"Secondary Text"})]}),n(e,{children:["Test",t(a,{children:"Secondary Text"})]}),n(e,{children:["Test",t(a,{children:"Secondary Text"})]}),n(e,{children:["Test",t(a,{children:"Secondary Text"})]})]}),P=i=>n(r,{...i,children:[t(e,{leftSection:t(o,{src:s()}),children:"Test"}),t(e,{leftSection:t(o,{src:s()}),children:"Test"}),t(e,{leftSection:t(o,{src:s()}),children:"Test"}),t(e,{leftSection:t(o,{src:s()}),children:"Test"})]}),V=i=>n(r,{...i,children:[t(e,{leftSection:t(o,{src:s()}),rightSection:t(c,{icon:t(m,{})}),children:"Test"}),t(e,{rightSection:t(c,{icon:t(m,{})}),children:"Test"}),t(e,{rightSection:t(c,{icon:t(m,{})}),children:"Test"}),t(e,{rightSection:t(c,{icon:t(m,{})}),children:"Test"})]}),j=["Default","WithSecondaryText","AvatarList","ActionList"];export{V as ActionList,P as AvatarList,U as Default,N as WithSecondaryText,j as __namedExportsOrder,O as default};
//# sourceMappingURL=List.stories.08cab269.js.map
