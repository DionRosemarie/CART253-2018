// This is the part for the start state
// the arrays add a fun element to the intro

function SetMood(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;

}

SetMood.prototype.update = function() {
  this.x = random(windowWidth,0);
  this.y = random(0,windowHeight);
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
