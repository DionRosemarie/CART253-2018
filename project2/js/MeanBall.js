//////////////////  NEW CODE ////////////////////////
// THIS IS THE MEAN BALL class

function MeanBall(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = random(0,vx);
  this.vy = random(0,vy);
  this.size = size;
  this.speed = speed;
  this.image = breakUpBall;
}


MeanBall.prototype.update = function () {
  // UPDATE POSITION WITH VELOCITY
  this.x += this.vx;
  this.y += this.vy;

  // CONSTRAIN THE POSITION ON THE SCREEN
  this.y = constrain(this.y,0,height-this.size);


  if (this.y === 0 || this.y + this.size === height) {
    this.vy = -this.vy;
  }
}

MeanBall.prototype.isOffScreen = function () {
  // CHECK IF THE BALL WENT OFF SCREEN
  if (this.x + this.size < 0 || this.x > width) {
    return true;
  }
  else {
    return false;
  }
}

// DISPLAYING THE BALL
MeanBall.prototype.display = function () {
  fill(255);
  image(this.image,this.x,this.y,this.size,this.size);
}

// CHECKING THE COLLISION OF THE BALL AND PADDLES
MeanBall.prototype.handleCollision = function(paddle) {
  //console.log("see");
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      // Reverse x velocity to bounce
      this.vx = -this.vx;
      rightPaddle.sizeReduce();
      leftPaddle.sizeReduce();
    }
    }
  }


// RESET THE MEAN BALL RANDOMLY
MeanBall.prototype.reset = function () {
  this.x = random(0,windowHeight);
  this.y = random(0,windowHeight);
}
