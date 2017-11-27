let bubbles = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  let b = new Bubble(width/2, height/2, 10);
  bubbles.push(b);
}

function mouseDragged(){
  let r = random(10, 30);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw(){
  background(random(75,100),0,random(150,200));
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble{
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }

  show(){
    stroke(0,random(255),0);
    strokeWeight(7);
    fill(random(0,30));
    ellipse(this.x, this.y, this.r * 5);
  }
}
