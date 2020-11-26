(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{516:function(t,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"working-with-local-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-local-data"}},[t._v("#")]),t._v(" Working with Local Data")]),t._v(" "),s("blockquote",[s("p",[t._v("Status: "),s("strong",[t._v("STABLE")])])]),t._v(" "),s("p",[t._v("You can read and write files locally with Frictionless. It’s basic functionality.")]),t._v(" "),s("h2",{attrs:{id:"reading-local-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-local-data"}},[t._v("#")]),t._v(" Reading Local Data")]),t._v(" "),s("p",[t._v("You can read using "),s("code",[t._v("Package/Resource")]),t._v(" or "),s("code",[t._v("Table")]),t._v(" API, for example:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n\nresource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data/table.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("pre",[s("code",[t._v("[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '中国人')])]\n")])]),t._v(" "),s("h2",{attrs:{id:"writing-local-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-local-data"}},[t._v("#")]),t._v(" Writing Local Data")]),t._v(" "),s("p",[t._v("The same is actual for writing:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n\nresource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'english'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'german'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tmp/table.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("pre",[s("code",[t._v("'tmp/table.csv'\n")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cat tmp/table.csv\n")])])]),s("h2",{attrs:{id:"configuring-local-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-local-data"}},[t._v("#")]),t._v(" Configuring Local Data")]),t._v(" "),s("blockquote",[s("p",[t._v("Not supported")])])])}),[],!1,null,null,null);a.default=r.exports}}]);