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
////////////////// NEW CODE ////////////////////////
// VARIABLE FOR THE STATE
var state = "START";
// VARIABLES FOR THE DIFFERENT BALLS (ARRAYS)
var meanBalls = [];
var meanBall;
var numMeanBall = 3;
// VARIABLES FOR THE DIFFERENT ELLIPSES AT THE START STATE (ARRAYS)
var setMoods = [];
var numSetMood = 100;
// VARIABLE FOR THE OBJECT
var lightSwitch;
////////////////// END NEW CODE ////////////////////////

// ALL THE ELEMENT OF THE PRELOAD
function preload() {
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

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create a ball
  ball = new Ball(width / 2, height / 2, 5, 5, 20, 5);

  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(windowWidth - 50, windowHeight / 2.5, 10, 140, 10, DOWN_ARROW, UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(40, windowHeight / 2.5, 10, 140, 10, 83, 87);
//////////////////  NEW CODE ////////////////////////
// CREATING THE CLASS FOR THE SCORE
  score = new Score();
// CREATING THE CLASS FOR THE NEW OBJECT
  lightSwitch = new LightSwitch(windowWidth/2,windowHeight/2,2,2,50,5);
// CREATING THE CLASS FOR THE ELLIPSES AT THE BEGINNING OF THE GAME
  for (var i = 0; i < numSetMood; i++) {
    setMoods.push(new SetMood(width/2,height/2,5,5,10,5));
  }
// CREATING THE CLASS FOR THE MEAN BALLS
  for (var i = 0; i < numMeanBall; i++) {
    meanBalls.push(new MeanBall(width / 2, height / 2, 5, 5, 40, 5));
  }
}
////////////////// END NEW CODE ////////////////////////
// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);
  ////////////////// NEW CODE ////////////////////////
  imageMode(CENTER);
  image(heartImage, windowWidth / 2, windowHeight / 2);

// CHANGING STATE TO CREATE AN INTRO AND AN ENDING
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
  text("DEAR PING, DO YOU WANT TO BE MY PONG?", windowWidth / 2, windowHeight / 4.5);
  textSize(20);
  text("PRESS SPACE KEY TO ENTER\n THE RELATIONSHIP", windowWidth / 2, 3 * windowHeight / 4);
  text("TOUCH THE RED BUTTON TO SET THE MOOD", windowWidth / 2, 4 * windowHeight /4.5);
  imageMode(CENTER);
  image(heartImage, windowWidth / 2, windowHeight / 2, random(200, 220), random(200, 220));
  pop();

    for (var i = 0; i < setMoods.length; i++) {
      setMoods[i].display();
      setMoods[i].update();
    }

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
  lightSwitch.update();

  if (ball.isOffScreen()) {
    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);


  ball.display();
  leftPaddle.display();
  rightPaddle.display();
  score.display();
  lightSwitch.display();

  lightSwitch.mouseClicked();

  if (score.leftScore > 10 || score.rightScore > 10) {
    for (var i = 0; i < meanBalls.length; i++) {
      push();
      textFont(myFont);
      textSize(15);
      fill(70);
      textAlign(CENTER);
      text("LOOK OUT FOR THE BREAKUP\n YOU WON'T BE ABLE TO CATCH THE LOVE",windowWidth / 2, 500);
      pop();
      meanBalls[i].update();
      if (meanBalls[i].isOffScreen()) {
        meanBalls[i].reset();
      }

      meanBalls[i].display();
      meanBalls[i].handleCollision(leftPaddle);
      meanBalls[i].handleCollision(rightPaddle);
    }

  }

  if (score.leftScore === 15 || score.rightScore === 15) {
    state = "GAME OVER";
  }
}

function displayEndGame() {
  push();
  background(0);
  textAlign(CENTER);
  textSize(25);
  textFont(myFont);
  fill(255);
  imageMode(CENTER);
  image(heartBrokenImage, windowWidth / 2, windowHeight / 2);
  var gameOverText = "IT'S NOT YOU, IT'S ME";
  textSize(15);
  var gameOverTextScore = "PING SCORED " + score.leftScore + " POINT\n";
  gameOverTextScore += "PONG SCORED " + score.rightScore + " POINT \n\nFOR A SECOND CHANCE AT LOVE, PRESS B";
  text(gameOverText, windowWidth / 2, windowHeight / 4);
  text(gameOverTextScore, windowWidth / 2, 3 * windowHeight / 4.5);
  saxSFX.pause();
  endGameSFX.play();
  pop();

  if (keyIsPressed && key === 'b') {
    state = "GAME";
    score.leftScore = 0;
    score.rightScore = 0;
    rightPaddle = new Paddle(windowWidth - 50, windowHeight / 2, 10, 100, 10, DOWN_ARROW, UP_ARROW);
    leftPaddle = new Paddle(40, windowHeight / 2, 10, 100, 10, 83, 87);
    endGameSFX.pause();
  }
}
////////////////// END NEW CODE ////////////////////////
