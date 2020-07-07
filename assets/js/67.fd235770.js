(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{576:function(t,e,s){"use strict";s.r(e);var a=s(7),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fields-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fields-object"}},[t._v("#")]),t._v(" Fields Object")]),t._v(" "),s("p",[t._v("Fields are the lowest level object within Redux. They constitute the "),s("RouterLink",{attrs:{to:"/configuration/core-fields/"}},[t._v("type of fields")]),t._v(" that appear in\nany given "),s("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(". Though individual fields may have custom arguments, they all share a common set of\ndefault arguments.")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#default-arguments"}},[t._v("Default Arguments")])]),s("li",[s("a",{attrs:{href:"#setting-fields-s"}},[t._v("Setting Fields(s)")]),s("ul",[s("li",[s("a",{attrs:{href:"#redux-setfield"}},[t._v("Redux::setField()")])]),s("li",[s("a",{attrs:{href:"#redux-setfields"}},[t._v("Redux::setFields()")])])])]),s("li",[s("a",{attrs:{href:"#field-helper-functions"}},[t._v("Field Helper Functions")]),s("ul",[s("li",[s("a",{attrs:{href:"#redux-get-section"}},[t._v("Redux::get_section()")])]),s("li",[s("a",{attrs:{href:"#redux-get-sections"}},[t._v("Redux::get_sections()")])]),s("li",[s("a",{attrs:{href:"#redux-remove-section"}},[t._v("Redux::remove_section()")])])])])])]),s("p")]),t._v(" "),s("h2",{attrs:{id:"default-arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-arguments"}},[t._v("#")]),t._v(" Default Arguments")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description.")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("The unique identifier of a field. MUST be unique to the "),s("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")]),t._v(" except when used by the "),s("RouterLink",{attrs:{to:"/configuration/premium/metaboxes.html"}},[t._v("metaboxes API")]),t._v(".")],1)]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("Denotes the "),s("RouterLink",{attrs:{to:"/configuration/core-fields/"}},[t._v("field type")]),t._v(". If the field type does not exist a warning will be displayed.")],1)]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The title of the field that will be displayed.")])]),t._v(" "),s("tr",[s("td",[t._v("subtitle")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Subtitle of the option placed beneath the title.")])]),t._v(" "),s("tr",[s("td",[t._v("desc")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Text to appear under the field title. HTML is permitted.")])]),t._v(" "),s("tr",[s("td",[t._v("default")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Default value for the field.")])]),t._v(" "),s("tr",[s("td",[t._v("class")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Appends any number of classes to the field's class attribute.")])]),t._v(" "),s("tr",[s("td",[t._v("customizer_only")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("A flag to set this field to "),s("RouterLink",{attrs:{to:"/configuration/global_arguments.html#customizer-only"}},[t._v("customizer_only")]),t._v(" display. This argument will override the "),s("RouterLink",{attrs:{to:"/configuration/global_arguments.html#customizer-only"}},[t._v("customizer_only")]),t._v(" setting at the "),s("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("sections")]),t._v(" level as well as the "),s("RouterLink",{attrs:{to:"/configuration/global_arguments.html#customizer-only"}},[t._v("global arguments")]),t._v(" level.")],1)]),t._v(" "),s("tr",[s("td",[t._v("output")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("A flag to set all "),s("RouterLink",{attrs:{to:"/configuration/fields/output.html"}},[t._v("enable CSS output")]),t._v(" for any fields that support this argument.")],1)]),t._v(" "),s("tr",[s("td",[t._v("compiler")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("A flag to set the "),s("RouterLink",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("compiler hook")]),t._v(" to fire if this field's value is changed. This can override the "),s("RouterLink",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("compiler")]),t._v(" setting at the "),s("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("sections")]),t._v(" level.")],1)]),t._v(" "),s("tr",[s("td",[t._v("hints")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("A flag to set the "),s("RouterLink",{attrs:{to:"/configuration/fields/hints.html"}},[t._v("hints")]),t._v(" object that displays a animated window with more details about this field.")],1)])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("Using the "),s("code",[t._v("compiler")]),t._v(" Argument")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/configuration/fields/hints.html"}},[t._v("Using the "),s("code",[t._v("hints")]),t._v(" Argument")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),s("code",[t._v("permissions")]),t._v(" Argument")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/configuration/fields/required.html"}},[t._v("Using the "),s("code",[t._v("required")]),t._v(" Argument")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/configuration/fields/validate.html"}},[t._v("Using the "),s("code",[t._v("validate")]),t._v(" Argument")])],1)])]),t._v(" "),s("p",[t._v("Fields are blocks of arrays that represent the individual options within a specific options panel, set via a "),s("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(" array. The "),s("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(" array contains an argument titled fields, which accepts an array, or several blocks of arrays, separated by commas.  This is where all field arrays are place.  A basic example is shown below. For specific examples, please consult the "),s("a",{attrs:{href:"https://github.com/ReduxFramework/redux-framework/blob/master/sample/sample-config.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample-config.php"),s("OutboundLink")],1),t._v(" file that comes with the Redux package.")],1),t._v(" "),s("h2",{attrs:{id:"setting-fields-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-fields-s"}},[t._v("#")]),t._v(" Setting Fields(s)")]),t._v(" "),s("p",[t._v("There are two methods to set a field in Redux. The only difference between these two declarations is one is singular\nwhile the other is plural.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If the section you are attaching to doesn't exist, that field will never show. It's much easier to use "),s("RouterLink",{attrs:{to:"/configuration/objects/section.html#set-section"}},[t._v("Redux::setSection()")]),t._v(" instead\nto define a "),s("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(" with embedded fields all at once.")],1)]),t._v(" "),s("h3",{attrs:{id:"redux-setfield"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux-setfield"}},[t._v("#")]),t._v(" Redux::setField()")]),t._v(" "),s("p",[t._v("Used to declare a single field and attach to an existing "),s("RouterLink",{attrs:{to:"/configuration/objects/section.html"}},[t._v("section")]),t._v(".")],1),t._v(" "),s("p",[s("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("opt_name")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Your unique "),s("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),s("tr",[s("td",[t._v("field")]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[t._v("A singular field array")])]),t._v(" "),s("tr",[s("td",[t._v("section_id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Section ID to add this field to. Must previously exist.")])])])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Redux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'A sample text box'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"redux-setfields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux-setfields"}},[t._v("#")]),t._v(" Redux::setFields()")]),t._v(" "),s("p",[t._v("Similar to "),s("a",{attrs:{href:"#set-field"}},[t._v("::set_field()")]),t._v(", but used to set an unlimited number of fields at once.")]),t._v(" "),s("p",[s("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("opt_name")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Your unique "),s("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),s("tr",[s("td",[t._v("fields")]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[t._v("Array of fields arrays")])]),t._v(" "),s("tr",[s("td",[t._v("section_id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Section ID to add this field to")])])])]),t._v(" "),s("p",[t._v("This method allows for multiple sections to be added at once. Keep in mind that you can still set a single section, as\nseen below, but you should remember to wrap the section in an array.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Redux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-text1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'A sample text box1'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'opt-text2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'A sample text box2'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"field-helper-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field-helper-functions"}},[t._v("#")]),t._v(" Field Helper Functions")]),t._v(" "),s("p",[t._v("A number of helper functions have been baked into the Redux API to support modifying a field before it gets rendered.\nThese functions have specific use cases and are not often employed by the typical developer, but they are useful when\nneeded.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Execution order is important here. If you try to fetch a field before it has been called within your code, it will\nnot exist. If you believe a field should exist, make sure you're not in an early loading hook when working with that field.")])]),t._v(" "),s("h3",{attrs:{id:"redux-get-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux-get-section"}},[t._v("#")]),t._v(" Redux::get_section()")]),t._v(" "),s("p",[s("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("opt_name")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Your unique "),s("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("section_id")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Unique id of the section you wish to retrieve")])])])]),t._v(" "),s("p",[t._v("Say you want to fetch a section object, you can easily do that. This may be useful if you wanted to check the section\narray by ID. Returns "),s("code",[t._v("false")]),t._v(" if the section cannot be identified.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Redux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"redux-get-sections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux-get-sections"}},[t._v("#")]),t._v(" Redux::get_sections()")]),t._v(" "),s("p",[t._v("Now let's say you want to grab all sections for a given opt_name, you can do that too.")]),t._v(" "),s("p",[s("em",[t._v("Arguments to pass in order of declaration:")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("opt_name")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Your unique "),s("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)])])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sections")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Redux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_sections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"redux-remove-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux-remove-section"}},[t._v("#")]),t._v(" Redux::remove_section()")]),t._v(" "),s("p",[s("em",[t._v("Arguments to pass in order of declaration")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("opt_name")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Your unique "),s("RouterLink",{attrs:{to:"/configuration/global_arguments.html#opt-name"}},[t._v("opt_name")])],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("section_id")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Unique id of the section you wish to retrieve")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("delete_fields")])]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("If set to true, all fields below will be deleted as well")])])])]),t._v(" "),s("p",[t._v("This method allows you to remove a section by ID from Redux. It can be useful to update a field as follows:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Redux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'SECTION_ID'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'A New Section Title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRedux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$section")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);