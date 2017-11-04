var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
ball.colr = 0;
ball.text = "Click anywhere on this canvas to start the color war!";

function setup() {
    createCanvas(windowWidth, 400);
    background(0);
}




function draw() {{

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(ball.colr = random(255));
    ellipse(ball.x, ball.y, ball.width, ball.width);

    //color path
    noCursor();
    push()
    fill(random(255), random(255), random(255))
    ellipse(mouseX, mouseY, 40, 40)
    pop()
  }

  fill(255)
  textSize(20);
  text(ball.text, windowWidth/4, 200);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
    background(random(255), random(255), random(255));
    //ball.colr = (random(255), random(255), random(255));
    ball.text = " ";
}
