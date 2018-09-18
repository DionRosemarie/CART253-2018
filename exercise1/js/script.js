// Exercise 1 - Moving pictures
// ROSE-MARIE DION - VERSION 2
// I was missing something in the last version. This is a new version of the exercise 1


// The image of a clown face
var clownImage;
// The current position of the clown face
var clownImageX;
var clownImageY;

// The image of a unicorn
var unicornImage;
// The current position of the unicorn
var unicornImageX;
var unicornImageY;

// The background image of a rainbow
var rainbowTexture;
// The current position of the rainbow background
var rainbowTextureX;
var rainbowTextureY;


// preload()
//
// Load the two images we're using before the program starts

function preload() {
  clownImage = loadImage("assets/images/clown.png");
  unicornImage = loadImage("assets/images/unicorn.png");
  rainbowTexture = loadImage("assets/images/rainbow.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the clown image at the centre of the canvas
  clownImageX = width/2;
  clownImageY = height/2;

  // Start the unicorn movement from the left of the canvas
  unicornImageX = 2 - unicornImage.height/2;
  unicornImageY = width/2;

  // Start the rainbow image perfectly off screen above the canvas
  rainbowTextureX = width/2;
  rainbowTextureY = 0 - rainbowTexture.height/2;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {

  // Move the rsinbow image down by increasing its y position
  rainbowTextureY += 6;

  // Display the rainbow image
  image(rainbowTexture,rainbowTextureX,rainbowTextureY);

  // Move unicorn from it last position
  unicornImageX += 5;
  // Display the unicorn image
  image(unicornImage,unicornImageX,unicornImageY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;
  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;

  // Display the clown image
  image(clownImage,clownImageX,clownImageY);
}
