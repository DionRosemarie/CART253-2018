//////////////// NEW CODE ///////////////////
function Score() {
  this.leftScore = 0;
  this.rightScore = 0;
  this.scoreTotal = 0;
}

Score.prototype.update = function() {
  // Keeping track of the score in the javascript console
  if (ball.x > width) {
    this.leftScore = this.leftScore + 1
    console.log(this.leftScore + " POINT FOR PLAYER 1")
  }

  if (ball.x + ball.size < 0) {
    this.rightScore = this.rightScore + 1
    console.log(this.rightScore + " POINT FOR PLAYER 2")
  }
}

Score.prototype.display = function() {
  // Displaying the text of the player 2
  push();
  textFont(myFont);
  textSize(10);
  fill(80);
  text("PRESS UP ARROW TO GO UP\n", windowWidth-165, 85);
  text("PRESS DOWN ARROW TO GO DOWN\n", windowWidth-195, 103);
  text("PRESS W TO GO UP\n", 40, 85);
  text("PRESS S TO GO DOWN\n", 40, 103);


  fill(255, 255, 255);
  textFont(myFont);
  textSize(20);
  text("PLAYER 1", 40, 55);
  text("PLAYER 2", windowWidth-120, 55);
  pop();


  // Changing the difficulty of the game
  this.scoreTotal = this.leftScore + this.rightScore;
  if (this.scoreTotal > 5) {
    image(heartTextureImage, random(0,windowWidth), random(0, windowHeight));
    push();
    textFont(myFont);
    textSize(15);
    fill(70);
    textAlign(CENTER);
    text("SO MUCH LOVE IN THE AIR", windowWidth/2, 1.5*windowHeight/2);
    saxSFX.play();
    pop();
  }

  // Displaying the score in as a red bar on the top of the screen
  for (var i = 0; i < this.leftScore; i++) {
    var scoreWidth = map(this.leftScore, 0, 6, 0, 50);
    push();
    fill(255, 0, 0);
    rect(0, 0, scoreWidth, 15);
    pop();
  }
  if (this.leftScore > 15) {
    gameOver = true;
  }

  for (var i = 0; i < this.rightScore; i++) {
    var scoreWidth = map(this.rightScore, 0, 6, 0, 50);
    push();
    fill(255, 0, 0);
    rect(width - 0, 0, -scoreWidth, 15);
    pop();

  }
  if (this.rightScore > 15) {
    gameOver = true;
  }

}
