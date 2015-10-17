// constants for the game environment
var width = 750;
var height = 500;
var nAsteroids = 15;
var padding = 10;


var gameboard = d3.select('body').append('svg')
    .attr('class', 'gameboard')
    .attr('width', width)
    .attr('height', height)
    .style('padding', padding)
    .style('background-color', 'black')
  .append('g');

var createAsteroid = function(n) {
  for (var i = 1; i <= n; i++) {
    d3.select('.gameboard').append('svg').append('image')
      .attr('width', '25px')
      .attr('height', '25px')
      .attr('x', 25 * i)
      .attr('y', 25)
      .attr('xlink:href', 'asteroid.png');
  }
};

createAsteroid(nAsteroids);