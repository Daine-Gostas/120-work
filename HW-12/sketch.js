let balls = [];
const numOfBalls = 499;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // create a new ball object of class type "Ball"
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));
        // move the starting position over
        // This is to ensure that the balls do not start
        // "on top" of each other
        init_x += 100;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background('rgb(0, 0, 0)');

    noCursor()
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 20, 20)

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
        //balls[i].mouseCheck;
    }
}






//////////////////////////////////////////////////
//      BALL CLASS DEFINITION
//////////////////////////////////////////////////
class Ball {
    constructor(x, y, size) {
        this.size = random(20, 15);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
    }

    display() {
        push();
        // remove the balls outer stroke
        noStroke();
        // set the balls fill color
        fill(0,0,255);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // edge bounce vertical walls
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        // edge bounce horizontal walls
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }


    ballCheck(otherBalls, myId) {

        for (let n = 0; n < otherBalls.length; n++) {

            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;

                //let w = dist(mouseX, mouseY, otherBalls[n].posX, otherBalls[n].posY);

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;
                }

                //if )w <= combinedR) {
                //    this.deltaX *= -1;
                //    this.deltaY *= -1;
                //}

            }
        }
    }

}
