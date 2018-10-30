// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

//////////////////////// FIXED /////////////////////////////////
// Paddle constructor did not had the // before
// Paddle constructor
//////////////////////// FIXED /////////////////////////////////

// Sets the properties with the provided arguments or defaults
//////////////////////// FIXED /////////////////////////////////
//////////////////////// FIXED /////////////////////////////////
// The ReferenceError is because paddle is not written correctly
function Paddle(x,y,w,h,speed,downKey,upKey) {
//////////////////////// FIXED /////////////////////////////////
  this.x = x;
  this.y = y;
  this.xv = 0;
  this.yv = 0;
  this.w = w;
  this.h = h;
//////////////////////// FIXED /////////////////////////////////
// speed had a ReferenceError because it was written with three "e"
  this.speed = speed;
//////////////////////// FIXED /////////////////////////////////
  this.downKey = downKey;
  this.upKey = upKey;
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately

//////////////////////// FIXED /////////////////////////////////
// there is missing letters in the word prototype
Paddle.prototype.handleInput = function() {
//////////////////////// FIXED /////////////////////////////////
  if (keyDown(this.downkey)) {
    this.vy = this.speed;
  }
  else if (keyDown(this.upkey)) {
    this.vy = -this.speed;
  }
  else {
    this.vy = 0;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constraint(this.y,0,hight-this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen

//////////////////////// FIXED /////////////////////////////////
// display is written with a "o" instead of a "a"
// there is 2 ( instead of one
Paddle.prototype.display = function() {
//////////////////////// FIXED /////////////////////////////////
// it is suppose to be written rect and not rectangle
  rect(this.x,this.y,this.w,this.h);
}
