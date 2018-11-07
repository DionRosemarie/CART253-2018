//////////////// NEW CODE ///////////////////

function LightSwitch(x, y, vx, vy, size, speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed;
}

LightSwitch.prototype.update = function() {
  this.x -= this.vx;
  this.y -= this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y, 0, height - this.size);
  this.x = constrain(this.x, 0, width - this.size);

  // Check for touching upper or lower edge and reverse velocity if so
  if (this.y === 0 || this.y + this.size === height) {
    this.vy = -this.vy;
  }
  if (this.x === 0 || this.x + this.size === width) {
    this.vx = -this.vx;
  }
}

LightSwitch.prototype.mouseClicked = function() {
    console.log("show");
    // THIS IS GOING TO TURN OFF THE LIGHT IF THE PLAYERS WANT MORE DIFFICULTE
    // THE SWITCH STOP TO MAKE THE PLAYER CONTROL IF THEY WANT TO SET THE MOOD OR NO
if (dist(mouseX,mouseY,this.x,this.y) < this.size/2) {
    this.speed=0;
    this.vx=0;
    this.vy=0;
    fill(0, 0, 0, 120);
    rectMode(CORNER);
    rect(0, 0, windowWidth, windowHeight);
    saxSFX.play();
} else {
  saxSFX.pause();
}
  }

// DISPLAYING THE LIGTH SWITCH
LightSwitch.prototype.display = function() {
  noStroke();
  fill(255, 0, 0, 100);
  ellipse(this.x, this.y, this.size);

}
