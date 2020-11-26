(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{497:function(e,a,t){"use strict";t.r(a);var n=t(1),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),t("p",[e._v("Let’s get started with Frictionless! We will learn how to install and use the framework. The simple example below will showcase the framework’s basic functionality.")]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("blockquote",[t("p",[e._v("Versioning follows the "),t("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SemVer Standard"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("! pip install frictionless\n# pip install frictionless[sql] - to install a core plugin\n")])])]),t("p",[e._v("By default, the framework comes with the support of CSV, Excel, and JSON formats. Please use the command above to add support for SQL, Pandas, Html, and others. Usually, you don’t need to think about it in advance - frictionless will show a useful error on a missing plugin with installation instruction.")]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("The framework can be used:")]),e._v(" "),t("ul",[t("li",[e._v("as a Python library")]),e._v(" "),t("li",[e._v("as a command-line interface")]),e._v(" "),t("li",[e._v("as a restful API server")])]),e._v(" "),t("p",[e._v("For example, all the examples below do the same thing:")]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" frictionless "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" extract\n\nrows "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" extract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'data/table.csv'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# CLI: $ frictionless extract data/table.csv")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# API: [POST] /extract {\"source': 'data/table.csv\"}")]),e._v("\n")])])]),t("p",[e._v("All these interfaces are close as much as possible regarding naming and the way you interact with them. Usually, it’s straightforward to translate e.g., Python code to a command-line call. Frictionless provides code completion for Python and command-line, which should help to get useful hints in real-time.")]),e._v(" "),t("p",[e._v("Arguments follow this naming rule:")]),e._v(" "),t("ul",[t("li",[e._v("for Python interfaces, they are lowercased, e.g. "),t("code",[e._v("missing_values")])]),e._v(" "),t("li",[e._v("within dictionaries or JSON objects they are camel-cased, e.g. "),t("code",[e._v("missingValues")])]),e._v(" "),t("li",[e._v("in a command line they use dashes, e.g. "),t("code",[e._v("--missing-values")])])]),e._v(" "),t("p",[e._v("To get documentation for a command-line interface just use the "),t("code",[e._v("--help")]),e._v(" flag:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ frictionless --help\n$ frictionless describe --help\n$ frictionless extract --help\n$ frictionless validate --help\n$ frictionless transform --help\n")])])]),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("blockquote",[t("p",[e._v("All the examples use the data folder from this repository")])]),e._v(" "),t("p",[e._v("We will take a very dirty data file:")]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("! cat invalid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("csv\n")])])]),t("pre",[t("code",[e._v("cat: invalid.csv: No such file or directory\n")])]),e._v(" "),t("p",[e._v("Firt of all, let’s infer the metadata. We can save and edit it to provide useful information about the table:")]),e._v(" "),t("blockquote",[t("p",[e._v("This output is in "),t("a",{attrs:{href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("YAML"),t("OutboundLink")],1),e._v(", it is a default Frictionless output format.")])]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("! frictionless describe data"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("invalid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("csv\n")])])]),t("pre",[t("code",[e._v("---\nmetadata: data/invalid.csv\n---\n\ncompression: 'no'\ncompressionPath: ''\ncontrol:\n  newline: ''\ndialect: {}\nencoding: utf-8\nformat: csv\nhashing: md5\nname: invalid\npath: data/invalid.csv\nprofile: tabular-data-resource\nquery: {}\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: name\n      type: string\n    - name: field3\n      type: integer\n    - name: name2\n      type: integer\nscheme: file\nstats:\n  bytes: 50\n  fields: 4\n  hash: 8c73c3d9d59088dcb2508e0b348bf8a8\n  rows: 4\n")])]),e._v(" "),t("p",[e._v("Secondly, we can extract a normalized data. It conforms to the inferred schema from above e.g., the dimension is fixed, and bad cells are omitted:")]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("! frictionless extract data"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("invalid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("csv\n")])])]),t("pre",[t("code",[e._v("---\ndata: data/invalid.csv\n---\n\n====  =======  ======  =====\nid    name     field3  name2\n====  =======  ======  =====\n   1  english  None    None\n   1  english  None    None\nNone  None     None    None\n   2  german        1      2\n====  =======  ======  =====\n")])]),e._v(" "),t("p",[e._v("Last but not least, let’s get a validation report. This report will help us to fix all these errors as comprehensive information is provided for every tabular problem:")]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("! frictionless validate data"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("invalid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("csv\n")])])]),t("pre",[t("code",[e._v('---\ninvalid: data/invalid.csv\n---\n\n====  =====  ================  ================================================================================================\nrow   field  code              message\n====  =====  ================  ================================================================================================\nNone      3  blank-header      Header in field at position "3" is blank\nNone      4  duplicate-header  Header "name" in field at position "4" is duplicated to header in another field: at position "2"\n   2      3  missing-cell      Row at position "2" has a missing cell in field "field3" at position "3"\n   2      4  missing-cell      Row at position "2" has a missing cell in field "name2" at position "4"\n   3      3  missing-cell      Row at position "3" has a missing cell in field "field3" at position "3"\n   3      4  missing-cell      Row at position "3" has a missing cell in field "name2" at position "4"\n   4  None   blank-row         Row at position "4" is completely blank\n   5      5  extra-cell        Row at position "5" has an extra value in field at position "5"\n====  =====  ================  ================================================================================================\n')])]),e._v(" "),t("p",[e._v("Now having all this information:")]),e._v(" "),t("ul",[t("li",[e._v("we can clean up the table to ensure the data quality")]),e._v(" "),t("li",[e._v("we can use the metadata to describe and share the dataset")]),e._v(" "),t("li",[e._v("we can include the validation into our workflow to guarantee the validity")]),e._v(" "),t("li",[e._v("and much more: don’t hesitate and read the following documentation!")])])])}),[],!1,null,null,null);a.default=s.exports}}]);