(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{300:function(t,a,n){t.exports=n.p+"assets/img/gdp_map_example.c3bf2487.png"},390:function(t,a,n){"use strict";n.r(a);var s=n(1),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Joining multiple datasets on a common value or set of values is a"),s("br"),t._v("\ncommon data wrangling task.  For instance, one might have a dataset"),s("br"),t._v("\nlisting Gross Domestic Product (GDP) per country and a separate"),s("br"),t._v("\ndataset containing geographic outlines of country borders.  If these"),s("br"),t._v("\nindependent datasets have a shared property (for instance, the"),s("br"),t._v("\nthree-letter country code as"),s("br"),t._v(" "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("defined in ISO 3166-1"),s("OutboundLink")],1),t._v("),"),s("br"),t._v("\nwe should be able to create one consolidated dataset to generate a map"),s("br"),t._v("\nof GDP per country.  This guide will walk through this simple use"),s("br"),t._v("\ncase.")]),t._v(" "),s("h2",{attrs:{id:"example-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-data"}},[t._v("#")]),t._v(" Example Data")]),t._v(" "),s("p",[t._v("For this example, we are going to use two example Data Packages from"),s("br"),t._v("\nour"),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("example data packages repository"),s("OutboundLink")],1),s("br"),t._v("\nwith the properties described above. The first is an example of Data"),s("br"),t._v("\nPackage containing a GeoJSON file. "),s("a",{attrs:{href:"http://geojson.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeoJSON"),s("OutboundLink")],1),t._v(" is"),s("br"),t._v("\na format for representing geographical features in"),s("br"),t._v(" "),s("a",{attrs:{href:"http://json.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON"),s("OutboundLink")],1),t._v(".  This particular GeoJSON file lists"),s("br"),t._v("\ncountries on its "),s("code",[t._v("features")]),t._v(" array and specifies the country code as a"),s("br"),t._v("\nproperty on each “feature”.  In this case, the country code is stored"),s("br"),t._v("\non the key “ISO_A3” of the feature’s "),s("code",[t._v("properties")]),t._v(" object.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  "type": "FeatureCollection",\n  "features": [\n    {\n      "type": "Feature",\n      "properties": {\n        "ADMIN": "Ukraine",\n        "ISO_A3": "UKR"\n      },\n      "geometry": {\n        "type": "Polygon",\n        "coordinates": [\n        ...\n        ]\n      }\n    }\n  ]\n}\n')])])]),s("p",[t._v("The second Data Package is a typical"),s("br"),t._v(" "),s("router-link",{attrs:{to:"/data-package/#tabular-data-package"}},[t._v("Tabular Data Package")]),t._v(" containing a GDP"),s("br"),t._v("\nmeasure for each country in the world for the year 2014.  Country"),s("br"),t._v("\ncodes are stored, naturally, on the “Country Code” column.")],1),t._v(" "),s("p",[t._v("|  Country Name                                   | Country Code | Year | Value             |"),s("br"),t._v("\n|-------------------------------------------------------------------------------------------|"),s("br"),t._v("\n|  Ukraine                                        | UKR          | 2014 | 131805126738.287  |"),s("br"),t._v("\n|  United Arab Emirates                           | ARE          | 2014 | 401646583173.427  |"),s("br"),t._v("\n|  United Kingdom                                 | GBR          | 2014 | 2941885537461.48  |"),s("br"),t._v("\n|  United States                                  | USA          | 2014 | 17419000000000    |"),s("br"),t._v("\n|  Uruguay                                        | URY          | 2014 | 57471277325.1312  |")]),t._v(" "),s("h2",{attrs:{id:"reading-and-joining-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-and-joining-data"}},[t._v("#")]),t._v(" Reading and Joining Data")]),t._v(" "),s("p",[t._v("As in our"),s("br"),t._v(" "),s("router-link",{attrs:{to:"/blog/2016/08/29/using-data-packages-in-python/"}},[t._v("Using Data Packages in Python guide")]),t._v(","),s("br"),t._v("\nthe first step before joining is to read the data for each Data"),s("br"),t._v("\nPackage onto our computer.  We do this by importing the "),s("code",[t._v("datapackage")]),s("br"),t._v("\nlibrary and passing the Data Package url to its "),s("code",[t._v("DataPackage")]),t._v(" method."),s("br"),t._v("\nWe are also importing the standard Python "),s("code",[t._v("json")]),t._v(" library to read and"),s("br"),t._v("\nwrite our GeoJSON file.")],1),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datapackage\n\ncountries_url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/geo-countries/datapackage.json'")]),t._v("\ngdp_url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/gross-domestic-product-2014/datapackage.json'")]),t._v("\n\ncountries_dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countries_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngdp_dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdp_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nworld "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countries_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'countries'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw_read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTF-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("!!! Learn more about creating data packages in Python "),s("router-link",{attrs:{to:"/blog/2016/07/21/creating-tabular-data-packages-in-python/"}},[t._v("in this tutorial")]),t._v(".")],1),t._v(" "),s("p",[t._v("Our GeoJSON data is stored as a "),s("code",[t._v("bytes")]),t._v(" object in the "),s("code",[t._v("data")]),t._v(" attribute"),s("br"),t._v("\nof the first (and only) element of the Data Package "),s("code",[t._v("resources")]),t._v(" array."),s("br"),t._v("\nTo create our "),s("code",[t._v("world")]),t._v(" GeoJSON dict, we first need to decode this"),s("br"),t._v(" "),s("code",[t._v("bytes")]),t._v(" object to a UTF-8 string and pass it to "),s("code",[t._v("json.loads")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("world "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countries_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'countries'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw_read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTF-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("At this point, joining the data can be accomplished by iterating"),s("br"),t._v("\nthrough each country in the "),s("code",[t._v("world['features']")]),t._v(" array and adding a"),s("br"),t._v("\nproperty “GDP (2014)” if “Country Code” on the "),s("code",[t._v("gdp_dp")]),t._v(" Data Package"),s("br"),t._v("\nobject matches “ISO_A3” on the given GeoJSON feature.  The value of"),s("br"),t._v("\n“GDP (2014)” is derived from the “Value” column on the "),s("code",[t._v("gdp_dp")]),t._v(" Data"),s("br"),t._v("\nPackage object.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" feature "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" world"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'features'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    matches "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gdp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" gdp "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" gdp_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" gdp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Country Code'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" feature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'properties'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ISO_A3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" matches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        feature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'properties'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GDP (2014)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        feature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'properties'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GDP (2014)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),s("p",[t._v("Finally, we can output our consolidated GeoJSON dataset into a new"),s("br"),t._v("\nfile called “world_gdp_2014.geojson” using "),s("code",[t._v("json.dump")]),t._v(" and create a"),s("br"),t._v("\nnew Data Package container for it.  For a more thorough walkthrough on"),s("br"),t._v("\ncreating a Data Package, please consult the"),s("br"),t._v(" "),s("router-link",{attrs:{to:"/blog/2016/07/21/creating-tabular-data-packages-in-python/"}},[t._v("Creating Data Packages in Python")]),s("br"),t._v("\nguide.")],1),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("new_dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnew_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'consolidated-dataset'")]),t._v("\nnew_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resources'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world_gdp_2014.geojson'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nnew_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnew_dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'datapackage.zip'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("We can now quickly render this GeoJSON file into a"),s("br"),t._v(" "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Choropleth_map",target:"_blank",rel:"noopener noreferrer"}},[t._v("chloropleth map"),s("OutboundLink")],1),t._v(" using"),s("br"),t._v(" "),s("a",{attrs:{href:"http://qgis.org/en/site/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGIS"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("p",[s("img",{attrs:{src:n(300),alt:"GDP Map Example"}})]),t._v(" "),s("p",[t._v("Or we can rely on GitHub to render our GeoJSON for us.  When you click"),s("br"),t._v("\na country, it’s property list will show up featuring “ADMIN”,"),s("br"),t._v("\n“ISO_A3”, and the newly added “GDP (2014)” property.")])])}),[],!1,null,null,null);a.default=e.exports}}]);