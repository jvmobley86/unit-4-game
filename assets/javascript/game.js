// $(document).ready(function(){

    // Inital Variables
    
        var computerPick = Math.floor(Math.random()* 102)+19;
        console.log("computer pick" + computerPick)
        var lockGame = false;
        var losses = 0;
        var wins = 0;
        var totalScore = 0;
     
    var gameReset = function() {
    $("#computerPick").text(computerPick); 
    

    for (var i=0; i < 4; i++){
        var random = Math.floor(Math.random() * 11)+1;
        console.log(random);

//Random number for each crystal

  var crystals = $("#gem"+i);
    crystals.attr({
        "randomNumber":random
    })
    $(".crystals").append(crystals);
}  
}



//New random number assigned after a win or loss
//  if (wins++ || losses++ ==true, 
//  $("#computerPick").attr("randomNumber")
//     );
    gameReset ();
//Add clicked crystal value to total score
    $(".crystals").on("click", function(){
       totalScore += Number($(this).attr("randomNumber")) 
//until total score is equal to the computer pick    
    if (totalScore === computerPick) {
        wins++;
       $("#wins").text(wins) 
 }
{

//Game resets if total score is greater than computer pick and add 1 to losses counter    

if (totalScore > computerPick)
       losses++;
      $("#losses").text(losses)
      gameReset ();
}      


       $("#totalScore").text(totalScore);
       $("#wins").text(wins)
       $("#losses").text(losses)
    });




//If total score equals computer pick, add 1 to wins counter







// }

