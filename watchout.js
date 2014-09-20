// var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var width = 960,
    height = 400;
    radius = 10;
    enemiesAmount = 30;

var svg = d3.select(".scoreboard").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    // .attr("transform", "translate(32," + (height / 2) + ")");

var hero = svg.append('circle')
    .attr('cx', width/2)
    .attr('cy', height/2)
    .attr('r', radius)
    .attr('class', 'hero')


var positions = function(n){
  var data = [];
  for (var i = 0; i< n; i++){
    cx = Math.random() * (width -radius);
    cy = Math.random() * height - radius;
    data.push([cx, cy]);
  }
  return data;
}

var update = function(data){

  var enemies = svg.selectAll('enemies')
      .data(data)

  enemies.enter().append('circle')
      .attr('r', radius)
      .attr('class', 'enemies')
      .attr('cx', function(d){return d[0]})
      .attr('cy', function(d){return d[1]})
}

setInterval(function(){
  update(positions(enemiesAmount))
},1000);

//put the hero in the center - append circle (pass the x, y, fill, radius)
//generate new data(n) randomly - each element should have (x,y,radius)
//append enemies - append circle (pass the x, y, fill, radius) with .data(data)
//update position  - function update(data) - setInterval
