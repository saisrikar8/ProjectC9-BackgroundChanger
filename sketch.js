var r = 0;
var g = 0;
var b = 0;
var b1, b2;

function setup() {
  createCanvas(400,400);

  b1 = createButton("RED");
  b1.position(100, 50);
  
  b2 = createButton("GREEN");
  b2.position(250, 50);
}
function draw(){
  b1.mousePressed(red_bg);
  b2.mousePressed(green_bg);
  background(r,g,b);
}

function red_bg(){
  r = 255;
  g = 0;
}

function green_bg(){
  r = 0;
  g = 255;
}
