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

// variable for the font
var myFont;

// variable for the player
var player;
// variable for the ennemy
var enemy;

// variable for the state
var state="GAME";


// preload()
//
// Description of preload

function preload() {
  playerImage = loadImage("assets/images/player.png");
  bulletImage = loadImage("assets/images/bullet.png");
  enemyImage = loadImage("assets/images/Enemy.png");
  myFont = loadFont("assets/fonts/VT323-Regular.ttf");
}


// setup()
//
// Description of setup

function setup() {
  // Creating the canvas
  createCanvas(500,500);
  background(0);

  // information for the Player.js
  player = new Player(250,250,0,0,5,DOWN_ARROW, UP_ARROW, LEFT_ARROW, RIGHT_ARROW,90);

  // information for the Ennemy.js
  enemy = new Enemy(250,150,5);


}


// draw()
//
// Description of draw()

function draw() {
  switch (state) {
    case "GAME":
    displayGame();
    break;

    case "WIN":
    displayWin();
    break;

    case "GAME OVER":
    displayGameOver();
    break;
  }
}

function displayGame() {
  background(0);
  push();
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(100);
  var scoreText = "you have " + player.life + " life left\n press Z to shoot";
  text(scoreText,width/2,height/2);
  pop();
  player.update();
  enemy.update();

  player.handleInput();

  player.display();
  enemy.display();
  enemy.handleCollision(player.bullets);
  player.handleCollision();

  player.updateBullets();

  if (player.life === 0) {
    state = "GAME OVER";
  }
// The value 10 for the size equals 3 hits
  else if (enemy.size < 10) {
    state = "WIN";
  }
}

// GameOver state

// If the player loses, this state is going to appear
function displayGameOver() {
  push();
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(255);
  var gameOverText = "busted";
  text(gameOverText,width/2,height/2);
  pop();

}

// Win state

// If the player wins, this state is going to appear
function displayWin() {
  push();
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(255);
  var winText = "you win";
  text(winText,width/2,height/2);
  pop();
}
