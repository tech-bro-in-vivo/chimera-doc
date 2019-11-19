(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{660:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"应用资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用资源"}},[a._v("#")]),a._v(" 应用资源")]),a._v(" "),t("p",[a._v("文件组织结构")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("├── app.json\n├── app.js\n├── pages\n│   ├── page1\n│   │   ├── page1.qxml\n│   │   ├── page1.css\n│   │   ├── page1.json\n│   │   └── page1.js\n│   └── page2\n│       ├── page2.qxml\n│       ├── page2.css\n│       ├── page2.json\n│       └── page2.js\n├── sign\n│   ├── debug\n│   │   ├── certificate.pem\n│   │   └── private.pem\n│   └── release\n│       ├── certificate.pem\n│       └── private.pem\n└── project.config.json\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br")])]),t("p",[a._v("以上的其中 "),t("code",[a._v("pages")]),a._v(" 仅是推荐写法，无特殊限制")]),a._v(" "),t("h2",{attrs:{id:"文件存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件存储"}},[a._v("#")]),a._v(" 文件存储")]),a._v(" "),t("p",[a._v("在应用平台中是按分区来存储文件的，目前支持以下分区")]),a._v(" "),t("ol",[t("li",[a._v("Cache，一般用于存储缓存文件，比如通过 fetch 接口下载的文件会存储在该分区中，该分区中的文件可能因存储空间不够被系统删除")]),a._v(" "),t("li",[a._v("Files，一般用于存储比较小的永久文件，该分区中的文件由应用自己管理")]),a._v(" "),t("li",[a._v("Mass，一般用于存储比较大的文件，但该分区并不保证一直可用")]),a._v(" "),t("li",[a._v("Temp，表示从外部映射过来的临时文件，出于安全性考虑，临时文件是只读的，并且只能通过调用特定的 API 获取，比如 media.pickVideo 方法。另外临时文件的访问是临时的，应用重启后无法访问到临时文件，需要通过特定 API 重新获取。")])]),a._v(" "),t("p",[a._v("另外应用资源也作为一个特殊的只读分区进行处理。")]),a._v(" "),t("h2",{attrs:{id:"uri"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[a._v("#")]),a._v(" URI")]),a._v(" "),t("p",[a._v("URI 用于标识应用资源和文件。")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("资源类型")]),a._v(" "),t("th",[a._v("URI")]),a._v(" "),t("th",[a._v("只读")]),a._v(" "),t("th",[a._v("示例")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("应用资源")]),a._v(" "),t("td",[a._v("/path")]),a._v(" "),t("td",[a._v("是")]),a._v(" "),t("td",[a._v("/Common/header.png")]),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("Cache")]),a._v(" "),t("td",[a._v("internal://cache/path")]),a._v(" "),t("td",[a._v("否")]),a._v(" "),t("td",[a._v("internal://cache/fetch-123456.png")]),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("Files")]),a._v(" "),t("td",[a._v("internal://files/path")]),a._v(" "),t("td",[a._v("否")]),a._v(" "),t("td",[a._v("internal://files/image/demo.png")]),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("Mass")]),a._v(" "),t("td",[a._v("internal://mass/path")]),a._v(" "),t("td",[a._v("否")]),a._v(" "),t("td",[a._v("internal://mass/video/demo.mp4")]),a._v(" "),t("td",[a._v("qa.saveFile 保存为 Mass 资源类型")])]),a._v(" "),t("tr",[t("td",[a._v("Temp")]),a._v(" "),t("td",[a._v("internal://tmp/path")]),a._v(" "),t("td",[a._v("是")]),a._v(" "),t("td",[a._v("internal://tmp/xxxxx")]),a._v(" "),t("td",[a._v("由系统动态生成")])])])]),a._v(" "),t("p",[a._v("URI 允许的字符是"),t("code",[a._v("0-9a-zA-Z_-./%:")]),a._v("(不包含引号)，URI 中不能出现"),t("code",[a._v("..")]),a._v("，URI 支持目录结构，目录由斜线'/'分隔。")]),a._v(" "),t("p",[a._v("internal URI 表示的是应用私有文件，即在指定 internal URI 时，无需指定应用标识，同一个 internal URI 对于不同的应用会指向不同的文件。")]),a._v(" "),t("h2",{attrs:{id:"qa-env-user-data-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qa-env-user-data-path"}},[a._v("#")]),a._v(" "),t("code",[a._v("qa.env.USER_DATA_PATH")])]),a._v(" "),t("p",[a._v("在开发过程中，为了方便，可以直接使用此路径用于表示用户存储区，该区域位于 Mass 分区下。")]),a._v(" "),t("h2",{attrs:{id:"资源和文件访问规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源和文件访问规则"}},[a._v("#")]),a._v(" 资源和文件访问规则")]),a._v(" "),t("p",[a._v('应用资源路径分为绝对路径和相对路径，以"/"开头的路径表示绝对路径，比如 /Common/a.png，不以"/"开头的路径是相对路径，比如 a.png 和 ../Common/a.png 等。')]),a._v(" "),t("p",[a._v("应用资源文件分为代码文件和资源文件，代码文件是指 .js/.css/.ux 等包含代码的文件，其他文件则是资源文件，这类文件一般只当作数据来使用，比如图片、视频等。")])])}),[],!1,null,null,null);s.default=n.exports}}]);