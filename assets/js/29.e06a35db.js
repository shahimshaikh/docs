(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{452:function(t,s,e){t.exports=e.p+"assets/img/radio.209501f2.png"},453:function(t){t.exports=JSON.parse('{"type":"radio","name":"Radio","description":null,"icon":null,"groups":{"Global":["id","type","title","desc","subtitle","class"],"Advanced":["attributes","data","compiler","output","output_variables","permissions","required","default","validate"]},"fields":{"id":{"name":"id","title":"ID","type":"input","inputType":"text","description":"","order":0},"title":{"name":"title","title":"Title","type":"input","inputType":"text","description":"","order":5},"subtitle":{"name":"subtitle","title":"Subtitle","type":"input","inputType":"text","description":"","order":10},"desc":{"name":"desc","title":"Desc","type":"input","inputType":"text","description":"","order":15},"class":{"name":"class","title":"Class","type":"input","inputType":"text","description":"","order":20},"compiler":{"name":"compiler","title":"Compiler","type":"bool","default":false,"order":25},"options":{"type":"array","formatter":"multiarray","arrayType":"ordered","title":"Options","name":"options","label":"Options","itemValues":["alt","img","title","presets","class"],"default":{},"order":40},"data":{"type":"custom-object","name":"data","title":"Data","order":50,"required":false,"possibleValues":["ordered-array","custom"]},"permissions":{"type":"input","inputType":"text","name":"permissions","title":"Permissions","order":60},"required":{"name":"required","title":"Required","fieldClasses":"full-width","type":"array","description":"Field visibility requirements.","order":70}}}')},515:function(t,s,e){"use strict";e.r(s);var a=e(453),n={data:function(){return{builder:a,defaults:{}}}},r=e(7),o=Object(r.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"radio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio"}},[t._v("#")]),t._v(" Radio")]),t._v(" "),a("p",[t._v("The Radio field is an excellent way to present a set of choices for users to select from.")]),t._v(" "),a("p",[a("span",{staticStyle:{display:"block","text-align":"center"}},[a("img",{attrs:{src:e(452),alt:""}})])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),a("li",[a("a",{attrs:{href:"#build-config"}},[t._v("Build Config")])]),a("li",[a("a",{attrs:{href:"#example-config-using-array"}},[t._v("Example Config using Array")])]),a("li",[a("a",{attrs:{href:"#example-config-using-wordpress-data"}},[t._v("Example Config using WordPress Data")])]),a("li",[a("a",{attrs:{href:"#example-usage"}},[t._v("Example Usage")])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[a("div",{staticStyle:{width:"100px"}},[t._v("Type")])]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("radio")])]),t._v(" "),a("td",[t._v("Value identifying the field type.")])]),t._v(" "),a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td"),t._v(" "),a("td",[a("span",{staticStyle:{color:"orange"}},[t._v("Deprecated in Redux 4.0.3")]),t._v(", though still fully functional. Accepts an array of key pair values representing the radio buttons. The key value should be numbers in sequential order, beginning with "),a("code",[t._v("1")]),t._v(".  The value parameter accepts the text to display beside the radio button.")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("string | array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Pass in a string to auto-fetch "),a("RouterLink",{attrs:{to:"/configuration/fields/data.html"}},[t._v("WordPress Data")]),t._v(" as expected from the "),a("RouterLink",{attrs:{to:"/configuration/fields/data.html"}},[t._v("data argument")]),t._v(". Will also accept an array of key pair values representing the radio buttons. The key value should be numbers in sequential order, beginning with "),a("code",[t._v("1")]),t._v(".  The value parameter accepts the text to display beside the radio button.")],1)])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/arguments.html"}},[t._v("Global Field Arguments")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("Using the "),a("code",[t._v("compiler")]),t._v(" Argument")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/data.html"}},[t._v("Using the "),a("code",[t._v("data")]),t._v(" Argument")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),a("code",[t._v("permissions")]),t._v(" Argument")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/required.html"}},[t._v("Using the "),a("code",[t._v("required")]),t._v(" Argument")])],1)])]),t._v(" "),a("h2",{attrs:{id:"build-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-config"}},[t._v("#")]),t._v(" Build Config")]),t._v(" "),a("builder",{attrs:{builder_json:t.builder,builder_defaults:t.defaults}}),t._v(" "),a("h2",{attrs:{id:"example-config-using-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-config-using-array"}},[t._v("#")]),t._v(" Example Config using Array")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Redux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-radio'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'radio'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Radio Option'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Must provide key => value pairs for radio options")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'data'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Opt 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Opt 2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'3'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Opt 3'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'default'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"example-config-using-wordpress-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-config-using-wordpress-data"}},[t._v("#")]),t._v(" Example Config using WordPress Data")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Redux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-radio'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'radio'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Radio Option'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'data'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'default'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v("This example in based on the example usage provided above. Be sure to change "),a("code",[t._v("$redux_demo")]),t._v(" to the value you specified\nin your "),a("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt_name"}},[t._v("opt_name")]),t._v(" argument. Only the key of the select "),a("code",[t._v("options")]),t._v(" or\n"),a("code",[t._v("data")]),t._v(" array item will be returned.")],1),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Selected Radio value: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-radio'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);