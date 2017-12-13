class Ball {
    constructor(x, y, size) {
        this.color = (random(255), random(255), random(255));
        this.size = random(10, 10);
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
        fill(this.color);
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
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
            this.color = 'rgb(50, 50, 50)';
        }
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
            this.color = 'rgb(50, 50, 50)';
        }
    }


    ballCheck(otherBalls, myId) {
        for (let n = 0; n < otherBalls.length; n++) {
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                    // flip the color
                  //  if( this.color == 'rgb(237, 36, 232)') {
                  //      this.color = 'rgb(16, 224, 231)';
                  //  } else {
                  //      this.color = 'rgb(237, 36, 232)';
                  //  }
                }
            }
        }
    }

}
