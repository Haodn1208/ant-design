(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["39a1999c"],{"39a1999c":function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"texts",{enumerable:!0,get:function(){return r;}}),n("c716787e");let r=[{value:"Ant Design supports the ",paraId:0,tocIndex:0},{value:"last 2 versions of modern browsers",paraId:0,tocIndex:0},{value:". If you need to be compatible with legacy browsers, please perform downgrade processing according to actual needs:",paraId:0,tocIndex:0},{value:"Feature",paraId:1,tocIndex:0},{value:"antd version",paraId:1,tocIndex:0},{value:"Compatibility",paraId:1,tocIndex:0},{value:"Minimum Chrome Version",paraId:1,tocIndex:0},{value:"Compatibility workaround",paraId:1,tocIndex:0},{value:":where Selector",paraId:1,tocIndex:0},{value:">=5.0.0",paraId:1,tocIndex:0},{value:"caniuse",paraId:1,tocIndex:0},{value:"Chrome 88",paraId:1,tocIndex:0},{value:'<StyleProvider hashPriority="high">',paraId:1,tocIndex:0},{value:"CSS Logical Properties",paraId:1,tocIndex:0},{value:">=5.0.0",paraId:1,tocIndex:0},{value:"caniuse",paraId:1,tocIndex:0},{value:"Chrome 89",paraId:1,tocIndex:0},{value:"<StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>",paraId:1,tocIndex:0},{value:"If you need to support older browsers, please use ",paraId:2,tocIndex:0},{value:"StyleProvider",paraId:2,tocIndex:0},{value:" for degradation handling according to your actual requirements.",paraId:2,tocIndex:0},{value:":where",paraId:3},{value:"antd version: ",paraId:4,tocIndex:1},{value:">=5.0.0",paraId:4,tocIndex:1},{value:"MDN: ",paraId:4,tocIndex:1},{value:":where",paraId:4,tocIndex:1},{value:"Browser Compatibility: ",paraId:4,tocIndex:1},{value:"caniuse",paraId:4,tocIndex:1},{value:"Minimum Chrome Version Supported: 88",paraId:4,tocIndex:1},{value:"Default Enabled: Yes",paraId:4,tocIndex:1},{value:'The CSS-in-JS feature of Ant Design uses the ":where" selector by default to lower the CSS selector specificity, reducing the additional cost of adjusting custom styles when upgrading for users. However, the compatibility of the ":where" syntax is relatively poor in older browsers (',paraId:5,tocIndex:1},{value:"compatibility",paraId:5,tocIndex:1},{value:"). In certain scenarios, if you need to support older browsers, you can use ",paraId:5,tocIndex:1},{value:"@ant-design/cssinjs",paraId:5,tocIndex:1},{value:" to disable the default lowering of specificity (please ensure version consistency with antd).",paraId:5,tocIndex:1},{value:"import { StyleProvider } from '@ant-design/cssinjs';\n\n// Config `hashPriority` to `high` instead of default `low`\n// Which will remove `:where` wrapper\nexport default () => (\n  <StyleProvider hashPriority=\"high\">\n    <MyApp />\n  </StyleProvider>\n);\n",paraId:6,tocIndex:1},{value:"It will turn ",paraId:7,tocIndex:1},{value:":where",paraId:7,tocIndex:1},{value:" to class selector:",paraId:7,tocIndex:1},{value:"--  :where(.css-bAMboO).ant-btn {\n++  .css-bAMboO.ant-btn {\n      color: #fff;\n    }\n",paraId:8,tocIndex:1},{value:"Note: After turning off the ",paraId:9,tocIndex:1},{value:":where",paraId:9,tocIndex:1},{value:" downgrade, you may need to manually adjust the priority of some styles. Or you can ",paraId:9,tocIndex:1},{value:"use PostCSS plugin",paraId:9,tocIndex:1},{value:" to raise application css selector priority. PostCSS provides many plugins can help on this. e.g:",paraId:9,tocIndex:1},{value:"postcss-scopify",paraId:10,tocIndex:1},{value:"postcss-increase-specificity",paraId:10,tocIndex:1},{value:"postcss-add-root-selector",paraId:10,tocIndex:1},{value:"Raise priority through plugin:",paraId:11,tocIndex:1},{value:"--  .my-btn {\n++  #root .my-btn {\n      background: red;\n    }\n",paraId:12,tocIndex:1},{value:"antd version: ",paraId:13,tocIndex:2},{value:">=5.0.0",paraId:13,tocIndex:2},{value:"MDN\uFF1A",paraId:13,tocIndex:2},{value:"CSS Logical Properties",paraId:13,tocIndex:2},{value:"Browser Compatibility: ",paraId:13,tocIndex:2},{value:"caniuse",paraId:13,tocIndex:2},{value:"Minimum Chrome Version Supported: 89",paraId:13,tocIndex:2},{value:"Default Enabled: Yes",paraId:13,tocIndex:2},{value:"To unify LTR and RTL styles, Ant Design uses CSS logical properties. For example, the original ",paraId:14,tocIndex:2},{value:"margin-left",paraId:14,tocIndex:2},{value:" is replaced by ",paraId:14,tocIndex:2},{value:"margin-inline-start",paraId:14,tocIndex:2},{value:", so that it is the starting position spacing under both LTR and RTL. If you need to be compatible with older browsers, you can configure ",paraId:14,tocIndex:2},{value:"transformers",paraId:14,tocIndex:2},{value:" through the ",paraId:14,tocIndex:2},{value:"StyleProvider",paraId:14,tocIndex:2},{value:" of ",paraId:14,tocIndex:2},{value:"@ant-design/cssinjs",paraId:14,tocIndex:2},{value:":",paraId:14,tocIndex:2},{value:"import { legacyLogicalPropertiesTransformer, StyleProvider } from '@ant-design/cssinjs';\n\n// `transformers` provides a way to transform CSS properties\nexport default () => (\n  <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>\n    <MyApp />\n  </StyleProvider>\n);\n",paraId:15,tocIndex:2},{value:"When toggled, styles will downgrade CSS logical properties:",paraId:16,tocIndex:2},{value:".ant-modal-root {\n-- inset: 0;\n++ top: 0;\n++ right: 0;\n++ bottom: 0;\n++ left: 0;\n}\n",paraId:17,tocIndex:2},{value:"@layer",paraId:3},{value:"antd version: ",paraId:18,tocIndex:3},{value:">=5.17.0",paraId:18,tocIndex:3},{value:"MDN\uFF1A",paraId:18,tocIndex:3},{value:"CSS @layer",paraId:18,tocIndex:3},{value:"Browser Compatibility: ",paraId:18,tocIndex:3},{value:"caniuse",paraId:18,tocIndex:3},{value:"Minimum Chrome Version Supported: 99",paraId:18,tocIndex:3},{value:"Default Enabled: No",paraId:18,tocIndex:3},{value:"Ant Design supports configuring ",paraId:19,tocIndex:3},{value:"@layer",paraId:19,tocIndex:3},{value:" for unified css priority downgrade since ",paraId:19,tocIndex:3},{value:"5.17.0",paraId:19,tocIndex:3},{value:". After the downgrade, the style of antd will always be lower than the default CSS selector priority, so that users can override the style (please be sure to check the browser compatibility of ",paraId:19,tocIndex:3},{value:"@layer",paraId:19,tocIndex:3},{value:"):",paraId:19,tocIndex:3},{value:"import { StyleProvider } from '@ant-design/cssinjs';\n\nexport default () => (\n  <StyleProvider layer>\n    <MyApp />\n  </StyleProvider>\n);\n",paraId:20,tocIndex:3},{value:"antd styles will be encapsulated in ",paraId:21,tocIndex:3},{value:"@layer",paraId:21,tocIndex:3},{value:" to lower the priority:",paraId:21,tocIndex:3},{value:"++  @layer antd {\n      :where(.css-bAMboO).ant-btn {\n        color: #fff;\n      }\n++  }\n",paraId:22,tocIndex:3},{value:"In responsive web development, there is a need for a convenient and flexible way to achieve page adaptation and responsive design. The ",paraId:23,tocIndex:4},{value:"px2remTransformer",paraId:23,tocIndex:4},{value:" transformer can quickly and accurately convert pixel units in style sheets to rem units relative to the root element (HTML tag), enabling the implementation of adaptive and responsive layouts.",paraId:23,tocIndex:4},{value:"import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';\n\nconst px2rem = px2remTransformer({\n  rootValue: 32, // 32px = 1rem; @default 16\n});\n\nexport default () => (\n  <StyleProvider transformers={[px2rem]}>\n    <MyApp />\n  </StyleProvider>\n);\n",paraId:24,tocIndex:4},{value:"The resulting transformed styles:",paraId:25,tocIndex:4},{value:" .px2rem-box {\n-  width: 400px;\n+  width: 12.5rem;\n   background-color: green;\n-  font-size: 32px;\n+  font-size: 1rem;\n   border: 10PX solid #f0f;\n }\n\n @media only screen and (max-width: 600px) {\n   .px2rem-box {\n     background-color: red;\n-    margin: 10px;\n+    margin: 0.3125rem;\n   }\n }\n",paraId:26,tocIndex:4},{value:"Parameter",paraId:27,tocIndex:5},{value:"Description",paraId:27,tocIndex:5},{value:"Type",paraId:27,tocIndex:5},{value:"Default",paraId:27,tocIndex:5},{value:"rootValue",paraId:27,tocIndex:5},{value:"Font size of the root element",paraId:27,tocIndex:5},{value:"number",paraId:27,tocIndex:5},{value:"16",paraId:27,tocIndex:5},{value:"precision",paraId:27,tocIndex:5},{value:"Decimal places for the converted value",paraId:27,tocIndex:5},{value:"number",paraId:27,tocIndex:5},{value:"5",paraId:27,tocIndex:5},{value:"mediaQuery",paraId:27,tocIndex:5},{value:"Whether to convert px in media queries",paraId:27,tocIndex:5},{value:"boolean",paraId:27,tocIndex:5},{value:"false",paraId:27,tocIndex:5},{value:"For more details, please refer to: ",paraId:28,tocIndex:5},{value:"px2rem.ts#Options",paraId:28,tocIndex:5},{value:"Since ",paraId:29,tocIndex:6},{value:"<style />",paraId:29,tocIndex:6},{value:" tag insertion is different from normal DOM in Shadow DOM scenario, you need to use ",paraId:29,tocIndex:6},{value:"StyleProvider",paraId:29,tocIndex:6},{value:" of ",paraId:29,tocIndex:6},{value:"@ant-design/cssinjs",paraId:29,tocIndex:6},{value:" to configure the ",paraId:29,tocIndex:6},{value:"container",paraId:29,tocIndex:6},{value:" property to set the insertion position:",paraId:29,tocIndex:6},{value:"import { StyleProvider } from '@ant-design/cssinjs';\nimport { createRoot } from 'react-dom/client';\n\nconst shadowRoot = someEle.attachShadow({ mode: 'open' });\nconst container = document.createElement('div');\nshadowRoot.appendChild(container);\nconst root = createRoot(container);\n\nroot.render(\n  <StyleProvider container={shadowRoot}>\n    <MyApp />\n  </StyleProvider>,\n);\n",paraId:30,tocIndex:6},{value:"In some cases, you may need antd to coexist with other style libraries, such as ",paraId:31,tocIndex:7},{value:"Tailwind CSS",paraId:31,tocIndex:7},{value:", ",paraId:31,tocIndex:7},{value:"Emotion",paraId:31,tocIndex:7},{value:", ",paraId:31,tocIndex:7},{value:"styled-components",paraId:31,tocIndex:7},{value:", etc. Unlike traditional CSS solutions, these third-party libraries are often not easy to override antd styles by increasing CSS selector priority. You can configure ",paraId:31,tocIndex:7},{value:"@layer",paraId:31,tocIndex:7},{value:" for antd to lower its CSS selector weight, and arrange ",paraId:31,tocIndex:7},{value:"@layer",paraId:31,tocIndex:7},{value:" order to solve style override problems:",paraId:31,tocIndex:7},{value:"@layer",paraId:3},{value:"import { StyleProvider } from '@ant-design/cssinjs';\n\nexport default () => (\n  <StyleProvider layer>\n    <MyApp />\n  </StyleProvider>\n);\n",paraId:32,tocIndex:8},{value:"@layer",paraId:3},{value:"In global.css, adjust ",paraId:33,tocIndex:9},{value:"@layer",paraId:33,tocIndex:9},{value:" to control the order of style override. Place ",paraId:33,tocIndex:9},{value:"tailwind-base",paraId:33,tocIndex:9},{value:" before ",paraId:33,tocIndex:9},{value:"antd",paraId:33,tocIndex:9},{value:":",paraId:33,tocIndex:9},{value:"@layer tailwind-base, antd;\n\n@layer tailwind-base {\n  @tailwind base;\n}\n@tailwind components;\n@tailwind utilities;\n",paraId:34,tocIndex:9},{value:"If you use antd's ",paraId:35,tocIndex:10},{value:"reset.css",paraId:35,tocIndex:10},{value:" style, you need to specify ",paraId:35,tocIndex:10},{value:"@layer",paraId:35,tocIndex:10},{value:" for it to prevent the style from overriding antd:",paraId:35,tocIndex:10},{value:"@layer reset, antd;\n\n@import url(reset.css) layer(reset);\n",paraId:36,tocIndex:10},{value:"After configuring ",paraId:37,tocIndex:11},{value:"@layer",paraId:37,tocIndex:11},{value:" for antd, you don't need to do any additional configuration for other CSS-in-JS libraries. Your CSS-in-JS can completely override antd styles.",paraId:37,tocIndex:11},{value:"When using SSR, styles are often rendered inline in HTML through ",paraId:38,tocIndex:12},{value:"<style />",paraId:38,tocIndex:12},{value:". At this time, please make sure that the styles with the specified ",paraId:38,tocIndex:12},{value:"@layer",paraId:38,tocIndex:12},{value:" priority order are loaded before ",paraId:38,tocIndex:12},{value:"@layer",paraId:38,tocIndex:12},{value:" is used.",paraId:38,tocIndex:12},{value:'<head>\n  <!-- SSR Injection style -->\n  <style>\n    @layer antd {\n      /** ... */\n    }\n  </style>\n\n  <!-- css file contains @layer xxx, antd; -->\n  <link rel="stylesheet" href="/b9a0m0b9o0o3.css" />\n  <!-- or write @layer xxx, antd; in html directly -->\n  <style>\n    @layer xxx, antd;\n  </style>\n</head>\n',paraId:39,tocIndex:13},{value:'<head>\n  <!-- css file contains @layer xxx, antd; -->\n  <link rel="stylesheet" href="/b9a0m0b9o0o3.css" />\n  <!-- or write @layer xxx, antd; in html directly -->\n  <style>\n    @layer xxx, antd;\n  </style>\n\n  <!-- SSR Injection style -->\n  <style>\n    @layer antd {\n      /** ... */\n    }\n  </style>\n</head>\n',paraId:40,tocIndex:14}];}}]);