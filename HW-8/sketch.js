var offset = 0;
function setup() {
    createCanvas( windowWidth, windowHeight );
}

function draw() {

  background(0);
  strokeWeight(4);
  stroke(random(15));

  var y = 0;
  var x = 0;

  while (x <= width)  {
    fill(0, random(255), random(255));
    ellipse(x, mouseY * 1.5, 25, 25);
    x = x + 50;
  }

  for (var x = 0; x <= width; x += 50) {
    fill(random(255), 0, random(255));
    ellipse(mouseX * 1.5, x, 25, 25);
  }

  for (var x = 0; x <= width; x += 50)  {
    fill(random(255), random(255), 0);
    ellipse(mouseY * 2, x, 25, 25);
  }

  for (var x = 0; x <= width; x += 50) {
    for (var y = 0; y <= height; y += 50) {
    fill(random(50), random(50), random(50));
    ellipse(x + offset, y + offset, 25, 25);
  }
  }
  offset = offset + 1;
  if (offset > 50) {
        offset = 0;
    }
    noCursor();
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, 25, 25);
}
