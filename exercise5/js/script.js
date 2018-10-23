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
var leftScore;
var rightScore;
var endGame;
var gameOver = false;

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,20,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);

  score = new Score();

  endGame = new endGame();
}

function preload() {
  beepSFX = new Audio("assets/sounds/beep.wav");
  endGameSFX = new Audio("assets/sounds/sad.mp3");
  myFont = loadFont("assets/fonts/ChakraPetch-Light.ttf");
  heartImage = loadImage("assets/images/heart.png");
  heartBrokenImage = loadImage("assets/images/heartbroken.png");
  heartTextureImage = loadImage("assets/images/heartTexture.png");
  ballImage = loadImage("assets/images/ball.png");
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);
  image(heartImage, 220, 155);


  if (ball.isOffScreen()) {
    ball.reset();
  }

  if (!gameOver) {

    leftPaddle.handleInput();
    rightPaddle.handleInput();

    ball.update();
    leftPaddle.update();
    rightPaddle.update();
    score.update();


    ball.handleCollision(leftPaddle);
    ball.handleCollision(rightPaddle);

    ball.display();
    leftPaddle.display();
    rightPaddle.display();
    score.display();


  } else {
    endGame.display(score.leftScore, score.rightScore);
  }

}
