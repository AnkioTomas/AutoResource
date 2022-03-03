(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{528:function(t,e,_){"use strict";_.r(e);var v=_(30),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("很多朋友在使用自动记账的时候，直呼学习成本太高，很大一部分原因是因为规则的书写。")]),t._v(" "),_("p",[t._v("其中最难的两个部分莫过于"),_("code",[t._v("正则表达式")]),t._v("和"),_("code",[t._v("JS")]),t._v("("),_("code",[t._v("JavaScript")]),t._v(")。")]),t._v(" "),_("p",[t._v("说它难，其实是因为对于“代码”有一种天然的畏惧心理。认为：")]),t._v(" "),_("blockquote",[_("p",[t._v("代码=编程，编程=黑客，黑客=神秘")])]),t._v(" "),_("p",[t._v("所以，代码就约等于神秘莫测、难以理解。")]),t._v(" "),_("p",[t._v("其实不尽然，所谓代码、编程不过是一个按照顺序执行的流程而已，远远没有大家想的那么复杂。")]),t._v(" "),_("p",[t._v("更何况，正则表达式还远远算不上编程，他只是一个比较方便的文字处理工具而已。能够加快我们批量处理文字的速度，也是文字工作者必备技能。")]),t._v(" "),_("p",[t._v("由于这是一个入门级教学，太过复杂的东西，我在这里就不做过多的讲解。更加全面的教程，大家可以前往"),_("a",{attrs:{href:"https://deerchao.cn/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),_("OutboundLink")],1),t._v("继续深造。")]),t._v(" "),_("p",[t._v("这里是一个正则表达式测试工具："),_("a",{attrs:{href:"https://rubular.com/r/b0UoOh4QGf0f5Y",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线测试正则表达式"),_("OutboundLink")],1)]),t._v(" "),_("details",[_("summary",{staticStyle:{"line-height":"2em","font-size":"1em","text-align":"justify","padding-left":"8px"}},[t._v("使用说明"),_("span",{staticStyle:{"font-size":"0.8rem",color:"#95969a"}},[t._v("（点击展开/收起）")])]),t._v(" "),_("div",{staticStyle:{"margin-left":"30px"}},[_("p",[t._v("自行参照以下正则语句进行修改。参照网页上的[Match groups]结果填入app。")]),t._v(" "),_("div",{staticClass:"center-container"},[_("img",{staticStyle:{width:"200px"},attrs:{src:"https://cdn.jsdelivr.net/gh/dreamncn/picBed@master/uPic/2022_02_15_16_51_20_1644915080_1644915080253_37T88S.jpg",alt:"2022_01_01_10_54_40_1641005680_1641005680082_N5Jb26"}})]),_("p",[_("strong",[t._v("示例正则语句：")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("【中国农业银行】(.*)于.*向您尾号(\\d{4})账户完成银联入账交易人民币([\\d\\.]+)，余额([\\d\\.]+)。\n")])])]),_("p",[_("strong",[t._v("测试文本：")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("【中国农业银行】张三于05月20日20:35向您尾号9819账户完成银联入账交易人民币520.00，余额520.00。\n")])])])])]),t._v(" "),_("p",[t._v("我这里只会讲解与自动记账相关的内容，教程中用到的例子也会围绕自动记账展开。")]),t._v(" "),_("p",[t._v("好，现在正式开始我们的教程：")]),t._v(" "),_("h2",{attrs:{id:"什么是正则表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是正则表达式"}},[t._v("#")]),t._v(" 什么是正则表达式")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("在编写处理字符串的程序或网页时，经常会有查找符合某些复杂规则的字符串的需要。"),_("code",[t._v("正则表达式")]),t._v("就是用于描述这些规则的工具。换句话说，正则表达式就是记录文本规则的代码。")])]),t._v(" "),_("p",[t._v("这段文字来自 "),_("code",[t._v("@deerchao")]),t._v(" 的"),_("a",{attrs:{href:"https://deerchao.cn/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则表达式30分钟入门教程"),_("OutboundLink")],1),t._v("。虽然这不是最权威的文献，但是作为百度搜索排第一的教程贴，仍然具有相当的参考价值。")]),t._v(" "),_("p",[t._v("从这段话中，我们可以提炼出以下几条信息：")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),_("ol",[_("li",[_("strong",[_("code",[t._v("正则表达式")]),t._v("是用来处理"),_("code",[t._v("字符串")]),t._v("的；")]),_("br"),t._v("\n什么意思？简单点说，什么是"),_("code",[t._v("字符串")]),t._v("？从字面意思上理解，字符串就是"),_("strong",[t._v("由文字符号组成的串")]),t._v("。"),_("code",[t._v("串")]),t._v("有什么特点？串肯定是连在一起的，就像我们吃的羊肉串，每一串肯定不会在中间断成两节。那么字符串也就好理解了，就是"),_("strong",[t._v("连在一起的多个文字符号")]),t._v("。也就是说，我们用正则表达式去找到的东西，一定是连续的。")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("正则表达式")]),t._v("处理的"),_("code",[t._v("字符串")]),t._v("符合某些规律；")]),_("br"),t._v("\n这又是什么意思？符合规律，你可能会说：世界万物，那都是有规律的。没错，但是我们这里讲的规律，没有那么广，他仅仅只是针对字符的规律，而不能够涉及数学运算。这么说可能不够明白，举个例子："),_("br"),t._v("\n我有一大堆的数字，我要找出最后一位是2的数字，这没问题。但是你要是说要找到其中是质数的数字，那么对不起，这超出了正则表达式的能力范围，因为他涉及到了数学运算。")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("正则表达式")]),t._v("仅仅是高级一点的"),_("code",[t._v("查找/替换")]),t._v("；")]),_("br"),t._v("\n上一条其实也说过了，正则表达式不能进行数学运算。其实其他的运算也不行，比如随机数、递增数等等。"),_("br"),t._v("\n那他能干什么呢？答案就是"),_("code",[t._v("查找/替换")]),t._v("。相信大家都知道，查找/替换是先找到一个字符串，然后把他换掉，变成另一个字符串。而正则表达式的作用也是一样，也是先找到字符串，然后换掉它。结合前面我们讲的，那他就必然具备一个特点：替换的结果，一定是来自查找结果或者其他固定的值。这么说可能不明白，举个例子：比如我们找到两个字符串“abcd”，我们对他进行替换，就只能在abcd四个字母里面做文章，或者插进去一些固定的字符，而不能说我第一个变成abcde，第二个变成abcdf，这样是做不到的。")])])]),t._v(" "),_("p",[t._v("看到这里，很多小伙伴可能已经云里雾里，晕头转向了。没关系，"),_("s",[t._v("智商不够可以下辈子再来。")]),t._v(" 接着往下看。")]),t._v(" "),_("p",[t._v("到这里，大家已经对正则表达式有了最基本的了解，接下来，我们就要开始具体的内容了：")]),t._v(" "),_("h2",{attrs:{id:"开始"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),_("p",[t._v("在书写正则规则的时候，我们可能一脸懵逼，到底要从哪里下手？下面我们来看一个例子，带着他一起走进正则的世界。")]),t._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("【湖南农信】您尾号0239的卡于06月09日20时47分向微信转账转出人民币400.00元，当前余额为760.12元。\n")])])]),_("p",[t._v("这是一条银行通知短信，来自“"),_("strong",[t._v("湖南农信")]),t._v("”。那么我们要写一条关于这条短信的规则，该怎么做呢？")]),t._v(" "),_("p",[t._v("🎉毫无疑问，当然得先找到它！")]),t._v(" "),_("p",[t._v("如果按照普通的查找，我们就可以直接将整条短信复制过去，就可以找到了。但是这样我们就满足了吗？当然不行！因为我们有很多"),_("strong",[t._v("类似的")]),t._v("、"),_("strong",[t._v("相同格式的")]),t._v("短信，直接复制显然是无法找到其他短信的，那么怎么办呢？")]),t._v(" "),_("p",[t._v("细心的你可能发现了，短信中有一部分是会变化的，有一部分是不会变化的。我们先把它们分开，把不会变化的部分单独拎出来，这样我们就得到了几个字符串："),_("code",[t._v("【湖南农信】您尾号")]),t._v("、"),_("code",[t._v("的卡于")]),t._v("、"),_("code",[t._v("向")]),t._v("、"),_("code",[t._v("转出人民币")]),t._v("、"),_("code",[t._v("元，当前余额为")]),t._v("、"),_("code",[t._v("元。")]),t._v("。")]),t._v(" "),_("p",[t._v("但是这样就完了吗？当然没有。这几个字符串拼在一起，显然无法找到我们想要的结果，因为它缺少了会变化的部分。我们必须找个东西来代替这些变化的部分，这里我们暂时先用一个任意字符串"),_("code",[t._v(".*")]),t._v("来替代。这样我们就得到了第一个表达式：")]),t._v(" "),_("div",{staticClass:"language-正则表达式 extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("【湖南农信】您尾号.*的卡于.*向.*转出人民币.*元，当前余额为.*元。\n")])])]),_("p",[t._v("这是第一步，我们之后还要对这个式子进行改造。")]),t._v(" "),_("p",[t._v("接下来，跟着我一起，正式开始干货部分的学习：")]),t._v(" "),_("h2",{attrs:{id:"_1-元字符与转义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-元字符与转义"}},[t._v("#")]),t._v(" 1.元字符与转义")]),t._v(" "),_("p",[t._v("元字符——顾名思义，它是一个字符，能够代指一定范围内所有字符的代称。例如前文提到的，能够代指任意字符串的"),_("code",[t._v(".*")]),t._v("，其实是由两个部分组成的，一个是"),_("code",[t._v(".")]),t._v("，第二个是"),_("code",[t._v("*")]),t._v("。"),_("code",[t._v(".")]),t._v("代表的是一个任意字符，"),_("code",[t._v("*")]),t._v("下一节我们会讲到。下面是一些元字符的对照表：\n")]),_("details",{attrs:{open:"open"}},[_("summary",{staticStyle:{"line-height":"2em","font-size":"1.2em","text-align":"justify","padding-left":"0.5em"}},[_("b",[t._v("表1-1     元字符对照表")]),_("span",{staticStyle:{"font-size":"0.8rem",color:"#95969a"}},[t._v("（点击展开/收起）")])]),_("p"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("代码")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v(".")])]),t._v(" "),_("td",[t._v("匹配除换行符以外的任意字符")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\w")])]),t._v(" "),_("td",[t._v("匹配字母或数字或下划线或汉字")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\s")])]),t._v(" "),_("td",[t._v("匹配任意的空白符")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\d")])]),t._v(" "),_("td",[t._v("匹配数字")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\b")])]),t._v(" "),_("td",[t._v("匹配单词的开始或结束")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("^")])]),t._v(" "),_("td",[t._v("匹配字符串的开始")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("$")])]),t._v(" "),_("td",[t._v("匹配字符串的结束")])])])])]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("p",[t._v("这里需要特别提到的是后面三个："),_("code",[t._v("\\b")]),t._v("、"),_("code",[t._v("^")]),t._v("、"),_("code",[t._v("$")]),t._v("，它们都是匹配开始和结束。但是需要注意的是：这里的开始和结束仅仅是一个标识，标明起始位置，而不是代表第一个字符。而"),_("code",[t._v("^")]),t._v("、"),_("code",[t._v("$")]),t._v("所代表的“字符串”，其实在一般情况下应当是“行”。所谓行的概念相当于自然语言中的段落，一个换行符就是一行。")]),t._v(" "),_("p",[t._v("元字符的问题解决了，但是新的问题来了：假如我需要搜索“^”、“$”、“.”等这些元字符本身的内容怎么办？直接写肯定不行，因为他会被解释成他代表的元字符的含义。那么怎么办呢？")]),t._v(" "),_("p",[t._v("答案很简单："),_("span",{staticStyle:{color:"#ff8833","font-size":"1.2em","font-weight":"bold"}},[t._v("转义")])]),t._v(" "),_("p",[t._v("我们可以在元字符前面加上"),_("code",[t._v("\\")]),t._v("，使其代表元字符本身。比如要匹配“^”，就在前面加"),_("code",[t._v("\\")]),t._v("，写成"),_("code",[t._v("\\^")]),t._v("，这样就完成了转义。当然查找“\\”也是一样，写成"),_("code",[t._v("\\\\")]),t._v("即可。")])]),t._v(" "),_("details",[_("summary",{staticStyle:{"line-height":"2em","font-size":"1.2em","text-align":"justify","padding-left":"0.5em"}},[_("b",[t._v("表1-2 转义字符对照表")]),_("span",{staticStyle:{"font-size":"0.8rem",color:"#95969a"}},[t._v("（点击展开/收起）")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("字符")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("转义")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字符")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("转义")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("字符")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("转义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v(".")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\.")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("*")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\*")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("+")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\+")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("?")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\?")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("!")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\!")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("*"),_("em",[t._v("*")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\\\")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("$")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\$")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("^")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\^")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\/")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("[")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\[")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("]")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\]")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("{")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\{")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("}")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\}")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("(")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\(")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v(")")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\)")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("-")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("code",[t._v("\\-")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}}),t._v(" "),_("td",{staticStyle:{"text-align":"center"}}),t._v(" "),_("td",{staticStyle:{"text-align":"center"}}),t._v(" "),_("td",{staticStyle:{"text-align":"center"}})])])])]),t._v(" "),_("h2",{attrs:{id:"_2-重复"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-重复"}},[t._v("#")]),t._v(" 2.重复")]),t._v(" "),_("p",[t._v("前文我们提到过"),_("code",[t._v(".*")]),t._v("代表任意字符串，前一节我解释了"),_("code",[t._v(".")]),t._v("，这一节我们来解释"),_("code",[t._v("*")]),t._v("。"),_("code",[t._v("*")]),t._v("其实就是一个重复次数的限定符，用来描述前一个字符重复匹配任意次，包括0次。所以"),_("code",[t._v(".*")]),t._v("就是任意字符重复任意次，也就是任意字符串。")]),t._v(" "),_("p",[t._v("当然，有重复任意次，也就有其他次数，请看下表：")]),t._v(" "),_("details",{attrs:{open:"open"}},[_("summary",{staticStyle:{"line-height":"2em","font-size":"1.2em","text-align":"justify","padding-left":"0.5em"}},[_("b",[t._v("表2-1 限定符对照表")]),_("span",{staticStyle:{"font-size":"0.8rem",color:"#95969a"}},[t._v("（点击展开/收起）")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("代码/语法")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("*")])]),t._v(" "),_("td",[t._v("重复零次或更多次")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("+")])]),t._v(" "),_("td",[t._v("重复一次或更多次")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("?")])]),t._v(" "),_("td",[t._v("重复零次或一次")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("{n}")])]),t._v(" "),_("td",[t._v("重复n次")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("{n,}")])]),t._v(" "),_("td",[t._v("重复n次以上（包括n次）")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("{n,m}")])]),t._v(" "),_("td",[t._v("重复n到m次")])])])])]),t._v(" "),_("p",[t._v("到这里，我们就可以继续改造前面的例子了：")]),t._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("【湖南农信】您尾号0239的卡于06月09日20时47分向微信转账转出人民币400.00元，当前余额为760.12元。\n")])])]),_("p",[t._v("我们可以观察到：尾号部分是由4个数字组成，那么我们就可以写成"),_("code",[t._v("\\d{4}")]),t._v("。同样的，金额部分是由"),_("strong",[t._v("一串数字+“.”+两个数字")]),t._v("组成，那么我们就可以写成"),_("code",[t._v("\\d+\\.\\d{2}")]),t._v("。")]),t._v(" "),_("p",[t._v("这样我们就得到了新的表达式：")]),t._v(" "),_("div",{staticClass:"language-正则表达式 extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("【湖南农信】您尾号\\d{4}的卡于.*向.*转出人民币\\d+\\.\\d{2}元，当前余额为\\d+\\.\\d{2}元。\n")])])]),_("h2",{attrs:{id:"_3-捕获组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-捕获组"}},[t._v("#")]),t._v(" 3.捕获组")]),t._v(" "),_("p",[t._v("重点来了，这一步我们将会把短信中我们需要的部分提取出来。")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),_("p",[t._v("使用小括号指定一个子表达式后，匹配这个子表达式的文本(也就是此分组捕获的内容)可以在表达式或其它程序中作进一步的处理。")]),t._v(" "),_("p",[t._v("默认情况下，每个分组会自动拥有一个组号，规则是：从左向右，以分组的左括号为标志，第一个出现的分组的组号为1，第二个为2，以此类推。")])]),t._v(" "),_("p",[t._v("这样我们就能够获取到子表达式匹配的内容了，但是我们怎样去取得它呢？只需要在替换式中写上$+组号即可，比如"),_("code",[t._v("$1")]),t._v("、"),_("code",[t._v("$2")]),t._v("。")]),t._v(" "),_("p",[t._v("那么下面我们来看之前的例子：")]),t._v(" "),_("div",{staticClass:"language-正则表达式 extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("【湖南农信】您尾号\\d{4}的卡于.*向.*转出人民币\\d+\\.\\d{2}元，当前余额为\\d+\\.\\d{2}元。\n")])])]),_("p",[t._v("这是我们写好的表达式，我们现在需要提取出以下内容（仅作示例，并不与自动记账完全相同）：")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("ul",[_("li",[t._v("账户名称：（格式为"),_("em",[t._v("银行名（尾号）")]),t._v("）")]),t._v(" "),_("li",[t._v("金额：")]),t._v(" "),_("li",[t._v("资金流向：")]),t._v(" "),_("li",[t._v("币种：")])])]),t._v(" "),_("p",[t._v("那么第一步，我们先把需要的内容()括起来：")]),t._v(" "),_("div",{staticClass:"language-正则表达式 extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("【(湖南农信)】您尾号(\\d{4})的卡于.*向(.*)转出(人民币)(\\d+\\.\\d{2})元，当前余额为\\d+\\.\\d{2}元。\n")])])]),_("p",[t._v("第二步就是提取内容：")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("ul",[_("li",[t._v("账户名称："),_("code",[t._v("$1（$2）")])]),t._v(" "),_("li",[t._v("金额："),_("code",[t._v("$5")])]),t._v(" "),_("li",[t._v("资金流向："),_("code",[t._v("$3")])]),t._v(" "),_("li",[t._v("币种："),_("code",[t._v("$4")])])])]),t._v(" "),_("p",[t._v("这样，就完成了。")]),t._v(" "),_("h2",{attrs:{id:"_4-字符类、反义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-字符类、反义"}},[t._v("#")]),t._v(" 4.字符类、反义")]),t._v(" "),_("p",[t._v("前面我们说到了元字符，我们可以轻松的找到“数字”，只要用"),_("code",[t._v("\\d")]),t._v("就行。但是如果我需要寻找"),_("em",[t._v("2-5")]),t._v("之间的数字，或者"),_("em",[t._v("13568")]),t._v("这些数字，该怎么办呢？")]),t._v(" "),_("p",[t._v("方法很简单，只要把它们用中括号"),_("code",[t._v("[]")]),t._v("括起来就好，这个就叫做“"),_("strong",[t._v("字符类")]),t._v("”。他能匹配到中括号内所有的字符。")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("值得注意的是")]),t._v(" "),_("p",[t._v("一个字符类仅能匹配一个字符，如果需要匹配多次，需要使用重复限定符。")]),t._v(" "),_("p",[t._v("而我买需要寻找除了 "),_("em",[t._v("135")]),t._v(" 之外的所有字符呢？这时我们就需要用到"),_("strong",[t._v("反义")]),t._v("。")])]),t._v(" "),_("p",[t._v("字符类的反义很简单，只需要在中括号内加上一个"),_("code",[t._v("^")]),t._v("即可，例如"),_("code",[t._v("[^135]")]),t._v("。")]),t._v(" "),_("p",[t._v("而一些元字符的反义如"),_("code",[t._v("\\d")]),t._v("、"),_("code",[t._v("\\w")]),t._v("、"),_("code",[t._v("\\b")]),t._v("、"),_("code",[t._v("\\s")]),t._v("这些，也很简单，将字母改成大写即可。")]),t._v(" "),_("details",{attrs:{open:"open"}},[_("summary",{staticStyle:{"line-height":"2em","font-size":"1.2em","text-align":"justify","padding-left":"0.5em"}},[_("b",[t._v("表4-1 反义对照表")]),_("span",{staticStyle:{"font-size":"0.8rem",color:"#95969a"}},[t._v("（点击展开/收起）")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("代码/语法")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("\\W")])]),t._v(" "),_("td",[t._v("匹配任意不是字母，数字，下划线，汉字的字符")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\S")])]),t._v(" "),_("td",[t._v("匹配任意不是空白符的字符")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\D")])]),t._v(" "),_("td",[t._v("匹配任意非数字的字符")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\B")])]),t._v(" "),_("td",[t._v("匹配不是单词开头或结束的位置")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("[^x]")])]),t._v(" "),_("td",[t._v("匹配除了x以外的任意字符")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("[^aeiou]")])]),t._v(" "),_("td",[t._v("匹配除了aeiou这几个字母以外的任意字符")])])])])]),t._v(" "),_("h2",{attrs:{id:"_5-分支条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-分支条件"}},[t._v("#")]),t._v(" 5.分支条件")]),t._v(" "),_("p",[t._v("回到前面的例子，假如我们的银行卡中有三种货币：人民币、美元、津巴布韦币。他们的短信通知格式是一样的，那我们该怎么做呢？")]),t._v(" "),_("p",[t._v("这里我们就可以用到分支条件。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("正则表达式里的分枝条件指的是有几种规则，如果满足其中任意一种规则都应该当成匹配，具体方法是用"),_("code",[t._v("|")]),t._v("把不同的规则分隔开。")])]),t._v(" "),_("p",[t._v("所以我们就可以写成"),_("code",[t._v("人民币|美元|津巴布韦币")]),t._v("。")]),t._v(" "),_("p",[t._v("将这个子表达式整合进规则里面：")]),t._v(" "),_("div",{staticClass:"language-正则表达式 extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("【(湖南农信)】您尾号(\\d{4})的卡于.*向(.*)转出(人民币|美元|津巴布韦币)(\\d+\\.\\d{2})元，当前余额为\\d+\\.\\d{2}元。\n")])])]),_("h2",{attrs:{id:"结语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),_("p",[t._v("正则表达式简单版教程到这里就结束了，可能有一点虎头蛇尾的感觉。但是，相信大家如果从头到尾看下来，看到后面已经不需要太多的解释也能够看得明白。")]),t._v(" "),_("p",[t._v("本次的教程还有很多的内容没有讲到，但在自动记账的规则书写中应该是够用了。不过如果去到其他领域，这些显然就不够用，有兴趣的朋友可以访问这篇："),_("a",{attrs:{href:"https://deerchao.cn/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则表达式30分钟入门教程"),_("OutboundLink")],1),t._v("。里面有非常全面、详细的正则教程，几乎涵盖了正则表达式的所有内容。")]),t._v(" "),_("p",[t._v("当然，也可以访问 "),_("strong",[t._v("@太公摘花")]),t._v("大佬专门录制的"),_("a",{attrs:{href:"https://pan.ankio.net/%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则表达式教程"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"网上的资源及本文参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网上的资源及本文参考文献"}},[t._v("#")]),t._v(" 网上的资源及本文参考文献")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://deerchao.cn/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则表达式30分钟入门教程"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/regular-expressions",target:"_blank",rel:"noopener noreferrer"}},[t._v("微软的正则表达式教程"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.text.regularexpressions.regex?view=net-5.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Regex类(微软文档)"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"http://www.regular-expressions.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("专业的正则表达式教学网站(英文)"),_("OutboundLink")],1)])]),t._v(" "),_("details",[_("summary",{staticStyle:{"line-height":"1em","font-size":"1rem","text-align":"justify","padding-left":"0.5em"}},[t._v("正则表达式测试工具"),_("span",{staticStyle:{"font-size":"0.8rem",color:"#95969a"}},[t._v("（点击展开/收起）")])]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://rubular.com/r/b0UoOh4QGf0f5Y",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线测试正则表达式1"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://deerchao.cn/tools/wegester/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线测试正则表达式2"),_("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=a.exports}}]);