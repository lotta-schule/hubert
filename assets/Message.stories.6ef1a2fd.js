import{r as i,a as p,j as n}from"./jsx-runtime.8b53cab7.js";import{u as m}from"./GlobalStyles.1495b939.js";import{c as u}from"./clsx.m.256e9345.js";import{m as y}from"./motion.e00851e1.js";import"./iframe.46d5377a.js";import"./lodash.6d2a7485.js";const f="_root_igqeo_1",M={root:f},s=i.exports.memo(({message:e,color:r,className:a,children:g,...c})=>{const l={backgroundColor:`color(${r} saturation(-30))`,borderColor:r};return p(y.div,{role:"alert","aria-label":e||void 0,style:l,className:u(M.root,a),variants:{visible:{opacity:1,height:"auto"},hidden:{opacity:0,height:0}},animate:e?"visible":"hidden",...c,children:[e,g]})});s.displayName="Message";try{s.displayName="Message",s.__docgenInfo={description:"",displayName:"Message",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string | null"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/message/Message.tsx#Message"]={docgenInfo:s.__docgenInfo,name:"Message",path:"src/message/Message.tsx#Message"})}catch{}const o=i.exports.memo(({error:e,className:r,children:a})=>{const g=m(),c=i.exports.useMemo(()=>{const l=typeof e=="string"?e:e==null?void 0:e.message;if(l)return l.replace(/^GraphQL error: /,"")},[e]);return a||c?n(s,{role:"alert",color:g.errorColor,message:c,className:r,children:a}):null});o.displayName="ErrorMessage";try{o.displayName="ErrorMessage",o.__docgenInfo={description:"",displayName:"ErrorMessage",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | Error | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/message/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:o.__docgenInfo,name:"ErrorMessage",path:"src/message/ErrorMessage.tsx#ErrorMessage"})}catch{}const t=i.exports.memo(({message:e,className:r})=>{const a=m();return n(s,{color:a.successColor,message:e,className:r})});t.displayName="SuccessMessage";try{t.displayName="SuccessMessage",t.__docgenInfo={description:"",displayName:"SuccessMessage",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/message/SuccessMessage.tsx#SuccessMessage"]={docgenInfo:t.__docgenInfo,name:"SuccessMessage",path:"src/message/SuccessMessage.tsx#SuccessMessage"})}catch{}const R={parameters:{storySource:{source:`import * as React from 'react';
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
`,locationsMap:{default:{startLoc:{col:31,line:10},endLoc:{col:67,line:10},startBody:{col:31,line:10},endBody:{col:67,line:10}},empty:{startLoc:{col:31,line:10},endLoc:{col:67,line:10},startBody:{col:31,line:10},endBody:{col:67,line:10}},"error-msg":{startLoc:{col:29,line:11},endLoc:{col:70,line:11},startBody:{col:29,line:11},endBody:{col:70,line:11}},"success-msg":{startLoc:{col:31,line:12},endLoc:{col:74,line:12},startBody:{col:31,line:12},endBody:{col:74,line:12}}}}},title:"util/Message",component:s},d=e=>n(s,{...e}),S=e=>n(o,{...e}),_=e=>n(t,{...e}),E=d.bind({});E.args={message:"Hallo",color:"#ccc"};const T=d.bind({});T.args={message:"",color:"#ccc"};const x=S.bind({});x.args={error:new Error("Upsi")};const h=_.bind({});h.args={message:"Gl\xFCckwunsch"};const A=["Default","Empty","ErrorMsg","SuccessMsg"];export{E as Default,T as Empty,x as ErrorMsg,h as SuccessMsg,A as __namedExportsOrder,R as default};
//# sourceMappingURL=Message.stories.6ef1a2fd.js.map
