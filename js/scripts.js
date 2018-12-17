var dice={
  sides: 6,
  roll: function(){
    var randomNumber= Math.floor(Math.random()*this.sides)+1;
    return randomNumber;
  }
}
function Gamers(player1,player2){
  this.player1 = player1;
  this.player2 = player2;
}

$(document).ready(function(){
  $("form#details").submit(function(){
    event.preventDefault();

    var player1= $("input#player1name").val();
    var player2= $("input#player2name").val();

    var newGamer = new Gamers(player1,player2);
    $("#Player1").text(newGamer.player1);
    $("#Player2").text(newGamer.player2);

    $("#show").show();
    $(".receive").hide();
  });
  //Scope for Player 1
  var acquiredscore1 = 0;
  var totalscore1 = 0;
  var dicevalue1 = 0;
  $("#hold2").attr("disabled",true);
  $("#roll2").attr("disabled",true);

  $("#roll1").click(function(){
    dicevalue1 =dice.roll();
    if(dicevalue1===1){
      dicevalue1 = 0;
      acquiredscore1 = 0;
      $("#hold1").attr("disabled",true);
      $("#roll1").attr("disabled",true);

      $("#hold2").attr("disabled",false);
      $("#roll2").attr("disabled",false);
      alert("The Dice landed on 1,game moves to player 2");

    }
    $("#dicevalue1").text(dicevalue1);

    acquiredscore1 += dicevalue1;
    $("#acquiredscore1").text(acquiredscore1);
  });
  $("#hold1").click(function(){
    totalscore1 += acquiredscore1;

    $("#totalscore1").text(totalscore1);

    if(totalscore1>=100){
      alert("Player 1 Wins!!")
    }else{
      dicevalue1= 0;
      acquiredscore1= 0;
      $("#dicevalue1").text(dicevalue1);
      $("#acquiredscore1").text(acquiredscore1);

      $("#hold1").attr("disabled",true);
      $("#roll1").attr("disabled",true);

      $("#hold2").attr("disabled",false);
      $("#roll2").attr("disabled",false);

      alert("Player 2's turn");
    }
  });

  //Scope for Player 2
    var acquiredscore2 = 0;
    var totalscore2 = 0;
    var dicevalue2 = 0;
    $("#roll2").click(function(){
      dicevalue2 = dice.roll();
      if(dicevalue2===1){
        dicevalue2= 0;
        acquiredscore2= 0;
        $("#hold2").attr("disabled",true);
        $("#roll2").attr("disabled",true);

        $("#hold1").attr("disabled",false);
        $("#roll1").attr("disabled",false);
        alert("The Dice landed on 1,game moves to player 1");
      }
      $("#dicevalue2").text(dicevalue2);

      acquiredscore2 += dicevalue2;
      $("#acquiredscore2").text(acquiredscore2);

    });
    $("#hold2").click(function(){
      totalscore2 += acquiredscore2;
      $("#totalscore2").text(totalscore2);

      if(totalscore2>=100){
        alert("Player 2 Wins!!");
      }else{
        dicevalue2 = 0;
        acquiredscore2 = 0;
        $("#dicevalue2").text(dicevalue2);
        $("#acquiredscore2").text(acquiredscore2);

        $("#hold2").attr("disabled",true);
        $("#roll2").attr("disabled",true);

        $("#hold1").attr("disabled",false);
        $("#roll1").attr("disabled",false);

        alert("Player 1's turn");

      }
    });

});
