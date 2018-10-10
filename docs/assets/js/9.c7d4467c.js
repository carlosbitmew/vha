(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{167:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("该项目基于以下开源技术构建：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("在开始使用本主题之前，请确保安装有以上环境。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/sqrthree/vuepress-theme-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-api"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("如果你已经有了 "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v(" 环境，可以通过以下命令安装 "),s("code",[t._v("VuePress")]),t._v(" 和 "),s("code",[t._v("vuepress-theme-api")]),t._v("。")]),t._v(" "),t._m(3),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("本地依赖")]),t._v(" "),s("p",[t._v("如果你想在一个现有项目中使用 "),s("code",[t._v("VuePress")]),t._v("，同时想要在该项目中管理文档，则应该将 "),s("code",[t._v("VuePress")]),t._v(" 安装为本地依赖。需要注意的是，你同时需要将 "),s("a",{attrs:{href:"https://github.com/sqrthree/vuepress-theme-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-api"),s("OutboundLink")],1),t._v(" 安装为本地依赖。")])]),t._v(" "),t._m(4),t._v(" "),s("p",[s("code",[t._v("VuePress")]),t._v(" 默认情况下将会使用自带的默认主题，因此我们需要在 "),s("code",[t._v(".vuepress/config.js")]),t._v(" 中配置 theme 选项指定为 "),s("code",[t._v("vuepress-theme-api")]),t._v(" 来应用主题。更多详情请参考 "),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/custom-themes.html#%E4%BD%BF%E7%94%A8%E6%9D%A5%E8%87%AA-npm-%E7%9A%84%E4%B8%BB%E9%A2%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress | 自定义主题"),s("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"起步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起步","aria-hidden":"true"}},[this._v("#")]),this._v(" 起步")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"构建于"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建于","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建于")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"环境依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境依赖")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# 安装 vuepress")]),t._v("\nyarn global add vuepress "),s("span",{attrs:{class:"token comment"}},[t._v("# OR npm install -g vuepress")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# 安装主题")]),t._v("\nyarn global add vuepress-theme-api "),s("span",{attrs:{class:"token comment"}},[t._v("# OR npm install -g vuepress-theme-api")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"应用主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 应用主题")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Hello, World.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'📦 🎨 A api-friendly theme for VuePress.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  theme"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'api'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.options.__file="README.md";e.default=a.exports}}]);