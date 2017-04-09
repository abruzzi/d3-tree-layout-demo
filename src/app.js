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
              parent: '武汉办公室'
            }
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
  
  var margin = {top: 20, right: 120, bottom: 20, left: 120},
      width = 960 - margin.right - margin.left,
      height = 800 - margin.top - margin.bottom;

  var i = 0,
      duration = 750,
      root;

  var tree = d3.layout.tree()
      .size([height, width]);

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  root = twChina[0];

  draw(root);

  function draw(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
     links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 180; });

    // Declare the nodesâ€¦
    var node = svg.selectAll("g.node")
     .data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter the nodes.
    var nodeEnter = node.enter().append("g")
     .attr("class", "node")
     .attr("transform", function(d) {
      return "translate(" + d.y + "," + d.x + ")"; });

    nodeEnter.append("circle")
     .attr("r", 10)
     .style("fill", "#fff");

    nodeEnter.append("text")
     .attr("x", function(d) {
      return d.children || d._children ? -15 : 15; })
     .attr("dy", ".35em")
     .attr("text-anchor", function(d) {
      return d.children || d._children ? "end" : "start"; })
     .text(function(d) { return d.name; })
     .style("fill-opacity", 1);
  }
}
