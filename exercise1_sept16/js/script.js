// Exercise 1 - Moving pictures
// Rose-Marie Dion
//
// September 16 notes
// Need to comment my work


// The image of wand
var wandImage;
// The current position of the wand
var wandImageX;
var wandImageY;

// The image of a unicorn
var unicornImage;
// The current position of the unicorn
var unicornImageX;
var unicornImageY;

// The transparent image of a rainbow
var rainbowTexture;
// The current position of the rainbow texture
var rainbowTextureX;
var rainbowTextureY;

// preload of all the images

function preload() {
  wandImage = loadImage("assets/images/wand.png");
  unicornImage = loadImage("assets/images/unicorn.png");
  rainbowTexture = loadImage("assets/images/rainbow.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // created a canvas of 500x500
  createCanvas(500,500);

  // Start the wand image at the centre of the canvas
  wandImageX = width/2;
  wandImageY = height/2;

  // Start the unicorn movement from the left of the canvas
  unicornImageX = 0 - unicornImage.height/2;
  unicornImageY = width/2;

  // Start the rainbow image perfectly off screen above the canvas
  rainbowTextureX = width/2;
  rainbowTextureY = 0 - rainbowTexture.height/2;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()

function draw() {

  // Move the felt image down by increasing its y position
  rainbowTextureY += 1;

  // Display the felt image
  image(rainbowTexture,rainbowTextureX,rainbowTextureY);

  // Move unicorn from it last position
  unicornImageX += 1;

  // Display the unicorn image
  image(unicornImage,unicornImageX,unicornImageY);

  // Calculate the distance in X and in Y
  var xDistance = mouseX - wandImageX;
  var yDistance = mouseY - wandImageY;
  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  wandImageX = wandImageX + xDistance/10;
  wandImageY = wandImageY + yDistance/10;

  // Display the clown image
  image(wandImage,wandImageX,wandImageY);
}
