function setup() {
    createCanvas( windowWidth, windowHeight );
}

var snowHeight = 0;

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

//snowflake parameters test
//textSize(36);
   //noStroke();
   //fill('white');
   //text("'mouseX': " + floor(mouseX), 10, 40 );
   //text("'mouseY': " + floor(mouseY), 10, 80 );

//parameters: stay in between -720 and 720 (total 1440 width)

//***random snowflakes below***

noStroke()
fill(255);
ellipse(-300, mouseX * 0.65, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-414, mouseX * 0.50, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(519, mouseX * 0.89, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-531, mouseX * 0.47, 4, 4)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-476, mouseX * 0.88, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(275, mouseX * 0.99, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-376, mouseX * 0.46, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-183, mouseX * 0.47, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(135, mouseX * 0.48, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-617, mouseX * 0.49, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-436, mouseX * 0.50, 4, 4)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(84, mouseX * 0.51, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-192, mouseX * 0.52, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-12, mouseX * 0.53, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-93, mouseX * 0.60 - 100, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(344, mouseX * 0.65 - 100, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(264, mouseX * 0.55, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(700, mouseX * 0.57 - 100, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(400, mouseX * 0.58 - 200, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(430, mouseX * 0.60 - 200, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-343, mouseX * 0.62 - 200, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-625, mouseX * 0.64 - 200, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(70, mouseX * 0.70 - 500, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(382, mouseX * 0.72 - 500, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-488, mouseX * 0.74 - 500, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(500, mouseX * 0.76 - 500, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(304, mouseX * 0.78 - 500, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-16, mouseX * 0.80 - 500, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(176, mouseX * 0.82 - 500, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-221, mouseX * 0.84 - 500, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(518, mouseX * 0.86 - 500, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-462, mouseX * 0.88 - 500, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-594, mouseX * 0.90 - 500, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-670, mouseX * 0.92 - 700, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-563, mouseX * 0.94 - 700, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-546, mouseX * 0.96 - 700, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(652, mouseX * 0.98 - 700, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(636, mouseX * 1.00 - 700, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(201, mouseX * 1.02 - 700, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-531, mouseX * 1.04 - 700, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(98, mouseX * 1.06 - 700, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-188, mouseX * 1.08 - 900, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]

noStroke()
fill(255);
ellipse(243, mouseX * 1.10 - 900, 4, 4)
//snow flake y coordinate must be no less than [mouseX * 0.45]

noStroke()
fill(255);
ellipse(-574, mouseX * 1.12 - 900, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]

noStroke()
fill(255);
ellipse(501, mouseX * 1.14 - 900, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]

noStroke()
fill(255);
ellipse(564, mouseX * 1.16 - 900, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]

noStroke()
fill(255);
ellipse(-520, mouseX * 1.18 - 900, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]

noStroke()
fill(255);
ellipse(221, mouseX * 1.20 - 900, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]

noStroke()
fill(255);
ellipse(-194, mouseX * 1.22 - 900, 4, 4)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-381, mouseX * 1.24 - 1200, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-691, mouseX * 1.26 - 1200, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-447, mouseX * 1.28 - 1200, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(491, mouseX * 1.30 - 1200, 4, 4)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(240, mouseX * 1.32 - 1200, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(13, mouseX * 1.34 - 1200, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(48, mouseX * 1.36 - 1200, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(105, mouseX * 1.38 - 1200, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-647, mouseX * 1.40 - 1500, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(123, mouseX * 1.42 - 1500, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-249, mouseX * 1.44 - 1500, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-194, mouseX * 1.46 - 1500, 4, 4)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(429, mouseX * 1.48 - 1500, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-634, mouseX * 1.50 - 1500, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(632, mouseX * 1.52 - 1500, 4, 4)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(500, mouseX * 1.54 - 1500, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-226, mouseX * 1.56 - 1800, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(189, mouseX * 1.58 - 1800, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-439, mouseX * 1.60 - 1800, 8, 8)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(647, mouseX * 1.62 - 1800, 4, 4)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-429, mouseX * 1.64 - 1800, 5, 5)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(477, mouseX * 1.66 - 1800, 7, 7)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

noStroke()
fill(255);
ellipse(-266, mouseX * 1.68 - 1800, 6, 6)
//snow flake y coordinate must be no less than [mouseX * 0.45]
//DONE

//end of random snowflakes
pop()
//end of snow falling sanbox
}
