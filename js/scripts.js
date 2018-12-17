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
$(document).ready(function)() {
  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".player-console").show();
    $(".start-menu").hide();

    var player1 = $(".player1").val();
    $("#player1").text(player1);

    var player2 = $(".player2").val();
    $("#player2").text(player2);

    player1.playerName=player1;
    player2.playerName=player2;


});
$("button#new-game").click(function(event){
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-menu").show();
  });
