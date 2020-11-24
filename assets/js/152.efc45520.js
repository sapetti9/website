(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{513:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"working-with-local-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-local-data"}},[a._v("#")]),a._v(" Working with Local Data")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://colab.research.google.com/drive/1LiXVkhMg_pD-HI4ANl11tkpZtlba8Q6Z",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"}}),s("OutboundLink")],1)]),a._v(" "),s("blockquote",[s("p",[a._v("Status: "),s("strong",[a._v("CORE / STABLE")])])]),a._v(" "),s("p",[a._v("You can read and write files locally with Frictionless. It’s basic functionality.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" frictionless\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -q -O table.csv https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/table.csv\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" table.csv\n")])])]),s("pre",[s("code",[a._v("id,name\n1,english\n2,中国人\n")])]),a._v(" "),s("h2",{attrs:{id:"reading-local-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-local-data"}},[a._v("#")]),a._v(" Reading Local Data")]),a._v(" "),s("p",[a._v("You can read using "),s("code",[a._v("Package/Resource")]),a._v(" or "),s("code",[a._v("Table")]),a._v(" API, for example:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" frictionless "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Resource\n\nresource "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'table.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("read_rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("pre",[s("code",[a._v("[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '中国人')])]\n")])]),a._v(" "),s("h2",{attrs:{id:"writing-local-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-local-data"}},[a._v("#")]),a._v(" Writing Local Data")]),a._v(" "),s("p",[a._v("The same is actual for writing:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" frictionless "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Resource\n\nresource "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'english'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'german'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nresource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'table.new.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("pre",[s("code",[a._v("'table.new.csv'\n")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("cat table.new.csv\n")])])]),s("pre",[s("code",[a._v("id,name\n1,english\n2,german\n")])]),a._v(" "),s("h2",{attrs:{id:"configuring-local-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-local-data"}},[a._v("#")]),a._v(" Configuring Local Data")]),a._v(" "),s("blockquote",[s("p",[a._v("Not supported")])])])}),[],!1,null,null,null);t.default=e.exports}}]);