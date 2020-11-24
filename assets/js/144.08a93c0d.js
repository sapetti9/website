(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{505:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"working-with-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-csv"}},[t._v("#")]),t._v(" Working with CSV")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://colab.research.google.com/drive/1AcrdANwgw_wEhqI9ayf4ihJo24LXilFG",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Status: "),a("strong",[t._v("CORE / STABLE")])])]),t._v(" "),a("p",[t._v("CSV is a file format which you can you in Frictionless for reading and writing. Arguable it’s the main Open Data format so it’s supported very well in Frictionless.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" frictionless\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -q -O table.csv https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/table.csv\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" table.csv\n")])])]),a("pre",[a("code",[t._v("id,name\n1,english\n2,中国人\n")])]),t._v(" "),a("h2",{attrs:{id:"reading-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-csv"}},[t._v("#")]),t._v(" Reading CSV")]),t._v(" "),a("p",[t._v("You can read CSV using "),a("code",[t._v("Package/Resource")]),t._v(" or "),a("code",[t._v("Table")]),t._v(" API, for example:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n\nresource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("pre",[a("code",[t._v("[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '中国人')])]\n")])]),t._v(" "),a("h2",{attrs:{id:"writing-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-csv"}},[t._v("#")]),t._v(" Writing CSV")]),t._v(" "),a("p",[t._v("The same is actual for writing CSV:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n\nresource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'english'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'german'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table.new.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("pre",[a("code",[t._v("'table.new.csv'\n")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cat table.new.csv\n")])])]),a("pre",[a("code",[t._v("id,name\n1,english\n2,german\n")])]),t._v(" "),a("h2",{attrs:{id:"configuring-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-csv"}},[t._v("#")]),t._v(" Configuring CSV")]),t._v(" "),a("p",[t._v("There is a dialect to configure how Frictionless read and write files in this format. For example:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dialects\n\nresource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'english'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'german'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table.new.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dialect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dialects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CsvDialect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delimiter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("';'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("pre",[a("code",[t._v("'table.new.csv'\n")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cat table.new.csv\n")])])]),a("pre",[a("code",[t._v("id;name\n1;english\n2;german\n")])]),t._v(" "),a("p",[t._v("References:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/formats-reference/#csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSV Dialect"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);