(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{391:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"qa-opendocument-object-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qa-opendocument-object-object"}},[t._v("#")]),t._v(" qa.openDocument(Object object)")]),t._v(" "),a("p",[t._v("新开页面打开文档")]),t._v(" "),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("h3",{attrs:{id:"object-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-object"}},[t._v("#")]),t._v(" Object object")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[a("div",{staticStyle:{width:"50px"}},[t._v("默认值")])]),t._v(" "),a("th",[a("div",{staticStyle:{width:"50px"}},[t._v("必填")])]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("filePath")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("文件路径，可通过 downloadFile 获得")])]),t._v(" "),a("tr",[a("td",[t._v("fileType")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("文件类型，指定文件类型打开文件")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("fail")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),a("tr",[a("td",[t._v("complete")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])]),t._v(" "),a("p",[a("strong",[t._v("object.fileType 的合法值")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("doc")]),t._v(" "),a("td",[t._v("doc 格式")])]),t._v(" "),a("tr",[a("td",[t._v("docx")]),t._v(" "),a("td",[t._v("docx 格式")])]),t._v(" "),a("tr",[a("td",[t._v("xls")]),t._v(" "),a("td",[t._v("xls 格式")])]),t._v(" "),a("tr",[a("td",[t._v("xlsx")]),t._v(" "),a("td",[t._v("xlsx 格式")])]),t._v(" "),a("tr",[a("td",[t._v("ppt")]),t._v(" "),a("td",[t._v("ppt 格式")])]),t._v(" "),a("tr",[a("td",[t._v("pptx")]),t._v(" "),a("td",[t._v("pptx 格式")])]),t._v(" "),a("tr",[a("td",[t._v("pdf")]),t._v(" "),a("td",[t._v("pdf 格式")])])])]),t._v(" "),a("h2",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("qa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("downloadFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例 url，并非真实存在")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/somefile.pdf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" filePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempFilePath\n    qa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openDocument")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" filePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'打开文档成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);