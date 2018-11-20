// ENEMY FILE
// Everything that involve the enemy is in that file


// Variables for the enemy
function Enemy(x, y, speed) {
  this.x = x;
  this.y = y;
  this.vy = 0;
  this.vx = 0;
  this.size = 150;
  this.speed = speed;
  this.image = enemyImage;
  this.alive = true;
}

// Update of the enemy
Enemy.prototype.update = function() {
  this.vy = this.speed;
  this.y = this.y + this.vy;
  // Displaying the enemy from the top of the screen
  if (this.y > height) {
    this.y = 0;
    this.x = random(0,width);
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
        this.alive = false;
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
