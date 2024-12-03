(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ee9d90b8"],{ee9d90b8:function(e,n,a){"use strict";var t=a("852bbaa9")._;a.d(n,"__esModule",{value:!0}),a.d(n,"demos",{enumerable:!0,get:function(){return m;}});var r=a("852bbaa9"),l=r._(a("5b220c3d"));a("4b8e4a09");var s=r._(a("a9d1a279")),o=r._(a("072ab8a9"));let m={"docs-blog-form-names-demo-zh-cn-0":{component:l.default.memo(l.default.lazy(async function(){let{default:e}=await Promise.all([a.ensure("5b220c3d")]).then(a.dr(t,a.bind(a,"5b220c3d"))),{Button:n,Cascader:r,DatePicker:l,Form:s}=await Promise.all([a.ensure("a9d1a279")]).then(a.dr(t,a.bind(a,"a9d1a279"))),{default:o}=await Promise.all([a.ensure("072ab8a9")]).then(a.dr(t,a.bind(a,"072ab8a9"))),m={province:"Beijing",city:"Haidian",startTime:o(),endTime:o().add(1,"month")},i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou"}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing"}]}],d=Object.assign(s,{Aggregate:n=>{let a=s.useFormInstance(),{names:t=[],rules:r=[],...l}=n,[o,...m]=t;return e.createElement(e.Fragment,null,e.createElement(s.Item,{name:o,getValueProps:()=>{let e=t.map(e=>a.getFieldValue(e));if(!e.every(e=>void 0===e))return{value:e};},getValueFromEvent:e=>{let n=t.map((n,a)=>({name:n,value:null==e?void 0:e[a]}));return a.setFields(n),null==e?void 0:e[0];},rules:r.map(e=>"object"==typeof e&&e?{...e,transform:()=>t.map(e=>a.getFieldValue(e))}:e),...l}),m.map(n=>e.createElement(s.Item,{key:null==n?void 0:n.toString(),name:n,noStyle:!0})));}});return{default:()=>e.createElement(d,{initialValues:m,onFinish:e=>console.log(e)},e.createElement(d.Aggregate,{label:"Address",names:["province","city"],rules:[{required:!0}]},e.createElement(r,{options:i,placeholder:"Please select"})),e.createElement(d.Item,{label:"Address (use Default)",name:"defaultAddress"},e.createElement(r,{options:i,placeholder:"Please select"})),e.createElement(d.Aggregate,{label:"Date",names:["startTime","endTime"]},e.createElement(l.RangePicker,null)),e.createElement(d.Item,null,e.createElement(n,{htmlType:"submit",type:"primary"},"\u63D0\u4EA4")))};})),asset:{type:"BLOCK",id:"docs-blog-form-names-demo-zh-cn-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:"import React from 'react';\nimport type { FormItemProps } from 'antd';\nimport { Button, Cascader, DatePicker, Form as OriginForm } from 'antd';\nimport dayjs from 'dayjs';\n\ninterface AggregateProps<V = any> extends FormItemProps<V> {\n  names?: FormItemProps<V>['name'][];\n}\n\nconst Aggregate = (props: AggregateProps) => {\n  const form = OriginForm.useFormInstance();\n\n  const { names = [], rules = [], ...rest } = props;\n  const [firstName, ...resetNames] = names;\n\n  return (\n    <>\n      <OriginForm.Item\n        name={firstName}\n        // \u5C06 names \u7684\u503C\u8F6C\u6210\u6570\u7EC4\u4F20\u7ED9 children\n        getValueProps={() => {\n          const value = names.map((name) => form.getFieldValue(name));\n          if (value.every((v) => v === undefined)) {\n            return undefined;\n          }\n          return { value };\n        }}\n        getValueFromEvent={(values) => {\n          // \u5C06 form store \u5206\u522B\u8BBE\u7F6E\u7ED9 names\n          const fieldData = names.map((name, index) => ({ name, value: values?.[index] }));\n          form.setFields(fieldData);\n          return values?.[0];\n        }}\n        rules={rules.map((rule) => {\n          if (typeof rule === 'object' && rule) {\n            return {\n              ...rule,\n              transform: () => {\n                // \u5C06 names \u5B57\u6BB5\u7684\u503C\u8BBE\u7F6E\u7ED9 rule value\n                const values = names.map((name) => form.getFieldValue(name));\n                return values;\n              },\n            };\n          }\n          return rule;\n        })}\n        {...rest}\n      />\n      {/* \u7ED1\u5B9A\u5176\u4ED6\u5B57\u6BB5\uFF0C\u4F7F\u5176\u53EF\u4EE5 getFieldValue \u83B7\u53D6\u503C\u3001setFields \u8BBE\u7F6E\u503C */}\n      {resetNames.map((name) => (\n        <OriginForm.Item key={name?.toString()} name={name} noStyle />\n      ))}\n    </>\n  );\n};\n\nconst data = {\n  province: 'Beijing',\n  city: 'Haidian',\n  startTime: dayjs(),\n  endTime: dayjs().add(1, 'month'),\n};\n\nconst options = [\n  {\n    value: 'zhejiang',\n    label: 'Zhejiang',\n    children: [{ value: 'hangzhou', label: 'Hangzhou' }],\n  },\n  {\n    value: 'jiangsu',\n    label: 'Jiangsu',\n    children: [{ value: 'nanjing', label: 'Nanjing' }],\n  },\n];\n\nconst Form = Object.assign(OriginForm, { Aggregate });\n\nexport default () => (\n  <Form initialValues={data} onFinish={(value) => console.log(value)}>\n    <Form.Aggregate label=\"Address\" names={['province', 'city']} rules={[{ required: true }]}>\n      <Cascader options={options} placeholder=\"Please select\" />\n    </Form.Aggregate>\n\n    <Form.Item label=\"Address (use Default)\" name=\"defaultAddress\">\n      <Cascader options={options} placeholder=\"Please select\" />\n    </Form.Item>\n\n    {/* \u540C\u7406\uFF0C\u4E5F\u9002\u7528\u4E8E DatePicker.RangePicker */}\n    <Form.Aggregate label=\"Date\" names={['startTime', 'endTime']}>\n      <DatePicker.RangePicker />\n    </Form.Aggregate>\n\n    <Form.Item>\n      <Button htmlType=\"submit\" type=\"primary\">\n        \u63D0\u4EA4\n      </Button>\n    </Form.Item>\n  </Form>\n);"},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.22.3"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.tsx"},context:{react:l,antd:s,dayjs:o},renderOpts:{compile:async(...e)=>(await Promise.all([a.ensure("vendors_1"),a.ensure("vendors_0"),a.ensure("d2b37e0b")]).then(a.dr(t,a.bind(a,"d2b37e0b")))).default(...e)}}};}}]);