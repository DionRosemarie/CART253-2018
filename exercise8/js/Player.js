// PLAYER FILE
// Everything that involve the player is in that file


// Variables for the player
function Player(x, y, h, w, speed, downKey, upKey, leftKey, rightKey, shootKey) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.size = 50;
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
  this.bullets = [];
  this.bulletImage = bulletImage;
  // Bullets variables
  this.bulletShoot = 0;
  this.bulletShootMax = 20;
  // Updating the score
  this.life = 3;
  this.canCollide = true;
  this.timer = 60;

}

// Update of the player
Player.prototype.update = function() {
  // This part allows the player to move from the top to the bottom of the canvas
  this.y += this.vy;
  this.y = constrain(this.y, 0, height - this.h);
  // This part allows the player to move from the left to the right of the canvas
  this.x += this.vx;
  this.x = constrain(this.x, 0, width - this.w);
  // Calcute the velocity based on speed and trig
  var vy = this.speed * cos(this.angle);
  var vx = this.speed * sin(this.angle);

}

// Displaying the player
Player.prototype.display = function() {
  // Displaying the bullet to allow the player to shot
  imageMode(CENTER);
  for (var i = 0; i < this.bullets.length; i++) {
    image(this.bulletImage, this.bullets[i].x, this.bullets[i].y, 10, 10);

  }
  // Displaying the player witht the image
  fill(255);
  image(this.playerImage, this.x, this.y, this.size, this.size);

}

// handleInput of the player
Player.prototype.handleInput = function() {
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

  // If the player doesn't press any key, the player doesn't move
  else {
    this.vy = 0;
    this.vx = 0;
  }

  // Let the player shoot
  // Make the player shot only one bullet at the time
  this.bulletShoot -= 1;
  this.bulletShoot = constrain(this.bulletShoot - 1, 0, this.bulletShootMax);
  // If Z is down, the player can shoot
  if (keyIsDown(this.shootKey) && this.bulletShoot === 0) {
    var newBullet = {
      x: this.x,
      y: this.y,
      vx: 0,
      vy: -this.maxSpeed,
      size: 25
    }
    this.bullets.push(newBullet);
    this.bulletShoot = this.bulletShootMax;
  }

}

Player.prototype.handleCollision = function() {
  // This allow the player to collide with the enemy only one time
  // This check if the player has collide or not
  if (this.canCollide) {
    // See if the bullet and the enemy are at the same place in the screen
    if (enemy.x - enemy.size / 2 < this.x + this.size / 2 && enemy.x + enemy.size / 2 > this.x - this.size / 2) {
      if (enemy.y - enemy.size / 2 < this.y + this.size / 2 && enemy.y + enemy.size / 2 > this.y - this.size / 2) {
        // If they have collide, the player lose one life
        this.life -= 1;
        console.log("you have" + this.life + " left");
        // If it has collide, the player can't collide anymore
        this.canCollide = false;
        if (this.life < 0) {
          this.size = 0;

        }
      }
    }
  }
  // This set a timer to let the player go away instead of keeping losing life
  else {
    this.timer -= 1;
    if (this.timer === 0) {
      // Reset the timer and possibility to collide 
      this.canCollide = true;
      this.timer = 60;
    }
  }
}


// Update bullet to allow the player to shoot
Player.prototype.updateBullets = function() {
  for (var i = 0; i < this.bullets.length; i++) {
    var bullet = this.bullets[i];
    bullet.x += bullet.vx;
    bullet.y += bullet.vy;
  }
}
