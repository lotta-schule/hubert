"use strict";(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[2963],{"./node_modules/@react-aria/label/dist/module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>$d191a55c9702f145$export$8467354a121f1b9f,U:()=>$2baaea4c71418dea$export$294aa081a6c6f55d});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/module.js");function $d191a55c9702f145$export$8467354a121f1b9f(props){let{id,label,"aria-labelledby":ariaLabelledby,"aria-label":ariaLabel,labelElementType="label"}=props;id=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)(id);let labelId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.Me)(),labelProps={};return label?(ariaLabelledby=ariaLabelledby?`${ariaLabelledby} ${labelId}`:labelId,labelProps={id:labelId,htmlFor:"label"===labelElementType?id:void 0}):ariaLabelledby||ariaLabel||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps,fieldProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.bE)({id,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby})}}function $2baaea4c71418dea$export$294aa081a6c6f55d(props){let{description,errorMessage,validationState}=props,{labelProps,fieldProps}=$d191a55c9702f145$export$8467354a121f1b9f(props),descriptionId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)([Boolean(description),Boolean(errorMessage),validationState]),errorMessageId=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mp)([Boolean(description),Boolean(errorMessage),validationState]);return fieldProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.dG)(fieldProps,{"aria-describedby":[descriptionId,errorMessageId,props["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps,fieldProps,descriptionProps:{id:descriptionId},errorMessageProps:{id:errorMessageId}}}},"./node_modules/@react-aria/progress/dist/module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$204d9ebcedfb8806$export$ed5abd763a836edc});var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-aria/utils/dist/module.js"),_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-stately/utils/dist/module.js"),_react_aria_label__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-aria/label/dist/module.js"),_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@react-aria/i18n/dist/real-module.js");function $204d9ebcedfb8806$export$ed5abd763a836edc(props){let{value=0,minValue=0,maxValue=100,valueLabel,isIndeterminate,formatOptions={style:"percent"}}=props,domProps=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.zL)(props,{labelable:!0}),{labelProps,fieldProps}=(0,_react_aria_label__WEBPACK_IMPORTED_MODULE_1__.N)({...props,labelElementType:"span"});value=(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.uZ)(value,minValue,maxValue);let percentage=(value-minValue)/(maxValue-minValue),formatter=(0,_react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__.Ux)(formatOptions);if(!isIndeterminate&&!valueLabel){let valueToFormat="percent"===formatOptions.style?percentage:value;valueLabel=formatter.format(valueToFormat)}return{progressBarProps:(0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.dG)(domProps,{...fieldProps,"aria-valuenow":isIndeterminate?void 0:value,"aria-valuemin":minValue,"aria-valuemax":maxValue,"aria-valuetext":isIndeterminate?void 0:valueLabel,role:"progressbar"}),labelProps}}},"./src/stories/layout/Box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/layout/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Box",component:_layout__WEBPACK_IMPORTED_MODULE_3__.xu,argTypes:{}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_3__.xu,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img",{src:"https://picsum.photos/300/200",alt:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:"Ich bin eine Box mit Inhalt"})]})},Default.parameters=Object.assign({storySource:{source:"(args) => <Box {...args} />"}},Default.parameters);var __namedExportsOrder=["Default"]},"./src/layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xu:()=>Box,vF:()=>Stepper,o8:()=>Toolbar});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Box_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/Box.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Box_module.Z,options);const layout_Box_module=Box_module.Z&&Box_module.Z.locals?Box_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","className"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Box=react.forwardRef((function(_ref,ref){var children=_ref.children,className=_ref.className,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx_m.Z)(layout_Box_module.root,className),ref},props,{children}))}));Box.displayName="LayoutBox";try{LayoutBox.displayName="LayoutBox",LayoutBox.__docgenInfo={description:"",displayName:"LayoutBox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/Box.tsx#LayoutBox"]={docgenInfo:LayoutBox.__docgenInfo,name:"LayoutBox",path:"src/layout/Box.tsx#LayoutBox"})}catch(__react_docgen_typescript_loader_error){}var icon=__webpack_require__("./src/icon/index.ts"),src_button=__webpack_require__("./src/button/index.ts"),Stepper_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/Stepper.module.scss"),Stepper_module_options={};Stepper_module_options.styleTagTransform=styleTagTransform_default(),Stepper_module_options.setAttributes=setAttributesWithoutAttributes_default(),Stepper_module_options.insert=insertBySelector_default().bind(null,"head"),Stepper_module_options.domAPI=styleDomAPI_default(),Stepper_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Stepper_module.Z,Stepper_module_options);const layout_Stepper_module=Stepper_module.Z&&Stepper_module.Z.locals?Stepper_module.Z.locals:void 0;var Stepper=react.memo((function(_ref){var className=_ref.className,currentStep=_ref.currentStep,maxSteps=_ref.maxSteps,style=_ref.style,onStep=_ref.onStep;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)(layout_Stepper_module.root,className),style,children:[(0,jsx_runtime.jsx)(src_button.W7,{small:!0,icon:(0,jsx_runtime.jsx)(icon.Re,{}),onClick:function onClick(){return onStep(currentStep-1)},disabled:currentStep<=0,"aria-label":"Vorheriger Schritt",style:{color:"rgba(var(--lotta-text-color), 1)"},children:"vorheriges"}),(0,jsx_runtime.jsxs)("div",{children:[currentStep+1," / ",maxSteps]}),(0,jsx_runtime.jsx)(src_button.W7,{small:!0,icon:(0,jsx_runtime.jsx)(icon.wE,{}),onClick:function onClick(){return onStep(currentStep+1)},disabled:currentStep>=maxSteps-1,"aria-label":"Nächster Schritt",style:{color:"rgba(var(--lotta-text-color), 1)"},children:"nächstes"})]})}));Stepper.displayName="Stepper";try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"",displayName:"Stepper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},maxSteps:{defaultValue:null,description:"",name:"maxSteps",required:!0,type:{name:"number"}},currentStep:{defaultValue:null,description:"",name:"currentStep",required:!0,type:{name:"number"}},onStep:{defaultValue:null,description:"",name:"onStep",required:!0,type:{name:"(_newStep: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/Stepper.tsx#Stepper"]={docgenInfo:Stepper.__docgenInfo,name:"Stepper",path:"src/layout/Stepper.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}var Toolbar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/Toolbar.module.scss"),Toolbar_module_options={};Toolbar_module_options.styleTagTransform=styleTagTransform_default(),Toolbar_module_options.setAttributes=setAttributesWithoutAttributes_default(),Toolbar_module_options.insert=insertBySelector_default().bind(null,"head"),Toolbar_module_options.domAPI=styleDomAPI_default(),Toolbar_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Toolbar_module.Z,Toolbar_module_options);const layout_Toolbar_module=Toolbar_module.Z&&Toolbar_module.Z.locals?Toolbar_module.Z.locals:void 0;var Toolbar_excluded=["children","className"];function Toolbar_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Toolbar_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Toolbar=function Toolbar(_ref){var children=_ref.children,className=_ref.className,props=Toolbar_objectWithoutProperties(_ref,Toolbar_excluded);return(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx_m.Z)(layout_Toolbar_module.root,className)},props,{children}))};Toolbar.displayName="Toolbar";try{Toolbar.displayName="Toolbar",Toolbar.__docgenInfo={description:"",displayName:"Toolbar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/Toolbar.tsx#Toolbar"]={docgenInfo:Toolbar.__docgenInfo,name:"Toolbar",path:"src/layout/Toolbar.tsx#Toolbar"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/Box.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".qtgmie6lpS5IPGjxz1dJ{background-color:rgb(var(--lotta-box-background-color));padding:var(--lotta-spacing);margin:0;border-radius:var(--lotta-border-radius);width:100%}","",{version:3,sources:["webpack://./src/layout/Box.module.scss"],names:[],mappings:"AAAA,sBACE,uDAAA,CACA,4BAAA,CACA,QAAA,CACA,wCAAA,CACA,UAAA",sourcesContent:[".root {\n  background-color: rgb(var(--lotta-box-background-color));\n  padding: var(--lotta-spacing);\n  margin: 0;\n  border-radius: var(--lotta-border-radius);\n  width: 100%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"qtgmie6lpS5IPGjxz1dJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/Stepper.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".a5W8nCpkreU80Q9eRIYP{display:flex;align-items:center;margin-bottom:var(--lotta-spacing);justify-content:space-between;min-height:50px;background-color:rgba(var(--lotta-divider-color), 0.2)}.a5W8nCpkreU80Q9eRIYP button{margin:var(--lotta-spacing)}.a5W8nCpkreU80Q9eRIYP button .PCmjI8CvWm6dL1AjXDWQ{color:rgba(var(--lotta-text-color), 1)}.a5W8nCpkreU80Q9eRIYP button:disabled{border:none;color:rgba(var(--lotta-divider-color), 1)}.a5W8nCpkreU80Q9eRIYP button:last-of-type{flex-direction:row-reverse}","",{version:3,sources:["webpack://./src/layout/Stepper.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,kBAAA,CACA,kCAAA,CACA,6BAAA,CACA,eAAA,CACA,sDAAA,CAEA,6BACE,2BAAA,CAEA,mDACE,sCAAA,CAIJ,sCACE,WAAA,CACA,yCAAA,CAGF,0CACE,0BAAA",sourcesContent:[".root {\n  display: flex;\n  align-items: center;\n  margin-bottom: var(--lotta-spacing);\n  justify-content: space-between;\n  min-height: 50px;\n  background-color: rgba(var(--lotta-divider-color), 0.2);\n\n  button {\n    margin: var(--lotta-spacing);\n\n    .lotta-button_text {\n      color: rgba(var(--lotta-text-color), 1);\n    }\n  }\n\n  button:disabled {\n    border: none;\n    color: rgba(var(--lotta-divider-color), 1);\n  }\n\n  button:last-of-type {\n    flex-direction: row-reverse;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"a5W8nCpkreU80Q9eRIYP","lotta-button_text":"PCmjI8CvWm6dL1AjXDWQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/layout/Toolbar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".kkHQsbhxXqhMtdeQ6BOS{min-height:48px;padding:var(--lotta-spacing);background-color:rgba(var(--lotta-box-background-color), 1);display:flex;overflow:auto}.kkHQsbhxXqhMtdeQ6BOS>div:not(:first-child),.kkHQsbhxXqhMtdeQ6BOS>button:not(:first-child),.kkHQsbhxXqhMtdeQ6BOS>span:not(:first-child){margin-left:var(--lotta-spacing)}","",{version:3,sources:["webpack://./src/layout/Toolbar.module.scss"],names:[],mappings:"AAAA,sBACI,eAAA,CACA,4BAAA,CACA,2DAAA,CACA,YAAA,CACA,aAAA,CAII,wIACI,gCAAA",sourcesContent:[".root {\n    min-height: 48px;\n    padding: var(--lotta-spacing);\n    background-color: rgba(var(--lotta-box-background-color), 1);\n    display: flex;\n    overflow: auto;\n    & > div,\n    & > button,\n    & > span {\n        &:not(:first-child) {\n            margin-left: var(--lotta-spacing);\n        }\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"kkHQsbhxXqhMtdeQ6BOS"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);