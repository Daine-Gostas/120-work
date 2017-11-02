//creating the objects
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
  noCursor();
  //hidecursor
}
function draw(){

push();
//sandbox for cirlces
frameRate(100)
//fast paced feel
  fill('rgb(85, 0, 230)');
  ellipse(circ.posx, circ.posy, circ.size1)
  //purple circles

  fill('rgb(0, 255, 0)');
  ellipse(circ.posx, circ.posy, circ.size2)
  //green circles

  fill('rgb(10, 10, 10)');
  ellipse(circ.posx, circ.posy, circ.size3, circ.size3)
  //gray circles

  fill('rgb(255, 100, 0)');
  ellipse(circ.sposx, circ.sposy, circ.size4)
  //orange circles

circ.posx = round(random(-770,770));
//random location
circ.posy = round(random(-770, 770));
//random location
circ.size1 = sq(random(5,15));
circ.size2 = floor(random(5,150));
circ.size3 = sq(random(5,15));
circ.sposx = circ.posx * 2 %100;
//keeping orange on left side
circ.sposy = circ.posy - 100;
circ.size4 = circ.size1 + circ.size2/4;
//reacts with other circle sizes
circ.colr = round(random(0,255));
//never quite figured out why it's black and white but i like it
pop();
//end of sandbox for circles

var circ_size = map(mouseX%600, mouseY%600, width, circ_min, circ_max );
//sourced this format from the MARTwebsite to use as an interactive portion of this art
//creates circle that changes with size based on mouse location
//%600 stops circle from getting too big

    // draw a circle, based on mouseX
    fill(circ.colr);
    ellipse(mouseX, mouseY, circ_size);
}
