// PLAYER FILE
// Everything that involve the player is in that file


// Variables for the player
function Player(x, y, h, w, size, speed, downKey, upKey, leftKey, rightKey, shootKey) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.size = size;
  this.h = h;
  this.w = w;
  this.speed = speed;
  this.angle = 0;
  this.maxSpeed = 10;
  // KeyCode for the handleInput
  this.downKey = downKey;
  this.upKey = upKey;
  this.leftKey = leftKey;
  this.rightKey = rightKey;
  this.shootKey = shootKey;
  // Displaying the player and the bullets
  this.playerImage = playerImage;

  // Update of the player
Player.prototype.update = function() {}
// Displaying the player
Player.prototype.display = function() {}
// handleInput of the player
Player.prototype.handleInput = function() {}
// handleCollision of the player
Player.prototype.handleCollision = function() {}
