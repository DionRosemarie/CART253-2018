function Ennemy (x,y,w,h,speed) {
  this.x =x;
  this.y =y;
  this.w =w;
  this.h =h;
  this.vy =0;
  this.vx =0;
  this.speed =speed;
  this.image = ennemyImage;

}

Ennemy.prototype.update() {}

Ennemy.prototype.display() {
  image(this.image,this.x,this.y,this.w,this.h);
}
Ennemy.prototype.reset() {}
