// Pong
// by Rose-Marie Dion
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.

// Game colors
var bgColor = 0;
var fgColor = 255;

// BALL

// Basic definition of a ball object with its key properties of
// position, size, velocity, and speed
var ball = {
  x: 0,
  y: 0,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 5
}

// variable to end the game
var gameOver = false;

// variables for the images in for the game
var heartImage;
var heartBrokenImage;
var heartTextureImage;
var ballImage;

// variables to update the score for player 1
var playerLeftScore = 0;
// variables to update the score for player 2
var playerRightScore = 0;

// PADDLES


// How far in from the walls the paddles should be drawn on x
var paddleInset = 50;

// LEFT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
var leftPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vx: 0,
  vy: 0,
  speed: 5,
  upKeyCode: 87, // The key code for W
  downKeyCode: 83 // The key code for S
}

// RIGHT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
var rightPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vx: 0,
  vy: 0,
  speed: 5,
  upKeyCode: 38, // The key code for the UP ARROW
  downKeyCode: 40 // The key code for the DOWN ARROW
}

// A variable to hold the beep sound we will play on bouncing
var beepSFX;
var endGameSFX;

// preload()
//
// Loads the beep audio for the sound of bouncing
function preload() {
  beepSFX = new Audio("assets/sounds/beep.wav");
  endGameSFX = new Audio("assets/sounds/sad.mp3");
  myFont = loadFont("assets/fonts/ChakraPetch-Light.ttf");
  heartImage = loadImage("assets/images/heart.png");
  heartBrokenImage = loadImage("assets/images/heartbroken.png");
  heartTextureImage = loadImage("assets/images/heartTexture.png");
  ballImage = loadImage("assets/images/ball.png");
}

// setup()
//
// Creates the canvas, sets up the drawing modes,
// Sets initial values for paddle and ball positions
// and velocities.
function setup() {
  // Create canvas and set drawing modes
  createCanvas(640, 480);
  rectMode(CENTER);
  noStroke();
  fill(fgColor);

  setupPaddles();
  setupBall();


}


// setupPaddles()
//
// Sets the positions of the two paddles
function setupPaddles() {
  // Initialise the left paddle
  leftPaddle.x = paddleInset;
  leftPaddle.y = height / 2;

  // Initialise the right paddle
  rightPaddle.x = width - paddleInset;
  rightPaddle.y = height / 2;
}

// setupBall()
//
// Sets the position and velocity of the ball
function setupBall() {
  ball.x = width / 2;
  ball.y = height / 2;
  ball.vx = ball.speed;
  ball.vy = ball.speed;
}

// draw()
//
// Calls the appropriate functions to run the game
function draw() {
  // Fill the background
  background(bgColor);
  // display the heart in the background of the screen
  image(heartImage, 220, 155);

  push();
  textFont(myFont);
  textSize(12);
  fill(80);
  text("PRESS W TO GO UP\n",40, 65);
  text("PRESS S TO GO DOWN\n",40,80);
  text("PRESS UP ARROW TO GO UP\n",450,65);
  text("PRESS DOWN ARROW TO GO DOWN\n",410,80);
  pop();


  ////////////////// NEW CODE ///////////////////
  // We are now able to end the game
  if (!gameOver) {
    // Handle input
    // Notice how we're using the SAME FUNCTION to handle the input
    // for the two paddles!
    handleInput(leftPaddle);
    handleInput(rightPaddle);

    // Update positions of all objects
    // Notice how we're using the SAME FUNCTION to handle the input
    // for all three objects!
    updatePosition(leftPaddle);
    updatePosition(rightPaddle);
    updatePosition(ball);

    resetBall();

    updateScore();

    // Handle collisions
    handleBallWallCollision();
    handleBallPaddleCollision(leftPaddle);
    handleBallPaddleCollision(rightPaddle);

    // Handle the ball going off screen
    handleBallOffScreen();

    // Display the paddles and ball
    displayPaddle(leftPaddle);
    displayPaddle(rightPaddle);
    displayBall();
  } else {
    endGame();
  }

}
////////////////// END NEW CODE ///////////////////

// handleInput(paddle)
//
// Updates the paddle's velocity based on whether one of its movement
// keys are pressed or not.
// Takes one parameter: the paddle to handle.
function handleInput(paddle) {

  // Set the velocity based on whether one or neither of the keys is pressed

  // NOTE how we can change properties in the object, like .vy and they will
  // actually CHANGE THE OBJECT PASSED IN, this allows us to change the velocity
  // of WHICHEVER paddle is passed as a parameter by changing it's .vy.

  // UNLIKE most variables passed into functions, which just pass their VALUE,
  // when we pass JAVASCRIPT OBJECTS into functions it's the object itself that
  // gets passed, so we can change its properties etc.

  // Check whether the upKeyCode is being pressed
  // NOTE how this relies on the paddle passed as a parameter having the
  // property .upKey
  if (keyIsDown(paddle.upKeyCode)) {
    // Move up
    paddle.vy = -paddle.speed;
  }
  // Otherwise if the .downKeyCode is being pressed
  else if (keyIsDown(paddle.downKeyCode)) {
    // Move down
    paddle.vy = paddle.speed;
  } else {
    // Otherwise stop moving
    paddle.vy = 0;
  }
}

// updatePosition(object)
//
// Sets the position of the object passed in based on its velocity
// Takes one parameter: the object to update, which will be a paddle or a ball
//
// NOTE how this relies on the object passed in have .x, .y, .vx, and .vy
// properties, which is true of both the two paddles and the ball
function updatePosition(object) {
  object.x += object.vx;
  object.y += object.vy;
}

// handleBallWallCollision()
//
// Checks if the ball has overlapped the upper or lower 'wall' (edge of the screen)
// and is so reverses its vy
function handleBallWallCollision() {

  // Calculate edges of ball for clearer if statement below
  var ballTop = ball.y - ball.size / 2;
  var ballBottom = ball.y + ball.size / 2;
  var ballLeft = ball.x - ball.size / 2;
  var ballRight = ball.x + ball.size / 2;

  // Check for ball colliding with top and bottom
  if (ballTop < 0 || ballBottom > height) {
    // If it touched the top or bottom, reverse its vy
    ball.vy = -ball.vy;
    // Play our bouncing sound effect by rewinding and then playing
    beepSFX.currentTime = 0;
    beepSFX.play();
  }
}

// handleBallPaddleCollision(paddle)
//
// Checks if the ball overlaps the specified paddle and if so
// reverses the ball's vx so it bounces
function handleBallPaddleCollision(paddle) {

  // Calculate edges of ball for clearer if statements below
  var ballTop = ball.y - ball.size / 2;
  var ballBottom = ball.y + ball.size / 2;
  var ballLeft = ball.x - ball.size / 2;
  var ballRight = ball.x + ball.size / 2;

  // Calculate edges of paddle for clearer if statements below
  var paddleTop = paddle.y - paddle.h / 2;
  var paddleBottom = paddle.y + paddle.h / 2;
  var paddleLeft = paddle.x - paddle.w / 2;
  var paddleRight = paddle.x + paddle.w / 2;

  // First check it is in the vertical range of the paddle
  if (ballBottom > paddleTop && ballTop < paddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < paddleRight && ballRight > paddleLeft) {
      // Then the ball is touching the paddle so reverse its vx
      ball.vx = -ball.vx;
      // Play our bouncing sound effect by rewinding and then playing
      beepSFX.currentTime = 0;
      beepSFX.play();
    }
  }
}

// handleBallOffScreen()
//
// Checks if the ball has gone off screen to the left or right
// and moves it back to the centre if so
function handleBallOffScreen() {

  // Calculate edges of ball for clearer if statement below
  var ballLeft = ball.x - ball.size / 2;
  var ballRight = ball.x + ball.size / 2;

  // Check for ball going off the sides
  if (ballRight < 0 || ballLeft > width) {
    // If it went off either side, reset it to the centre
    ball.x = width / 2;
    ball.y = height / 2;
  }
  /////////////////// NEW CODE //////////////////////////////
  // We are keeping track of the score now in the javascript console
  if (ballRight < 0) {
    playerRightScore = playerRightScore + 1
    console.log(playerRightScore + " POINT FOR PLAYER 2")
  }

  if (ballLeft > width) {
    playerLeftScore = playerLeftScore + 1
    console.log(playerLeftScore + " POINT FOR PLAYER 1")
  }

  // This is the function to reset the ball position after each point
  resetBall();

  /////////////////// END NEW CODE ///////////////////////////
}

////////////////////// NEW CODE ///////////////////////////

function resetBall() {
  var ballLeft = ball.x - ball.size / 2;
  var ballRight = ball.x + ball.size / 2;

  // Positioning the ball depending which player won
  if (ballRight < 0 || ballRight > width) {
    ball.vx = -ball.vx;
    ball.vy = random(-ball.speed, ball.speed);
  }
  /////////////////// END NEW CODE ///////////////////////////
}

////////////////////// NEW CODE ////////////////////////////
// This function display the score on the screen without numbers

function updateScore() {

  fill(255, 255, 255);
  textFont(myFont);
  textSize(20);
  text("PLAYER 1", 40, 40);
  text("PLAYER 2", 515, 40);
  push();
  fill(50, 50, 50);
  textSize(35);
  text("YOU ARE THE PING TO MY PONG", 70, 460);
  pop();

  for (var i = 0; i < playerLeftScore; i++) {
    var scoreWidth = map(playerLeftScore, 0, 3, 0, 100);
    push();
    fill(255, 0, 0);
    rect(0, 0, scoreWidth, 20);
    pop();

  }

  if (playerLeftScore > 10) {
    gameOver = true;
  }

  for (var i = 0; i < playerRightScore; i++) {
    var scoreWidth = map(playerRightScore, 0, 3, 0, 100);
    push();
    fill(255, 0, 0);
    rect(width - 0, 0, scoreWidth, 20);
    pop();

  }
  if (playerRightScore > 10) {
    gameOver = true;
  }

  // To make the game more difficult, the player go to the next level
  // The ball is now more difficult to see  with all the hearts going around
  var scoreTotal = playerRightScore + playerLeftScore;
  if (scoreTotal > 2) {
  image(heartTextureImage, random(0, 600), random(0, 600));
  push();
  textFont(myFont);
  textSize(20);
  fill(80);
  text("SO MUCH LOVE IN THE AIR",200,380);
  pop();

  }

}
///////////////////////// END NEW CODE /////////////////////////////////////

// displayBall()
//
// Draws ball on screen based on its properties
function displayBall() {
  // Displaying the ball as an image now
  image(ballImage, ball.x, ball.y, ball.size, ball.size);
}

// displayPaddle(paddle)
//
// Draws the specified paddle on screen based on its properties
function displayPaddle(paddle) {
  rect(paddle.x, paddle.y, paddle.w, paddle.h);
}


///////////////////////////////// NEW CODE  //////////////////////////////
// This is the function for the end of the game

function endGame() {
  push();
  textFont(myFont);
  textSize(20);
  textAlign(CENTER, CENTER);
  background(0);
  fill(255);
  image(heartBrokenImage, 290, 100);
  var gameOverText = "YOUR PING WASN'T ENOUGH FOR MY PONG\n\n";
  gameOverText += "PLAYER 1 SCORED " + playerLeftScore + " POINT\n";
  gameOverText += "PLAYER 2 SCORED " + playerRightScore + " POINT \n";
  text(gameOverText, width / 2, height / 2);
  pop();
  endGameSFX.play();
}
////////////////////// END NEW CODE  ///////////////////////
