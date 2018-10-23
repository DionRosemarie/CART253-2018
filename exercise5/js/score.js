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
  textSize(12);
  fill(80);
  text("PRESS UP ARROW TO GO UP\n", 448, 65);
  text("PRESS DOWN ARROW TO GO DOWN\n", 410, 80);
  text("PRESS W TO GO UP\n", 40, 65);
  text("PRESS S TO GO DOWN\n", 40, 80);
  pop();

  fill(255, 255, 255);
  textFont(myFont);
  textSize(20);
  text("PLAYER 1", 40, 40);
  text("PLAYER 2", 515, 40);
  push();

  // Changing the difficulty of the game
  this.scoreTotal = this.leftScore + this.rightScore;
  if (this.scoreTotal > 5) {
    image(heartTextureImage, random(0, 600), random(0, 600));
    push();
    textFont(myFont);
    textSize(20);
    fill(70);
    text("SO MUCH LOVE IN THE AIR", 200, 430);
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
  if (this.leftScore > 10) {
    gameOver = true;
  }

  for (var i = 0; i < this.rightScore; i++) {
    var scoreWidth = map(this.rightScore, 0, 2, 0, 50);
    push();
    fill(255, 0, 0);
    rect(width - 0, 0, -scoreWidth, 15);
    pop();

  }
  if (this.rightScore > 10) {
    gameOver = true;
  }

}
/////////////// END NEW CODE ///////////////////
