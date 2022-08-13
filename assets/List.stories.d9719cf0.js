import{a as r,L as e,b as a}from"./ListItemSecondaryText.a7f27c09.js";import{A as o}from"./AvatarGroup.2d37de89.js";import{a as c}from"./Button.bcd665cc.js";import"./ScrollToTopButton.bb3fa0d2.js";import"./NavigationButton.47045a9c.js";import{j as t,a as n}from"./jsx-runtime.90b06b5b.js";import{c as l}from"./createSvgIcon.fba07d86.js";import"./clsx.m.256e9345.js";import"./Divider.932536c0.js";import"./Tooltip.95608fc2.js";import"./motion.8538aaef.js";import"./Close.e8a5bb08.js";import"./module.ce0922c4.js";import"./module.d60b3e39.js";import"./module.f01f68c8.js";import"./module.dd8df665.js";import"./iframe.3950639b.js";const m=l(t("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})),b={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:23,line:21},endLoc:{col:1,line:28},startBody:{col:23,line:21},endBody:{col:1,line:28}},"with-secondary-text":{startLoc:{col:33,line:30},endLoc:{col:1,line:49},startBody:{col:33,line:30},endBody:{col:1,line:49}},"avatar-list":{startLoc:{col:26,line:51},endLoc:{col:1,line:66},startBody:{col:26,line:51},endBody:{col:1,line:66}},"action-list":{startLoc:{col:26,line:68},endLoc:{col:1,line:80},startBody:{col:26,line:68},endBody:{col:1,line:80}}}}},title:"layout/List",component:r,subcomponents:{ListItem:e}},s=()=>`https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random()*1e3)}.svg`,w=i=>n(r,{...i,children:[t(e,{children:"Test"}),t(e,{children:"Test"}),t(e,{children:"Test"}),t(e,{children:"Test"})]}),O=i=>n(r,{...i,children:[n(e,{children:["Test",t(a,{children:"Secondary Text"})]}),n(e,{children:["Test",t(a,{children:"Secondary Text"})]}),n(e,{children:["Test",t(a,{children:"Secondary Text"})]}),n(e,{children:["Test",t(a,{children:"Secondary Text"})]})]}),U=i=>n(r,{...i,children:[t(e,{leftSection:t(o,{src:s()}),children:"Test"}),t(e,{leftSection:t(o,{src:s()}),children:"Test"}),t(e,{leftSection:t(o,{src:s()}),children:"Test"}),t(e,{leftSection:t(o,{src:s()}),children:"Test"})]}),N=i=>n(r,{...i,children:[t(e,{leftSection:t(o,{src:s()}),rightSection:t(c,{icon:t(m,{})}),children:"Test"}),t(e,{rightSection:t(c,{icon:t(m,{})}),children:"Test"}),t(e,{rightSection:t(c,{icon:t(m,{})}),children:"Test"}),t(e,{rightSection:t(c,{icon:t(m,{})}),children:"Test"})]}),P=["Default","WithSecondaryText","AvatarList","ActionList"];export{N as ActionList,U as AvatarList,w as Default,O as WithSecondaryText,P as __namedExportsOrder,b as default};
//# sourceMappingURL=List.stories.d9719cf0.js.map
