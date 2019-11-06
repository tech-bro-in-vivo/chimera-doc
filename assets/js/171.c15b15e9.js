(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{384:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"qa-openlocation-object-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qa-openlocation-object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" qa.openLocation(Object object)")]),t._v(" "),a("p",[t._v("使用快应用内置地图查看位置")]),t._v(" "),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("h3",{attrs:{id:"object-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Object object")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[a("div",{staticStyle:{width:"50px"}},[t._v("默认值")])]),t._v(" "),a("th",[a("div",{staticStyle:{width:"50px"}},[t._v("必填")])]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("latitude")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系")])]),t._v(" "),a("tr",[a("td",[t._v("longitude")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系")])]),t._v(" "),a("tr",[a("td",[t._v("scale")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("18")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("缩放比例，范围 5~18")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("位置名")])]),t._v(" "),a("tr",[a("td",[t._v("address")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("地址的详细说明")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("fail")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("complete")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),a("h2",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("qa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gcj02'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回可以用于qa.openLocation的经纬度")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" latitude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" longitude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude\n    qa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      scale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);