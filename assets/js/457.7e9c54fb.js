(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{695:function(t,a,s){"use strict";s.r(a);var n=s(3),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"app-object-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-object-object"}},[t._v("#")]),t._v(" App(Object object)")]),t._v(" "),s("p",[t._v("用于注册快应用。接受 "),s("code",[t._v("Object")]),t._v(" 参数，参数中可以定义生命周期回调、全局数据、全局方法等。")]),t._v(" "),s("h4",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("h5",{attrs:{id:"object-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-object"}},[t._v("#")]),t._v(" Object object")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[s("div",{staticStyle:{width:"50px"}},[t._v("默认值")])]),t._v(" "),s("th",[s("div",{staticStyle:{width:"50px"}},[t._v("必填")])]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#onlaunch-object-object"}},[t._v("onLaunch")])]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("监听快应用加载。")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#onshow-object-object"}},[t._v("onShow")])]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("监听快应用显示，首次加载或切换到前台时触发")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#onhide"}},[t._v("onHide")])]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("监听快应用隐藏，切后台时触发。")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#onerror-string-error"}},[t._v("onError")])]),t._v(" "),s("td",[t._v("function")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("监听未处理的报错。")])]),t._v(" "),s("tr",[s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("any")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("开发者可以添加任意的函数或数据变量到 "),s("code",[t._v("Object")]),t._v(" 参数中，用 "),s("code",[t._v("this")]),t._v(" 可以访问")])])])]),t._v(" "),s("p",[s("strong",[t._v("App() 必须在 "),s("code",[t._v("app.js")]),t._v(" 中调用，必须调用且只能调用一次。")])]),t._v(" "),s("h4",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLaunch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听快应用加载")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听快应用显示")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onHide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听快应用隐藏")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  globalData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello QuickApp'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h4",{attrs:{id:"onlaunch-object-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlaunch-object-object"}},[t._v("#")]),t._v(" onLaunch(Object object)")]),t._v(" "),s("p",[t._v("快应用加载完成时触发，只触发一次。")]),t._v(" "),s("p",[s("strong",[t._v("参数")]),t._v("：与 "),s("router-link",{attrs:{to:"/api/base/app/qa.getLaunchOptionsSync.html"}},[t._v("qa.getLaunchOptionsSync")]),t._v(" 一致")],1),t._v(" "),s("h4",{attrs:{id:"onshow-object-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onshow-object-object"}},[t._v("#")]),t._v(" onShow(Object object)")]),t._v(" "),s("p",[t._v("快应用加载完后，或从后台切换到前台显示时触发。也可以使用 "),s("router-link",{attrs:{to:"/api/base/app/qa.onAppShow.html"}},[t._v("qa.onAppShow")]),t._v(" 添加监听。")],1),t._v(" "),s("p",[s("strong",[t._v("参数")]),t._v("：与 "),s("router-link",{attrs:{to:"/api/base/app/qa.onAppShow.html"}},[t._v("qa.onAppShow")]),t._v(" 一致")],1),t._v(" "),s("h4",{attrs:{id:"onhide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onhide"}},[t._v("#")]),t._v(" onHide()")]),t._v(" "),s("p",[t._v("快应用从前台切换到后台时触发。也可以使用 "),s("router-link",{attrs:{to:"/api/base/app/qa.onAppHide.html"}},[t._v("qa.onAppHide")]),t._v(" 添加监听。")],1),t._v(" "),s("h4",{attrs:{id:"onerror-string-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onerror-string-error"}},[t._v("#")]),t._v(" onError(String error)")]),t._v(" "),s("p",[t._v("快应用发生未处理的报错时触发。也可以使用 "),s("router-link",{attrs:{to:"/api/base/app/qa.onError.html"}},[t._v("qa.onError")]),t._v(" 绑定监听。")],1),t._v(" "),s("p",[s("strong",[t._v("参数")]),t._v("：与 "),s("router-link",{attrs:{to:"/api/base/app/qa.onError.html"}},[t._v("qa.onError")]),t._v(" 一致")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);