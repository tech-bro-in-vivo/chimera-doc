(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{319:function(t,s,n){"use strict";n.r(s);var a=n(3),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"canvasgradient-addcolorstop-number-stop-color-color"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canvasgradient-addcolorstop-number-stop-color-color"}},[t._v("#")]),t._v(" CanvasGradient.addColorStop(number stop, "),n("router-link",{attrs:{to:"/api/canvas/Color.html"}},[t._v("Color")]),t._v(" color)")],1),t._v(" "),n("p",[t._v("添加颜色的渐变点。小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染")]),t._v(" "),n("h2",{attrs:{id:"参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),n("h3",{attrs:{id:"number-stop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#number-stop"}},[t._v("#")]),t._v(" number stop")]),t._v(" "),n("p",[t._v("表示渐变中开始与结束之间的位置，范围 0-1。")]),t._v(" "),n("h3",{attrs:{id:"color-color"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#color-color"}},[t._v("#")]),t._v(" "),n("router-link",{attrs:{to:"/api/canvas/Color.html"}},[t._v("Color")]),t._v(" color")],1),t._v(" "),n("p",[t._v("渐变点的颜色。")]),t._v(" "),n("h2",{attrs:{id:"示例代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ctx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCanvasContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCanvas'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create circular gradient")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" grd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLinearGradient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngrd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngrd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orange'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngrd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.33")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yellow'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngrd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngrd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.66")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cyan'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngrd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.83")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngrd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColorStop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'purple'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fill with gradient")]),t._v("\nctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFillStyle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("p",[n("img",{attrs:{src:"data:image/png;base64,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",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);