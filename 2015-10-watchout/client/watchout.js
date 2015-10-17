// constants for the game environment
var width = 750;
var height = 500;
var nAsteroids = 30;
var padding = 10;


var gameboard = d3.select('body').append('svg')
    .attr('class', 'gameboard')
    .attr('width', width)
    .attr('height', height)
    .style('padding', padding)
    .style('background-color', 'black')
  .append('g');

var createAsteroids = function(n) {
  for (var i = 1; i <= n; i++) {
    var x = Math.random() * (width - 25);
    var y = Math.random() * (height - 25);
    d3.select('.gameboard').append('svg').append('image')
      .attr('width', '25px')
      .attr('height', '25px')
      .attr('x', x)
      .attr('y', y)
      .attr('class', 'asteroid')
      .attr('xlink:href', 'asteroid.png');
  }
};

createAsteroids(nAsteroids);


setInterval(d3.selectAll('.asteroid').attr('x', Math.random() * (width)), 1500)
