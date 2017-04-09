window.onload = () => {
  var twChina = [
    {
      name: 'ThoughtWorks中国',
      parent: null,
      children: [
        {
          name: '上海办公室',
          parent: 'ThoughtWorks中国',
          children: [
            {
              name: '张侠',
              parent: '上海办公室'
            },
          ],
        },
        {
          name: '西安办公室',
          parent: 'ThoughtWorks中国',
          children: [
            {
              name: '邱俊涛',
              parent: '西安办公室'
            },
            {
              name: '赵孜洋',
              parent: '西安办公室'
            },
          ],
        },
      ],
    },
  ];

  var width = 1600, height = 900;
  var tree = d3.layout.tree()
      .size([height, width]);

  var nodes = tree.nodes(twChina[0]);

  console.log(nodes);
}
