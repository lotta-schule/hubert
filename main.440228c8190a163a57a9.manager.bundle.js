(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{437:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(71),_storybook_addons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(113),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_storybook_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_storybook_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),Grid=({columns:columns,style:style,children:children})=>{const StyledDiv=_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.l.div`
    column-count: ${columns};
    padding: ${({theme:theme})=>theme.layoutMargin}px;
  `;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(StyledDiv,{style:style},children)},ThemePropControl=react__WEBPACK_IMPORTED_MODULE_2__.memo((({name:name,value:value,onChange:onChange})=>{if(/Color$/.test(name)){const label=name.replace(/Color$/,"");return react__WEBPACK_IMPORTED_MODULE_2__.createElement(Grid,{columns:2,style:{maxWidth:"30em",padding:8}},react__WEBPACK_IMPORTED_MODULE_2__.createElement("span",null,label),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.t,{name:name.replace(/Color$/,""),value:value,onChange:newValue=>(onChange(newValue),newValue)}))}if(/^\d+$/.test(value)){const label=name;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(Grid,{columns:2,style:{maxWidth:"30em",padding:8}},react__WEBPACK_IMPORTED_MODULE_2__.createElement("span",null,label),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.J,{name:name,value:parseInt(value),onChange:newValue=>(newValue&&onChange((null==newValue?void 0:newValue.toString())||null),newValue)}))}{const label=name;return react__WEBPACK_IMPORTED_MODULE_2__.createElement(Grid,{columns:2,style:{maxWidth:"30em",padding:8}},react__WEBPACK_IMPORTED_MODULE_2__.createElement("span",null,label),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.K,{name:name,value:value,onChange:newValue=>(onChange(null!=newValue?newValue:null),newValue)}))}}));ThemePropControl.displayName="ThemePropControl";var defaultTheme={primaryColor:"#ff5722",navigationBackgroundColor:"#333333",errorColor:"#ff0000",successColor:"#0a5225",navigationColor:"#333333",disabledColor:"#616161",textColor:"#212121",labelTextColor:"#9e9e9e",contrastTextColor:"#ffffff",boxBackgroundColor:"#ffffff",pageBackgroundColor:"#cacdd7",dividerColor:"#e0e0e0",highlightColor:"#e0e0e0",bannerBackgroundColor:"rgb(54, 123, 240)",accentGrey:"rgb(227, 227, 227)",spacing:"8px",borderRadius:"4px",textFontFamily:"Muli",titleFontFamily:"'Schoolbell', cursive"},Panel=({active:active,key:key})=>{const StyledHeader=_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.l.h2`
    padding: ${({theme:theme2})=>theme2.layoutMargin}px;
    font-size: ${({theme:theme2})=>theme2.typography.size.l2};
    font-weight: ${({theme:theme2})=>theme2.typography.weight.black};
  `,value=Object(_storybook_api__WEBPACK_IMPORTED_MODULE_3__.o)("hubertTheme",null),[globals,setGlobals]=Object(_storybook_api__WEBPACK_IMPORTED_MODULE_3__.n)(),item=value?value.data:"No story parameter defined",theme=__spreadValues(__spreadValues({},defaultTheme),globals.hubertTheme);return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.C,{active:!!active,key:key},react__WEBPACK_IMPORTED_MODULE_2__.createElement(StyledHeader,null,"Edit the current theme"),item,react__WEBPACK_IMPORTED_MODULE_2__.createElement(Grid,{columns:3},Object.entries(theme).map((([key2,value2])=>react__WEBPACK_IMPORTED_MODULE_2__.createElement(ThemePropControl,{key:key2,name:key2,value:value2,onChange:value3=>{const newTheme=__spreadProps(__spreadValues({},globals.hubertTheme),{[key2]:value3}),newGlobals=__spreadProps(__spreadValues({},globals),{hubertTheme:newTheme});setGlobals(newGlobals)}})))))},ADDON_ID="@lotta-schule/addon-theme",PANEL_ID=`${ADDON_ID}/panel`,TOOL_ID=`${ADDON_ID}/tool`,ToolbarButton=()=>{const[{currentHubertTheme:currentHubertTheme},updateGlobals]=Object(_storybook_api__WEBPACK_IMPORTED_MODULE_3__.n)();console.log("currentHubertTheme: ",currentHubertTheme);const toggleTheme=react__WEBPACK_IMPORTED_MODULE_2__.useCallback((()=>updateGlobals({currentHubertTheme:"default"})),[]);return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.x,{key:TOOL_ID,active:"default"===currentHubertTheme,title:"Quick select a theme",onClick:toggleTheme},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.c,{icon:"outline"}))};_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.a.register(ADDON_ID,(_api=>{_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.a.add(TOOL_ID,{type:_storybook_addons__WEBPACK_IMPORTED_MODULE_1__.a.TOOL,title:"Change Theme",match:({viewMode:viewMode})=>!(!viewMode||!viewMode.match(/^(story|docs)$/)),render:ToolbarButton})})),_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.a.register(ADDON_ID,(_api=>{_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.a.addPanel(PANEL_ID,{type:_storybook_addons__WEBPACK_IMPORTED_MODULE_1__.a.PANEL,title:"Theme Editor",render:Panel})}))},462:function(module,exports,__webpack_require__){__webpack_require__(463),__webpack_require__(847),__webpack_require__(851),__webpack_require__(852),__webpack_require__(848),__webpack_require__(845),__webpack_require__(844),__webpack_require__(843),__webpack_require__(849),__webpack_require__(850),__webpack_require__(841),__webpack_require__(846),__webpack_require__(842),__webpack_require__(437),module.exports=__webpack_require__(839)},509:function(module,exports){},839:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(24),__webpack_require__(212),__webpack_require__(9),__webpack_require__(12),__webpack_require__(6),__webpack_require__(17),__webpack_require__(13),__webpack_require__(10),__webpack_require__(11),__webpack_require__(22),__webpack_require__(20),__webpack_require__(18);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={managerEntries:function managerEntries(){var entry=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat(_toConsumableArray(entry),[437])},config:function config(){var entry=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat(_toConsumableArray(entry),[840])}}},840:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators}));var decorators=[(StoryFn,context)=>(console.log("WithGlobals Context",context),StoryFn())]}},[[462,3,4]]]);