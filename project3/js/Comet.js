// COMET FILE
// Everything that involve the comet is in that file


// Variables for the comet
function Comet(x, y, speed, size) {
  this.x = x;
  this.y = y;
  this.vy = 0;
  this.vx = 0;
  this.tx = random(0, 100);
  this.ty = random(0, 100);
  this.size = size;
  this.speed = speed;
  this.maxSpeed = 10;
  this.image = cometImage;
  this.canCollide = true;
  this.gameOver = false;
}

// Update of the comet
Comet.prototype.update = function() {
  // Make the comet move in a random way
  this.vx = map(noise(this.tx), 0, 1, -this.maxSpeed, this.maxSpeed);
  this.vy = map(noise(this.ty), 0, 1, -this.maxSpeed, this.maxSpeed);

  this.tx += 0.01;
  this.ty += 0.01;

  // move
  this.x += this.vx;
  this.y += this.vy;

  // wrap for the comet so it doesn't go off screen
  if (this.x < 0) {
    this.x += width;
  } else if (this.x > width) {
    this.x -= width;
  }
  if (this.y < 0) {
    this.y += height;
  } else if (this.y > height) {
    this.y -= height;
  }
}

Comet.prototype.handleCollision = function() {
  // This allow the player to collide with the enemy only one time
  // This check if the player has collide or not
  if (this.canCollide) {
    // See if the bullet and the enemy are at the same place in the screen
    if (player.x - player.size / 2 < this.x + this.size / 2 && player.x + player.size / 2 > this.x - this.size / 2) {
      if (player.y - player.size / 2 < this.y + this.size / 2 && player.y + player.size / 2 > this.y - this.size / 2) {
        this.gameOver = true;
      }
    }
  }
}

// Displaying the comet
Comet.prototype.display = function() {

  // Displaying the comet with the image
  image(cometImage, this.x, this.y, this.size, this.size);

}
