(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{638:function(v,t,_){"use strict";_.r(t);var d=_(3),e=Object(d.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"movable-view"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#movable-view"}},[v._v("#")]),v._v(" movable-view")]),v._v(" "),_("p",[v._v("在页面中可以通过拖拽滑动的可移动的视图容器。"),_("router-link",{attrs:{to:"/component/movable-view.html"}},[v._v("movable-view")]),v._v("必须在 "),_("router-link",{attrs:{to:"/component/movable-area.html"}},[v._v("movable-area")]),v._v(" 组件中，并且必须是直接子节点，否则不能移动。")],1),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("属性")]),v._v(" "),_("th",[v._v("类型")]),v._v(" "),_("th",[_("div",{staticStyle:{width:"50px"}},[v._v("默认值 ")])]),v._v(" "),_("th",[_("div",{staticStyle:{width:"50px"}},[v._v("必填 ")])]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("direction")]),v._v(" "),_("td",[v._v("string")]),v._v(" "),_("td",[v._v("none")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("movable-view 的移动方向，属性值有 all、vertical、horizontal、none")])]),v._v(" "),_("tr",[_("td",[v._v("inertia")]),v._v(" "),_("td",[v._v("boolean")]),v._v(" "),_("td",[v._v("false")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("movable-view 是否带有惯性")])]),v._v(" "),_("tr",[_("td",[v._v("out-of-bounds")]),v._v(" "),_("td",[v._v("boolean")]),v._v(" "),_("td",[v._v("false")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("超过可移动区域后，movable-view 是否还可以移动")])]),v._v(" "),_("tr",[_("td",[v._v("x")]),v._v(" "),_("td",[v._v("number")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("定义 x 轴方向的偏移，如果 x 的值不在可移动范围内，会自动移动到可移动范围；改变 x 的值会触发动画")])]),v._v(" "),_("tr",[_("td",[v._v("y")]),v._v(" "),_("td",[v._v("number")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("定义 y 轴方向的偏移，如果 y 的值不在可移动范围内，会自动移动到可移动范围；改变 y 的值会触发动画")])]),v._v(" "),_("tr",[_("td",[v._v("damping")]),v._v(" "),_("td",[v._v("number")]),v._v(" "),_("td",[v._v("20")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画，值越大移动越快")])]),v._v(" "),_("tr",[_("td",[v._v("friction")]),v._v(" "),_("td",[v._v("number")]),v._v(" "),_("td",[v._v("2")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于 0，否则会被设置成默认值")])]),v._v(" "),_("tr",[_("td",[v._v("disabled")]),v._v(" "),_("td",[v._v("boolean")]),v._v(" "),_("td",[v._v("false")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("是否禁用")])]),v._v(" "),_("tr",[_("td",[v._v("scale")]),v._v(" "),_("td",[v._v("boolean")]),v._v(" "),_("td",[v._v("false")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("是否支持双指缩放，默认缩放手势生效区域是在 movable-view 内")])]),v._v(" "),_("tr",[_("td",[v._v("scale-min")]),v._v(" "),_("td",[v._v("number")]),v._v(" "),_("td",[v._v("0.5")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("定义缩放倍数最小值")])]),v._v(" "),_("tr",[_("td",[v._v("scale-max")]),v._v(" "),_("td",[v._v("number")]),v._v(" "),_("td",[v._v("10")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("定义缩放倍数最大值")])]),v._v(" "),_("tr",[_("td",[v._v("scale-value")]),v._v(" "),_("td",[v._v("number")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("定义缩放倍数，取值范围为 0.5 - 10")])]),v._v(" "),_("tr",[_("td",[v._v("animation")]),v._v(" "),_("td",[v._v("boolean")]),v._v(" "),_("td",[v._v("true")]),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("是否使用动画")])]),v._v(" "),_("tr",[_("td",[v._v("bindchange")]),v._v(" "),_("td",[v._v("eventhandle")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("拖动过程中触发的事件，event.detail = {x, y, source}")])]),v._v(" "),_("tr",[_("td",[v._v("bindscale")]),v._v(" "),_("td",[v._v("eventhandle")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("缩放过程中触发的事件，event.detail = {x, y, scale}")])]),v._v(" "),_("tr",[_("td",[v._v("htouchmove")]),v._v(" "),_("td",[v._v("eventhandle")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("初次手指触摸后移动为横向的移动时触发，如果 catch 此事件，则意味着 touchmove 事件也被 catch")])]),v._v(" "),_("tr",[_("td",[v._v("vtouchmove")]),v._v(" "),_("td",[v._v("eventhandle")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("否")]),v._v(" "),_("td",[v._v("初次手指触摸后移动为纵向的移动时触发，如果 catch 此事件，则意味着 touchmove 事件也被 catch")])])])]),v._v(" "),_("h2",{attrs:{id:"bindchange-返回的-source-表示产生移动的原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bindchange-返回的-source-表示产生移动的原因"}},[v._v("#")]),v._v(" "),_("code",[v._v("bindchange")]),v._v(" 返回的 "),_("code",[v._v("source")]),v._v(" 表示产生移动的原因")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("值")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("touch")]),v._v(" "),_("td",[v._v("拖动")])]),v._v(" "),_("tr",[_("td",[v._v("touch-out-of-bounds")]),v._v(" "),_("td",[v._v("超出移动范围")])]),v._v(" "),_("tr",[_("td",[v._v("out-of-bounds")]),v._v(" "),_("td",[v._v("超出移动范围后的回弹")])]),v._v(" "),_("tr",[_("td",[v._v("friction")]),v._v(" "),_("td",[v._v("惯性")])]),v._v(" "),_("tr",[_("td",[v._v("空字符串")]),v._v(" "),_("td",[v._v("setData")])])])]),v._v(" "),_("h2",{attrs:{id:"bug-tip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bug-tip"}},[v._v("#")]),v._v(" Bug & Tip")]),v._v(" "),_("div",{staticClass:"custom-block warning"},[_("ul",[_("li",[v._v("movable-view 必须设置 width 和 height 属性，不设置默认为 10px")]),v._v(" "),_("li",[v._v("movable-view 默认为绝对定位，top 和 left 属性为 0px")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);