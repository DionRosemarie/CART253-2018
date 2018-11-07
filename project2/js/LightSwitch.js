
function LightSwitch(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;

}

LightSwitch.prototype.update = function() {
  this.x = random(windowWidth,0);
  this.y = random(0,windowHeight);
  this.y = constrain(this.y,0,height-this.size);
  this.x = constrain(this.x,0,width-this.size);
  }

LightSwitch.prototype.display = function() {
  noStroke();
  fill(255);
  ellipse(this.x,this.y,this.size);
}

LightSwitch.prototype.reset = function () {
  this.x = random(0,windowHeight);
  this.y = random(0,windowHeight);
  this.vx = -this.vx;
  this.vy = random(-this.speed, this.speed);
}
