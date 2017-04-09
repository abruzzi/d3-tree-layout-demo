window.onload = () => {
  var twChina = [
    {
      name: 'ThoughtWorks中国',
      parent: null,
      children: [
        {
          name: '武汉办公室',
          parent: 'ThoughtWorks中国',
          children: [
            {
              name: '王静源',
              parent: '武汉办公室',
            },
          ],
        },
        {
          name: '西安办公室',
          parent: 'ThoughtWorks中国',
          children: [
            {
              name: '邱俊涛',
              parent: '西安办公室',
            },
            {
              name: '赵孜洋',
              parent: '西安办公室',
            },
          ],
        },
      ],
    },
  ];

  var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

  var i = 0, duration = 750, root;

  var tree = d3.layout.tree().size([height, width]);

  var diagonal = d3.svg.diagonal()
   .projection(function(d) { return [d.y, d.x]; });

  var svg = d3
    .select('body')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  root = twChina[0];

  var color = d3.scale.category10();

  draw(root);

  function draw(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(source).reverse(),
        links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * 180;
    });

    // Declare the nodesâ€¦
    var node = svg.selectAll('g.node').data(nodes, function(d, i) {
      return d.id || (d.id = ++i);
    });

    // Enter the nodes.
    var nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', function(d) {
        return 'translate(' + d.y + ',' + d.x + ')';
      });

    var rects = nodeEnter
      .append('rect')
      .attr('width', '100')
      .attr('height', '30')
      .style('fill', function(d, i) {
        return d.children || d._children ? 'steelblue' : color(i);
      })

    var text = nodeEnter
      .append('text')
      .attr('x', 50)
      .attr('dy', 20)
      .attr('text-anchor', 'middle')
      .text(function(d) {
        return d.name;
      })
      .style('fill-opacity', 1);

    var link = svg.selectAll("path.link")
     .data(links, function(d) { return d.target.id; });

     link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", diagonal);
  }
};
