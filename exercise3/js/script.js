/******************************************************************************
Where's Sausage Dog?
by Pippin Barr
An algorithmic version of a Where's Wally searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.
Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
var targetX;
var targetY;
var targetImage;
var targetImagePosition;

// Adding new variables to make winning more exciting
var targetImageVx;
var targetImageVy;
var targetSpeed = 1;
var targetImageAx = 0.5;


// Image of Maggie as a reference for the user
var referenceImage;
var referenceImageX;
var referenceImageY;
var referenceImagePosition;
var ellipsePositionX;
var ellipsePositionY;
var ellipsePosition;

// The ten decoy images
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
var numDecoys = 500;

// Keep track of whether they've won
var gameOver = false;

// preload()
//
// Loads the target and decoy images before the program starts
function preload() {
  targetImage = loadImage("assets/images/target.png");
  referenceImage = loadImage("assets/images/r_target.png");

  decoyImage1 = loadImage("assets/images/pers1.png");
  decoyImage2 = loadImage("assets/images/pers2.png");
  decoyImage3 = loadImage("assets/images/pers3.png");
  decoyImage4 = loadImage("assets/images/pers4.png");
  decoyImage5 = loadImage("assets/images/pers5.png");
  decoyImage6 = loadImage("assets/images/pers6.png");
  decoyImage7 = loadImage("assets/images/pers7.png");
  decoyImage8 = loadImage("assets/images/pers8.png");
  decoyImage9 = loadImage("assets/images/pers9.png");
  decoyImage10 = loadImage("assets/images/pers10.png");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(244, 220, 66);
    imageMode(CENTER);

  // Setting up the variables for the moving challenge
    targetImagevx = 0;
    targetImagevy = 0;

  // Changing the number of decoys on the screen
    numDecoys = random(25, 500);

  // Use a for loop to draw as many decoys as we need
    for (var i = 0; i < numDecoys; i++) {
    // Choose a random location for this decoy
    var x = random(0, width);
    var y = random(0, height);
    // Generate a random number we can use for probability
    var r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough
    // Changed the size of the decoys and to make them smaller
    if (r < 0.1) {
      image(decoyImage1, x, y, 80, 90);
    } else if (r < 0.2) {
      image(decoyImage2, x, y, 80, 90);
    } else if (r < 0.3) {
      image(decoyImage3, x, y, 80, 90);
    } else if (r < 0.4) {
      image(decoyImage4, x, y, 80, 90);
    } else if (r < 0.5) {
      image(decoyImage5, x, y, 80, 90);
    } else if (r < 0.6) {
      image(decoyImage6, x, y, 80, 90);
    } else if (r < 0.7) {
      image(decoyImage7, x, y, 80, 90);
    } else if (r < 0.8) {
      image(decoyImage8, x, y, 80, 90);
    } else if (r < 0.9) {
      image(decoyImage9, x, y, 80, 90);
    } else if (r < 1.0) {
      image(decoyImage10, x, y, 80, 90);
    }

  }

// Ellipse behing the image of Maggie in the donut. It more easy for the eyes with the ellipse behind
      noStroke();
      fill(244,220, 66);
      rect(width*0.6, height*0,500,325);

// Displaying the image of maggie in a donut
      image(referenceImage,width * 0.8, height / 4);

// Information for the speed of the target when the user wins
      targetImageVx = targetSpeed;
      targetImageVy = -targetSpeed;

// Position for the reference image of the target
      ellipsePositionX = width * 0.8;
      ellipsePositionY = height / 4;

// Informations for the text under Maggie in the donut
      textFont("Barlow");
      textSize(20);
      textAlign(CENTER, CENTER);
      strokeWeight(4);
      stroke(0);
      fill(226, 74, 171);
      text("CLICK ON HER!", windowWidth * 0.8, 290);


// Identifying the position of the reference image and target image
      referenceImagePosition = referenceImageX + referenceImageY;
      targetImagePosition = targetX + targetY;
      ellipsePosition = ellipsePositionX + ellipsePositionY;

// Once we've displayed all decoys, we choose a location for the target
      targetX = random(0, width);
      targetY = random(0, height);

// And draw it (this means it will always be on top)
      image(targetImage, targetX, targetY);

// While loop so the target can't go under the reference image (Maggie in a donut)
      while (targetImagePosition === random) {
      targetImagePosition !== ellipsePosition;
   }
}

function draw() {
    if (gameOver) {
// Prepare our typography
    textFont("Helvetica");
    textSize(100);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(random(255));
    background(random(0, 255), random(0, 255), random(0, 255));
    // Tell them they won!
    text("YOU WINNED!", width / 2, height / 2);
    noFill();
    stroke(random(255));
    strokeWeight(10);

// Wrapping for the target
// The variables were not right so we changed it
    if (targetX + targetImage.width / 2 < 0) {
      targetX += width;
    } else if (targetX - targetImage.width / 2 > width) {
      targetX -= width;
    }
    if (targetY + targetImage.height / 2 < 0) {
      targetY += height;
    } else if (targetY - targetImage.height / 2 > height) {
      targetY -= height;
    }

// Movement part for the target when the player win
    targetX = targetX - targetImageVx;
    targetY = targetY + targetImageVy;
    targetImageVy = targetImageVy + targetImageAx;
    targetImageVx = targetImageVx + targetImageAx;
    image(targetImage, targetX, targetY);
  }
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width / 2 && mouseX < targetX + targetImage.width / 2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height / 2 && mouseY < targetY + targetImage.height / 2) {
      gameOver = true;
    }
  }
}
