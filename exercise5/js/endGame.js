function endGame() {
}

endGame.prototype.display = function(leftScore,rightScore) {
  push();
  textFont(myFont);
  textSize(20);
  textAlign(CENTER, CENTER);
  background(0);
  fill(255);
  image(heartBrokenImage, 290, 100);
  var gameOverText = "YOUR PING WASN'T ENOUGH FOR MY PONG\n";
  gameOverText += "it's not you, it's me, it's over\n\n";
  gameOverText += "PLAYER 1 SCORED " + leftScore + " POINT\n";
  gameOverText += "PLAYER 2 SCORED " + rightScore + " POINT \n";
  text(gameOverText, width / 2, height / 2);
  pop();
  endGameSFX.play();
}
