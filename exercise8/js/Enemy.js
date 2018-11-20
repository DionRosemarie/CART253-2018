// ENEMY FILE
// Everything that involve the enemy is in that file


// Variables for the enemy
function Enemy(x, y, speed) {
  this.x = x;
  this.y = y;
  this.vy = 0;
  this.vx = 0;
  this.tx = random(0,100);
  this.ty = random(0,100);
  this.maxSpeed = 10;
  this.size = 75;
  this.speed = speed;
  this.image = enemyImage;
  this.alive = true;
}

// Update of the enemy
Enemy.prototype.update = function() {
this.vx = map(noise(this.tx),0,1,-this.maxSpeed,this.maxSpeed);
this.vy = map(noise(this.ty),0,1,-this.maxSpeed,this.maxSpeed);

this.tx += 0.01;
this.ty += 0.01;

// move
this.x += this.vx;
this.y += this.vy;

// wrap for the enemy
if (this.x < 0) {
  this.x += width;
}
else if (this.x > width) {
  this.y -= width;
}
if (this.y < 0) {
  this.y += height;
}
else if (this.y > height) {
  this.y -= height;
}
}

Enemy.prototype.handleCollision = function(bullets) {
  // This is the information about the bullets
  for (var i = 0; i < bullets.length; i++) {
    var bullet = bullets[i];
  // See if the bullet and the enemy are at the same place in the screen
    if (bullet.x - bullet.size / 2 < this.x + this.size / 2 && bullet.x + bullet.size / 2 > this.x - this.size / 2) {
      if (bullet.y - bullet.size / 2 < this.y + this.size / 2 && bullet.y + bullet.size / 2 > this.y - this.size / 2) {
  // If they are at the same place, the enemy disapear
        this.size -= 5;
      }
    }
  }
}

// Displaying the enemy
Enemy.prototype.display = function() {
  if (this.alive === false) {
    return;
  }
  image(this.image, this.x, this.y, this.size, this.size);
}
