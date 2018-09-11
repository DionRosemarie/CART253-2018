// Exercise 1 - Moving pictures
// Rose-Marie Dion
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.


// The image of a clown face

var shrekImage;

// The current position of the clown face
var shrekImageX;
var shrekImageY;

// The transparent image of "felt" that wipes down the canvas
var swampTextureImage;

// The current position of the transparent image of "felt"
var swampTextureImageX;
var swampTextureImageY;

// The image of a the donkey

var donkeyImage;

// The current position of the clown face
var donkeyImageX;
var donkeyImageY;





// preload()
//
// Load the two images we're using before the program starts

function preload() {
  shrekImage = loadImage("assets/images/shrek.png");
  swampTextureImage = loadImage("assets/images/swamp.jpg");
  donkeyImage = loadImage("assets/images/donkey.jpg");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the clown image at the centre of the canvas
  shrekImageX = width/2;
  shrekImageY = height/2;

  // Start of the donkey from left to right
  donkeyImageX = width/2;
  donkeyImageY = 0 - donkeyImage.height/2;

  // Start the felt image perfectly off screen above the canvas
  swampTextureImageX = width/2;
  swampTextureImageY = 0 - swampTextureImage.height/2;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {

  // Move the felt image down by increasing its y position
  swampTextureImageY += 1;


  // Display the felt image
  image(swampTextureImage,swampTextureImageX,swampTextureImageY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - shrekImageX;
  var yDistance = mouseY - shrekImageY;
  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  shrekImageX = shrekImageX + xDistance/10;
  shrekImageY = shrekImageY + yDistance/10;

  // Display the clown image
  image(shrekImage,shrekImageX,shrekImageY);
}
