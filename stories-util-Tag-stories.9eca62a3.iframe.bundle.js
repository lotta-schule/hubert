"use strict";(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[5307],{"./src/stories/util/Tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Deletable:()=>Deletable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tag_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/button/Button.tsx"),icon=__webpack_require__("./src/icon/index.ts"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tag_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/tag/tag.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tag_module.Z,options);const tag_tag_module=tag_module.Z&&tag_module.Z.locals?tag_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_2q0slme35j(){var path="/home/runner/work/hubert/hubert/src/tag/Tag.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/hubert/hubert/src/tag/Tag.tsx",statementMap:{0:{start:{line:8,column:32},end:{line:27,column:3}},1:{start:{line:14,column:2},end:{line:26,column:5}},2:{start:{line:28,column:0},end:{line:28,column:24}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:74},end:{line:8,column:75}},loc:{start:{line:13,column:11},end:{line:27,column:1}},line:13}},branchMap:{0:{loc:{start:{line:19,column:25},end:{line:25,column:6}},type:"binary-expr",locations:[{start:{line:19,column:25},end:{line:19,column:33}},{start:{line:19,column:50},end:{line:25,column:6}}],line:19}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0,0]},inputSourceMap:{version:3,file:void 0,names:["React","Button","Close","clsx","styles","jsx","_jsx","jsxs","_jsxs","Tag","memo","forwardRef","onDelete","children","className","props","ref","root","small","deleteButton","onClick","icon","displayName"],sourceRoot:void 0,sources:["/home/runner/work/hubert/hubert/src/tag/Tag.tsx"],sourcesContent:["import * as React from 'react';\nimport { Button, ButtonProps } from '../button/Button';\nimport { Close } from '../icon';\nimport clsx from 'clsx';\n\nimport styles from './tag.module.scss';\n\nexport type TagProps = {\n  onDelete?: ButtonProps['onClick'];\n  children: React.ReactNode;\n  className?: string;\n  style?: React.CSSProperties;\n  role?: string;\n} & React.HTMLProps<HTMLDivElement>;\n\nexport const Tag = React.memo(\n  React.forwardRef(\n    (\n      { onDelete, children, className, ...props }: TagProps,\n      ref: React.ForwardedRef<HTMLDivElement>\n    ) => {\n      return (\n        <div\n          data-testid={'Tag'}\n          ref={ref}\n          {...props}\n          className={clsx(styles.root, className)}\n        >\n          {children}\n          {onDelete && (\n            <Button\n              small\n              className={styles.deleteButton}\n              aria-label={`Tag ${children} löschen`}\n              onClick={onDelete}\n              icon={<Close />}\n            />\n          )}\n        </div>\n      );\n    }\n  )\n);\nTag.displayName = 'Tag';\n"],mappings:"AAAA,OAAO,KAAKA,KAAK,MAAM,OAAO;AAC9B,SAASC,MAAM,QAAqB,kBAAkB;AACtD,SAASC,KAAK,QAAQ,SAAS;AAC/B,OAAOC,IAAI,MAAM,MAAM;AAEvB,OAAOC,MAAM,MAAM,mBAAmB;AAAC,SAAAC,GAAA,IAAAC,IAAA;AAAA,SAAAC,IAAA,IAAAC,KAAA;AAUvC,OAAO,MAAMC,GAAG,gBAAGT,KAAK,CAACU,IAAI,eAC3BV,KAAK,CAACW,UAAU,CACd,CACE;EAAEC,QAAQ;EAAEC,QAAQ;EAAEC,SAAS;EAAE,GAAGC;AAAgB,CAAC,EACrDC,GAAuC,KACpC;EACH,oBACER,KAAA;IACE,eAAa,KAAM;IACnBQ,GAAG,EAAEA,GAAI;IAAA,GACLD,KAAK;IACTD,SAAS,EAAEX,IAAI,CAACC,MAAM,CAACa,IAAI,EAAEH,SAAS,CAAE;IAAAD,QAAA,GAEvCA,QAAQ,EACRD,QAAQ,iBACPN,IAAA,CAACL,MAAM;MACLiB,KAAK;MACLJ,SAAS,EAAEV,MAAM,CAACe,YAAa;MAC/B,cAAa,OAAMN,QAAS,UAAU;MACtCO,OAAO,EAAER,QAAS;MAClBS,IAAI,eAAEf,IAAA,CAACJ,KAAK,IAAE;IAAE,CACjB,CACF;EAAA,CACE,CAAC;AAEV,CACF,CACF,CAAC;AACDO,GAAG,CAACa,WAAW,GAAG,KAAK"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d757f556318f3bb848fd616f2cc2aa3ce1966220"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"d757f556318f3bb848fd616f2cc2aa3ce1966220"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_2q0slme35j=function(){return actualCoverage},actualCoverage}cov_2q0slme35j();const Tag=(cov_2q0slme35j().s[0]++,react.memo(react.forwardRef((({onDelete,children,className,...props},ref)=>(cov_2q0slme35j().f[0]++,cov_2q0slme35j().s[1]++,(0,jsx_runtime.jsxs)("div",{"data-testid":"Tag",ref,...props,className:(0,clsx.Z)(tag_tag_module.root,className),children:[children,(cov_2q0slme35j().b[0][0]++,onDelete&&(cov_2q0slme35j().b[0][1]++,(0,jsx_runtime.jsx)(Button.z,{small:!0,className:tag_tag_module.deleteButton,"aria-label":`Tag ${children} löschen`,onClick:onDelete,icon:(0,jsx_runtime.jsx)(icon.x8,{})})))]}))))));cov_2q0slme35j().s[2]++,Tag.displayName="Tag";try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}function cov_1aqusjr8vp(){var path="/home/runner/work/hubert/hubert/src/tag/index.ts",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/hubert/hubert/src/tag/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},inputSourceMap:{version:3,file:void 0,names:[],sourceRoot:void 0,sources:["/home/runner/work/hubert/hubert/src/tag/index.ts"],sourcesContent:["export * from './Tag';\n"],mappings:"AAAA,cAAc,OAAO"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"dffe56cdbc743d8a819021539b04676d707a0705"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"dffe56cdbc743d8a819021539b04676d707a0705"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1aqusjr8vp=function(){return actualCoverage},actualCoverage}function cov_j09sal5an(){var path="/home/runner/work/hubert/hubert/src/stories/util/Tag.stories.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/hubert/hubert/src/stories/util/Tag.stories.tsx",statementMap:{0:{start:{line:18,column:23},end:{line:23,column:1}},1:{start:{line:24,column:25},end:{line:29,column:1}},2:{start:{line:30,column:0},end:{line:39,column:2}},3:{start:{line:40,column:0},end:{line:49,column:2}},4:{start:{line:50,column:35},end:{line:50,column:59}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{},b:{},inputSourceMap:{version:3,file:void 0,names:[],sourceRoot:void 0,sources:[],sourcesContent:["import { Meta } from '@storybook/react';\nimport { actions } from '@storybook/addon-actions';\nimport { Tag } from '../../tag';\nexport default ({\n  title: 'util/Tag',\n  component: Tag,\n  argTypes: {\n    children: {\n      name: 'children',\n      type: {\n        name: 'string',\n        required: true\n      },\n      defaultValue: 'Hallo',\n      description: 'The content of the tag'\n    }\n  }\n} as Meta);\nexport const Default = {\n  args: {\n    children: 'Hallo',\n    onDelete: undefined\n  }\n};\nexport const Deletable = {\n  args: {\n    children: 'Hallo',\n    ...actions('onDelete')\n  }\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    children: 'Hallo',\\n    onDelete: undefined\\n  }\\n}\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};\nDeletable.parameters = {\n  ...Deletable.parameters,\n  docs: {\n    ...Deletable.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    children: 'Hallo',\\n    ...actions('onDelete')\\n  }\\n}\",\n      ...Deletable.parameters?.docs?.source\n    }\n  }\n};"],mappings:""},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d0c0a299f785cc629728147561ca6e7cc2a54126"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"d0c0a299f785cc629728147561ca6e7cc2a54126"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_j09sal5an=function(){return actualCoverage},actualCoverage}cov_1aqusjr8vp(),cov_j09sal5an();const Tag_stories={title:"util/Tag",component:Tag,argTypes:{children:{name:"children",type:{name:"string",required:!0},defaultValue:"Hallo",description:"The content of the tag"}}},Default=(cov_j09sal5an().s[0]++,{args:{children:"Hallo",onDelete:void 0}}),Deletable=(cov_j09sal5an().s[1]++,{args:{children:"Hallo",...(0,dist.Nw)("onDelete")}});cov_j09sal5an().s[2]++,Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Hallo',\n    onDelete: undefined\n  }\n}",...Default.parameters?.docs?.source}}},cov_j09sal5an().s[3]++,Deletable.parameters={...Deletable.parameters,docs:{...Deletable.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Hallo',\n    ...actions('onDelete')\n  }\n}",...Deletable.parameters?.docs?.source}}};const __namedExportsOrder=(cov_j09sal5an().s[4]++,["Default","Deletable"])},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD,Nw:()=>actions});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),actions=(...args)=>{let options=chunk_AY7I2SME.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_AY7I2SME.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_AY7I2SME.aD)(namesObject[name],options)})),actionsObject}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/tag/tag.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Oc_VEJZRULVpK0a6KtBF{display:inline-flex;align-items:center;border:1px solid;border-color:rgb(var(--lotta-primary-color));color:rgba(var(--lotta-primary-color), 1);font-size:.7rem;padding:2px 4px;margin-bottom:10px;margin-right:4px;border-radius:4px;max-width:"max-content";font-family:var(--lotta-text-font-family)}.qahtDbeUHJCpb0uBT9od{float:right;margin-left:2px;padding:0 !important}.qahtDbeUHJCpb0uBT9od svg{width:.5em;height:.5em}',"",{version:3,sources:["webpack://./src/tag/tag.module.scss"],names:[],mappings:"AAAA,sBACE,mBAAA,CACA,kBAAA,CACA,gBAAA,CACA,4CAAA,CACA,yCAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CACA,iBAAA,CACA,uBAAA,CACA,yCAAA,CAGF,sBACE,WAAA,CACA,eAAA,CACA,oBAAA,CAEA,0BACE,UAAA,CACA,WAAA",sourcesContent:[".root {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid;\n  border-color: rgb(var(--lotta-primary-color));\n  color: rgba(var(--lotta-primary-color), 1);\n  font-size: 0.7rem;\n  padding: 2px 4px;\n  margin-bottom: 10px;\n  margin-right: 4px;\n  border-radius: 4px;\n  max-width: 'max-content';\n  font-family: var(--lotta-text-font-family);\n}\n\n.deleteButton {\n  float: right;\n  margin-left: 2px;\n  padding: 0 !important;\n\n  & svg {\n    width: 0.5em;\n    height: 0.5em;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"Oc_VEJZRULVpK0a6KtBF",deleteButton:"qahtDbeUHJCpb0uBT9od"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);