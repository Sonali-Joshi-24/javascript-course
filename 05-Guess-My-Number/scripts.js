'use strict'

/*
console.log(document.querySelector('.message').textContent)
// change text content
document.querySelector('.message').textContent = 'Correct Number!'


document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

console.log(document.querySelector('.guess').value)
document.querySelector('.guess').value = 23
*/


//event is something that happens when we click on page
//event listener




let secretNumber = Math.trunc(Math.random()*20) + 1
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message

}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    //when there is no input
    if (!guess){
        // document.querySelector('.message').textContent = '⛔ No number!'
        displayMessage('⛔ No number!')
        
    //when player wins
    } else if (guess === secretNumber){
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        //highscore functionality
        if (score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

    // when guess is wrong
    } else if (guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '☝️ Too high!': '📉 Too low!')
            score--
            document.querySelector('.score').textContent = score
        }else {
            displayMessage('💥You lost the game!')
            document.querySelector('.score').textContent = 0

        }
    } 
})
//challange
document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1

    displayMessage( 'Start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'



})

///////////////////////////////////////
// Coding Challenge #1 above 

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/









///////////////////////////////////////////
// UN - OPTIMIZED CODE 
/*
let secretNumber = Math.trunc(Math.random()*20) + 1
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message

}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    //when there is no input
    if (!guess){
        document.querySelector('.message').textContent = '⛔ No number!'
        
    //when player wins
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        //highscore functionality
        if (score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    } //when guess is too high
    else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '☝️ Too high!'
            score--
            document.querySelector('.score').textContent = score
        }else {
            document.querySelector('.message').textContent = '💥You lost the game!'
            document.querySelector('.score').textContent = 0

        }

    //when guess is too low
    } else if (guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '📉 Too low!'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = '💥You lost the game!'
            document.querySelector('.score').textContent = 0

        }
  
    }
})

*/