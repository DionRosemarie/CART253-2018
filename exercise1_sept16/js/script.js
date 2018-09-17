// Exercise 1 - Moving pictures
// Rose-Marie Dion
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.


// The image of a clown face
var wandImage;
// The current position of the clown face
var wandImageX;
var wandImageY;

// The image of a unicorn
var unicornImage;
// The current position of the unicorn
var unicornImageX;
var unicornImageY;

// The transparent image of "felt" that wipes down the canvas
var rainbowTexture;
// The current position of the transparent image of "felt"
var rainbowTextureX;
var rainbowTextureY;


// preload()
//
// Load the two images we're using before the program starts

function preload() {
  wandImage = loadImage("assets/images/wand.png");
  unicornImage = loadImage("assets/images/unicorn.png");
  rainbowTexture = loadImage("assets/images/rainbow.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(500,500);

  // Start the clown image at the centre of the canvas
  wandImageX = width/2;
  wandImageY = height/2;

  // Start the unicorn movement from the left of the canvas
  unicornImageX = 0 - unicornImage.height/2;
  unicornImageY = width/2; 

  // Start the felt image perfectly off screen above the canvas
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

  // Move the felt image down by increasing its y position
  rainbowTextureY += 1;

  // Display the felt image
  image(rainbowTexture,rainbowTextureX,rainbowTextureY);

  // Move unicorn from it last position
  unicornImageX += 1;

  // Display the unicorn image
  image(unicornImage,unicornImageX,unicornImageY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - wandImageX;
  var yDistance = mouseY - wandImageY;
  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  wandImageX = wandImageX + xDistance/10;
  wandImageY = wandImageY + yDistance/10;

  // Display the clown image
  image(wandImage,wandImageX,wandImageY);
}
