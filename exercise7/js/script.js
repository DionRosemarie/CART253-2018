/*****************

Outer Space - Project 3 prototype
Rose-Marie Dion

For this prototype, the player is the spaceship and goes throught space to save the universe. His main goal is to destroy the alien that may come on earth. The ennemy is going to come from the top of the screen.

When the player is going to reach a certain level, asteroids are going to come in the canvas with a random value. If there is a collison between the player and the asteroids, the spaceship will lose one of his life.

At one point, I would like to add another level which would be the last one. There would be a bigger alien that would be more diffuclt to destroy. It would be kind of a battle between the spaceship and the alien. He would be able to destroy the player. The player would win if he destroy the alien first.

******************/
// variables
//
// This is all the variables I need for the game to work

// displaying the images
var playerImage;
var bulletImage;
// displaying the different state of the game
var state = "START";
// variable for the player
var player;
// preload()
//
// Description of preload

function preload() {
  // Preloading my images and my font to start creating the visual of my game
  myFont = loadFont("assets/fonts/VT323-Regular.ttf");
  playerImage = loadImage("assets/images/player.png");
  bulletImage = loadImage("assets/images/bullet.png");
}


// setup()
//
// Description of setup

function setup() {
  // Creating the canvas
  createCanvas(500,500);
  background(0);

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
// This is the first level of the game, i'm going to add more
  case "LEVEL ONE":
    displayGameOne();
    break;
// This is the end game state where the score of the player is going to be display at the end
  case "GAME OVER":
    displayEndGame();
    break;
}

}

// This is the first state of the game
function displayStart() {
  push();
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(250);
  text("in outer space",width/2,80);
  text("press space bar to start",width/2,450);
  pop();

// To start the game, we only have to press the space bar to access the level one of the game
  if (keyIsPressed && key === ' ') {
  state = "LEVEL ONE";
}
}

// This is the second state of the game or the level one
function displayGameOne() {
  createCanvas(1000,500);
  background(0);
  player.update();
  player.handleInput();
  player.display();
  player.updateBullets();

}
