"use strict";(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[6389],{"./src/stories/overlays/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Image:()=>Image,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/index.ts"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_2kheyibkve(){var path="/home/runner/work/hubert/hubert/src/stories/overlays/Tooltip.stories.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/hubert/hubert/src/stories/overlays/Tooltip.stories.tsx",statementMap:{0:{start:{line:9,column:23},end:{line:17,column:1}},1:{start:{line:12,column:21},end:{line:12,column:35}},2:{start:{line:18,column:21},end:{line:29,column:1}},3:{start:{line:21,column:21},end:{line:21,column:35}},4:{start:{line:30,column:0},end:{line:39,column:2}},5:{start:{line:40,column:0},end:{line:49,column:2}},6:{start:{line:50,column:35},end:{line:50,column:55}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:12,column:15},end:{line:12,column:16}},loc:{start:{line:12,column:21},end:{line:12,column:35}},line:12},1:{name:"(anonymous_1)",decl:{start:{line:21,column:15},end:{line:21,column:16}},loc:{start:{line:21,column:21},end:{line:21,column:35}},line:21}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:void 0,names:[],sourceRoot:void 0,sources:[],sourcesContent:["import * as React from 'react';\nimport { Meta } from '@storybook/react';\nimport { Tooltip } from '../../util';\nimport { Button } from '../../button';\nexport default ({\n  title: 'overlays/Tooltip',\n  component: Tooltip\n} as Meta);\nexport const Default = {\n  args: {\n    children: <Button onClick={() => alert('click')} label={'Hover me'} />,\n    label: 'Simple Tooltip'\n  }\n};\nexport const Image = {\n  args: {\n    children: <Button onClick={() => alert('click')} label={'Hover me'} />,\n    label: <img src=\"https://picsum.photos/id/123/600/400\" alt=\"Wahrscheinlich wunderschönes Foto\" />\n  }\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    children: <Button onClick={() => alert('click')} label={'Hover me'} />,\\n    label: 'Simple Tooltip'\\n  }\\n}\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};\nImage.parameters = {\n  ...Image.parameters,\n  docs: {\n    ...Image.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    children: <Button onClick={() => alert('click')} label={'Hover me'} />,\\n    label: <img src=\\\"https://picsum.photos/id/123/600/400\\\" alt=\\\"Wahrscheinlich wundersch\\xF6nes Foto\\\" />\\n  }\\n}\",\n      ...Image.parameters?.docs?.source\n    }\n  }\n};"],mappings:""},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6d8c2f428be1ec1604d43fcc97241b22fbbcee90"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"6d8c2f428be1ec1604d43fcc97241b22fbbcee90"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_2kheyibkve=function(){return actualCoverage},actualCoverage}cov_2kheyibkve();const __WEBPACK_DEFAULT_EXPORT__={title:"overlays/Tooltip",component:_util__WEBPACK_IMPORTED_MODULE_1__.u},Default=(cov_2kheyibkve().s[0]++,{args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>(cov_2kheyibkve().f[0]++,cov_2kheyibkve().s[1]++,alert("click")),label:"Hover me"}),label:"Simple Tooltip"}}),Image=(cov_2kheyibkve().s[2]++,{args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_button__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>(cov_2kheyibkve().f[1]++,cov_2kheyibkve().s[3]++,alert("click")),label:"Hover me"}),label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:"https://picsum.photos/id/123/600/400",alt:"Wahrscheinlich wunderschönes Foto"})}});cov_2kheyibkve().s[4]++,Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <Button onClick={() => alert('click')} label={'Hover me'} />,\n    label: 'Simple Tooltip'\n  }\n}",...Default.parameters?.docs?.source}}},cov_2kheyibkve().s[5]++,Image.parameters={...Image.parameters,docs:{...Image.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <Button onClick={() => alert('click')} label={'Hover me'} />,\n    label: <img src=\"https://picsum.photos/id/123/600/400\" alt=\"Wahrscheinlich wunderschönes Foto\" />\n  }\n}",...Image.parameters?.docs?.source}}};const __namedExportsOrder=(cov_2kheyibkve().s[6]++,["Default","Image"])},"./node_modules/@react-aria/label/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>$d191a55c9702f145$export$8467354a121f1b9f,U:()=>$2baaea4c71418dea$export$294aa081a6c6f55d});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs");function $d191a55c9702f145$export$8467354a121f1b9f(props){let{id,label,"aria-labelledby":ariaLabelledby,"aria-label":ariaLabel,labelElementType="label"}=props;id=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)(id);let labelId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)(),labelProps={};return label?(ariaLabelledby=ariaLabelledby?`${labelId} ${ariaLabelledby}`:labelId,labelProps={id:labelId,htmlFor:"label"===labelElementType?id:void 0}):ariaLabelledby||ariaLabel||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps,fieldProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.bE)({id,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby})}}function $2baaea4c71418dea$export$294aa081a6c6f55d(props){let{description,errorMessage,validationState}=props,{labelProps,fieldProps}=$d191a55c9702f145$export$8467354a121f1b9f(props),descriptionId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)([Boolean(description),Boolean(errorMessage),validationState]),errorMessageId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)([Boolean(description),Boolean(errorMessage),validationState]);return fieldProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.dG)(fieldProps,{"aria-describedby":[descriptionId,errorMessageId,props["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps,fieldProps,descriptionProps:{id:descriptionId},errorMessageProps:{id:errorMessageId}}}},"./node_modules/@react-aria/progress/dist/import.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$204d9ebcedfb8806$export$ed5abd763a836edc});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/import.mjs"),_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-stately/utils/dist/import.mjs"),_react_aria_label__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/label/dist/import.mjs"),_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-aria/i18n/dist/real-module.mjs");function $204d9ebcedfb8806$export$ed5abd763a836edc(props){let{value=0,minValue=0,maxValue=100,valueLabel,isIndeterminate,formatOptions={style:"percent"}}=props,domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.zL)(props,{labelable:!0}),{labelProps,fieldProps}=(0,_react_aria_label__WEBPACK_IMPORTED_MODULE_1__.N)({...props,labelElementType:"span"});value=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.uZ)(value,minValue,maxValue);let percentage=(value-minValue)/(maxValue-minValue),formatter=(0,_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__.Ux)(formatOptions);if(!isIndeterminate&&!valueLabel){let valueToFormat="percent"===formatOptions.style?percentage:value;valueLabel=formatter.format(valueToFormat)}return{progressBarProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.dG)(domProps,{...fieldProps,"aria-valuenow":isIndeterminate?void 0:value,"aria-valuemin":minValue,"aria-valuemax":maxValue,"aria-valuetext":isIndeterminate?void 0:valueLabel,role:"progressbar"}),labelProps}}}}]);