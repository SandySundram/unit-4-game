var randomNumbertoGuess = 0;
var redButton = 0;
var blueButton = 0;
var yellowButton = 0;
var greenButton = 0;
var totalPlayerScore = 0;
var totalWins = 0;
var totalLosses = 0;
var firstClick = 0; 

randomNumGenerator();

function randomNumGenerator(){
    totalPlayerScore = 0;
    firstClick = 0;

    randomNumbertoGuess = Math.ceil(Math.random()*(120 - 19 + 1)) + 19;
    do{
        redButton = Math.ceil(Math.random()*12);
        blueButton = Math.ceil(Math.random()*12);
        yellowButton = Math.ceil(Math.random()*12);
        greenButton = Math.ceil(Math.random()*12);
    }while((redButton == blueButton) || (redButton == yellowButton) || (redButton == greenButton) 
        || (blueButton == yellowButton) || (blueButton == greenButton) || (yellowButton == greenButton))

    $("#guessScore").text(randomNumbertoGuess);
    $("#redCrystal").attr('data-value',redButton);
    $("#blueCrystal").attr('data-value',blueButton);
    $("#yellowCrystal").attr('data-value',yellowButton);
    $("#greenCrystal").attr('data-value',greenButton);

    $("#totalScore").text(totalPlayerScore);

    
}

$('button').on('click',checkNum);

function checkNum(){
    var buttonClicked = $(this);

    firstClick++;
    if (firstClick == 1){
        removeResult();
    }

    totalPlayerScore = parseInt(buttonClicked.attr('data-value')) + totalPlayerScore;

    $('#totalScore').text(totalPlayerScore);

    if (randomNumbertoGuess < totalPlayerScore){
        $("#result").text('You Lose');
        totalLosses++;
        $("#lossCount").text(totalLosses);
        randomNumGenerator();
    }
    else if (randomNumbertoGuess == totalPlayerScore){
        $("#result").text('You Win');
        totalWins++;
        $("#winCount").text(totalWins);
        randomNumGenerator();
    }

}

function removeResult(){
    $("#result").text('');
}
