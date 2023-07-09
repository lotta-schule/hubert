(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[183],{"./node_modules/@react-stately/overlays/dist/module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>$fc909762b330b746$export$61c6a8c84e605fb6});var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@react-stately/utils/dist/module.js");function $fc909762b330b746$export$61c6a8c84e605fb6(props){let[isOpen,setOpen]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_0__.zk)(props.isOpen,props.defaultOpen||!1,props.onOpenChange);return{isOpen,setOpen,open(){setOpen(!0)},close(){setOpen(!1)},toggle(){setOpen(!isOpen)}}}},"./node_modules/@react-stately/utils/dist/module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{uZ:()=>$9446cca9a3875146$export$7d15b64cf5a3a4c4,zk:()=>$458b0a5536c1a7cf$export$40bfa8c7b0832715});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value1,defaultValue,onChange){let[stateValue,setStateValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value1||defaultValue),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0!==value1),wasControlled=ref.current,isControlled=void 0!==value1,stateRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateValue);wasControlled!==isControlled&&console.warn(`WARN: A component changed from ${wasControlled?"controlled":"uncontrolled"} to ${isControlled?"controlled":"uncontrolled"}.`),ref.current=isControlled;let setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((value2,...args)=>{let onChangeCaller=(value,...onChangeArgs)=>{onChange&&(Object.is(stateRef.current,value)||onChange(value,...onChangeArgs)),isControlled||(stateRef.current=value)};if("function"==typeof value2){console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),setStateValue(((oldValue,...functionArgs)=>{let interceptedValue=value2(isControlled?stateRef.current:oldValue,...functionArgs);return onChangeCaller(interceptedValue,...args),isControlled?oldValue:interceptedValue}))}else isControlled||setStateValue(value2),onChangeCaller(value2,...args)}),[isControlled,onChange]);return isControlled?stateRef.current=value1:value1=stateValue,[value1,setValue]}function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value,min=-1/0,max=1/0){return Math.min(Math.max(value,min),max)}},"./src/stories/menus/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_menu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/menu/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"menus/Menu",component:_menu__WEBPACK_IMPORTED_MODULE_4__.v2,subcomponents:{Item:_menu__WEBPACK_IMPORTED_MODULE_4__.ck}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_menu__WEBPACK_IMPORTED_MODULE_4__.v2,Object.assign({},args,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_4__.ck,{children:"MenuItem 1"},"Menuitem 1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_4__.ck,{children:"MenuItem 2"},"Menuitem 2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_4__.ck,{children:"MenuItem 3"},"Menuitem 3"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_4__.ck,{children:"MenuItem 4"},"Menuitem 4"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_menu__WEBPACK_IMPORTED_MODULE_4__.ck,{children:"MenuItem 5"},"Menuitem 5")]}))};Template.displayName="Template";var Default=Template.bind({});Default.args={title:"Chose a MenuItem number",onAction:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onAction"),onClose:void 0},Default.parameters=Object.assign({storySource:{source:"(args: any) => (\n  <Menu {...args}>\n    <Item key={'Menuitem 1'}>MenuItem 1</Item>\n    <Item key={'Menuitem 2'}>MenuItem 2</Item>\n    <Item key={'Menuitem 3'}>MenuItem 3</Item>\n    <Item key={'Menuitem 4'}>MenuItem 4</Item>\n    <Item key={'Menuitem 5'}>MenuItem 5</Item>\n  </Menu>\n)"}},Default.parameters);var __namedExportsOrder=["Default"]},"./src/button/BaseButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>BaseButton});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BaseButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/button/BaseButton.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BaseButton_module.Z,options);const button_BaseButton_module=BaseButton_module.Z&&BaseButton_module.Z.locals?BaseButton_module.Z.locals:void 0;var _excluded=["children","style","className","variant","fullWidth","selected"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var BaseButton=react.forwardRef((function(_ref,ref){var _props$type,_clsx,_Object$assign,children=_ref.children,style=_ref.style,className=_ref.className,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$fullWidth=_ref.fullWidth,fullWidth=void 0!==_ref$fullWidth&&_ref$fullWidth,_ref$selected=_ref.selected,selected=void 0!==_ref$selected&&_ref$selected,props=_objectWithoutProperties(_ref,_excluded),ComponentClass=props.href?"a":"button",selectedAriaAttribute=props.role&&["gridcell","option","row","tab"].includes(props.role)?"aria-selected":"aria-current";return react.createElement(ComponentClass,Object.assign(((_Object$assign={ref,type:null!==(_props$type=props.type)&&void 0!==_props$type?_props$type:"button",role:"button",style,"data-variant":variant})[selectedAriaAttribute]=selected,_Object$assign.className=(0,clsx_m.Z)(button_BaseButton_module.root,className,((_clsx={})[button_BaseButton_module.selected]=selected,_clsx[button_BaseButton_module.fullWidth]=fullWidth,_clsx)),_Object$assign),props),children)}));BaseButton.displayName="BaseButton";try{BaseButton.displayName="BaseButton",BaseButton.__docgenInfo={description:"Primary UI shared for userAvatar interaction",displayName:"BaseButton",props:{children:{defaultValue:null,description:"Content to show on the button",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"CSS Classname",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS Styles",name:"style",required:!1,type:{name:"CSSProperties"}},selected:{defaultValue:{value:"false"},description:"Wether the button is currently 'active' or 'selected'",name:"selected",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"Chose from different styles",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"fill"'},{value:'"borderless"'},{value:'"error"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Wether the button should have a width of 100%",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/BaseButton.tsx#BaseButton"]={docgenInfo:BaseButton.__docgenInfo,name:"BaseButton",path:"src/button/BaseButton.tsx#BaseButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),BaseButton=__webpack_require__("./src/button/BaseButton.tsx"),ButtonGroupContext=__webpack_require__("./src/button/ButtonGroupContext.tsx"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["icon","label","onlyIcon","small","children","classes","className"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=react.forwardRef((function(_ref,ref){var _clsx,icon=_ref.icon,label=_ref.label,onlyIcon=_ref.onlyIcon,small=_ref.small,children=_ref.children,classes=_ref.classes,className=_ref.className,props=_objectWithoutProperties(_ref,_excluded),showOnlyIcon=onlyIcon||icon&&!(label||children),grouped=(0,ButtonGroupContext.Mg)().grouped;return(0,jsx_runtime.jsxs)(BaseButton.Y,Object.assign({},props,{ref,className:(0,clsx_m.Z)(button_Button_module.root,className,null==classes?void 0:classes.root,showOnlyIcon&&[button_Button_module.onlyIcon,null==classes?void 0:classes.onlyIcon],(_clsx={},_clsx[button_Button_module.small]=small,_clsx[button_Button_module.grouped]=grouped,_clsx)),children:[icon&&(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.Z)(button_Button_module.icon,null==classes?void 0:classes.icon),children:icon}),(null!=label?label:children)&&(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.Z)(button_Button_module.label,null==classes?void 0:classes.label),children:null!=label?label:children})]}))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"Content to show on the button",name:"children",required:!1,type:{name:"any"}},small:{defaultValue:null,description:"Disable setting a minimal height",name:"small",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS Classname",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS Styles",name:"style",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Wether the button is currently 'active' or 'selected'",name:"selected",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to show on the button side",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onlyIcon:{defaultValue:null,description:"Force style for button with only icon and without label,\neven if child is found",name:"onlyIcon",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Add custom claaes to the element tree",name:"classes",required:!1,type:{name:"{ root?: string; onlyIcon?: string; icon?: string | undefined; label?: string | undefined; } | undefined"}},variant:{defaultValue:null,description:"Chose from different styles",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"fill"'},{value:'"borderless"'},{value:'"error"'}]}},fullWidth:{defaultValue:null,description:"Wether the button should have a width of 100%",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/ButtonGroupContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Mg:()=>useButtonGroupContext,_:()=>ButtonGroupContextProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ButtonGroupContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({grouped:!1}),ButtonGroupContextProvider=function ButtonGroupContextProvider(_ref){var children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ButtonGroupContext.Provider,{value:{grouped:!0},children})};ButtonGroupContextProvider.displayName="ButtonGroupContextProvider";var useButtonGroupContext=function useButtonGroupContext(){return react__WEBPACK_IMPORTED_MODULE_0__.useContext(ButtonGroupContext)};try{ButtonGroupContextProvider.displayName="ButtonGroupContextProvider",ButtonGroupContextProvider.__docgenInfo={description:"",displayName:"ButtonGroupContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/ButtonGroupContext.tsx#ButtonGroupContextProvider"]={docgenInfo:ButtonGroupContextProvider.__docgenInfo,name:"ButtonGroupContextProvider",path:"src/button/ButtonGroupContext.tsx#ButtonGroupContextProvider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.small.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("small")},{small:function small(){return createHTML(this,"small","","")}})},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/button/BaseButton.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".hejqojo1zkCYWB_dUqpi{position:relative;border:1px solid rgba(var(--lotta-primary-color), 1);color:rgba(var(--lotta-primary-color), 1);background:rgba(var(--lotta-box-background-color), 1);border-radius:.5em;padding:.7em;display:flex;text-transform:uppercase;letter-spacing:1px;text-decoration:none;font-size:.8rem;justify-content:space-evenly;font-family:var(--lotta-text-font-family)}.hejqojo1zkCYWB_dUqpi:not([disabled]){cursor:pointer}.hejqojo1zkCYWB_dUqpi:not([disabled]):hover,.hejqojo1zkCYWB_dUqpi:not([disabled]):active{transition:linear;transition-duration:.2s;background-color:rgba(var(--lotta-primary-color), 0.1)}.hejqojo1zkCYWB_dUqpi[disabled]{color:rgba(var(--lotta-disabled-color), 1);border-color:rgba(var(--lotta-disabled-color), 1)}.hejqojo1zkCYWB_dUqpi.dDLcxEC8dmByzSwavTmQ{border:1px solid rgba(var(--lotta-primary-color), 1);background-color:rgba(var(--lotta-primary-color), 0.2);filter:brightness(90%)}.hejqojo1zkCYWB_dUqpi.dDLcxEC8dmByzSwavTmQ:hover{filter:brightness(90%)}.hejqojo1zkCYWB_dUqpi.dDLcxEC8dmByzSwavTmQ:active{filter:brightness(70%)}.hejqojo1zkCYWB_dUqpi.Z_B2Pi_TobHr36Ox51_3{width:100%}.hejqojo1zkCYWB_dUqpi[data-variant=fill]{background-color:rgba(var(--lotta-primary-color), 1);color:rgba(var(--lotta-contrast-text-color), 1);border:none}.hejqojo1zkCYWB_dUqpi[data-variant=fill]:hover{transition:linear;transition-duration:.2s;background:rgba(var(--lotta-primary-color), 1);box-shadow:inset 0 0 20px rgba(0,0,0,.1411764706)}.hejqojo1zkCYWB_dUqpi[data-variant=fill]:active{background:rgba(var(--lotta-primary-color), 1);box-shadow:inset 0 0 20px rgba(0,0,0,.3098039216);filter:none}.hejqojo1zkCYWB_dUqpi[data-variant=borderless]{border:none}.hejqojo1zkCYWB_dUqpi[data-variant=error]{background-color:rgba(var(--lotta-error-color), 1);color:#fff;border:none}.hejqojo1zkCYWB_dUqpi[data-variant=error]:hover{transition:linear;transition-duration:.2s;background-color:rgba(var(--lotta-error-color), 1);box-shadow:inset 0 0 20px rgba(0,0,0,.1411764706)}.hejqojo1zkCYWB_dUqpi[data-variant=error]:active{background-color:rgba(var(--lotta-primary-color), 1);box-shadow:inset 0 0 20px rgba(0,0,0,.3098039216);filter:none}","",{version:3,sources:["webpack://./src/button/BaseButton.module.scss"],names:[],mappings:"AAAA,sBACE,iBAAA,CACA,oDAAA,CACA,yCAAA,CACA,qDAAA,CACA,kBAAA,CACA,YAAA,CACA,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,oBAAA,CACA,eAAA,CACA,4BAAA,CACA,yCAAA,CACA,sCACE,cAAA,CACA,yFAEE,iBAAA,CACA,uBAAA,CACA,sDAAA,CAIJ,gCACE,0CAAA,CACA,iDAAA,CAGF,2CACE,oDAAA,CACA,sDAAA,CACA,sBAAA,CAEA,iDACE,sBAAA,CAEF,kDACE,sBAAA,CAIJ,2CACE,UAAA,CAMF,yCACE,oDAAA,CACA,+CAAA,CACA,WAAA,CACA,+CACE,iBAAA,CACA,uBAAA,CACA,8CAAA,CACA,iDAAA,CAEF,gDACE,8CAAA,CACA,iDAAA,CACA,WAAA,CAGJ,+CACE,WAAA,CAEF,0CACE,kDAAA,CACA,UAAA,CACA,WAAA,CACA,gDACE,iBAAA,CACA,uBAAA,CACA,kDAAA,CACA,iDAAA,CAEF,iDACE,oDAAA,CACA,iDAAA,CACA,WAAA",sourcesContent:[".root {\n  position: relative;\n  border: 1px solid rgba(var(--lotta-primary-color), 1);\n  color: rgba(var(--lotta-primary-color), 1);\n  background: rgba(var(--lotta-box-background-color), 1);\n  border-radius: 0.5em;\n  padding: 0.7em;\n  display: flex;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-decoration: none;\n  font-size: 0.8rem;\n  justify-content: space-evenly;\n  font-family: var(--lotta-text-font-family);\n  &:not([disabled]) {\n    cursor: pointer;\n    &:hover,\n    &:active {\n      transition: linear;\n      transition-duration: 0.2s;\n      background-color: rgba(var(--lotta-primary-color), 0.1);\n    }\n  }\n\n  &[disabled] {\n    color: rgba(var(--lotta-disabled-color), 1);\n    border-color: rgba(var(--lotta-disabled-color), 1);\n  }\n\n  &.selected {\n    border: 1px solid rgba(var(--lotta-primary-color), 1);\n    background-color: rgba(var(--lotta-primary-color), 0.2);\n    filter: brightness(90%);\n\n    &:hover {\n      filter: brightness(90%);\n    }\n    &:active {\n      filter: brightness(70%);\n    }\n  }\n\n  &.fullWidth {\n    width: 100%;\n  }\n\n  /**\n      * Custom styles for different variants\n      */\n  &[data-variant='fill'] {\n    background-color: rgba(var(--lotta-primary-color), 1);\n    color: rgba(var(--lotta-contrast-text-color), 1);\n    border: none;\n    &:hover {\n      transition: linear;\n      transition-duration: 0.2s;\n      background: rgba(var(--lotta-primary-color), 1);\n      box-shadow: inset 0 0 20px #00000024;\n    }\n    &:active {\n      background: rgba(var(--lotta-primary-color), 1);\n      box-shadow: inset 0 0 20px #0000004f;\n      filter: none;\n    }\n  }\n  &[data-variant='borderless'] {\n    border: none;\n  }\n  &[data-variant='error'] {\n    background-color: rgba(var(--lotta-error-color), 1);\n    color: #fff;\n    border: none;\n    &:hover {\n      transition: linear;\n      transition-duration: 0.2s;\n      background-color: rgba(var(--lotta-error-color), 1);\n      box-shadow: inset 0 0 20px #00000024;\n    }\n    &:active {\n      background-color: rgba(var(--lotta-primary-color), 1);\n      box-shadow: inset 0 0 20px #0000004f;\n      filter: none;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"hejqojo1zkCYWB_dUqpi",selected:"dDLcxEC8dmByzSwavTmQ",fullWidth:"Z_B2Pi_TobHr36Ox51_3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".PI9I6uVPWPqnIGbT3WG5{color:rgba(var(--lotta-primary-color), 1);font-weight:200;padding:.4em .8em;align-items:center}.PI9I6uVPWPqnIGbT3WG5:not(.pUq9sikXDnrubO1gdl1l){min-height:2.8em}.PI9I6uVPWPqnIGbT3WG5 .fQKJbqocZsAkY9jDdyUQ{display:flex}.PI9I6uVPWPqnIGbT3WG5 .rIZ6Qskykbcywkta1YET{margin:auto;display:contents}.PI9I6uVPWPqnIGbT3WG5.uZFH9nnFqFHjlD6curk4:not(.J9I_m6MuEfTa2Rh1f2zw){border-radius:50%;border-color:rgba(0,0,0,0);padding:.4em}.PI9I6uVPWPqnIGbT3WG5.uZFH9nnFqFHjlD6curk4:not(.J9I_m6MuEfTa2Rh1f2zw):not([data-varaint=fill]):hover{background-color:rgba(var(--lotta-primary-color), 0.2)}","",{version:3,sources:["webpack://./src/button/Button.module.scss"],names:[],mappings:"AAAA,sBACE,yCAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CAEA,iDACE,gBAAA,CAGF,4CACE,YAAA,CAGF,4CACE,WAAA,CACA,gBAAA,CAIA,sEACE,iBAAA,CACA,0BAAA,CACA,YAAA,CAGE,qGACE,sDAAA",sourcesContent:[".root {\n  color: rgba(var(--lotta-primary-color), 1);\n  font-weight: 200;\n  padding: 0.4em 0.8em;\n  align-items: center;\n\n  &:not(.small) {\n    min-height: 2.8em;\n  }\n\n  .icon {\n    display: flex;\n  }\n\n  .label {\n    margin: auto;\n    display: contents;\n  }\n\n  &.onlyIcon {\n    &:not(.grouped) {\n      border-radius: 50%;\n      border-color: transparent;\n      padding: 0.4em;\n\n      &:not([data-varaint='fill']) {\n        &:hover {\n          background-color: rgba(var(--lotta-primary-color), 0.2);\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"PI9I6uVPWPqnIGbT3WG5",small:"pUq9sikXDnrubO1gdl1l",icon:"fQKJbqocZsAkY9jDdyUQ",label:"rIZ6Qskykbcywkta1YET",onlyIcon:"uZFH9nnFqFHjlD6curk4",grouped:"J9I_m6MuEfTa2Rh1f2zw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),es=__webpack_require__("./node_modules/framesync/dist/es/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){var isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((function(){return isMounted.current=!0,function(){isMounted.current=!1}}),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),use_id=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-id.mjs"),PresenceChild=function(_a){var children=_a.children,initial=_a.initial,isPresent=_a.isPresent,onExitComplete=_a.onExitComplete,custom=_a.custom,presenceAffectsLayout=_a.presenceAffectsLayout,presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,use_id.M)(),context=(0,react.useMemo)((function(){return{id,initial,isPresent,custom,onExitComplete:function(childId){var e_1,_a;presenceChildren.set(childId,!0);try{for(var _b=(0,tslib_es6.XA)(presenceChildren.values()),_c=_b.next();!_c.done;_c=_b.next()){if(!_c.value)return}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_c&&!_c.done&&(_a=_b.return)&&_a.call(_b)}finally{if(e_1)throw e_1.error}}null==onExitComplete||onExitComplete()},register:function(childId){return presenceChildren.set(childId,!1),function(){return presenceChildren.delete(childId)}}}}),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((function(){presenceChildren.forEach((function(_,key){return presenceChildren.set(key,!1)}))}),[isPresent]),react.useEffect((function(){!isPresent&&!presenceChildren.size&&(null==onExitComplete||onExitComplete())}),[isPresent]),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),getChildKey=function(child){return child.key||""};var AnimatePresence=function(_a){var children=_a.children,custom=_a.custom,_b=_a.initial,initial=void 0===_b||_b,onExitComplete=_a.onExitComplete,exitBeforeEnter=_a.exitBeforeEnter,_c=_a.presenceAffectsLayout,presenceAffectsLayout=void 0===_c||_c,_d=(0,tslib_es6.CR)(function useForceUpdate(){var isMounted=useIsMounted(),_a=(0,tslib_es6.CR)((0,react.useState)(0),2),forcedRenderCount=_a[0],setForcedRenderCount=_a[1],forceRender=(0,react.useCallback)((function(){isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((function(){return es.ZP.postRender(forceRender)}),[forceRender]),forcedRenderCount]}(),1),forceRender=_d[0],forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);var isMounted=useIsMounted(),filteredChildren=function onlyElements(children){var filtered=[];return react.Children.forEach(children,(function(child){(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children),childrenToRender=filteredChildren,exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((function(){isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((function(child){var key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((function(){isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((function(child){return react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout},child)})));childrenToRender=(0,tslib_es6.ev)([],(0,tslib_es6.CR)(childrenToRender),!1);for(var presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length,i=0;i<numPresent;i++){var key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return exitBeforeEnter&&exiting.size&&(childrenToRender=[]),exiting.forEach((function(key){if(-1===targetKeys.indexOf(key)){var child=allChildren.get(key);if(child){var insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:function(){allChildren.delete(key),exiting.delete(key);var removeIndex=presentChildren.current.findIndex((function(presentChild){return presentChild.key===key}));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout},child))}}})),childrenToRender=childrenToRender.map((function(child){var key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout},child)})),"production"!==process.O&&exitBeforeEnter&&childrenToRender.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((function(child){return(0,react.cloneElement)(child)})))}}}]);