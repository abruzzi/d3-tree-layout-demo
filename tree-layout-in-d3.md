## D3中的布局器

在D3中，有一类被称为布局器(layout)的特殊的函数（对象）。布局器通过引用一些布局算法，将输入的数据集映射成输出数据，并为输出数据附加上位置信息。

```
layout([data]) => [dataWithPosition]
```

这些附有坐标信息的数据则可以在任何地方使用，并不局限在svg本身上。举个简单的例子，给定我们有ThoughtWorks的一份各种角色的数据集合：

```js
var twers =  [
    {
      "name": "Dev",
      "size": 480,
    },
    {
      "name": "QA",
      "size": 240
    },
    {
      "name": "BA",
      "size": 120
    },
    {
      "name": "PM",
      "size": 60
    },
    {
      "name": "OP",
      "size": 10
    }
]
```

我们通过使用D3提供的饼图布局器`d3.layout.pie()`之后

```js
//通过一些参数定义一个新的布局器的pie
var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
      return d.size;
    });

//使用这个布局器
pie(twers)    
```

D3会生成这样的数据：

```json
[
    {
        "data": {
            "name": "Dev",
            "size": 480
        },
        "value": 480,
        "startAngle": 0,
        "endAngle": 3.3142076345562654,
        "padAngle": 0
    },
    {
        "data": {
            "name": "QA",
            "size": 240
        },
        "value": 240,
        "startAngle": 3.3142076345562654,
        "endAngle": 4.971311451834398,
        "padAngle": 0
    },
    {
        "data": {
            "name": "BA",
            "size": 120
        },
        "value": 120,
        "startAngle": 4.971311451834398,
        "endAngle": 5.799863360473465,
        "padAngle": 0
    },
    {
        "data": {
            "name": "PM",
            "size": 60
        },
        "value": 60,
        "startAngle": 5.799863360473465,
        "endAngle": 6.214139314792998,
        "padAngle": 0
    },
    {
        "data": {
            "name": "OP",
            "size": 10
        },
        "value": 10,
        "startAngle": 6.214139314792998,
        "endAngle": 6.283185307179587,
        "padAngle": 0
    }
]
```

这里的`startAngle`和`endAngle`是指起始和结束的弧度数（饼图是基于2π的圆来划分的，这样弧度数会比较容易绘制）。

### 树布局器

树布局器`d3.layout.tree()`是另外一种常见的布局器，它可以用来计算有层次结构的数据，并为其分配合适的坐标信息。


```js

```

### 路径生成器

#### 贝塞尔曲线

### 其他参考

D3中提供了众多的布局器，其他常用的还有：

- Pie - 饼图生活才能过期
- Bundle（Holten分层绑线算法）
- Force（基于引力的布局算法）
- Treemap（树图）
- Partition（径向的Treemap）
