function SetMood(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;

}

SetMood.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y,0,height-this.size);
  }


SetMood.prototype.isOffScreen = function () {
  // Check for going off screen and reset if so
  if (this.x + this.size < 0 || this.x > width) {
    return true;
  }
  else {
    return false;
  }
}

SetMood.prototype.mouseClicked = function() {
  if (dist(mouseX,mouseY,this.x,this.y) < this.Size/2) {
    fill(0,0,0);
    rectMode(CORNER)
    rect(0,0,windowWidth,windowWidth)
}
}

SetMood.prototype.display = function() {
  noStroke();
  fill(255,0,0,50);
  ellipse(this.x,this.y,this.size);
}

SetMood.prototype.reset = function () {
  this.x = random(0,windowHeight);
  this.y = random(0,windowHeight);
  this.vx = -this.vx;
  this.vy = random(-this.speed, this.speed);
}
