// Exercise 0 - Spiritual Self-Portrait
// Rose-Marie Dion
// 9 September 2018
//
// Uses p5's set of shape and colour functions to draw a head
// Draws a beautiful face on the canvas and puts a hat on it!

function setup() {

  // Set up the canvas and give it a nice pink colour

  createCanvas(500,500);
  background(255, 255, 68);

  noStroke();
  // FACE OF THE CHARACTER

  fill(0,0,0);
  ellipseMode(CENTER);
  ellipse(251,251,350,350);
  rect(76,250,350,400);
  fill(252, 224, 199);
  ellipseMode(CENTER);
  ellipse(251,251,300,300);

  //EYES OF THE CHARACTER
  fill(255,255,255);
  ellipse(201,221,60,60);
  ellipse(301,221,60,60);
  fill(0,0,0);
  ellipse(201,222,45,45);
  ellipse(301,222,45,45);
  fill(255,255,255);
  ellipse(190,210,20,20);
  ellipse(290,210,20,20);
  stroke(0,0,0);
  line(160,195,173,207);
  line(165,190,177,202);
  line(170,185,182,198);
  line(326,206,340,191);
  line(323,200,333,187);
  line(317,195,325,183);

// NOSE OF THE CHARACTER
noStroke();
fill(252, 216, 189);
triangle(250,230,220,290,250,290);

// MOUTH OF THE CHARACTER
fill(255, 255, 255);
ellipse(245,340,80,60);
fill(252, 224, 199);
rect(205,300,100,30);

// HAIR OF THE CHARACTER
fill(0,0,0);
triangle(300,110,130,140,100,210);
triangle(340,110,185,90,100,210);
ellipseMode(CENTER);
ellipse(251,80,120,120);

// NECK
fill(252, 224, 199);
rect(215,380,60,100);


// SHOULDERS
fill(69, 119, 74);
rect(130,425,240,100);
triangle(130,425,130,500,100,500);
triangle(370,425,370,500,400,500);
fill(252, 224, 199);
ellipseMode(CENTER);
ellipse(245,425,60,60);




}


// draw()
//
// Does nothing.

function draw() {
  // Nothing here for now.
}
