'use strict';
let secret = Math.trunc(Math.random()*100) + 1;
let score = 20;
let maxscore = 0;
console.log(secret);
document.querySelector('.check').addEventListener('click' , function(){
  const guess = document.querySelector('.guess').value;
  if(!guess){
    document.querySelector('.message').textContent = "No number is tried"; 
  }
  else if(guess == secret){
    document.querySelector('.message').textContent = "Correct"; 
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;
    if(score>maxscore) maxscore = score;
    document.querySelector('.highscore').textContent = maxscore;
  }
  else if(guess > secret){
    if(score>0){
    document.querySelector('.message').textContent = "Too High"; 
    score--;
    document.querySelector('.score').textContent = score; 
    }
    else {
        document.querySelector('.message').textContent = "You Lost the Game"; 
    }
  }
  else{
    if(score>0){
        document.querySelector('.message').textContent = "Too Low"; 
        score--;
        document.querySelector('.score').textContent = score; 
        }
        else {
            document.querySelector('.message').textContent = "You Lost the Game"; 
        }
  }
})
document.querySelector('.again').addEventListener('click' , function(){
   score = 20;
   secret  = Math.trunc(Math.random()*20) + 1;
   document.querySelector('.message').textContent  = "start guessing";
   document.querySelector('.score').textContent  = score;
   document.querySelector('.number').textContent  = '?';
   document.querySelector('.guess').value  = '';
   document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})