var circ = {};
var circ_min = 25;
var circ_max;
circ.posx = 0;
circ.posy = 0;
circ.size1 = 0;
circ.size2 = 0;
circ.size3 = 0;
circ.sposx = 0;
circ.sposy = 0;
circ.size4 = 0;
circ.colr = 0;

function setup(){
  createCanvas(windowWidth, windowHeight)
  background(0);
  circ_max = width - 50;
}
function draw(){

push();
frameRate(100)
  fill('rgb(85, 0, 230)');
  ellipse(circ.posx, circ.posy, circ.size1)

  fill('rgb(0, 255, 0)');
  ellipse(circ.posx, circ.posy, circ.size2)

  fill('rgb(10, 10, 10)');
  ellipse(circ.posx, circ.posy, circ.size3, circ.size3)

  fill('rgb(255, 100, 0)');
  ellipse(circ.sposx, circ.sposy, circ.size4)

circ.posx = round(random(-770,770));
circ.posy = round(random(-770, 770));
circ.size1 = sq(random(5,15));
circ.size2 = floor(random(5,150));
circ.size3 = sq(random(5,15));
circ.sposx = circ.posx * 2 %100;
circ.sposy = circ.posy - 100;
circ.size4 = circ.size1 + circ.size2/4;
circ.colr = round(random(0,255));

pop();

var circ_size = map(mouseX%600, mouseY%600, width, circ_min, circ_max );

    push();
    translate(windowWidth/2, windowHeight/2)
    // draw a circle, based on mouseX
    fill(circ.colr);
    ellipse(500, 0, circ_size);
    pop();


}
