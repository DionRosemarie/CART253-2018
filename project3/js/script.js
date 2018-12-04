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
var bulletImage;
var enemyKingImage;
var cometImage;

// displaying the different state of the game
var state = "START";
var introSFX;

// variable for the player
var player;
var laserSFX;

// variable for the enemy
var enemy;
var enemyKing;

// variable for the comet
var comet;
var cometSFX;

// variable for the sounds of each level
var gameOneSFX;
var gameTwoSFX;

// variable for the background stars
var stars = [];
var numStars = 1000;

// variables to count the number of enemy of the state 2
var enemyCounter = 0;
var killCounter = 0;

// variables for the end game
var winSFX;
var laughSFX;



// preload()
//
// Description of preload

function preload() {
  // Preloading my images and my font to start creating the visual of my game
  myFont = loadFont("assets/fonts/VT323-Regular.ttf");
  playerImage = loadImage("assets/images/player.png");
  enemyImage = loadImage("assets/images/Enemy.png");
  bulletImage = loadImage("assets/images/bullet.png");
  enemyKingImage = loadImage("assets/images/enemyKing.png");
  cometImage = loadImage("assets/images/comet.png");
  laserSFX = new Audio("assets/sounds/laser.mp3");
  introSFX = new Audio("assets/sounds/intro.mp3");
  cometSFX = new Audio("assets/sounds/explosion.mp3");
  gameOneSFX = new Audio("assets/sounds/gameOne.mp3");
  gameTwoSFX = new Audio("assets/sounds/gameTwo.mp3");
  winSFX = new Audio("assets/sounds/win.mp3");
  laughSFX = new Audio("assets/sounds/laugh.mp3");
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

  // information for the EnemyKing.js
  enemyKing = new EnemyKing(250, 150, 5);

  // information for the Comet.js
  comet = new Comet(500, 300, 1, 50);

  // information for the Stars.js
  for (var i = 0; i < numStars; i++) {
    stars.push(new Star());
  }


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

      // This is the instruction for the game
case "INSTRUCTION":
  displayInstruction();
  break;

      // This is the first level of the game, i'm going to add one more
    case "LEVEL ONE":
      displayGameOne();
      break;

      // This is the first level of the game, i'm going to add one more
    case "GAME OVER ONE":
      displayGameOverOne();
      break;

      // This is the second level of the game
    case "START TWO":
      displayStartTwo();
      break;

      // This is the second level of the game
    case "LEVEL TWO":
      displayGameTwo();
      break;

      // This state is for when the player wins
    case "WIN":
      displayWin();
      break;

      // This state is for when the player loses by colliding with the enemyKing
    case "GAME OVER TWO":
      displayGameOverTwo();
      break;

  }
}

// START STATE

// This is the intro for the game
function displayStart() {
  introSFX.setVolume(0.1);
  introSFX.play();
  push();
  createCanvas(500, 500);
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(250);
  text("to infinity and beyond!", width / 2, 80);
  text("press X to start your adventure", width / 2, 450);
  imageMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  image(playerImage, 5, 5);
  pop();

  // information for the stars in the background
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
  pop();

  // To start the game, we only have to press the space bar to access the level one of the game
  if (keyIsPressed && key === 'x') {
    state = "INSTRUCTION";
  }
}

// This is the intro for the game
function displayInstruction() {
  introSFX.play();
  push();
  createCanvas(500, 500);
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(250);
  text("you need the save earth from the alien's invasion", width / 2, 150);
  text("press the Z key to shoot the them before\nthey reach our planet", width / 2, 250);
  text("your spaceship is ready to go,\npress space bar to take off", width / 2, 350);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  pop();

  // information for the stars in the background
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
  pop();



  // To start the game, we only have to press the space bar to access the level one of the game
  if (keyIsPressed && key === ' ') {
    state = "LEVEL ONE";
  }
}

// LEVEL ONE STATE

// This is the first level of the game
function displayGameOne() {
  introSFX.pause();
  gameOneSFX.play();
  createCanvas(700, 500);
  background(0);
  push();
  textAlign(LEFT);
  textSize(15);
  textFont(myFont);
  fill(250);
  text("You have killed " + killCounter + " alien", 40,50);
  text(enemyCounter + " alien have reach the earth", 490,50);
  pop();

  player.update();
  enemy.update();

  player.handleInput();

  player.display();
  enemy.display();
  enemy.handleCollision(player.bullets);

  if (enemy.isOffScreen()) {
    enemyCounter += 1;
    console.log("enemy counter " + enemyCounter);
  }

  player.updateBullets();

  if (enemy.alive === false) {
    enemy.reset();
    enemy = new Enemy(random(0, width), -15, 5)
    killCounter += 1;
    console.log("kill counter " + killCounter);
  }

  // information for the stars in the background
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }

  if (killCounter >= 3) {
    enemy.speed += 0.05;
  }

  // To end the state
  if (killCounter === 1) {
    state = "START TWO"
    enemyCounter = 0;
    killCounter = 0;
    enemy.speed =5;

  } else if (enemyCounter === 5) {
    state = "GAME OVER ONE"
    enemyCounter = 0;
    killCounter = 0;
    enemy.speed =5;
  }

}

function displayGameOverOne() {
  gameOneSFX.pause();
  laughSFX.play();
  noLoop();
  push();
  createCanvas(700,500);
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(250);
  text("the humanity had faith in you\nbut you did not succeeded", width / 2, 200);
  text("The refill your spaceship, press X",width / 2, 320);
  pop();

  if (keyIsPressed && key === 'x') {
    state = "INSTRUCTION";
  }

}

// This is the second intro to make a transition between the first and second level
function displayStartTwo() {
  push();
  createCanvas(500, 500);
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(250);
  text("you made it!! \n\n\nbut wait\n but what do I see coming?", width / 2, 80);
  text("shoot the alien king\n but watchout for the comet", width / 2, 300);
  text("press b to see", width / 2, 450);
  pop();

  // information for the stars in the background
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
  pop();

  // To start the game, we only have to press the space bar to access the level one of the game
  if (keyIsPressed && key === 'b') {
    state = "LEVEL TWO";
  }
}

// LEVEL TWO STATE

// This is the second level of the game and the final one
function displayGameTwo() {
  gameOneSFX.pause();
  gameTwoSFX.play();
  push();
  createCanvas(1000, 500);
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(100);
  var scoreText = "you have " + player.life + " life left";
  var noticeText = "watchout for the comet";
  text(scoreText, 100, 50);
  text(noticeText, 850, 50);
  pop();

  player.update();
  enemyKing.update();
  comet.update();

  player.handleInput();

  player.display();
  enemyKing.display();
  comet.display();
  enemyKing.handleCollision(player.bullets);
  player.handleCollision();
  comet.handleCollision();

  player.updateBullets();

  // information for the stars in the background
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
  pop();

  // information to end the state
  if (player.life === 0) {
    state = "GAME OVER TWO"
    player.life =3;
    enemyKing.size = 100;
  }

  // If the player collide with the comet, the game stop
  else if (comet.gameOver === true) {
      state = "GAME OVER TWO"
      comet.gameOver = false;
      enemyKing.size =  100;
  }

  // The value 10 for the size equals 3 hits
  else if (enemyKing.size < 10) {
    console.log("size is 20");
    state = "WIN";
  }
}

// GAME OVER STATE

// This part is display if the player loses
function displayGameOverTwo() {
  gameTwoSFX.pause();
  push();
  createCanvas(1000, 500);
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(255);
  var gameOverText = "The alien have taken over our planet\n\npress X to reload your spaceship";
  text(gameOverText,width/2,height/2);
  pop();

  if (keyIsPressed && key === 'x') {
    state = "INSTRUCTION";
  }

}


// WIN STATE

// This part is display if the player wins
function  displayWin() {
  console.log("win state");
  gameTwoSFX.pause();
  winSFX.play();
  push();
  createCanvas(1000, 500);
  background(0);
  textAlign(CENTER);
  textSize(20);
  textFont(myFont);
  fill(255);
  var winText = "you saved planet earth!!\n the humanity will be forever grateful\n\n\n press the space bar to relive your adventure";
  text(winText,width/2,height/2);
  pop();

  if (keyIsPressed && key === ' ') {
    state = "INSTRUCTION";
  }
}
