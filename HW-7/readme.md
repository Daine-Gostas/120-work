Daine Gostas, Section 50

[Live Sketch Link](https://daine-gostas.github.io/120-work/HW-7/)

# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

1.  Ok, the first 8 lines are establishing the variable for the ball and the objects that will be used with it. These determine the height, size, width, speed, etc., for the circle.
2.  Lines 10-12 set up the code and create a white canvas with the window's width for the ball to be on.
3.  Line 17 creates the draw function.
4.  Line 19 makes ball.x equal to the result of ball.delta_x * ball.scale_x.
5.  Line 20 makes ball.y equal to the result of ball.delta_y * ball.scale_y.
6.  Lines 23-27 use if statements to change the positive/negative symbol of the ball's direction when it hits the edges of the width or height of the canvas. This allows the ball to "bounce" off the walls.
7.  Lines 30-31 create the ball.
8.  Lines 34-36 use a map to change the range of the width and height of the ball when the mousePressed function is executed. This ultimately changes the angle the ball is moving depending on where the mouse is pressed on the canvas.

## How did you alter the sketch?

First I used the mousePressed function to change the background every time the mouse is clicked.
Then, I created an object to determine the color of the circle.
Next, I used the weird black and white random generator I made in the last assignment to change the color of the ellipse.
Finally, the original plan was to add a smiley face that would follow the cursor, and the point of the game would be to avoid the black and white moving path. However when I found out that the smiley face was also making a continuous line, I decided to match the size with the black and white path and make the trail multicolored, thus creating a battle between color and black/white.

Extra Stuff
- Added text to start the battle.
- Added text object and mousePressed command to hide text once the canvas is clicked on
