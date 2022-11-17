"use strict";(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[6389],{"./src/stories/overlays/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Image:()=>Image,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/util/index.ts"),_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/button/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"overlays/Tooltip",component:_util__WEBPACK_IMPORTED_MODULE_3__.u};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_util__WEBPACK_IMPORTED_MODULE_3__.u,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_button__WEBPACK_IMPORTED_MODULE_4__.zx,{onClick:function onClick(){return alert("click")},label:"Hover me"}),label:"Simple Tooltip"};var Image=Template.bind({});Image.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_button__WEBPACK_IMPORTED_MODULE_4__.zx,{onClick:function onClick(){return alert("click")},label:"Hover me"}),label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img",{src:"https://picsum.photos/600/400",alt:"Wahrscheinlich wunderschönes Foto"})},Default.parameters=Object.assign({storySource:{source:"(args: any) => <Tooltip {...args} />"}},Default.parameters),Image.parameters=Object.assign({storySource:{source:"(args: any) => <Tooltip {...args} />"}},Image.parameters);var __namedExportsOrder=["Default","Image"]},"./src/button/NavigationButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>NavigationButton});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/Button.tsx"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),NavigationButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,Object.assign({},props,{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("lotta-navigation-button",props.className)}))}));NavigationButton.displayName="NavigationButton";try{NavigationButton.displayName="NavigationButton",NavigationButton.__docgenInfo={description:"",displayName:"NavigationButton",props:{children:{defaultValue:null,description:"Content to show on the button",name:"children",required:!1,type:{name:"any"}},small:{defaultValue:null,description:"Disable setting a minimal height",name:"small",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS Classname",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS Styles",name:"style",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Wether the button is currently 'active' or 'selected'",name:"selected",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to show on the button side",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onlyIcon:{defaultValue:null,description:"Force style for button with only icon and without label,\neven if child is found",name:"onlyIcon",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Chose from different styles",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"fill"'},{value:'"borderless"'},{value:'"error"'}]}},fullWidth:{defaultValue:null,description:"Wether the button should have a width of 100%",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/NavigationButton.tsx#NavigationButton"]={docgenInfo:NavigationButton.__docgenInfo,name:"NavigationButton",path:"src/button/NavigationButton.tsx#NavigationButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yd:()=>BaseButton.Y,zx:()=>Button.z,hE:()=>ButtonGroup,W7:()=>NavigationButton.W});var BaseButton=__webpack_require__("./src/button/BaseButton.tsx"),Button=__webpack_require__("./src/button/Button.tsx"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ButtonGroup=function ButtonGroup(_ref){var fullWidth=_ref.fullWidth,className=_ref.className,style=_ref.style,children=_ref.children;return(0,jsx_runtime.jsx)("div",{role:"group",style,className:(0,clsx_m.Z)("lotta-button-group",{"full-width":fullWidth},className),children})};ButtonGroup.displayName="ButtonGroup";try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/button/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}var NavigationButton=__webpack_require__("./src/button/NavigationButton.tsx"),icon=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./src/icon/index.ts")),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),util=__webpack_require__("./src/util/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),scroll_to_top_button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/button/scroll-to-top-button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(scroll_to_top_button_module.Z,options);const button_scroll_to_top_button_module=scroll_to_top_button_module.Z&&scroll_to_top_button_module.Z.locals?scroll_to_top_button_module.Z.locals:void 0;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var AnimatedButton=(0,motion.E)(Button.z),ScrollToTopButton=react.memo((function(){var _React$useState2=_slicedToArray(react.useState(!1),2),isShown=_React$useState2[0],setIsShown=_React$useState2[1],innerHeight=(0,util.iP)().innerHeight,onScroll=react.useCallback((function(){setIsShown(window.scrollY>2*innerHeight)}),[innerHeight]);return(0,util.OF)(onScroll,1e3,[onScroll]),(0,jsx_runtime.jsx)(AnimatedButton,{className:button_scroll_to_top_button_module.root,title:"Zum Anfang der Seite scrollen",icon:(0,jsx_runtime.jsx)(icon.lv,{}),initial:"hidden",animate:isShown?"visible":"hidden",variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:0}},onClick:function onClick(){window.scroll({top:0,behavior:"smooth"})}})}));ScrollToTopButton.displayName="ScrollToTopButton";try{ScrollToTopButton.displayName="ScrollToTopButton",ScrollToTopButton.__docgenInfo={description:"",displayName:"ScrollToTopButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/ScrollToTopButton.tsx#ScrollToTopButton"]={docgenInfo:ScrollToTopButton.__docgenInfo,name:"ScrollToTopButton",path:"src/button/ScrollToTopButton.tsx#ScrollToTopButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/button/scroll-to-top-button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Slam8P50AUB1xVZ0Y8os{position:fixed !important;bottom:.5em;right:.5em;z-index:9999}@media print{.Slam8P50AUB1xVZ0Y8os{display:none}}","",{version:3,sources:["webpack://./src/button/scroll-to-top-button.module.scss"],names:[],mappings:"AAAA,sBACI,yBAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CAEA,aANJ,sBAOQ,YAAA,CAAA",sourcesContent:[".root {\n    position: fixed !important;\n    bottom: 0.5em;\n    right: 0.5em;\n    z-index: 9999;\n\n    @media print {\n        display: none;\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"Slam8P50AUB1xVZ0Y8os"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);