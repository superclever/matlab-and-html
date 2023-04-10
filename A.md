# Markdown

## 标题语法

要创建标题，请在单词或短语前面添加井号 (**#**) 。# 的数量代表了标题的级别。例如，添加三个 # 表示创建一个三级标题 (**< h3 >**) (例如：**### My Header**)。
|markdown 语法|HTML|预览效果|
|----|----|----|
|# Heading level 1|< h1>Heading level 1</ h1>|<h1>Heading level 1</h1>|
|## Heading level 2| < h2>Heading level 2</ h2>|<h2>Heading level 2</h2>|
|### Heading level 3| < h3>Heading level 3</ h3>|<h3>Heading level 3</h3>|
|#### Heading level 4| < h4>Heading level 4</ h4>|<h4>Heading level 4</h4>|
|##### Heading level 5| < h5>Heading level 5</ h5>|<h5>Heading level 5</h5>|
|###### Heading level 6| < h2>Heading level 6</ h2>|<h6>Heading level 6</h6>|

## Markdown 强调语法

### 粗体（Bold）

要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。
| markdown | HTML | 预览效果 |
| --------------------------- | ------------------------------------------ | --------------------------------------- |
| I just love ** bold text**. | I just love < strong >bold text</ strong>. | I just love <strong>bold text</strong>. |

## Markdown 表格

要添加表，请使用三个或多个连字符（ **---** ）创建每列的标题，并使用管道（ **|** ）分隔每列。您可以选择在表的任一端添加管道。

<html>
| Syntax | Description |

| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

</html>

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

## Markdown 引用语法

要创建块引用，请在段落前添加一个 > 符号。

<html>> Dorothy followed her through many of the beautiful rooms in her castle.
</html>

渲染效果如下所示：

> Dorothy followed her through many of the beautiful rooms in her castle.

### 嵌套块引用

块引用可以嵌套。在要嵌套的段落前添加一个 >> 符号。

<html>> Dorothy followed her through many of the beautiful rooms in her castle.<br>
><br>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.</html>

效果：

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Markdown 列表语法

### 有序列表

要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

1. First item
2. Second item
3. Third item
   1. Indented item
   2. Indented item
4. Fourth item

### 无序列表

要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 ( \ \* ) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。

- First item
- Second item
- Third item
  - Indented item
  - Indented item
- Fourth item

## Markdown 代码语法

要将单词或短语表示为代码，请将其包裹在反引号 (` ) 中。
|Markdown 语法 |HTML | 预览效果
|---|---|---|
|`` At the command prompt, type  `nano` . `` |  `At the command prompt, type <code>nano</code>`. |At the command prompt, type `nano`.|

### 转义反引号

如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(` )中。
|Markdown 语法 |HTML | 预览效果
|---|---|---|
|``Use  `code` in your Markdown file.``|`<code>Use `code`in your Markdown file.</code>`|<code>Use`code` in your Markdown file.</code>|

## Markdown 分隔线语法

> `---`
>
> `***`
>
> `___`

效果：

Try to put a blank line before...

---

...and after a horizontal rule.

## Markdown 链接语法

链接文本放在中括号内，链接地址放在后面的括号中，链接 title 可选。

超链接 Markdown 语法代码：

> `[超链接显示名](超链接地址 "超链接title")`

对应的 HTML 代码：

> `<a href="超链接地址" title="超链接title">超链接显示名</a> `

效果：
这是一个链接 [Markdown 语法](https://markdown.com.cn)。

### 给链接增加 Title

链接 title 是当鼠标悬停在链接上时会出现的文字，这个 title 是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

> 这是一个链接 [Markdown 语法](https://markdown.com.cn "最好的markdown教程")。

### 网址和 Email 地址

使用尖括号可以很方便地把 URL 或者 email 地址变成可点击的链接。

> `<https://markdown.com.cn>`
>
> `<fake@example.com>`

渲染效果如下：

https://markdown.com.cn
fake@example.com

### 带格式化的链接

**强调** 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

> `I love supporting the **[EFF](https://eff.org)**.`
>
> `This is the _[Markdown Guide](https://www.markdownguide.org)_.`
>
> `` See the section on [`code`](#code).``

效果：

> I love supporting the **[EFF](https://eff.org)**.
> This is the _[Markdown Guide](https://www.markdownguide.org)_.
> See the section on [`code`](#code).

### 链接最佳实践

不同的 Markdown 应用程序处理 URL 中间的空格方式不一样。为了兼容性，请尽量使用%20 代替空格。
效果：

> [link](https://www.example.com/my%20great%20page)

## Markdown 图片语法

要添加图像，请使用感叹号 (!), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片 Markdown 语法代码：
`![图片alt](图片链接 "图片title")。`
对应的 HTML 代码：
`<img src="图片链接" alt="图片alt" title="图片title">`

效果：

> ![这是图片](/fantasy%20World%20Tree.jpg "Magic Gardens")

### 链接图片

给图片增加链接，请将图像的 Markdown 括在方括号中，然后将链接添加在圆括号中。

> [![沙漠中的岩石图片](/fantasy%20World%20Tree.jpg "Shiprock")](https://markdown.com.cn)

## 复制和粘贴表情符号

在大多数情况下，您可以简单地从 [Emojipedia](https://emojipedia.org/ "Emojipedia") 等来源复制表情符号并将其粘贴到文档中。许多 Markdown 应用程序会自动以 Markdown 格式的文本显示表情符号。从 Markdown 应用程序导出的 HTML 和 PDF 文件应显示表情符号。
Tip: 如果您使用的是静态网站生成器，请确保将 HTML 页面编码为 UTF-8。

### 使用表情符号简码

一些 Markdown 应用程序允许您通过键入表情符号短代码来插入表情符号。这些以冒号开头和结尾，并包含表情符号的名称。

> 真好笑！ :joy:

## markdown 删除线

您可以通过在单词中心放置一条水平线来删除单词。结果看起来像这样。此功能使您可以指示某些单词是一个错误，要从文档中删除。若要删除单词，请在单词前后使用两个波浪号~~。

> `~~世界是平坦的。~~ 我们现在知道世界是圆的。`

呈现的输出如下所示：

> ~~世界是平坦的。~~ 我们现在知道世界是圆的。
