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

<!--
Please describe how and why you changed the sketch?
-->
