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
var meanBall;


function preload(){
beepSFX = new Audio("assets/sounds/beep.wav");
endGameSFX = new Audio("assets/sounds/sad.mp3");
saxSFX = new Audio("assets/sounds/saxSound.mp3");
myFont = loadFont("assets/font/ChakraPetch-Light.ttf");
heartImage = loadImage("assets/images/heart.png");
heartBrokenImage = loadImage("assets/images/heartbroken.png");
heartTextureImage = loadImage("assets/images/heartTexture.png");
ballImage = loadImage("assets/images/ball.png");
breakUpBall = loadImage("assets/images/breakUp.png");
}
// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(windowWidth,windowHeight);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,20,5);

  meanBall = new meanBall(width/2,height/2,5,5,40,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(windowWidth-50,windowHeight/2,10,100,10,DOWN_ARROW,UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(40,windowHeight/2,10,100,10,83,87);

  score = new Score();
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);
  imageMode(CENTER);
  image(heartImage, windowWidth / 2, windowHeight / 2);


  switch (state) {
    case "START":
    displayStart();
    break;

    case "GAME":
    displayGame();
    break;

    case "GAME OVER":
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
    text("MY HEART MAKE A FEW PING PONG\nWHEN I SEE YOU",windowWidth/2,windowHeight/4.5);
    textSize(10);
    text("PRESS SPACE TO PLAY",windowWidth/2,3*windowHeight/4);
    imageMode(CENTER);
    image(heartImage, windowWidth / 2, windowHeight/2,random(200,225),random(200,225));
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

  if (score.leftScore > 5 || score.rightScore > 5) {
    if (meanBall.isOffScreen()) {
      meanBall.reset();
    }
   meanBall.update();
   meanBall.display();
   meanBall.handleCollision(leftPaddle);
   meanBall.handleCollision(rightPaddle);
  }

  if (score.leftScore === 10 || score.rightScore === 10) {
   state = "GAME OVER";
 }
}

function displayEndGame() {
  push();
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(255);
  imageMode(CENTER);
  image(heartBrokenImage, windowWidth / 2, windowHeight / 2);
  var gameOverText = "YOUR PING WASN'T ENOUGH FOR MY PONG\n";
  gameOverText += "it's not you, it's me, it's over\n\n";
  textSize(15);
  var gameOverTextScore = "PLAYER 1 SCORED " + score.leftScore + " POINT\n";
  gameOverTextScore += "PLAYER 2 SCORED " + score.rightScore + " POINT \n\nFOR A SECOND CHANCE TO LOVE, PRESS B";
  text(gameOverText, windowWidth / 2, windowHeight/4);
  text(gameOverTextScore, windowWidth/2,3*windowHeight/4.5);
  saxSFX.pause();
  endGameSFX.play();

  if (keyIsPressed && key === 'b') {
    score.leftScore=0;
    score.rightScore=0;
    state = "GAME";
  }
}
