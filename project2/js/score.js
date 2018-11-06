//////////////// NEW CODE ///////////////////
function Score(x, y) {
  this.x = x;
  this.y = y;
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
  textSize(15);
  fill(80);
  text("PRESS UP ARROW TO GO UP\n", windowWidth-230, 85);
  text("PRESS DOWN ARROW TO GO DOWN\n", windowWidth-288, 103);
  text("PRESS W TO GO UP\n", 40, 85);
  text("PRESS S TO GO DOWN\n", 40, 103);
  pop();

  fill(255, 255, 255);
  textFont(myFont);
  textSize(20);
  text("PLAYER 1", 40, 55);
  text("PLAYER 2", windowWidth-120, 55);
  push();

  // Changing the difficulty of the game
  this.scoreTotal = this.leftScore + this.rightScore;
  if (this.scoreTotal > 1) {
    image(heartTextureImage, random(0,windowWidth), random(0, windowHeight));
    push();
    textFont(myFont);
    textSize(25);
    fill(70);
    textAlign(CENTER);
    text("SO MUCH LOVE IN THE AIR", windowWidth/2, 1.5*windowHeight/2);
    pop();
  }

  // Displaying the score in as a red bar on the top of the screen
  for (var i = 0; i < this.leftScore; i++) {
    var scoreWidth = map(this.leftScore, 0, 2, 0, 50);
    push();
    fill(255, 0, 0);
    rect(0, 0, scoreWidth, 15);
    pop();
  }
  if (this.leftScore > 2) {
    gameOver = true;
  }

  for (var i = 0; i < this.rightScore; i++) {
    var scoreWidth = map(this.rightScore, 0, 2, 0, 50);
    push();
    fill(255, 0, 0);
    rect(width - 0, 0, -scoreWidth, 15);
    pop();

  }
  if (this.rightScore > 2) {
    gameOver = true;
  }

}
