(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{503:function(t,e,r){"use strict";r.r(e);var n=r(1),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"frictionless-framework"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frictionless-framework"}},[t._v("#")]),t._v(" Frictionless Framework")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://travis-ci.org/frictionlessdata/frictionless-py",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/travis/frictionlessdata/frictionless-py/master.svg",alt:"Travis"}}),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://coveralls.io/r/frictionlessdata/frictionless-py?branch=master",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"http://img.shields.io/coveralls/frictionlessdata/frictionless-py.svg?branch=master",alt:"Coveralls"}}),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://pypi.python.org/pypi/frictionless",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/pypi/v/frictionless.svg",alt:"PyPi"}}),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/github-master-brightgreen",alt:"Github"}}),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://discord.com/channels/695635777199145130/695635777199145133",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/chat-discord-brightgreen",alt:"Discord"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Frictionless is a framework to describe, extract, validate, and transform tabular data. It supports a great deal of data sources and formats, as well as provides popular platforms integrations. The framework is powered by the lightweight yet comprehensive "),r("a",{attrs:{href:"https://specs.frictionlessdata.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frictionless Data Specifications"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("[Important Notice]")]),t._v(" We have renamed "),r("code",[t._v("goodtables")]),t._v(" to "),r("code",[t._v("frictionless")]),t._v(" since version 3. The framework got various improvements and was extended to be a complete data solution. The change in not breaking for the existing software so no actions are required. Please read the "),r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/migration-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migration Guide"),r("OutboundLink")],1),t._v(" from "),r("code",[t._v("goodtables")]),t._v(" to Frictionless Framework.")]),t._v(" "),r("ul",[r("li",[t._v("we continue to bug-fix "),r("code",[t._v("goodtables@2.x")]),t._v(" in this "),r("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py/tree/goodtables",target:"_blank",rel:"noopener noreferrer"}},[t._v("branch"),r("OutboundLink")],1),t._v(" as well as it’s available on "),r("a",{attrs:{href:"https://pypi.org/project/goodtables/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyPi"),r("OutboundLink")],1),t._v(" as it was before")]),t._v(" "),r("li",[t._v("please note that "),r("code",[t._v("frictionless@3.x")]),t._v(" version’s API, we’re working on at the moment, is not stable")]),t._v(" "),r("li",[t._v("we will release "),r("code",[t._v("frictionless@4.x")]),t._v(" by the end of 2020 to be the first SemVer/stable version")])])]),t._v(" "),r("h2",{attrs:{id:"purpose"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Describe your data")]),t._v(": You can infer, edit and save metadata of your data tables. It’s a first step for ensuring data quality and usability. Frictionless metadata includes general information about your data like textual description, as well as, field types and other tabular data details.")]),t._v(" "),r("li",[r("strong",[t._v("Extract your data")]),t._v(": You can read your data using a unified tabular interface. Data quality and consistency are guaranteed by a schema. Frictionless supports various file protocols like HTTP, FTP, and S3 and data formats like CSV, XLS, JSON, SQL, and others.")]),t._v(" "),r("li",[r("strong",[t._v("Validate your data")]),t._v(": You can validate data tables, resources, and datasets. Frictionless generates a unified validation report, as well as supports a lot of options to customize the validation process.")]),t._v(" "),r("li",[r("strong",[t._v("Transform your data")]),t._v(": You can clean, reshape, and transfer your data tables and datasets. Frictionless provides a pipeline capability and a lower-level interface to work with the data.")])]),t._v(" "),r("h2",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),r("ul",[r("li",[t._v("Powerful Python framework")]),t._v(" "),r("li",[t._v("Convenient command-line interface")]),t._v(" "),r("li",[t._v("Low memory consumption for data of any size")]),t._v(" "),r("li",[t._v("Reasonable performance on big data")]),t._v(" "),r("li",[t._v("Support for compressed files")]),t._v(" "),r("li",[t._v("Custom checks and formats")]),t._v(" "),r("li",[t._v("Fully pluggable architecture")]),t._v(" "),r("li",[t._v("The included API server")]),t._v(" "),r("li",[t._v("More than 1000+ tests")])]),t._v(" "),r("h2",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ frictionless validate data/invalid.csv\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("invalid"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data/invalid.csv\n\n  row    field  code              message\n-----  -------  ----------------  --------------------------------------------\n             "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  blank-header      Header "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" field at position "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v(" is blank\n             "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("  duplicate-header  Header "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" field "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),t._v(" is duplicated\n    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("        "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  missing-cell      Row "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" has a missing cell "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" field "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field3"')]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("        "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("  missing-cell      Row "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" has a missing cell "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" field "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name2"')]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("        "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  missing-cell      Row "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v(" has a missing cell "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" field "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field3"')]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("        "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("  missing-cell      Row "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v(" has a missing cell "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" field "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name2"')]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("           blank-row         Row "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),t._v(" is completely blank\n    "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("        "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("  extra-cell        Row "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),t._v(" has an extra value "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" field  "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),t._v("\n")])])]),r("h2",{attrs:{id:"documentation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),r("h3",{attrs:{id:"general"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/introduction-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction Guide"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/describing-data/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Describing Data"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/extracting-data/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Extracting Data"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/validating-data/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Validating Data"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/transforming-data/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transforming Data"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/extension-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Extension Guide"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/migration-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Migration Guide"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/schemes-reference/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schemes Reference"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/formats-reference/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Formats Reference"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/errors-reference/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Errors Reference"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/api-reference/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Reference"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/contributing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Contributing"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/changelog/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Changelog"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/authors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Authors"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"specific"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specific"}},[t._v("#")]),t._v(" Specific")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-aws/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with AWS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-bigquery/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with BigQuery"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-ckan/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with CKAN"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-csv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with CSV"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-dataflows/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with DataFlows"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-elastic/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Elastic"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-excel/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Excel"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-filelike/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Filelike"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-gsheet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with GSheet"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with HTML"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-inline/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Inline"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-json/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with JSON"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-local/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Local"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-ods/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with ODS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-pandas/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Pandas"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-remote/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Remote"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-server/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Server"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-spss/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with SPSS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-sql/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with SQL"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/working-with-text/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Text"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);