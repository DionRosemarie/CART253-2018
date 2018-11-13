// ENEMY FILE
// Everything that involve the enemy is in that file


// Variables for the enemy
function Enemy (x,y,speed) {
  this.x =x;
  this.y =y;
  this.vy =0;
  this.vx =0;
  this.size = 12;
  this.speed =speed;
  this.image = enemyImage;
}

// Update of the enemy
Enemy.prototype.update = function() {
  this.vy = this.speed;
// Displaying the enemy from the top of the screen
  if (this.y > height) {
    this.y = 0;
    this.x = (random(0,width));
  }
}

// Displaying the enemy
Enemy.prototype.display = function() {
  image(this.image,this.x,this.y,this.size,this.size);
}
