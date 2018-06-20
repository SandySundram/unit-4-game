var randomNumbertoGuess = 0;
var redButton = 0;
var blueButton = 0;
var yellowButton = 0;
var greenButton = 0;
var totalPlayerScore = 0;
var totalWins = 0;
var totalLosses = 0;


randomNumGenerator();

function randomNumGenerator(){
    totalPlayerScore = 0;

    randomNumbertoGuess = Math.ceil(Math.random()*(120 - 18 + 1)) + 18;
    redButton = Math.ceil(Math.random()*12);
    blueButton = Math.ceil(Math.random()*12);
    yellowButton = Math.ceil(Math.random()*12);
    greenButton = Math.ceil(Math.random()*12);

    console.log(randomNumbertoGuess);
    $("#guessScore").text(randomNumbertoGuess);
    $("#redCrystal").attr('data-value',redButton);
    $("#blueCrystal").attr('data-value',blueButton);
    $("#yellowCrystal").attr('data-value',yellowButton);
    $("#greenCrystal").attr('data-value',greenButton);

    // $("#result").text('');
    $("#totalScore").text(totalPlayerScore);

    
}

$('button').on('click',checkNum);

function checkNum(){
    var buttonClicked = $(this);
    console.log(totalPlayerScore);

    totalPlayerScore = parseInt(buttonClicked.attr('data-value')) + totalPlayerScore;
    // (buttonClicked.attr('data-value')) + totalPlayerScore;

    $('#totalScore').text(totalPlayerScore);

    console.log(totalPlayerScore);

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
