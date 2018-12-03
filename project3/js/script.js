/*****************

Outer Space - Project 3
Rose-Marie Dion

For this project, the player is the spaceship and goes throught space to save the universe. His main goal is to destroy the alien that may come on earth. The ennemy is going to come from the top of the screen.

When the player is going to reach a certain level, asteroids are going to come in the canvas with a random value. If there is a collison between the player and the asteroids, the spaceship will lose one of his life.

At one point, I would like to add another level which would be the last one. There would be a bigger alien that would be more diffuclt to destroy. It would be kind of a battle between the spaceship and the alien. He would be able to destroy the player. The player would win if he destroy the alien first.

******************/
// variables
//
// This is all the variables I need for the game to work

// displaying the images
var playerImage;
var enemyImage;
var bulletImage;
var enemyKingImage;

// displaying the different state of the game
var state = "START";

// variable for the player
var player;

// variable for the enemy
var enemy;
var enemyKing;

// variable for the background stars
var stars = [];
var numStars = 1000;

// variables to count the number of enemy of the state 2
var enemyCounter = 0;
var killCounter = 0;



// preload()
//
// Description of preload

function preload() {
  // Preloading my images and my font to start creating the visual of my game
  myFont = loadFont("assets/fonts/VT323-Regular.ttf");
  playerImage = loadImage("assets/images/player.png");
  enemyImage = loadImage("assets/images/Enemy.png");
  bulletImage = loadImage("assets/images/bullet.png");
  enemyKingImage = loadImage("assets/images/enemyKing.png");
}

// setup()
//
// Description of setup

function setup() {
  // Creating the canvas
  createCanvas(500, 500);
  background(0);

  // information for the Player.js
  player = new Player(4 * width / 4, 400, 0, 0, 75, 5, DOWN_ARROW, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, 90);

  // information for the Enemy.js
  enemy = new Enemy(random(0, width), -15, 5);

  // information for the EnemyKing.js
  enemyKing = new EnemyKing(250,150,5);

  // information for the Stars.js
  for (var i = 0; i < numStars; i++) {
    stars.push(new Star());
  }


}

// draw()
//
// Description of draw()

function draw() {
  // This is where each state of the game are establish
  // this is the intro to the game
  switch (state) {
    case "START":
      displayStart();
      break;

      // This is the first level of the game, i'm going to add one more
    case "LEVEL ONE":
      displayGameOne();
      break;

      // This is the first level of the game, i'm going to add one more
    case "GAME OVER ONE":
      displayGameOverOne();
      break;

      // This is the second level of the game
    case "START TWO":
      displayStartTwo();
      break;

      // This is the second level of the game
    case "LEVEL TWO":
      displayGameTwo();
      break;

  }
}

// START STATE

// This is the intro for the game
function displayStart() {
  push();
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(250);
  text("to infinity and beyond!", width / 2, 80);
  text("press X to start to see the instructions", width / 2, 450);
  imageMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  image(playerImage, 5, 5);
  pop();

  // information for the stars in the background
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
  pop();

  // To start the game, we only have to press the space bar to access the level one of the game
  if (keyIsPressed && key === 'x') {
    state = "LEVEL ONE";
  }
}

// LEVEL ONE STATE

// This is the first level of the game
function displayGameOne() {
  createCanvas(700, 500);
  background(0);

  player.update();
  enemy.update();

  player.handleInput();

  player.display();
  enemy.display();
  enemy.handleCollision(player.bullets);

  if (enemy.isOffScreen()) {
    enemyCounter += 1;
    console.log(enemyCounter);
  }

  player.updateBullets();

  if (enemy.alive === false) {
    enemy.reset();
    enemy = new Enemy(random(0, width), -15, 5)
    killCounter += 1;
    console.log("kill counter " + killCounter);
  }

  // information for the stars in the background
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }

  // To end the state
  if (killCounter === 5) {
    state = "START TWO"
  } else if (enemyCounter === 5) {
    state = "GAME OVER ONE"
    enemyCounter = 0;
    killCounter = 0;
  }

}

function displayGameOverOne() {
  push();
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(250);
  text("The planet earth put his faith on you\n and you did not succed", width / 2, 250);
  text("The refill your space ship, press X", width / 2, 400);
  pop();

  if (keyIsPressed && key === 'x') {
    state = "INSTRUCTION";
  }

}

// This is the second intro to make a transition between the first and second level
function displayStartTwo() {
  push();
  createCanvas(500, 500);
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(250);
  text("You have suceed!! \n\n\nbut wait\nwhat is coming in our direction?", width / 2, 80);
  text("press space bar to see", width / 2, 450);
  pop();

  // information for the stars in the background
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
  pop();

  // To start the game, we only have to press the space bar to access the level one of the game
  if (keyIsPressed && key === ' ') {
    state = "LEVEL TWO";
  }
}

// LEVEL TWO STATE

// This is the second level of the game and the final one
function displayGameTwo() {
  push();
  createCanvas(1000, 500);
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(100);
  var scoreText = "you have " + player.life + " life left\n press Z to shoot";
  text(scoreText, width / 2, height / 2);
  pop();

  player.update();
  enemyKing.update();
  comet.update();

  player.handleInput();

  player.display();
  enemyKing.display();
  comet.display();
  enemyKing.handleCollision(player.bullets);
  player.handleCollision();
  comet.handleCollision();

  player.updateBullets();
}
