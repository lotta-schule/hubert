import{r as i}from"./index.92f5a256.js";import{c as d}from"./clsx.m.256e9345.js";import{a as p,j as n}from"./jsx-runtime.e37de2b3.js";import{m as u}from"./motion.0633113d.js";import"./iframe.0870ca85.js";const y="_root_igqeo_1",f={root:y},s=i.exports.memo(({message:e,color:r,className:o,children:c,...g})=>{const l={backgroundColor:`color(${r} saturation(-30))`,borderColor:r};return p(u.div,{role:"alert","aria-label":e||void 0,style:l,className:d(f.root,o),variants:{visible:{opacity:1,height:"auto"},hidden:{opacity:0,height:0}},animate:e?"visible":"hidden",...g,children:[e,c]})});s.displayName="Message";try{s.displayName="Message",s.__docgenInfo={description:"",displayName:"Message",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string | null"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/message/Message.tsx#Message"]={docgenInfo:s.__docgenInfo,name:"Message",path:"src/message/Message.tsx#Message"})}catch{}const a=i.exports.memo(({error:e,className:r,children:o})=>{const c=i.exports.useMemo(()=>{const l=typeof e=="string"?e:e==null?void 0:e.message;if(l)return l.replace(/^GraphQL error: /,"")},[e]);if(!(o||c))return null;const g="rgb("+getComputedStyle(document.documentElement).getPropertyValue("--lotta-error-color")+")";return n(s,{role:"alert",color:g,message:c,className:r,children:o})});a.displayName="ErrorMessage";try{a.displayName="ErrorMessage",a.__docgenInfo={description:"",displayName:"ErrorMessage",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | Error | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/message/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:a.__docgenInfo,name:"ErrorMessage",path:"src/message/ErrorMessage.tsx#ErrorMessage"})}catch{}const t=i.exports.memo(({message:e,className:r})=>{const o="rgb("+getComputedStyle(document.documentElement).getPropertyValue("--lotta-success-color")+")";return n(s,{color:o,message:e,className:r})});t.displayName="SuccessMessage";try{t.displayName="SuccessMessage",t.__docgenInfo={description:"",displayName:"SuccessMessage",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/message/SuccessMessage.tsx#SuccessMessage"]={docgenInfo:t.__docgenInfo,name:"SuccessMessage",path:"src/message/SuccessMessage.tsx#SuccessMessage"})}catch{}const L={parameters:{storySource:{source:`import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Message, ErrorMessage, SuccessMessage } from '../../message';

export default {
  title: 'util/Message',
  component: Message,
} as Meta;

const DefaultTemplate: Story = (args: any) => <Message {...args} />;
const ErrorTemplate: Story = (args: any) => <ErrorMessage {...args} />;
const SuccessTemplate: Story = (args: any) => <SuccessMessage {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
  message: 'Hallo',
  color: '#ccc',
};
export const Empty = DefaultTemplate.bind({});
Empty.args = {
  message: '',
  color: '#ccc',
};

export const ErrorMsg = ErrorTemplate.bind({});
ErrorMsg.args = {
  error: new Error('Upsi'),
};

export const SuccessMsg = SuccessTemplate.bind({});
SuccessMsg.args = {
  message: 'Gl\xFCckwunsch',
};
`,locationsMap:{default:{startLoc:{col:31,line:10},endLoc:{col:67,line:10},startBody:{col:31,line:10},endBody:{col:67,line:10}},empty:{startLoc:{col:31,line:10},endLoc:{col:67,line:10},startBody:{col:31,line:10},endBody:{col:67,line:10}},"error-msg":{startLoc:{col:29,line:11},endLoc:{col:70,line:11},startBody:{col:29,line:11},endBody:{col:70,line:11}},"success-msg":{startLoc:{col:31,line:12},endLoc:{col:74,line:12},startBody:{col:31,line:12},endBody:{col:74,line:12}}}}},title:"util/Message",component:s},m=e=>n(s,{...e}),M=e=>n(a,{...e}),S=e=>n(t,{...e}),_=m.bind({});_.args={message:"Hallo",color:"#ccc"};const E=m.bind({});E.args={message:"",color:"#ccc"};const T=M.bind({});T.args={error:new Error("Upsi")};const x=S.bind({});x.args={message:"Gl\xFCckwunsch"};const B=["Default","Empty","ErrorMsg","SuccessMsg"];export{_ as Default,E as Empty,T as ErrorMsg,x as SuccessMsg,B as __namedExportsOrder,L as default};
//# sourceMappingURL=Message.stories.1560f4e5.js.map
