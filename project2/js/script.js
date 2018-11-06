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

function preload(){
beepSFX = new Audio("assets/sounds/beep.wav");
endGameSFX = new Audio("assets/sounds/sad.mp3");
myFont = loadFont("assets/font/ChakraPetch-Light.ttf");
heartImage = loadImage("assets/images/heart.png");
heartBrokenImage = loadImage("assets/images/heartbroken.png");
heartTextureImage = loadImage("assets/images/heartTexture.png");
ballImage = loadImage("assets/images/ball.png");
}
// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(windowWidth,windowHeight);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,20,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(windowWidth-50,windowHeight/2,10,60,10,DOWN_ARROW,UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(40,windowHeight/2,10,60,10,83,87);

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
    textFont(myFont);
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

  if (this.scoreTotal > 3) {
   state = "GAME OVER";
 }
}

function displayEndGame() {
  push();
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(255);
  text("YOUR PING WANS'T ENOUGH FOR MY PONG",width/2,height/2);
}
