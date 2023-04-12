## 开运算与闭运算

### 腐蚀运算

用于消除边界点，使斑块边界向内部收缩，让“胖子”变“瘦子”可以让斑块之间区分的更加清楚。
下图是个例子：
原始图：![原图](/matlab/P3E.png "原图") 腐蚀：![原图](/matlab/P3E1.png "腐蚀")
具体的算法是这样的：先定义一个结构元素 B（就是类似卷积运算中卷积核的东西），将 B 在图像 A 中滑动。如果在 A 的某个像元点上，B 的结构正好能完全包含在 A 中，则将 A 的那个点赋值为 1。
具体如图所示：
!['原理'](/matlab/P3E0.png)
代码：

> F = imerode(D,strel('arbitrary',eye(3)));

### 膨胀运算

膨胀运算跟腐蚀运算正好相反，会让斑块边界向外部扩张，让“瘦子”膨胀成“胖子”。
下图是个例子：
原始：![](/matlab/P3E.png) 膨胀：![](/matlab/P3E2.png)

### 开运算

**开运算**：用同样的结构元素 B，对同一个数据 A 进行先腐蚀后膨胀的运算叫开运算
**意义：**用来消除小物体、在纤细点处分离物体、平滑较大物体的边界的同时并不明显改变其面积。
下图是个例子：
原始：![](/matlab//P3E.png) 开运算：![](/matlab/P3E3.png)

> 先腐蚀再膨胀
> H = imerode(D,strel('arbitrary',eye(2)));
> H = imdilate(H,strel('rectangle',[3 3]));

### 闭运算

**闭运算** :用同样的结构元素 B，对同一个数据 A 进行先膨胀后腐蚀的运算叫闭运算
**意义**:用来填充物体内细小空洞、连接邻近物体、平滑其边界的同时并不明显改变其面积。
下图是个例子：
原始图像：![](/matlab/P3E.png) 闭运算：![](/matlab/P3E4.png)

> 先膨胀再腐蚀

## 连通区域分析

在图像中,每个像素周围有 8 个相邻像素.常见的邻接关系有 2 种:4 邻接与 8 邻接.
对 4 邻接来说,某个像素有 4 个邻接像素(上下左右);
对 8 邻接来说,每个像素则有 8 个邻接像素(多了通过对角相邻的像素)
![](/matlab/Ltpng.png)
如果像素点 A 与 B 邻接且二者的值相同,则称 A 与 B"连通";并且若 A 与 B 连通,B 与 C 连通,则 A 与 C 连通.从视觉上看来,彼此连通的点形成了 1 个区域.这样 1 个由所有彼此连通的前景像素点构成的图像区域,称为 1 个"**连通区域**"(Connected Component).
如下图中包含 3 个 4 连通区域或 2 个 8 连通区域
![](/matlab/lt1png.png)

### 连通区域分析

背景像素仍标记为原来的值(如 0);而将前景像素分为不同的连通区域,相同连通区域中的点标记为相同的值,不同连通区域中的点则标记为不同的值(如 1,2...).连通区域标记算法有很多种,有的可以 1 次遍历图像完成标记,有的则需要 2 次或更多次遍历,这就造成了不同的算法时间效率的差别

连通区域分析：

> [L, num] = bwlabel(BW, n)

BW 是二值图像，n 是连接方式（默认为 8 连通），L 是标记矩阵，num 是连通区域数量。
L 中的每个元素表示 BW 对应位置的像素所在连通区域的标签。如果一个像素不属于任何连通区域，则其标签为 0。

> [L, num] = bwlabel(E, 8);

计算每个连通区域的属性信息,regionprops 测量图像区域的属性

> stats = regionprops(L,properties) 测量标注图像 L 中每个标注区域的一组属性。
> stats = regionprops(L, 'Area');

获取所有连通区域的面积

> areas = [stats.Area];

#### 连通区域分析 matlab 代码

> function [L] = ConnectivityAreaAnalysis(E)
> [L, ~] = bwlabel(E, 8);
> stats = regionprops(L, 'Area');
> areas = [stats.Area];
> Smin = 3;
> Smax = 15;
> idx = find(areas < Smin| areas > Smax );
> for i = 1:length(idx)
> L(L == idx(i)) = 0;
> end
> end

## 视频分割

matlab 代码实现：

> clear;
> clc;
> name = 'videoplayback.mp4';
> outfilename = [name(1:end-4),'_crop.avi'];
> % 分割视频
> Crop(name,outfilename);
> function Crop(name,outfilename)
> % 读取视频
> % % name = 'videoplayback.mp4';
> vid = VideoReader(name);
> %输出文件名字
> % outfilename = [name(1:end-4),'_crop.avi'];
> % 读取第一帧
> frame = read(vid,1);
> % 显示第一帧图像
> imshow(frame);
> %
> % h = imrect 开始在当前轴上交互式放置矩形，并返回一个 imrect 对象。
> % h = imrect;
> % roi = drawrectangle 创建一个 Rectangle 对象，并允许在当前轴上交互式绘制矩形感兴趣区域 （ROI）。
> roi = imrect;
> %获取手动标选框的坐标
> pos = getPosition(roi);
> % 在图像上显示选框的位置 红色
> rectangle('Position', pos, 'LineWidth', 2, 'EdgeColor', 'r');
>
> x = pos(1); % 选框左上角 x 坐标
> y = pos(2); % 选框左上角 y 坐标
> w = pos(3); % 选框宽度
> h = pos(4); % 选框高度
>
> % 删除该手动选框
> delete(roi);
>
> % 创建视频写入对象
> writerObj = VideoWriter(outfilename,'Uncompressed AVI');
> % 设置帧率
> writerObj.FrameRate = vid.FrameRate;
>
> open(writerObj);
> % 遍历每一帧图像
> while hasFrame(vid)
> % 读取当前帧图像
> frame = readFrame(vid);
> % 裁剪视频
> I_roi = imcrop(frame, [x, y, w, h]);
>
> % 将裁剪后的图像写入新的视频文件
> writeVideo(writerObj, I_roi);
> end
> close(writerObj);
> end

## 选取随机 3 帧制作表格进行分析

### 选取的 3 帧图像

第 124 帧
原始： ![](/image/0124.png) 处理： ![](/image/124.png)

第 532 帧
原始： ![](/image/0532.png) 处理： ![](/image/532.png)

第 1390 帧
原始： ![](/image/01390.png) 处理：![](/image/1390.png)

### Ground Truth

在机器学习中 **ground truth** 表示有监督学习的训练集的分类准确性，用于证明或者推翻某个假设。有监督的机器学习会对训练数据打标记，试想一下如果训练标记错误，那么将会对测试数据的预测产生影响，因此这里将那些**正确打标记的数据成为 ground truth**。

### 混淆矩阵

Precision（精确率）、Recalll（召回率）、F1-score 主要用于分类（二分类、多分类）模型，比如对话系统中的意图分类，金融风控中识别欺诈用户的反欺诈模型。

一般我们会用准确度（Accuracy）评估模型好坏，但准确度并不总是衡量分类性能的重要指标，准确度、召回率和 F1-score 在评测分类模型性能起到非常重要的作用。为了帮助确定这些指标的重要性，我们将使用**混淆矩阵**，这是一种可视化分类模型性能的技术。
| |预测 1|预测 0|
|---|---|---|
|真实：1| True Positive (TP) |False Negative (FN)|
|真实：0| False Poisitive (FP)| False Poisitive (FP)|
**True Positives (TP)：** 正确分类为阳性的阳性实例数。即该数据的真实值为正例，预测值也为正例的情况；
例如，当一个用户实际上是欺诈用户时，预测它是欺诈用户。

**False Positives (FP)：** 错误分类为阳性的阴性实例数。被错误预测的正例。即该数据的真实值为反例，但被错误预测成了正例的情况；
例如，当一个用户实际上是欺诈用户时，预测它不是欺诈用户。

**True Negatives (TN)：** 正确分类为否定的否定实例数。即该数据的真实值为反例，预测值也为反例的情况;
例如，当一个用户实际上不是欺诈用户时，预测它不是欺诈用户。

**False Negatives (FN)：** 错误分类为阴性的阳性实例数。即该数据的真实值为正例，但被错误预测成了反例的情况。
例如，当一个用户实际上是欺诈用户时，预测它不是欺诈用户。

### Precision（精确率）

> pre=TP/(Tp+fp)

### 召回率（Recall）

召回是正确预测的阳性类别与所有实际阳性样本的比率：
![](/matlab/recall.png)
它衡量了我们能够正确召回的实际正例的数量。当我们认为假阴性比假阳性更重要时，召回很重要（例如，癌症检测）。

这种权衡试图解决的问题以及偏向误报而非误报的任何固有后果（反之亦然）。

以癌症为例：设计一个具有高召回率的模型可以识别大多数癌症患者（真阳性），挽救他们的生命，但代价是将健康个体误诊为癌症（假阳性），让他们接受昂贵而危险的治疗，如化疗。另一方面，设计一个精确的模型可以得到可靠的诊断（即，预测患有癌症的人很可能确实患有癌症），但代价是无法识别每个患有该疾病的人（假阴性），从而对那些未被诊断的人造成潜在的致命后果。（因为假阴性会导致死亡，我们的分类阈值可能会被设置为优化查全率而非查准率）。

因此，重要的是要提前理解和决定哪些是更重要的，是误报还是漏报，调查特定数据集的折衷情况，并相应地设计模型。

### F1-score

考虑到这种相互竞争的权衡，拥有一个同时考虑精度和召回率的单一性能指标将
非常重要。F1 score 是精确率和召回率的一个加权平均。

**F1-score**同时考虑了精确度和召回率。通过取两个指标的调和平均值来计算：
![F1](/matlab/F1.png)
在精度或召回率较差的情况下，F1-score 也会较差。只有当准确率和召回率都有很好的表现时，F1-score 才会很高。

### 表格

| 序号 | 帧序号 | Ground Truth | Precision | Recall | F1-score |
| ---- | ------ | ------------ | --------- | ------ | -------- |
| 1    |        |              |           |        |          |
| 2    |        |              |           |        |          |
| 3    |        |              |           |        |          |

### python 实现

> from sklearn.metrics import precision_score, recall_score, f1_score
> y_true = [0, 1, 0, 1, 0, 1]
> y_pred = [0, 0, 0, 1, 0, 1]
>
> #tp = 2 正确分类为阳性的阳性实例数
>
> #fp = 0 错误分类为阳性的阴性实例数
>
> #fn = 1 错误分类为阴性的阳性实例数
>
> #TN = 3 正确分类为否定的否定实例数
>
> #precision = Tp/(Tp+Fp) = 2/(2 + 0) = 1
>
> #recall = Tp/(Tp+Fn) = 2/(2+1) = 0.666
>
> #f1 = 2 _ (precision) _ (recall) / (precision+ recall) = (2 _ 1 _ 2/3 )/ (1 + 1/3) =(4/3) / (5/3) = 0.8
>
> print('binary------------')
> print("precision: {}".format(precision_score(y_true, y_pred, average='binary')))
> print("recall: {}".format(recall_score(y_true, y_pred, average='binary')))
> print("f1: {}".format(f1_score(y_true, y_pred, average='binary')))

结果：

> binary------------
> precision: 1.0
> recall: 0.6666666666666666
> f1: 0.8
>
> 进程已结束,退出代码 0
