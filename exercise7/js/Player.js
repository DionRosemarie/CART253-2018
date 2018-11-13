// PLAYER FILE
// Everything that involve the player is in that file


// Variables for the player
function Player (x,y,h,w,size,speed,downKey,upKey,leftKey,rightKey,shootKey) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.size = size;
  this.h = h;
  this.w = w;
  this.speed = speed;
  this.maxSpeed = 10;
  // KeyCode for the handleInput
  this.downKey = downKey;
  this.upKey = upKey;
  this.leftKey = leftKey;
  this.rightKey = rightKey;
  this.shootKey = shootKey;
  // Displaying the player and the bullets
  this.playerImage = playerImage;
  this.bullets = [];
  this.bulletImage = bulletImage;

}

// Update of the player
Player.prototype.update = function () {
// This part allows the player to move from the top to the bottom of the canvas
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h);
// This part allows the player to move from the left to the right of the canvas
  this.x += this.vx;
  this.x = constrain(this.x,0,width-this.w);
}

// Displaying the player
Player.prototype.display = function () {
// Displaying the player witht the image
  fill(255);
  imageMode(CENTER,CENTER);
  image(this.playerImage,this.x,this.y,this.size,this.size);
// Displaying the bullet to allow the player to shot
  push();
  for (var i = 0; i < this.bullets.length; i++) {
  image(this.bulletImage,this.bullets[i].x,this.bullets[i].y,10,10);
  pop();
}
}

// handleInput of the player
Player.prototype.handleInput = function () {
// Let the player go up
  if (keyIsDown(this.upKey)) {
  this.vy = -this.speed;
}
// Let the player go down
else if (keyIsDown(this.downKey)) {
  this.vy = this.speed;
}
// Let the player go left
else if (keyIsDown(this.leftKey)) {
  this.vx = -this.speed;
}
// Let the player go right
else if (keyIsDown(this.rightKey)) {
  this.vx = this.speed;
}
// Let the player shoot
else if (keyIsDown(this.shootKey)) {
  var newBullet = {
  x: this.x,
  y: this.y,
  vx: this.maxSpeed * cos(this.angle),
  vy: this.maxSpeed * sin(this.angle)
}
this.bullets.push(newBullet);
}
// If the player doesn't press any key, the player doesn't move
else {
  this.vy = 0;
  this.vx = 0;
}
}

// Update bullet to allow the player to shoot
Player.prototype.updateBullets = function() {
  for (var i = 0 ; i < this.bullets.lenght; i++) {
    var bullet = this.bullets[i];
    bullet.x += bullet.vx;
    bullet.y += bullet.vy;
  }
}
