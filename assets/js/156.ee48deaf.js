(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{557:function(e,a,t){"use strict";t.r(a);var s=t(45),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"types-of-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types-of-data"}},[e._v("#")]),e._v(" Types of data")]),e._v(" "),t("p",[e._v("Traditionally, Unix shell commands have communicated with each other using strings of text. One command would output text via standard out (often abbreviated 'stdout') and the other would read in text via standard in (or 'stdin'). In this way, the two commands could communicate.")]),e._v(" "),t("p",[e._v("We can think of this kind of communication as string-based.")]),e._v(" "),t("p",[e._v("Nu embraces this approach for its commands and grows it to include other kinds of data.  Currently, Nu supports two kinds of data types: simple and structured.")]),e._v(" "),t("p",[e._v("Like many programming languages, Nu models data using a set of simple and structured data types. Simple data types include integers, floats, strings, booleans, dates, and paths. It also includes a special type for filesizes.")]),e._v(" "),t("h2",{attrs:{id:"integers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integers"}},[e._v("#")]),e._v(" Integers")]),e._v(" "),t("p",[e._v("Integers (or round) numbers. Examples include 1, 5, and 100.")]),e._v(" "),t("h2",{attrs:{id:"decimal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decimal"}},[e._v("#")]),e._v(" Decimal")]),e._v(" "),t("p",[e._v("Decimal numbers are numbers with some fractional component. Examples include 1.5, 2.0, and 15.333.")]),e._v(" "),t("h2",{attrs:{id:"strings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#strings"}},[e._v("#")]),e._v(" Strings")]),e._v(" "),t("p",[e._v("A string of characters that represents text. There are a few ways we can represent text in Nushell:")]),e._v(" "),t("p",[t("strong",[e._v("Double quotes")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"my message"\n')])])]),t("p",[e._v("Double quotes are the most common form of quotes and one you may see whenever text is required.")]),e._v(" "),t("p",[t("strong",[e._v("Single quotes")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'my message'\n")])])]),t("p",[e._v("Single quotes also give you a string value, just like double quotes. The difference here is that they allow you to use double quotes in the text: "),t("code",[e._v("'he said \"can you grab my glass?\"'")])]),e._v(" "),t("p",[t("strong",[e._v("Backtick quotes")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("`my message`\n")])])]),t("p",[e._v("A powerful form of string uses backticks. These allow you to create a string from inputs in the pipeline.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> ls | each { echo `{{name}} is {{size}}` }\n───┬─────────────────────\n 0 │ genawait is 4.1 KB  \n 1 │ learncpp is 4.1 KB  \n 2 │ nuscripts is 4.1 KB \n───┴─────────────────────\n")])])]),t("p",[t("strong",[e._v("Bare strings")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> echo hello\n")])])]),t("p",[e._v("A unique trait of Nushell is that you can also create a string of one word without any quotes at all.")]),e._v(" "),t("p",[e._v("The above is the same as if we had written:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> echo "hello"\n')])])]),t("h2",{attrs:{id:"lines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lines"}},[e._v("#")]),e._v(" Lines")]),e._v(" "),t("p",[e._v("Lines are strings with an implied OS-dependent line ending. When used, the OS-specific line ending is used.")]),e._v(" "),t("h2",{attrs:{id:"column-paths"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#column-paths"}},[e._v("#")]),e._v(" Column paths")]),e._v(" "),t("p",[e._v("Column paths are a path through the table to a specific sub-table, column, row, or cell.")]),e._v(" "),t("p",[e._v("Eg) The value "),t("code",[e._v("foo.0.bar")]),e._v(" in "),t("code",[e._v("open data.toml | get foo.0.bar")])]),e._v(" "),t("h2",{attrs:{id:"glob-patterns-wildcards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glob-patterns-wildcards"}},[e._v("#")]),e._v(" Glob patterns (wildcards)")]),e._v(" "),t("p",[e._v("In Nushell, file operations may also allow you to pass in a glob pattern, sometimes called a 'wildcard'. This allows you to give a pattern that may match multiple file paths.")]),e._v(" "),t("p",[e._v("The most general pattern is the "),t("code",[e._v("*")]),e._v(", which will match all paths. More often, you'll see this pattern used as part of another pattern, for example "),t("code",[e._v("*.bak")]),e._v(" and "),t("code",[e._v("temp*")]),e._v(".")]),e._v(" "),t("p",[e._v("In Nushell, we also support double "),t("code",[e._v("*")]),e._v(" to talk about traversing deeper paths that are nested inside of other directories. For example, "),t("code",[e._v("ls **/*")]),e._v(" will list all the non-hidden paths nested under the current directory.")]),e._v(" "),t("p",[e._v("In addition to "),t("code",[e._v("*")]),e._v(", there is also the "),t("code",[e._v("?")]),e._v(' pattern which will match a single character. For example, you can match the word "port" by using the pattern '),t("code",[e._v("p???")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"booleans"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#booleans"}},[e._v("#")]),e._v(" Booleans")]),e._v(" "),t("p",[e._v("Booleans are the state of being true or false. Rather than writing the value directly, it is often a result of a comparison.")]),e._v(" "),t("p",[e._v("The two values of booleans are "),t("code",[e._v("$true")]),e._v(" and "),t("code",[e._v("$false")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"dates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dates"}},[e._v("#")]),e._v(" Dates")]),e._v(" "),t("p",[e._v("Dates and times are held together in the Date value type. Date values used by the system are timezone-aware, and by default use the UTC timezone.")]),e._v(" "),t("h2",{attrs:{id:"duration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[e._v("#")]),e._v(" Duration")]),e._v(" "),t("p",[e._v("Durations represent a length of time.  A second, 5 weeks, and a year are all durations.")]),e._v(" "),t("p",[e._v("Eg) "),t("code",[e._v("1wk")]),e._v(" is the duration of one week.")]),e._v(" "),t("p",[e._v("This chart shows all durations currently supported:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Duration")]),e._v(" "),t("th",[e._v("Length")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1sec")]),e._v(" "),t("td",[e._v("one second")])]),e._v(" "),t("tr",[t("td",[e._v("1min")]),e._v(" "),t("td",[e._v("one minute")])]),e._v(" "),t("tr",[t("td",[e._v("1hr")]),e._v(" "),t("td",[e._v("one hour")])]),e._v(" "),t("tr",[t("td",[e._v("1day")]),e._v(" "),t("td",[e._v("one day")])]),e._v(" "),t("tr",[t("td",[e._v("1wk")]),e._v(" "),t("td",[e._v("one week")])]),e._v(" "),t("tr",[t("td",[e._v("1mon")]),e._v(" "),t("td",[e._v("one month")])]),e._v(" "),t("tr",[t("td",[e._v("1yr")]),e._v(" "),t("td",[e._v("one year")])])])]),e._v(" "),t("h2",{attrs:{id:"ranges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ranges"}},[e._v("#")]),e._v(" Ranges")]),e._v(" "),t("p",[e._v("A range is a way of expressing a sequence of values from start to finish. They take the form 'start' + '..' + 'end'. For example, the range "),t("code",[e._v("1..3")]),e._v(" means the numbers 1, 2, and 3.")]),e._v(" "),t("h2",{attrs:{id:"inclusive-and-non-inclusive-ranges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inclusive-and-non-inclusive-ranges"}},[e._v("#")]),e._v(" Inclusive and non-inclusive ranges")]),e._v(" "),t("p",[e._v("Ranges are inclusive by default, meaning that the ending value is counted as part of the range. The range "),t("code",[e._v("1..3")]),e._v(" includes the number "),t("code",[e._v("3")]),e._v(" as the last value in the range.")]),e._v(" "),t("p",[e._v("Sometimes, you may want a range that comes up to a number but doesn't use that number in the output. For this case, you can use "),t("code",[e._v("..<")]),e._v(" instead of "),t("code",[e._v("..")]),e._v(". For example, "),t("code",[e._v("1..<5")]),e._v(" is the numbers 1, 2, 3, and 4.")]),e._v(" "),t("h2",{attrs:{id:"open-ended-ranges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-ended-ranges"}},[e._v("#")]),e._v(" Open-ended ranges")]),e._v(" "),t("p",[e._v("Ranges can also be open-ended. You can remove the start or the end of the range to make it open-ended.")]),e._v(" "),t("p",[e._v("Let's say you wanted to start counting at 3, but you didn't have a specific end in mind. You could use the range "),t("code",[e._v("3..")]),e._v(" to represent this. When you use a range that's open-ended on the right side, remember that this will continue counting for as long as possible, which could be a very long time! You'll often want to use open-ended ranges with commands like "),t("code",[e._v("first")]),e._v(", so you can take the number of elements you want from the range.")]),e._v(" "),t("p",[e._v("You can also make the start of the range open. In this case, Nushell will start counting with "),t("code",[e._v("0")]),e._v(", and go up from there. The range "),t("code",[e._v("..2")]),e._v(" is the numbers 0, 1, and 2.")]),e._v(" "),t("h2",{attrs:{id:"file-paths"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-paths"}},[e._v("#")]),e._v(" File paths")]),e._v(" "),t("p",[e._v("File paths are a platform-independent way of representing a file path in the given OS. Examples include /usr/bin and C:\\Users\\file.txt.")]),e._v(" "),t("h2",{attrs:{id:"file-sizes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-sizes"}},[e._v("#")]),e._v(" File sizes")]),e._v(" "),t("p",[e._v("File sizes are held in a special integer type called bytes. Examples include "),t("code",[e._v("100b")]),e._v(", "),t("code",[e._v("15kb")]),e._v(", and "),t("code",[e._v("100mb")]),e._v(".")]),e._v(" "),t("p",[e._v("The full list of filesize units are:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pb")]),e._v(": petabytes")]),e._v(" "),t("li",[t("code",[e._v("tb")]),e._v(": terabytes")]),e._v(" "),t("li",[t("code",[e._v("gb")]),e._v(": gigabytes")]),e._v(" "),t("li",[t("code",[e._v("mb")]),e._v(": megabytes")]),e._v(" "),t("li",[t("code",[e._v("kb")]),e._v(": kilobytes")]),e._v(" "),t("li",[t("code",[e._v("b")]),e._v(": bytes")])]),e._v(" "),t("h2",{attrs:{id:"binary-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binary-data"}},[e._v("#")]),e._v(" Binary data")]),e._v(" "),t("p",[e._v("Binary data, like the data from an image file, is a group of raw bytes.")]),e._v(" "),t("h2",{attrs:{id:"structured-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structured-data"}},[e._v("#")]),e._v(" Structured data")]),e._v(" "),t("p",[e._v("Structured data builds from the simple data. For example, instead of a single integer, structured data gives us a way to represent multiple integers in the same value. Here's a list of the currently supported structured data types: rows, lists, and blocks.")]),e._v(" "),t("h2",{attrs:{id:"rows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[e._v("#")]),e._v(" Rows")]),e._v(" "),t("p",[e._v("The row data type represents what you would see in one row of data in the table. It has different elements of data, and each element of data is given a column name.")]),e._v(" "),t("h2",{attrs:{id:"lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lists"}},[e._v("#")]),e._v(" Lists")]),e._v(" "),t("p",[e._v('Lists can hold more than one value. These can be simple values.  They can also hold rows, and the combination of a list of rows is often called a "table".')]),e._v(" "),t("p",[e._v("Example: a list of strings")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> echo [sam fred george]\n───┬────────\n 0 │ sam \n 1 │ fred \n 2 │ george \n───┴────────\n")])])]),t("h2",{attrs:{id:"tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tables"}},[e._v("#")]),e._v(" Tables")]),e._v(" "),t("p",[e._v("The table is core data structure in Nushell. You'll see as you run commands that many of them return tables as output. A table has both rows and columns.")]),e._v(" "),t("p",[e._v("We can create our own tables similarly to how we create a list. Because tables also contain columns and not just values, we pass in the name of the column values:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> echo [[Column1, Column2]; [Value1, Value2]]\n───┬─────────┬─────────\n # │ Column1 │ Column2 \n───┼─────────┼─────────\n 0 │ Value1  │ Value2  \n───┴─────────┴─────────\n")])])]),t("p",[e._v("We can also create a table with multiple rows of data:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> echo [[Column1, Column2]; [Value1, Value2] [Value3, Value4]]\n───┬─────────┬─────────\n # │ Column1 │ Column2 \n───┼─────────┼─────────\n 0 │ Value1  │ Value2  \n 1 │ Value3  │ Value4  \n───┴─────────┴─────────\n")])])]),t("h2",{attrs:{id:"blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[e._v("#")]),e._v(" Blocks")]),e._v(" "),t("p",[e._v("Blocks represent a block of code in Nu. For example, in the command "),t("code",[e._v("each { echo $it }")]),e._v(" the block is the portion contained in curly braces, "),t("code",[e._v("{ echo $it }")]),e._v(". Blocks are a useful way of representing code that can be executed on each row of data.")]),e._v(" "),t("h2",{attrs:{id:"groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#groups"}},[e._v("#")]),e._v(" Groups")]),e._v(" "),t("p",[e._v("Take this example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("foo {\n  line1\n  line2; line3 | line4\n}\n")])])]),t("p",[e._v("Inside the block, you have two separate groups that run to completion, a group\nis a semicolon-separated list of pipelines, the last of which is output to the\nscreen.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("line1")]),e._v(" is a group unto itself, so that command will run to completion and get\ndisplayed on the screen.")]),e._v(" "),t("li",[t("code",[e._v("line2")]),e._v(" is a pipeline inside of the second group. It runs, but its contents\nare not viewed on the screen.")]),e._v(" "),t("li",[t("code",[e._v("line3")]),e._v(" | "),t("code",[e._v("line4")]),e._v(" is the second pipeline in the second group. It runs, and its\ncontents get viewed.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);