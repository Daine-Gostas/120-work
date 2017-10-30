function setup() {
//setup fuction created

createCanvas(600,650);
//main canvas created

background('black');
//coloring the canvas to work on
}

function draw(){
//allowing drawing capabilites

push();
//creating the main sandbox for the character
//***Character Sandbox***

translate(300, 300);
//making the main sandbox's grid start from the middle of the canvas

push();
//creating sandbox for body segment
noStroke();
fill('rgb(78, 95, 245)')
//favorite color code (darker)
ellipse(0, 150, 300, 350)
//creating the body

noStroke();
fill('rgb(3, 20, 170)')
arc(0, 250, 80, 100, PI, 0, CHORD);
noStroke();
fill('rgb(3, 20, 170)')
arc(0, 155, 80, 100, 0, PI, CHORD);
//creating monster/spider abdomen

pop();
//end of the sandbox for the body segment

push();
//creating sandbox for arms/legs

push();
//creating sandbox for first left arm (top to bottom)
//first left arm segment (not links)
noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(-70, 50, 40, 40)

//first and second arm segment link
noStroke();
fill('rgb(38, 55, 205)')
quad(-84, 64, -56, 36, -161, -39, -189, -11);

//testpoint
//noStroke();
//fill('rgb(255,255,255)');
//ellipse(-84,64,3,3)

//testpoint
//noStroke();
//fill('rgb(255,255,255)');
//ellipse(-56,36,3,3)

//testpoint
//noStroke();
//fill('rgb(255,255,255)');
//ellipse(-189,-11,3,3)

//second left arm segment (not links) (bottom up)
noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(-175, -25, 40, 40)

//second and third arm segment link
noStroke();
fill('rgb(38, 55, 205)')
quad(-195,-25,-155,-25,-155,-200,-195,-200);

//third left arm segment (not links) (bottom up)
noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker) (bottom up)
ellipse(-175, -200, 40, 40)
pop();
//endign sandbox for first left arm (top to bottom)

push();
//creating sandbox for first right arm
//first right arm segments (not links) (bottom up)
noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(70, 50, 40, 40)

//first and second arm segment link
noStroke();
fill('rgb(38, 55, 205)')
quad(84, 64, 56, 36, 161, -39, 189, -11);

//second right arm segment (not links) (bottom up)
noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(175, -25, 40, 40)

//second and third arm segment link
noStroke();
fill('rgb(38, 55, 205)')
quad(195,-25,155,-25,155,-200,195,-200);

//third right arm segment (not links) (bottom up)
noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker) (bottom up)
ellipse(175, -200, 40, 40)
pop();
//ending sandbox for first right arm

push();
//creating sandbox for legs
noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(70, 260, 40, 40)
//right leg segment

noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(-70, 260, 40, 40)
//left leg segment

noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
quad(50, 260, 90, 260, 90, 400, 50, 400)
//right leg

noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
quad(-90, 260, -50, 260, -50, 400, -90, 400)
//left leg
pop();
//ending sandbox for legs

push();
//starting sandbox for side arms (reaching forward)
noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(90, 190, 40, 40)
//bottom right side arm

noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(90, 120, 40, 40)
//top right side arm

noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(-90, 190, 40, 40)
//bottom left side arm

noStroke();
fill('rgb(38, 55, 205)');
//favorite color code (even darker)
ellipse(-90, 120, 40, 40)
//top left side arm
pop();
//ending sandbox for side arms (reaching forward)

pop();
//ending sandbox for arms/legs

push();
//creating sandbox for the head segment of the body
noStroke();
fill('rgb(88, 105, 255)');
//favorite color code
ellipse(0, -100, 200, 200);
//creating the head

noStroke();
fill('rgb(25, 25, 25)');
arc(0, -75, 100, 100, 0, PI, CHORD)
//creating the smile

noStroke();
fill('rgb(250, 30, 140)')
ellipse(-65, -150, 30, 30)
//creating the far left eye

  noStroke();
  fill('rgb(255,255,255)')
  ellipse(-70, -155, 10, 10)
  //creating the far left eye glimmer

noStroke();
fill('rgb(250, 30, 140)')
ellipse(-29, -115, 45, 45)
//creating the left eye

  noStroke();
  fill('rgb(255,255,255)')
  ellipse(-34, -120, 25, 25)
  //creating the left eye glimmer

noStroke();
fill('rgb(250, 30, 140)')
ellipse(29, -115, 45, 45)
//creating the right eye

  noStroke();
  fill('rgb(255,255,255)')
  ellipse(24, -120, 25, 25)
  //creating the right eye glimmer

noStroke();
fill('rgb(250, 30, 140)')
ellipse(65, -150, 30, 30)
//creating the far right eye

  noStroke();
  fill('rgb(255,255,255)')
  ellipse(60, -155, 10, 10)
  //creating the far right eye glimmer
pop();
//end of sandbox for head segment of the body

textSize(50);
fill('rgb(255,255,255)')
text("Free Hugs!", -120, -230);

pop();
//end of the main sandbox for the Character
//***End of Character Sandbox***
}
