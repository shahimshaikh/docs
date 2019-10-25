(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{492:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"repeater"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repeater"}},[t._v("#")]),t._v(" Repeater "),e("Badge",{attrs:{text:"field",type:"warn"}})],1),t._v(" "),e("p",[t._v("The Redux Repeater extension easily allows developers to group like fields in a dynamic manner, or static number.\nAllowing values to be grouped (nested) under a single key, or under each individual key. All values will be returned\nas an array.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#incompatible-fields"}},[t._v("Incompatible Fields")])]),e("li",[e("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),e("li",[e("a",{attrs:{href:"#extended-argument-details"}},[t._v("Extended Argument Details")])]),e("li",[e("a",{attrs:{href:"#example-config"}},[t._v("Example Config")])]),e("li",[e("a",{attrs:{href:"#example-usage"}},[t._v("Example Usage")]),e("ul",[e("li",[e("a",{attrs:{href:"#non-grouped-values"}},[t._v("Non-Grouped Values")])]),e("li",[e("a",{attrs:{href:"#grouped-values"}},[t._v("Grouped Values")])])])])])]),e("p")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Getting Started")]),t._v(" "),e("p",[t._v("To understand how to use extensions, you should read this article on "),e("router-link",{attrs:{to:"/guides/basics/using-extensions.html"}},[t._v("Using Extensions")]),t._v(".\nTo shortcut the process, you can use the "),e("a",{attrs:{href:"http://build.redux.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redux Build"),e("OutboundLink")],1),t._v(" site. Please be aware that a working\nknowledge of PHP and CSS is required to properly use this extension. Should you not be familiar with one or the other\n(or both), please refer to the following guides to get you started:\n"),e("a",{attrs:{href:"http://www.php.net/manual/en/tutorial.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started with PHP"),e("OutboundLink")],1),t._v(",\n"),e("a",{attrs:{href:"http://www.w3schools.com/css/css_intro.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Introduction"),e("OutboundLink")],1),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"incompatible-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#incompatible-fields"}},[t._v("#")]),t._v(" Incompatible Fields")]),t._v(" "),e("p",[t._v("Due to the complexities of this extension, the following Redux fields "),e("strong",[t._v("WILL NOT")]),t._v(" (at this time) function within a\nrepeater.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Field")]),t._v(" "),e("th",[t._v("Issue")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("router-link",{attrs:{to:"/core-fields/checkbox.html#multi-checkbox"}},[t._v("Checkbox")]),t._v(" (Multi)")],1),t._v(" "),e("td",[t._v("Multi-check (options array) not functioning, single check is fine")])]),t._v(" "),e("tr",[e("td",[e("router-link",{attrs:{to:"/core-fields/sorter.html"}},[t._v("Sorter")])],1),t._v(" "),e("td",[t._v("Not functioning")])]),t._v(" "),e("tr",[e("td",[e("router-link",{attrs:{to:"/core-fields/typography.html"}},[t._v("Typography")])],1),t._v(" "),e("td",[t._v("Will crash the panel, don't try it yet.")])]),t._v(" "),e("tr",[e("td",[e("router-link",{attrs:{to:"/core-fields/typography.html"}},[t._v("Editor")])],1),t._v(" "),e("td",[t._v("Works fine, but CSS styling is messed up. (jQuery UI stuff)")])])])]),t._v(" "),e("h2",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("repeater")])]),t._v(" "),e("td",[t._v("Value identifying the field type.")])]),t._v(" "),e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Unique ID identifying the field. Must be different from all other field IDs.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Displays title of the repeatable block of fields.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("subtitle")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Subtitle display of the repeatable block of fields, situated beneath the title.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("desc")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Description of the repeatable block of fields, appearing beneath the field control.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("class")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("Appends any number of classes to the field's class attribute.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("fields")]),t._v(" "),e("td",[t._v("array")]),t._v(" "),e("td",[t._v("Array of fields to be within each repeater block.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("group_values")]),t._v(" "),e("td",[t._v("boolen")]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Argument to group all fields within the repeater ID.")])]),t._v(" "),e("tr",[e("td",[t._v("item_name")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("String added after Add/Delete to denote the name of the items you are adding to or deleting. Example: "),e("code",[t._v("Delete Fields")]),t._v(", Fields being the item_name.")])]),t._v(" "),e("tr",[e("td",[t._v("bind_title")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("By default the first field will be used as the title for each repeater block. You may also pass in a string denoting an ID to use as the title for each repeater block.")])]),t._v(" "),e("tr",[e("td",[t._v("static")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("Number of static repeater groups to display. This will also disable the add/remove buttons next to each repeater block.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("sortable")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Allow your users to drag/drop repeater blocks and by so doing reorder the results.")])]),t._v(" "),e("tr",[e("td",[t._v("limit")]),t._v(" "),e("td",[t._v("int")]),t._v(" "),e("td",[t._v("10")]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("static")]),t._v(" is false, this will limit the number of repeater blocks that can be created.")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/configuration/fields/compiler.html"}},[t._v("Using the "),e("code",[t._v("compiler")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/fields/hints.html"}},[t._v("Using the "),e("code",[t._v("hints")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),e("code",[t._v("permissions")]),t._v(" Argument")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/configuration/fields/required.html"}},[t._v("Using the "),e("code",[t._v("required")]),t._v(" Argument")])],1)])]),t._v(" "),e("h2",{attrs:{id:"extended-argument-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extended-argument-details"}},[t._v("#")]),t._v(" Extended Argument Details")]),t._v(" "),e("h4",{attrs:{id:"the-static-argument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-static-argument"}},[t._v("#")]),t._v(" The "),e("code",[t._v("static")]),t._v(" Argument")]),t._v(" "),e("p",[t._v("By default repeater is a dynamic field, however it can act with a predefined  number of static repeater blocks. This allows developers to specifically set the number of repeater blocks they desire to use.")]),t._v(" "),e("h4",{attrs:{id:"the-bind-title-argument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-bind-title-argument"}},[t._v("#")]),t._v(" The "),e("code",[t._v("bind_title")]),t._v(" Argument")]),t._v(" "),e("p",[t._v("By default the first field passed within a repeater is bound as the title. As the values selected or modified change, the title for that given repeater block will update. Developers may set this to false to disable all titles, or set it to an ID had within the repeater field and the title will update accordingly for each repeater block.")]),t._v(" "),e("h4",{attrs:{id:"the-limit-argument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-limit-argument"}},[t._v("#")]),t._v(" The "),e("code",[t._v("limit")]),t._v(" Argument")]),t._v(" "),e("p",[t._v("Provided the "),e("code",[t._v("static")]),t._v(" argument is not used, this will limit the number of dynamic repeater blocks that users can create. By default this is set to 10.")]),t._v(" "),e("h4",{attrs:{id:"the-group-values-argument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-group-values-argument"}},[t._v("#")]),t._v(" The "),e("code",[t._v("group_values")]),t._v(" Argument")]),t._v(" "),e("p",[t._v("The group values allows you to store all values within the repeater id value inside your global variable. For example, say you had a repeater as denoted below and you set this to true. To access all the field values within the repeater field, you would need to follow the Example Usage - Grouped Values example denoted below. This, by default, is turned off.")]),t._v(" "),e("h4",{attrs:{id:"the-sortable-argument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-sortable-argument"}},[t._v("#")]),t._v(" The "),e("code",[t._v("sortable")]),t._v(" Argument")]),t._v(" "),e("p",[t._v("By default each repeater block is sortable and the values will be returned to the developer in the order of which they are saved. However, should a developer like to disable this feature, they may set this to false and sorting will be enabled to the user.")]),t._v(" "),e("h2",{attrs:{id:"example-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-config"}},[t._v("#")]),t._v(" Example Config")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("Redux"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPT_NAME'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Repeater Field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'icon'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'el-icon-thumbs-up'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fields'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("             "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'repeater-field-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'repeater'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'subtitle'")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'desc'")]),t._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'group_values' => true, // Group all fields below within the repeater ID")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'item_name'    => '', // Add a repeater block name to the Add and Delete buttons")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'bind_title'   => '', // Bind the repeater block title to this field ID")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'static'       => 2, // Set the number of repeater blocks to be output")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'limit'        => 2, // Limit the number of repeater blocks a user can create")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'sortable'     => false, // Allow the users to sort the repeater blocks or not")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fields'")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title_field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'placeholder'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text_field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'placeholder'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Text Field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'select_field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'select'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Select Field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'options'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'1'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Option 1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Option 2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'3'")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Option 3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'placeholder'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("__")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Listing Field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'redux-framework-demo'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"example-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),e("h3",{attrs:{id:"non-grouped-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#non-grouped-values"}},[t._v("#")]),t._v(" Non-Grouped Values")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Please remember to replace '$redux_demo' with your project's global variable name, usually your opt_name.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title_field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'<hr>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text_field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'<hr>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'select_field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"grouped-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grouped-values"}},[t._v("#")]),t._v(" Grouped Values")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Please remember to replace '$redux_demo' with your project's global variable name, usually your opt_name.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This example assumes you set 'group_values' to true within your repeater field declaration.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'repeater-field-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title_field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'<hr>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'repeater-field-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text_field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'<hr>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'repeater-field-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'select_field'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);