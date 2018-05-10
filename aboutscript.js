
var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var cnv_about;
var c=0;
// var colors_TO_change_In_Sequence = ["blue", "yellow", "pink", "black", "white", "green", "purple", "red", "orange"];
// bg_changer(colors_TO_change_In_Sequence, 1000);

// function bg_changer(color_array, millisecond) {
//   var i = 0;
//   setInterval(function() {
//     $('#change').css("background-color", color_array[(i++) % color_array.length]);
//   }, millisecond);
// }



function setup() {
  cnv_about=createCanvas(windowWidth, 400);
  cnv_about.parent('sine');
  colorMode(HSB);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(255);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  if (c >= 255)  c=0;  else  c++;
  fill(c,255,255);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
  }
}
