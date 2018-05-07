// function setup(){
//   createCanvas(windowWidth,windowHeight)
// }
//
// function draw(){
//   if(mouseIsPressed){
//     c = color('#00ff00');
//
//     fill(c);
//   }
//   else{
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
//   }

// var currentColor = color('#00ff00');

var cnv;

// function centerCanvas(cnv) {
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }


function setup() {
  cnv = createCanvas(500,500);
  // centerCanvas(cnv);

}

function draw() {
  if(mouseIsPressed){
    fill(255);
  }
  else{
  // use color
    c = color(random(256), random(256), random(256));
   fill(c);
  }
  ellipse(mouseX, mouseY, 80, 80);

}

// void mousePressed() {
//   // change color
//   currentColor = color(random(256), random(256), random(256));
// }
