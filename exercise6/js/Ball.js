// Ball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Ball constructor
//
// Sets the properties with the provided arguments
function Ball(x, y, vx, vy, size, speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;
}

// update()
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.

//////////////////////// FIXED /////////////////////////////////
// It was written faction instead of function
// ball.update was not considere like a function because it was not written in the right way 
Ball.prototype.update = function() {
  //////////////////////// FIXED /////////////////////////////////
  // Update position with velocity
  // it is suppose to be += and not only =
  this.x += this.vx;
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y, 0, height - this.size);

  // Check for touching upper or lower edge and reverse velocity if so
  //////////////////////// FIXED   /////////////////////////////////
  // It is suppose to be === to make the statement work
  if (this.y === 0 || this.y + this.size === height) {
    this.vy = -this.vy;
  }
}

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Ball.prototype.isOffScreen = function() {
  // Check for going off screen and reset if so
  //////////////////////// FIXED /////////////////////////////////
  // It was written iff instead of if
  if (this.x + this.size < 0 || this.x > width) {
    return true;
  }
  //////////////////////// FIXED /////////////////////////////////
  else {
    return false;
  }
}

// display()
//
// Draw the ball as a rectangle on the screen
Ball.prototype.display = function() {
  ///////////////////////// FIXED /////////////////////////////////
  // It is missing a , to work
  // The ball now have a color
  fill(255);
  //////////////////////// FIXED ////////////////////////////////
  // There was missing this.size to display the ball
  rect(this.x, this.y, this.size, this.size);
}
//////////////////////// FIXED /////////////////////////////////
// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce

//////////////////////// FIXED /////////////////////////////////
// there is a e missing in the word prototype
// there is two ( instead of one
Ball.prototype.handleCollision = function(paddle) {
  //////////////////////// FIXED /////////////////////////////////
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      // Reverse x velocity to bounce
      this.vx = -this.vx;
    }
  }
}

// reset()
//
// Set position back to the middle of the screen
/////////////////////////////////// FIXED ///////////////////////////
// It is suppose to be written with a "e"
Ball.prototype.reset = function() {
  this.x = width / 2;
  this.y = height / 2;
}
