function LightSwitch(x, y, vx, vy, size, speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed
  this.tx += 0.05;
  this.ty += 0.05;

}

LightSwitch.prototype.update = function() {
    //this.vx = map(noise(this.tx), 0, 1, -this.minSpeed, this.maxSpeed);
    //this.vy = map(noise(this.ty), 0, 1, -this.minSpeed, this.maxSpeed);
    //this.x += this.vx;
    //this.y += this.vy;
    this.x -= this.vx;
    this.y -= this.vy;

    // Constrain y position to be on screen
    this.y = constrain(this.y,0,height-this.size);
    this.x = constrain(this.x,0,width-this.size);

    // Check for touching upper or lower edge and reverse velocity if so
    if (this.y === 0 || this.y + this.size === height) {
      this.vy = -this.vy;
    }
    if (this.x === 0 || this.x + this.size === width) {
      this.vx = -this.vx;
    }
  }

    LightSwitch.prototype.display = function() {
      console.log("show");
      noStroke();
      fill(255, 0,0,100);
      ellipse(this.x, this.y, this.size);

    }
