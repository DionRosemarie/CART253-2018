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

}
