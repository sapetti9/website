(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{249:function(e,t,a){e.exports=a.p+"assets/img/data-retriever-install.1fdce2e3.gif"},352:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[o("a",{attrs:{href:"http://www.data-retriever.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Data Retriever"),o("OutboundLink")],1),e._v(" automates the tasks of finding, downloading, and cleaning up publicly available data, and then stores them in a variety of databases and file formats. This lets data analysts spend less time cleaning up and managing data, and more time analyzing it.")]),e._v(" "),o("p",[e._v("We originally built the Data Retriever starting in 2010 with a focus on ecological data. Over time, we realized that the common challenges with finding downloading, and cleaning up ecological data applied to data in most other fields, so we rebranded and starting integrating data from other fields as well.")]),e._v(" "),o("p",[e._v("The Data Retriever is primarily focused on "),o("em",[e._v("tabular")]),e._v(" data, but we’re starting work on supporting spatial data as well.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(249),alt:"Diagram"}}),e._v(" "),o("br"),e._v(" "),o("em",[e._v("The Data Retriever automatically installing the "),o("a",{attrs:{href:"https://www.pwrc.usgs.gov/bbs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BBS (USGS North American Breeding Bird Survey)"),o("OutboundLink")],1),e._v(" dataset")])]),e._v(" "),o("p",[e._v("Data is often messy and needs cleaning and restructuring before it can be effectively used. It is often not feasible to modify and redistribute the data due to licensing and other limitations (Editor’s note: see our "),o("router-link",{attrs:{to:"/articles/open-power-system-data/"}},[e._v("Open Power System Data case study")]),e._v(" for more on this).")],1),e._v(" "),o("p",[e._v("We need to make it as easy as possible for contributors to "),o("a",{attrs:{href:"https://retriever.readthedocs.io/en/latest/scripts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("add new datasets"),o("OutboundLink")],1),e._v(". For relatively clean datasets this means having a simple, easy-to-work-with metadata standard to describe existing data. The description for each dataset is written in a single file which gets read by our plugin infrastructure.")]),e._v(" "),o("p",[e._v("To describe the structure of simple data, we originally created a YAML-like"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(" metadata structure.  When the Data Package"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(" specs were created by "),o("a",{attrs:{href:"https://okfn.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Knowledge International"),o("OutboundLink")],1),e._v(", we decided to switch over to using this standard so that others could benefit from the metadata we were creating and so that we could benefit from th standards-based infrastructure"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(" being created around the specs.")]),e._v(" "),o("p",[e._v("The transition to the Data Package specification was fairly smooth as most of the fields we needed were already included in the specs. The only thing that we needed to add were fields for restructuring poorly formatted data since the spec assumes the data is well structured to begin with. For example, we use custom fields for describing how to convert "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Wide_and_narrow_data",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[e._v("wide")]),e._v(" data to "),o("strong",[e._v("long")]),e._v(" data"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("We first learned about Frictionless Data through the "),o("a",{attrs:{href:"https://blog.okfn.org/2016/02/29/sloan-foundation-funds-frictionless-data-tooling-and-engagement-at-open-knowledge/",target:"_blank",rel:"noopener noreferrer"}},[e._v("announcement"),o("OutboundLink")],1),e._v(" of their funding by the Sloan Foundation. Going forward, we would love to see the Data Package spec expanded to include information about “imperfections” in data. It currently assumes that the person creating the metadata can modify the raw data files to comply with the standard rules of data structure. However this doesn’t work if someone else is distributing the data, which is a very common use"),o("br"),e._v("\ncase.")]),e._v(" "),o("p",[e._v("The expansion of the standard would include things like a way to indicate wide versus long data with enough information to uniquely describe how to translate from one to the other as well as information on single tables that are composed from data in many separate files. We have already been adding new fields to the JSON to accomplish some of these things and would be happy to be part of a larger dialog about implementing them more widely. For the wide-data-to-long-data example mentioned above, we use "),o("code",[e._v("ct_column")]),e._v(" and "),o("code",[e._v("ct_names")]),e._v(" fields and a "),o("code",[e._v("ct-type")]),e._v(" type to indicate how to transform the data into a properly normalized form.")]),e._v(" "),o("p",[e._v("The other thing we’ve come across is the need to develop a clear specification for "),o("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("semantic versioning"),o("OutboundLink")],1),e._v(" of Data Packages. The specification includes an optional "),o("code",[e._v("version")]),e._v(" field"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v(" for keeping track to changes to the package. This version has a standard structure from semantic versioning in software that includes major, minor, and patch level changes. Unlike in software there is no clearly established standard for what changes in different version numbers indicate. Since we work with a lot of different datasets, we’ve been changing a lot of version numbers over the last year; this has lead us to "),o("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/421",target:"_blank",rel:"noopener noreferrer"}},[e._v("open a discussion with the OKFN team"),o("OutboundLink")],1),e._v(" about developing a standard to apply to these changes.")]),e._v(" "),o("p",[e._v("Our next big step is working on the challenge of "),o("strong",[e._v("simple data integration")]),e._v(". One of the major challenges data analysts have after they have cleaned up and prepared individual data sources is combining them. General solutions to the data integration problem (e.g. linked data approaches) have proven to difficult but we are approaching the problem by tackling a small number of common use cases and involving humans in the metadata development describing the linkages between datasets.")]),e._v(" "),o("p",[e._v("The major specification that is available for ecological data is the "),o("a",{attrs:{href:"https://knb.ecoinformatics.org/#external//emlparser/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ecological Metadata Language (EML)"),o("OutboundLink")],1),e._v(". It is an XML"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])]),e._v(" based spec that includes a lot of information specific to ecological datasets. The nice thing about EML—which is also its challenge—is that it is very comprehensive. This gives it a lot of strength in a linked data context, but also means that it is difficult to drive adoption by users.")]),e._v(" "),o("p",[e._v("The Frictionless Data specifications line up better with our approach to data"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn6",id:"fnref6"}},[e._v("[6]")])]),e._v(", which is to complement lightweight computational methods with human contributions to make data easier to work with quickly.")]),e._v(" "),o("p",[e._v("Community contributions to our work are welcome. We work hard to make all of our development efforts open and inclusive (see our "),o("a",{attrs:{href:"https://github.com/weecology/retriever/blob/master/docs/code_of_conduct.rst",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code of Conduct"),o("OutboundLink")],1),e._v(") and love it when new developers, data scientists, and domain specialists "),o("a",{attrs:{href:"http://www.data-retriever.org/#contribute",target:"_blank",rel:"noopener noreferrer"}},[e._v("contribute"),o("OutboundLink")],1),e._v(". A contribution can be as easy as adding a new dataset by following "),o("a",{attrs:{href:"https://retriever.readthedocs.io/en/latest/scripts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("a set of prompts"),o("OutboundLink")],1),e._v(" to create a new JSON file and submitting a "),o("a",{attrs:{href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR"),o("OutboundLink")],1),e._v(" on GitHub, or even just opening an issue to tell us about a dataset that would be useful to you. So, "),o("a",{attrs:{href:"http://github.com/weecology/retriever/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue"),o("OutboundLink")],1),e._v(", submit a PR, or stop by our "),o("a",{attrs:{href:"https://gitter.im/weecology/retriever",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitter chat channel"),o("OutboundLink")],1),e._v(" and say “Hi”. We also participate in "),o("a",{attrs:{href:"https://developers.google.com/open-source/gsoc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Summer of Code"),o("OutboundLink")],1),e._v(", which is a great opportunity for students interested in being directly supported to work on the project.")]),e._v(" "),o("hr",{staticClass:"footnotes-sep"}),e._v(" "),o("section",{staticClass:"footnotes"},[o("ol",{staticClass:"footnotes-list"},[o("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[o("p",[e._v("YAML Ain’t Markup Language: "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/YAML"),o("OutboundLink")],1),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[o("p",[e._v("Data Package: "),o("a",{attrs:{href:"/specs/data-package"}},[e._v("/specs/data-package")]),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[o("p",[e._v("Frictionless Data Software: "),o("a",{attrs:{href:"/software"}},[e._v("/software")]),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[o("p",[e._v("Data Package version field: "),o("router-link",{attrs:{to:"/specs/#version"}},[e._v("/specs/#version")]),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])],1)]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[o("p",[e._v("Extensible Markup Language: "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/XML",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/XML"),o("OutboundLink")],1),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])])]),e._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[o("p",[e._v("Design Philosophy: "),o("router-link",{attrs:{to:"/specs/#design-philosophy"}},[e._v("/specs/#design-philosophy")]),e._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[e._v("↩︎")])],1)])])])])}),[],!1,null,null,null);t.default=r.exports}}]);