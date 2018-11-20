/*****************

Outer space - Project 3 prototype
Rose-Marie Dion

This is the prototype for the second part of the game. The first part is going to allow the player to win life so when he arrives to the second part, he have more chance to kill the big alien. This particular alien is going to move around and be bigger.
******************/

// variables
//
// This is all the variables I need for the game to work

// displaying the images

var playerImage;
var bulletImage;
var ennemyImage;

// variable for the player
var player;
// variable for the ennemy
var enemy;


// preload()
//
// Description of preload

function preload() {
  playerImage = loadImage("assets/images/player.png");
  bulletImage = loadImage("assets/images/bullet.png");
  enemyImage = loadImage("assets/images/Enemy.png");
}


// setup()
//
// Description of setup

function setup() {
  // Creating the canvas
  createCanvas(500,500);
  background(0);

  // information for the Player.js
  player = new Player(250,250,0,0,50,5,DOWN_ARROW, UP_ARROW, LEFT_ARROW, RIGHT_ARROW,90);

  // information for the Ennemy.js
  enemy = new Enemy(250,150,5);


}


// draw()
//
// Description of draw()

function draw() {
    background(0);
  player.update();
  enemy.update();

  player.handleInput();

  player.display();
  enemy.display();
  enemy.handleCollision(player.bullets);

  player.updateBullets();
}
