var player1 = "";
var player2 = "";

var rollDice = function(){
  return Math.floor(Math.random()*6)+1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
Player.prototype.rollOne = function () {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert ("Sorry " + this.playerName + ", you rolled 1! Player 2's turn!")
  } else {
    this.tempscore += this.roll;
  }
}
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + ", your turn is over!")
}
Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " won!");
  }
}
Player.prototype.newGame = function () {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
}
var nameValues = function() {
  $(".player1").val("");
  $(".player2").val("");
}
$(document).
