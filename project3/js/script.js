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

// displaying the different state of the game
var state = "START";

// variable for the player
var player;

// variable for the ennemy
var enemy;



// preload()
//
// Description of preload

function preload() {
  // Preloading my images and my font to start creating the visual of my game
  myFont = loadFont("assets/fonts/VT323-Regular.ttf");
  playerImage = loadImage("assets/images/player.png");
  enemyImage = loadImage("assets/images/Enemy.png");

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

}