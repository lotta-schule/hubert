"use strict";(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[8810],{"./src/stories/form/Radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colored:()=>Colored,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/form/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1r6zo0r1sq(){var path="/home/runner/work/hubert/hubert/src/stories/form/Radio.stories.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/hubert/hubert/src/stories/form/Radio.stories.tsx",statementMap:{0:{start:{line:10,column:17},end:{line:34,column:1}},1:{start:{line:11,column:24},end:{line:11,column:43}},2:{start:{line:12,column:2},end:{line:33,column:5}},3:{start:{line:16,column:27},end:{line:16,column:49}},4:{start:{line:35,column:0},end:{line:35,column:34}},5:{start:{line:36,column:24},end:{line:60,column:2}},6:{start:{line:36,column:45},end:{line:60,column:2}},7:{start:{line:61,column:0},end:{line:61,column:48}},8:{start:{line:62,column:23},end:{line:65,column:1}},9:{start:{line:66,column:23},end:{line:69,column:1}},10:{start:{line:70,column:0},end:{line:79,column:2}},11:{start:{line:80,column:0},end:{line:89,column:2}},12:{start:{line:90,column:35},end:{line:90,column:57}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:10,column:17},end:{line:10,column:18}},loc:{start:{line:10,column:25},end:{line:34,column:1}},line:10},1:{name:"(anonymous_1)",decl:{start:{line:16,column:14},end:{line:16,column:15}},loc:{start:{line:16,column:27},end:{line:16,column:49}},line:16},2:{name:"(anonymous_2)",decl:{start:{line:36,column:24},end:{line:36,column:25}},loc:{start:{line:36,column:45},end:{line:60,column:2}},line:36}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0,2:0},b:{},inputSourceMap:{version:3,file:void 0,names:[],sourceRoot:void 0,sources:[],sourcesContent:["import * as React from 'react';\nimport { StoryFn, Meta } from '@storybook/react';\nimport { Radio, RadioGroup, RadioGroupProps } from '../../form';\nexport default ({\n  title: 'Form/Radio',\n  component: Radio,\n  argTypes: {}\n} as Meta);\nconst Template: StoryFn<Omit<RadioGroupProps, 'ref'>> = args => {\n  const [val, setVal] = React.useState('0');\n  return <RadioGroup {...args} name={'radio-group'} value={val} onChange={(_e, val) => setVal(val.toString())}>\n      <Radio value={'0'}>Option 0</Radio>\n      <Radio value={'1'}>Option 1</Radio>\n      <Radio value={'2'}>Option 2</Radio>\n      <Radio value={'3'}>Option 3</Radio>\n      <Radio value={'4'}>Option 4</Radio>\n    </RadioGroup>;\n};\nconst ColoredTemplate: StoryFn<Omit<RadioGroupProps, 'ref'>> = args => <RadioGroup {...args} name={'radio-group'}>\n    <Radio featureColor={[255, 0, 0]} value={'0'}>\n      Option 0\n    </Radio>\n    <Radio featureColor={[0, 255, 0]} value={'1'}>\n      Option 1\n    </Radio>\n    <Radio featureColor={[255, 255, 0]} value={'2'}>\n      Option 2\n    </Radio>\n    <Radio featureColor={[255, 120, 120]} value={'3'}>\n      Option 3\n    </Radio>\n    <Radio featureColor={[220, 175, 175]} value={'4'}>\n      Option 4\n    </Radio>\n  </RadioGroup>;\nexport const Default = {\n  render: Template,\n  args: {}\n};\nexport const Colored = {\n  render: ColoredTemplate,\n  args: {}\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: Template,\\n  args: {}\\n}\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};\nColored.parameters = {\n  ...Colored.parameters,\n  docs: {\n    ...Colored.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  render: ColoredTemplate,\\n  args: {}\\n}\",\n      ...Colored.parameters?.docs?.source\n    }\n  }\n};"],mappings:""},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d14dcd675c69401bb2c5ddd854e61a8adbdb7b13"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"d14dcd675c69401bb2c5ddd854e61a8adbdb7b13"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1r6zo0r1sq=function(){return actualCoverage},actualCoverage}cov_1r6zo0r1sq();const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Radio",component:_form__WEBPACK_IMPORTED_MODULE_1__.Y8,argTypes:{}};cov_1r6zo0r1sq().s[0]++;const Template=args=>{cov_1r6zo0r1sq().f[0]++;const[val,setVal]=(cov_1r6zo0r1sq().s[1]++,react__WEBPACK_IMPORTED_MODULE_0__.useState("0"));return cov_1r6zo0r1sq().s[2]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_form__WEBPACK_IMPORTED_MODULE_1__.Ee,{...args,name:"radio-group",value:val,onChange:(_e,val)=>(cov_1r6zo0r1sq().f[1]++,cov_1r6zo0r1sq().s[3]++,setVal(val.toString())),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{value:"0",children:"Option 0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{value:"1",children:"Option 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{value:"2",children:"Option 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{value:"3",children:"Option 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{value:"4",children:"Option 4"})]})};cov_1r6zo0r1sq().s[4]++,Template.displayName="Template",cov_1r6zo0r1sq().s[5]++;const ColoredTemplate=args=>(cov_1r6zo0r1sq().f[2]++,cov_1r6zo0r1sq().s[6]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_form__WEBPACK_IMPORTED_MODULE_1__.Ee,{...args,name:"radio-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{featureColor:[255,0,0],value:"0",children:"Option 0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{featureColor:[0,255,0],value:"1",children:"Option 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{featureColor:[255,255,0],value:"2",children:"Option 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{featureColor:[255,120,120],value:"3",children:"Option 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form__WEBPACK_IMPORTED_MODULE_1__.Y8,{featureColor:[220,175,175],value:"4",children:"Option 4"})]}));cov_1r6zo0r1sq().s[7]++,ColoredTemplate.displayName="ColoredTemplate";const Default=(cov_1r6zo0r1sq().s[8]++,{render:Template,args:{}}),Colored=(cov_1r6zo0r1sq().s[9]++,{render:ColoredTemplate,args:{}});cov_1r6zo0r1sq().s[10]++,Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {}\n}",...Default.parameters?.docs?.source}}},cov_1r6zo0r1sq().s[11]++,Colored.parameters={...Colored.parameters,docs:{...Colored.parameters?.docs,source:{originalSource:"{\n  render: ColoredTemplate,\n  args: {}\n}",...Colored.parameters?.docs?.source}}};const __namedExportsOrder=(cov_1r6zo0r1sq().s[12]++,["Default","Colored"])},"./node_modules/@react-aria/checkbox/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>$406796ff087fe49b$export$e375f10ce42261c5});var react=__webpack_require__("./node_modules/react/index.js"),dist_import=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),focus_dist_import=__webpack_require__("./node_modules/@react-aria/focus/dist/import.mjs"),interactions_dist_import=__webpack_require__("./node_modules/@react-aria/interactions/dist/import.mjs");function $d2c8e2b0480f3f34$export$cbe85ee05b554577(props,state,ref){let{isDisabled=!1,isRequired=!1,isReadOnly=!1,value,name,children,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,validationState="valid"}=props;null!=children||(null!=ariaLabel||null!=ariaLabelledby)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps,isPressed}=(0,interactions_dist_import.r7)({isDisabled}),{focusableProps}=(0,focus_dist_import.kc)(props,ref),interactions=(0,dist_import.dG)(pressProps,focusableProps),domProps=(0,dist_import.zL)(props,{labelable:!0});return(0,dist_import.y$)(ref,state.isSelected,state.setSelected),{inputProps:(0,dist_import.dG)(domProps,{"aria-invalid":"invalid"===validationState||void 0,"aria-errormessage":props["aria-errormessage"],"aria-controls":props["aria-controls"],"aria-readonly":isReadOnly||void 0,"aria-required":isRequired||void 0,onChange:e=>{e.stopPropagation(),state.setSelected(e.target.checked)},disabled:isDisabled,...null==value?{}:{value},name,type:"checkbox",...interactions}),isSelected:state.isSelected,isPressed,isDisabled,isReadOnly}}function $406796ff087fe49b$export$e375f10ce42261c5(props,state,inputRef){let{inputProps,isSelected,isPressed,isDisabled,isReadOnly}=$d2c8e2b0480f3f34$export$cbe85ee05b554577(props,state,inputRef),{isIndeterminate}=props;return(0,react.useEffect)((()=>{inputRef.current&&(inputRef.current.indeterminate=isIndeterminate)})),{inputProps:{...inputProps,checked:isSelected},isSelected,isPressed,isDisabled,isReadOnly}}new WeakMap,new WeakMap,new WeakMap},"./node_modules/@react-stately/toggle/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>$3017fa7ffdddec74$export$8042c6c013fd5226});var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs");function $3017fa7ffdddec74$export$8042c6c013fd5226(props={}){let{isReadOnly}=props,[isSelected,setSelected]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_0__.zk)(props.isSelected,props.defaultSelected||!1,props.onChange);return{isSelected,setSelected:function updateSelected(value){isReadOnly||setSelected(value)},toggle:function toggleState(){isReadOnly||setSelected(!isSelected)}}}}}]);