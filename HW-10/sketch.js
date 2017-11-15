//create title array
var title = ["Snowy", "Night"];
var index = 0;

function setup() {
    createCanvas( windowWidth, windowHeight );
}

var snowHeight = 0;

function draw() {
  noCursor()
  background(0)

fill(255);
textSize(32);
text(title[0],12,30);
text(title[1],120,30);

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

//makes clouds
drawClouds(50,500)
drawClouds(0,100)
drawClouds(500,50)
drawClouds(900,250)
drawClouds(1200,175)
drawClouds(-500,225)
drawClouds(-100,600)

noStroke()
fill(250);
rect(0, windowHeight, windowWidth, snowHeight);
//snowy ground
snowHeight = snowHeight-0.1;
//snowy ground rises with snow

push()
//snowflakes falling sandbox
translate(windowWidth/2, 0)
noStroke()
fill(255);
ellipse(0, mouseX * 0.45, 5, 5)
//middle example snowflake

drawSnowflake(-300,0.65,7)
drawSnowflake(-414,0.50,6)
drawSnowflake(519,0.89,6)
drawSnowflake(-531,0.47,4)
//maybe this will make the snowlfakes easier to create
//drawSnowflake(random(-720,720),random(0.45,1),random(3,8))
//nope...
//maybe variables will solve this
//drawSnowflake(snowflake1,snowflake2,snowflake3)
//nope...
//drawSnowflake(random1(), random2(), random3())

//make functions that returns random number once?
//function random1(){
  //var i  = random(-720,720);
  //if(i>(-720)) return x;
  //var x = i;
//}
//function random2(){
  //var i  = 0;
  //if(i<=0.44) return random(0.45,1);
  //return i;
//}
//function random3(){
  //var i  = 0;
  //if(i<=2) return random(3,8);
  //return i;
//}

//I FAILED - Have to do it by hand

drawSnowflake(-476,0.88,0,7)
drawSnowflake(275,0.99,0,6)
drawSnowflake(-376,0.46,0,8)
drawSnowflake(-183,0.47,0,6)
drawSnowflake(135,0.48,0,5)
drawSnowflake(-617,0.49,0,7)
drawSnowflake(-436,0.50,0,4)
drawSnowflake(84,0.51,0,8)
drawSnowflake(-192,0.52,0,7)
drawSnowflake(-12,0.53,0,8)
drawSnowflake(-93,0.60,100,6)
drawSnowflake(344,0.65,100,7)
drawSnowflake(264,0.55,0,8)
drawSnowflake(255,0.57,100,7)
drawSnowflake(400,0.58,200,6)
drawSnowflake(430,0.60,200,8)
drawSnowflake(-343,0.62,200,6)
drawSnowflake(-625,0.64,200,7)
drawSnowflake(70,0.70,500,8)
drawSnowflake(382,0.72,500,6)
drawSnowflake(-488,0.74,500,5)
drawSnowflake(500,0.76,500,7)
drawSnowflake(304,0.78,500,6)
drawSnowflake(-16,0.80,500,8)
drawSnowflake(176,0.82,500,7)
drawSnowflake(-221,0.84,500,5)
drawSnowflake(518,0.86,500,6)
drawSnowflake(-462,0.88,500,8)
drawSnowflake(-594,0.90,500,7)
drawSnowflake(-670,0.92,700,6)
drawSnowflake(-563,0.94,700,5)
drawSnowflake(-546,0.96,700,7)
drawSnowflake(652,0.98,700,8)
drawSnowflake(636,1.00,700,5)
drawSnowflake(201,1.02,700,6)
drawSnowflake(-531,1.04,700,8)
drawSnowflake(98,1.06,700,7)
drawSnowflake(-188,1.08,900,5)
drawSnowflake(243,1.10,900,4)
drawSnowflake(-574,1.12,900,7)
drawSnowflake(501,1.14,900,6)
drawSnowflake(564,1.16,900,8)
drawSnowflake(-520,1.18,900,5)
drawSnowflake(221,1.20,900,6)
drawSnowflake(-194,1.22,900,4)
drawSnowflake(-381,1.24,1200,6)
drawSnowflake(-691,1.26,1200,5)
drawSnowflake(-447,1.28,1200,7)
drawSnowflake(491,1.30,1200,4)
drawSnowflake(240,1.32,1200,8)
drawSnowflake(13,1.34,1200,6)
drawSnowflake(48,1.36,1200,5)
drawSnowflake(105,1.38,1200,7)
drawSnowflake(-647,1.40,1500,6)
drawSnowflake(123,1.42,1500,8)
drawSnowflake(-249,1.44,1500,5)
drawSnowflake(-194,1.46,1500,4)
drawSnowflake(429,1.48,1500,7)
drawSnowflake(-634,1.50,1500,6)
drawSnowflake(632,1.52,1500,4)
drawSnowflake(500,1.54,1500,5)
drawSnowflake(-226,1.56,1800,7)
drawSnowflake(189,1.58,1800,6)
drawSnowflake(-439,1.60,1800,8)
drawSnowflake(647,1.62,1800,4)
drawSnowflake(-429,1.64,1800,5)
drawSnowflake(477,1.66,1800,7)
drawSnowflake(-266,1.68,1800,6)

//SNOWFLAKE FUNCTION
function drawSnowflake(pos_x, speed, level, size){
push()
  noStroke()
  fill(255);
  ellipse(pos_x, mouseX * speed - level, size, size)
pop()
}

//CLOUD FUNCTION
function drawClouds(pos_x, pos_y){
  push()
    noStroke()
    fill(30);
    ellipse(mouseX + pos_x - 720, pos_y, 100, 60)
    noStroke()
    fill(30);
    ellipse(mouseX + pos_x - 720 + 20, pos_y + 20, 100, 60)
    noStroke()
    fill(30);
    ellipse(mouseX + pos_x - 720 - 10, pos_y + 30, 100, 60)
  pop()
}

pop()
//end of snow falling sanbox
}
