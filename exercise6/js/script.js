// Broken Basic OO Pong
// by Pippin Barr
//
// A broken primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
//////////////////////// FIXED /////////////////////////////////
// the variable bal only had one "l"
var ball;
//////////////////////// FIXED /////////////////////////////////
var leftPaddle;
var rightPaddle;

// setup()
//
// Creates the ball and paddles
function setup() {
//////////////////////// FIXED /////////////////////////////////
// create was not correctly written
  createCanvas(640,480);
//////////////////////// FIXED /////////////////////////////////
// noStroke(); was there for no reason
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  //////////////////////// FIXED /////////////////////////////////
  // Suppose to be the DOWN_ARROW first
  rightPaddle = new Paddle(width-50,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  //////////////////////// FIXED /////////////////////////////////
  // There was missing a ) at the end
  leftPaddle = new Paddle(40,height/2,10,60,10,83,87);
  //////////////////////// FIXED /////////////////////////////////
/// there is a bracket missing
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();
////////////////////////////// FIXED /////////////////////////////////
// It is suppose to be isOffScreen and not isOffTheScreen
// There is a bracket missing
  if (ball.isOffScreen()) {
    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  //////////////////////// FIXED /////////////////////////////////
  // There was a ) missing at the end
  rightPaddle.display();
}
