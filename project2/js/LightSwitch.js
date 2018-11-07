
function LightSwitch(x,y,vx,vy,size,minSpeed,maxSpeed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.minSpeed = minSpeed;
  this.maxSpeed = maxSpeed;
  this.tx+= 0.05;
  this.ty+= 0.05;

}

LightSwitch.prototype.update = function() {
  console.log("bcaos");
  //this.x = random(windowWidth,0);
  //this.y = random(0,windowHeight);
  //this.y = constrain(this.y,0,height-this.size);
  //this.x = constrain(this.x,0,width-this.size);

  this.vx = map(noise(this.tx),0,1,-this.minSpeed,this.maxSpeed);
this.vy = map(noise(this.ty),0,1,-this.minSpeed,this.maxSpeed);


  // Update prey position based on velocity
  this.x += this.vx;
  this.y += this.vy;

// Screen wrapping
if (this.x < 0) {
  this.x += windowWidth;
} else if (this.x > windowWidth) {
this.x -=windowWidthwidth;
}

if (this.y < 0) {
  this.y += height;
} else if (this.y > windowHeight) {
  this.y -= windowHeight;
}

  }

LightSwitch.prototype.display = function() {
  console.log("show");
  noStroke();
  fill(255,255,255);
  ellipse(this.x,this.y,this.size);
}
