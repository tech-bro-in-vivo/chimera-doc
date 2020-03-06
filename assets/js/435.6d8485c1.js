(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{689:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("本教程用于帮助开发者在快应用中使用微信支付。")]),t._v(" "),s("p",[t._v("微信的 "),s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("支付产品"),s("OutboundLink")],1),t._v(" 有很多种，快应用目前支持其中的 "),s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=8_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("APP支付"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("H5支付"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("如果开发者此前只使用过[小程序支付]，那么还需要到微信开发平台创建新的[移动应用]或者[网站应用]，开通新应用的微信支付能力，并开发好对应的后台接口方可使用。")]),t._v(" "),s("p",[s("strong",[t._v("注意：快应用转换工具不支持调起小程序支付。")])]),t._v(" "),s("h2",{attrs:{id:"_1-快应用接入微信app支付"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-快应用接入微信app支付"}},[t._v("#")]),t._v(" 1. 快应用接入微信APP支付")]),t._v(" "),s("h3",{attrs:{id:"_1-1-快应用接入微信app支付的前期准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-快应用接入微信app支付的前期准备"}},[t._v("#")]),t._v(" 1.1 快应用接入微信APP支付的前期准备")]),t._v(" "),s("p",[t._v("如果开发者熟悉快应用签名文件，公私钥对，base64，MD5等概念的话，可以直接跳过本小节。")]),t._v(" "),s("p",[t._v("后面接入过程会用到的信息如下：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("快应用的包名")])]),t._v(" "),s("li",[s("strong",[t._v("快应用签名文件中公钥的base64格式字符串")])]),t._v(" "),s("li",[s("strong",[t._v("快应用签名文件中公钥的md5")])])]),t._v(" "),s("h4",{attrs:{id:"_1-1-1-快应用签名文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-快应用签名文件"}},[t._v("#")]),t._v(" 1.1.1 快应用签名文件")]),t._v(" "),s("p",[t._v("快应用项目工程中sign/release目录下的两个文件就是用于签名正式版本快应用的签名文件。")]),t._v(" "),s("p",[t._v("如果该目录下没有文件，可以通过 "),s("a",{attrs:{href:"https://www.quickapp.cn/docCenter/IDEPublicity",target:"_blank",rel:"noopener noreferrer"}},[t._v("快应用开发工具"),s("OutboundLink")],1),t._v(" 创建新的签名：")]),t._v(" "),s("ul",[s("li",[t._v("单击选项[Hap]")]),t._v(" "),s("li",[t._v("选择[生成证书]")]),t._v(" "),s("li",[t._v("输入必要的信息选择生成即可")])]),t._v(" "),s("h4",{attrs:{id:"_1-1-2-快应用签名文件中公钥的base64格式字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-快应用签名文件中公钥的base64格式字符串"}},[t._v("#")]),t._v(" 1.1.2 快应用签名文件中公钥的base64格式字符串")]),t._v(" "),s("p",[t._v("sign/release目录下的certificate.pem就是签名文件的公钥，文本方式打开该文件，其中-----BEGIN CERTIFICATE-----和-----END CERTIFICATE-----之间的内容便是公钥的base64格式字符串。")]),t._v(" "),s("h4",{attrs:{id:"_1-1-3-快应用签名文件中公钥的md5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-快应用签名文件中公钥的md5"}},[t._v("#")]),t._v(" 1.1.3 快应用签名文件中公钥的md5")]),t._v(" "),s("p",[t._v("注意这里的md5并不是直接对certificate.pem文件做md5。")]),t._v(" "),s("p",[t._v("公钥md5的生成方法：")]),t._v(" "),s("ul",[s("li",[t._v("确保sign/release下面已有签名文件")]),t._v(" "),s("li",[t._v("单击选项[Hap]")]),t._v(" "),s("li",[t._v("选择[由证书生成MD5]")]),t._v(" "),s("li",[t._v("md5生成之后会自动复制到剪贴板，并且在[输出]窗口中打印出来")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-申请微信app支付"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-申请微信app支付"}},[t._v("#")]),t._v(" 1.2 申请微信APP支付")]),t._v(" "),s("p",[t._v("请按照"),s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=3_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信APP支付文档"),s("OutboundLink")],1),t._v("指引，微信公众平台或开放平台提交微信支付申请。")]),t._v(" "),s("ul",[s("li",[t._v("在微信开放平台选择[移动应用]，然后选择[创建移动应用]")]),t._v(" "),s("li",[t._v("按要求填写相应的信息")]),t._v(" "),s("li",[t._v("两个关键信息需要填写正确：\n"),s("ul",[s("li",[t._v("应用包名填写[快应用的包名]")]),t._v(" "),s("li",[t._v("应用签名填写[快应用签名文件中公钥的md5]")])])]),t._v(" "),s("li",[t._v("创建成功申请开通微信支付能力")])]),t._v(" "),s("p",[t._v("微信后台开通微信支付功能之后，请按照"),s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信APP支付文档"),s("OutboundLink")],1),t._v("，开发对应的后台接口。")]),t._v(" "),s("h3",{attrs:{id:"_1-3-快应用配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-快应用配置文件"}},[t._v("#")]),t._v(" 1.3 快应用配置文件")]),t._v(" "),s("p",[t._v("快应用接入APP支付需要配置参数：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 快应用转换工具在 app.json文件中配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wxpay"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"package"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.your.package"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sign"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxxx"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("配置参数说明")]),t._v(" "),s("ul",[s("li",[t._v("package ：快应用的包名")]),t._v(" "),s("li",[t._v("sign : 快应用签名文件中公钥的base64格式字符串，注意复制出来的时候需要把换行去掉，变成单行字符串")])]),t._v(" "),s("h3",{attrs:{id:"_1-4-接口调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-接口调用"}},[t._v("#")]),t._v(" 1.4 接口调用")]),t._v(" "),s("p",[t._v("参考"),s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信APP支付文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("以及两个接口文档：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.hellohub.cn/api/open-api/wxpay/qa.getWxPaymentType.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("qa.getWxPaymentType()"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.hellohub.cn/api/open-api/wxpay/qa.requestWxPayment.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("qa.requestWxPayment()"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" payType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWxPaymentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'APP'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  qa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestWxPayment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//微信 app支付的prepayId")]),t._v("\n    prepayid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your order prepayid,eg: wx20170101abcdef1234567890'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    extra"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      app_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your app_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      partner_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your partner_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      package_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your package_value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nonce_str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your nonce_str'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      time_stamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your time_stamp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      order_sign"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your order sign'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ret")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("WX PAY failed, code = ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errCode"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("cancel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WX PAY cancelled by user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WX PAY success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br")])]),s("h2",{attrs:{id:"_2-快应用接入微信h5支付"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-快应用接入微信h5支付"}},[t._v("#")]),t._v(" 2. 快应用接入微信H5支付")]),t._v(" "),s("p",[t._v("快应用有两种接入微信H5支付的方式，目前只推荐使用referer方式，不再介绍中间页方式。如果有已按照中间页方式接入的开发者，建议转成referer方式。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-快应用接入微信h5支付的前期准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-快应用接入微信h5支付的前期准备"}},[t._v("#")]),t._v(" 2.1 快应用接入微信H5支付的前期准备")]),t._v(" "),s("p",[t._v("只需要准备[用户下单的网页域名]，也就是用户最终发起支付时所在的网页域名")]),t._v(" "),s("h3",{attrs:{id:"_2-2-申请微信h5支付"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-申请微信h5支付"}},[t._v("#")]),t._v(" 2.2 申请微信H5支付")]),t._v(" "),s("p",[t._v("请按照"),s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_20&index=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信H5支付文档"),s("OutboundLink")],1),t._v("指引，微信公众平台或开放平台提交微信支付申请。")]),t._v(" "),s("ul",[s("li",[t._v("在微信开放平台选择[H5应用]，然后选择[创建网站应用]")]),t._v(" "),s("li",[t._v("按要求填写相应的信息")]),t._v(" "),s("li",[t._v("其中关键信息需要填写正确：\n"),s("ul",[s("li",[t._v("授权域名填写[用户下单的网页域名]")])])]),t._v(" "),s("li",[t._v("创建成功申请开通微信支付能力")])]),t._v(" "),s("p",[t._v("微信后台开通微信支付功能之后，请按照"),s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_4",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信H5支付文档"),s("OutboundLink")],1),t._v("，开发对应的后台接口。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-调用开发接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-调用开发接口"}},[t._v("#")]),t._v(" 2.3 调用开发接口")]),t._v(" "),s("p",[t._v("快应用接入微信H5支付不需要配置app.json参数。")]),t._v(" "),s("p",[t._v("调用接口的时候，referer填写的是在微信后台设置的[网页域名]（商户平台--“产品中心”--“开发配置”）。")]),t._v(" "),s("p",[t._v("参考 "),s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_4",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信H5支付文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("以及两个接口文档：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.hellohub.cn/api/open-api/wxpay/qa.getWxPaymentType.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("qa.getWxPaymentType()"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.hellohub.cn/api/open-api/wxpay/qa.requestWxPayment.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("qa.requestWxPayment()"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" payType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWxPaymentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MWEB'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  qa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestWxPayment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信网页支付的prepayId")]),t._v("\n    prepayid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your order prepayid,eg: wx20170101abcdef1234567890'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    referer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your host name configured in wechat, eg: https://www.quickapp.cn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    extra"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要将微信返回的MWEB_URL地址配置到这里")]),t._v("\n      mweb_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://wx.tenpay.com/cgi-bin/mmpayweb-bin'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ret")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("WX H5 PAY handling fail, code = ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errCode"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("cancel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WX H5 PAY handling cancel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//H5方式下，支付成功的回调仅仅只是指将订单递交给微信，并不意味着支付已经成功完成")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WX H5 PAY handling success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("h2",{attrs:{id:"_3-faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-faq"}},[t._v("#")]),t._v(" 3. FAQ")]),t._v(" "),s("h3",{attrs:{id:"问题-1-：选择微信app支付还是微信h5支付？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-1-：选择微信app支付还是微信h5支付？"}},[t._v("#")]),t._v(" 问题 1 ：选择微信APP支付还是微信H5支付？")]),t._v(" "),s("p",[t._v("微信APP支付更安全，也是微信在安卓手机上推荐的使用方式。")]),t._v(" "),s("p",[t._v("但不是所有支持快应用的设备都能支持APP支付，所以遇到这种设备我们也可以使用微信H5支付。")]),t._v(" "),s("p",[t._v("为了覆盖更多的用户，建议同时支持微信APP支付和微信H5支付。")]),t._v(" "),s("h3",{attrs:{id:"问题-2-：快应用是否支持微信小程序支付？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-2-：快应用是否支持微信小程序支付？"}},[t._v("#")]),t._v(" 问题 2 ：快应用是否支持微信小程序支付？")]),t._v(" "),s("p",[t._v("不支持的。")]),t._v(" "),s("p",[t._v("已有微信小程序支付的开发者，需要申请微信APP支付或者微信H5支付才能在快应用上使用微信支付能力。")]),t._v(" "),s("p",[t._v("ps. 微信小程序开发者在使用转换工具将小程序转换成快应用时，需要另外接入微信APP支付/微信H5支付。")]),t._v(" "),s("h3",{attrs:{id:"问题-3-：开发者是否可以指定使用微信app支付或者微信h5支付？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-3-：开发者是否可以指定使用微信app支付或者微信h5支付？"}},[t._v("#")]),t._v(" 问题 3 ：开发者是否可以指定使用微信APP支付或者微信H5支付？")]),t._v(" "),s("p",[t._v("开发者并不能指定使用那种微信支付方式，因为不是所有的设备都支持微信APP支付。")]),t._v(" "),s("p",[t._v("系统在运行时会确定当前应该使用那种微信支付方式。")]),t._v(" "),s("p",[t._v("开发者需要通过获取支付类型的接口来判断当前应该使用哪种微信支付产品，从而调用不同的支付代码（APP支付 or H5支付）:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.hellohub.cn/api/open-api/wxpay/qa.getWxPaymentType.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("qa.getWxPaymentType()"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"问题-4-：快应用在运行时如何选择微信app支付或者微信h5支付？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-4-：快应用在运行时如何选择微信app支付或者微信h5支付？"}},[t._v("#")]),t._v(" 问题 4 ：快应用在运行时如何选择微信APP支付或者微信H5支付？")]),t._v(" "),s("p",[t._v("微信APP支付需要设备框架支持，支持快应用的设备分成两种：")]),t._v(" "),s("ul",[s("li",[t._v("同时支持微信APP支付和微信H5支付的设备")]),t._v(" "),s("li",[t._v("只支持微信H5支付的设备")])]),t._v(" "),s("p",[t._v("快应用根据app.json是否配置微信APP支付参数，可以分成两种类型：")]),t._v(" "),s("ul",[s("li",[t._v("在app.json中同时配置package和sign参数")]),t._v(" "),s("li",[t._v("没有配置package和sign参数")])]),t._v(" "),s("p",[t._v("实际上")]),t._v(" "),s("p",[t._v("如果设备支持微信APP支付，并且快应用接入了微信APP支付的情况下，系统会优先选择APP支付。")]),t._v(" "),s("p",[t._v("下面是不同设备环境下，系统接口返回的微信支付类型（APP指微信APP支付，MWEB指微信H5支付）的对应关系：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("快应用接入方式")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("设备同时支持微信APP支付和微信H5支付")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("设备只支持微信H5支付")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("在app.json中同时配置package和sign参数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("APP")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("MWEB")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("没有配置package和sign参数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("MWEB")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("MWEB")])])])]),t._v(" "),s("h3",{attrs:{id:"其它常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它常见问题"}},[t._v("#")]),t._v(" 其它常见问题")]),t._v(" "),s("p",[t._v("大部分问题都可以在微信的官方文档上找到原因，具体参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_4",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信H5支付 开发步骤&常见问题"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=4_3",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信APP支付 接口安全规范"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("另外论坛上也有部分总结供参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://bbs.quickapp.cn/forum.php?mod=viewthread&tid=1340&highlight=%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信支付接入问题解答集中帖"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);