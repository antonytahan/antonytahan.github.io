var cnv;
// var slider;
// var r=0;
// var g=10;
// var b= 50;
var x = window.matchMedia("(min-width: 600px)");
var white_option= document.getElementById('white_opt');

function setup() {
  cnv = createCanvas(windowWidth,450);
  cnv.parent('canvas');
  // colorMode(HSB, 255);
    // slider has a range between 0 and 255 with a starting value of 127
    // slider = createSlider(0, 255, 127);
    // slider.position(100,100);

  // centerCanvas(cnv);
}
function draw() {

  // if(keyCode===ENTER){
  //    c = color(random(256), random(256), random(256));
  //    fill(c);
  // }
  // if( keyCode===87){
  //   c=color(255);
  //   fill(c);
  // }

  if(mouseIsPressed){
    if (window.matchMedia("(orientation: portrait)").matches) {
    c = color(random(256), random(256), random(256));
    fill(c);
      }
    else{
  fill(255)
    }
  }

  else{
    // if (r >= 255)  r=0;  else  r++;
    //   if (g >= 255)  g=0;  else  g++;
    //   if (b >= 255)  b=0;  else  b++;
    // fill(r,100,100);
    c = color(random(256), random(256), random(256));
    fill(c);
  }
 //  else if(mouseIsPressed){
 //    fill(255);
 //  }
 //  else{
 //  // use color
 //   //  c = color(random(256), random(256), random(256));
 //   // fill(c);
 //   strokeWeight(2);
 // // stroke(slider.value(), 255, 255);
 //   fill(slider.value(), 255, 255, 127);
 //  }
  ellipse(mouseX, mouseY, 80, 80);
}
