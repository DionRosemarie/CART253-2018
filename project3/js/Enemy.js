// ENEMY FILE
// Everything that involve the enemy is in that file


// Variables for the enemy
function Enemy(x, y, speed) {
  this.x = x;
  this.y = y;
  this.vy = 0;
  this.vx = 0;
  this.size = 25;
  this.speed = speed;
  this.image = enemyImage;
  this.alive = true;

}

// Update of the enemy
Enemy.prototype.update = function() {
  this.vy = this.speed;
  this.y = this.y + this.vy;
}
// handleCollision of the enemy
Enemy.prototype.handleCollision = function() {}
// Reset the position of the enemy after going oft screen
Enemy.prototype.reset = function() {
    this.vy = this.speed;
    this.y = this.y + this.vy;
    this.y = 0;
    this.x = random(0, width);
    image(this.image, this.x, this.y, this.size, this.size);
}
// Off Screen
Enemy.prototype.isOffScreen = function() {
  if (this.y > height) {
  this.reset();
  return true;
}
else {
  return false;
}
}
// Displaying the enemy
Enemy.prototype.display = function() {

image(this.image, this.x, this.y, this.size, this.size);
}
