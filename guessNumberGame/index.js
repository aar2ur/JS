const maxNum = 100;
const minNum = 1;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum} `)
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert(`Please enter a number, not a string`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a number within the range: 1 - 100`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too low, try higher`);
        }
        else if(guess > answer){
            window.alert(`Too high, try lower`);
        }
        else if(guess = answer){
            window.alert(`You guessed it! The answer was ${answer}, attempts recorded: ${attempts}`);
            running = false;
        }
    }
}
