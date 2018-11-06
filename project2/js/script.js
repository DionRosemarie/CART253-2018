// Basic OO Pong
// by Pippin Barr
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;
var score;
var state = "START";
// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);

  score = new Score();
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  switch (state) {
    case "START":
    displayStart();
    break;

    case "GAME":
    displayGame();
    break;

    case "END GAME":
    displayEndGame();
    break;
  }
}

  function displayStart() {
    push();
    textAlign(CENTER);
    textSize(20);
    fill(250);
    text("YOU ARE THE PING TO MY PONG",width/2,height/2);
    textSize(10);
    text("PRESS SPACE TO PLAY",width/2,3*height/4);
    pop();

    if (keyIsPressed && key === ' ') {
      state = "GAME";
    }
  }

function displayGame() {
  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();
  score.update();

  if (ball.isOffScreen()) {
    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();
  score.display();

  if (this.leftScore> 2|| this.rightScore >2) {
   state = "GAME OVER";
 }
}

function displayEndGame() {
  push();
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("YOUR PING WANS'T ENOUGH FOR MY PONG",width/2,height/2);
}
