/*********************************************************

Exercise 2 - The Artful Dodger
Rose-Marie Dion

Starter code for exercise 2.

*********************************************************/

// The position and size of our avatar
var avatarImage;
var avatarX;
var avatarY;
var avatarSize = 75;
var avatarPosition = avatarX+avatarY;

// The avatar maximum and minimal size and speed
var avatarSpeedMin = 5;
var avatarSpeedMax = 10;
var avatarSizeMin = 75;
var avatarSizeMax = 250;

// Background of the game
var spaceImage;
var spaceImageX;
var spaceImageY;

// The speed and velocity of our avatar
var avatarSpeed = 10;
var avatarVX = 0;
var avatarVY = 0;

// The position and size of the enemy
var enemyImage;
var enemyX;
var enemyY;
var enemySize = 75;
var enemyPosition = enemyX+enemyY;

// How much bigger the enemy circle gets with each successful dodge
var enemySizeIncrease = 5;

// The speed and velocity of our enemy circle
var enemySpeed = 5;
var enemyVX = 5;
// How much bigger the enemy circle gets with each successful dodge
var enemySpeedIncrease = 0.5;

// How many dodges the player has made
var dodges = 0;
var dodgesFont;

// My if statement need text, so i need a new variable
var currentText = "";

// preload

function preload() {
dodgesFont = loadFont("assets/fonts/RobotoMono-Bold.ttf")
// Background image
spaceImage = loadImage("assets/images/fond.png");
// Enemy image aka the alien
enemyImage = loadImage("assets/images/alien.png");
// Avtar image aka the spaceship
avatarImage = loadImage("assets/images/avatar.png");
}


function setup() {
  // Keeping the same size canvas
  createCanvas(500,500);

  // Font informations for the number of dodges
  textFont(dodgesFont);
  textSize(100);
  textAlign(CENTER);
  fill(95, 75, 132);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // Position of the background
  spaceImageX = 0;
  spaceImageY = 0;

}

// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {

  // Displaying the avatar, enemy and background
  image(spaceImage,spaceImageX,spaceImageY);
  text(dodges, width/2, height/1);
  image(enemyImage,enemyX,enemyY,enemySize,enemySize);
  image(avatarImage,avatarX,avatarY,avatarSize,avatarSize);


  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }


  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed (which increases)
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;


    // I want to display the word BUSTED when the player loses
    // Position of the text
    // September 25 : Can't display the text
    text(currentText,width/2,height/2);
    if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    currentText += "BUSTED";
    reset();
  }

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    reset();
  }


 function reset(){
    // Reset the enemy's position
    enemyX = 0;
    enemyY = random(0,height);
    // Reset the enemy's size and speed
    enemySize = random(0);
    enemySpeed = 5;
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter
    dodges = 0;

}


  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    enemyX = 0;
    enemyY = random(0,height);
    enemySize = random(10);
    enemySpeed = random;
    avatarX = width/2;
    avatarY = height/2;
    dodges = 0;
  }

  // Check if the enemy has moved all the way across the screen
    if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
    // Increase the enemy's speed and size to make the game harder
    enemySpeed = enemySpeed + enemySpeedIncrease;
    enemySize = enemySize + enemySizeIncrease;

    // Increasing the avatar's size and speed a random value
    avatarSpeed = random(avatarSpeedMin,avatarSpeedMax);
    avatarSize = random(avatarSizeMin,avatarSizeMax);
  }

  // Display the current number of successful in the console
  console.log(dodges);


}
