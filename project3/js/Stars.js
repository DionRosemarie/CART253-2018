// STARS FILE
// Everything that involve the stars in the background is in that file


// Establishing the variables for the background
function Star () {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.size = map(this.z,0,width,3,0);
}

// Update of the stars
Star.prototype.update = function (){
  this.z= this.z- 5;
  if (this.z < 1) {
    this.z = width;
    this.x = random(-width, width);
    this.y = random(-height, height);
  }
}

// Displaying the stars in the background
Star.prototype.display = function () {
  fill(255);
  noStroke();
  this.sx = map(this.x/this.z,0,1,0,width);
  this.sy = map(this.y/this.z,0,1,0,height);
  ellipse(this.sx,this.sy,this.size,this.size);
}
