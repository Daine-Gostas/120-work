function setup() {
    createCanvas( windowWidth, windowHeight );
}

function draw() {
  noCursor()
  background(0)

push()
//moon sandbox
noStroke()
fill(255, 245, 150);
ellipse(mouseX, mouseY, 100, 100)
//yellow moon
noStroke()
fill(0)
ellipse(mouseX - 25, mouseY - 25, 80, 80)
//crescent
pop()
//moon sandbox end

noStroke()
fill(250);
rect(0, windowHeight/1.10, windowWidth, 200);
//snowy ground

push()
//snowflakes falling sandbox
translate(windowWidth/2, 0)
noStroke()
fill(255);
ellipse(0, mouseX * 0.45, 5, 5)
//middle example snowflake

//***random snowflakes below***

noStroke()
fill(255);
ellipse(25, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

noStroke()
fill(255);
ellipse(50, mouseX * 0.45, 5, 5)

//end of random snowflakes

pop()
//end of snow falling sanbox
}
