function Player (x,y,h,w,size,speed,downKey,upKey,leftKey,rightKey,shootKey) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.size = size;
  this.h = h;
  this.w = w;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
  this.leftKey = leftKey;
  this.rightKey = rightKey;
  this.shootKey = shootKey;
  this.playerImage = playerImage;
  this.bullets = [];
  this.bulletImage = bulletImage;
  this.maxSpeed = 10;
}

Player.prototype.update = function () {
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h);
  this.x += this.vx;
  this.x = constrain(this.x,0,width-this.w);
}

Player.prototype.display = function () {
  fill(255);
  imageMode(CENTER,CENTER);
  image(this.playerImage,this.x,this.y,this.size,this.size);
  for (var i = 0; i < this.bullets.length; i++) {
  push();
  image(this.bulletImage,this.bullets[i].x,this.bullets[i].y,10,10);
  pop();
}
}

Player.prototype.handleInput = function () {
  if (keyIsDown(this.upKey)) {
  this.vy = -this.speed;
}
else if (keyIsDown(this.downKey)) {
  this.vy = this.speed;
}
else if (keyIsDown(this.leftKey)) {
  this.vx = -this.speed;
}
else if (keyIsDown(this.rightKey)) {
  this.vx = this.speed;
}
else if (keyIsDown(this.shootKey)) {
  var newBullet = {
  x: this.x,
  y: this.y,
  vx: this.maxSpeed * cos(this.angle),
  vy: this.maxSpeed * sin(this.angle)
}
}
else {
  this.vy = 0;
  this.vx = 0;
}
}
