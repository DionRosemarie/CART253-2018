// ENEMY FILE
// Everything that involve the enemy is in that file


// Variables for the enemy
function Enemy (x,y,speed) {
  this.x =x;
  this.y =y;
  this.vy =0;
  this.vx =0;
  this.size = 15;
  this.speed =speed;
  this.image = enemyImage;
}

// Update of the enemy
Enemy.prototype.update = function() {
  this.vy = this.speed;
  this.y = this.y + this.vy;
// Displaying the enemy from the top of the screen
  if (this.y > height) {
    this.y = 0;
    this.x = 250;
  }
}

Enemy.prototype.handleCollision = function() {
  if (this.x + this.size > bullet.x && this.x < bullet.x ) {
    if (this.y + this.size > bullet.y && this.y < bullet.y ) {
      this.size =0;

    }

  }
}

// Displaying the enemy
Enemy.prototype.display = function() {
  image(this.image,this.x,this.y,this.size,this.size);
}
