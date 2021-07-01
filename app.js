// this project is part of the 'The Web Developer Bootcamp 2021' course, availale on Udemy
// fell free to use the use you want

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
const winningScore = 5;
let isGameOver = false;


p1Button.addEventListener('click', ()=>{
    if(!isGamerOver){
        p1Score += 1;
        if(p1Score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', ()=>{
    if(!isGamerOver){
        p2Score += 1;
        if(p2Score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p2Score;
    }
});


resetButton.addEventListener('click', ()=>{
    p1Display.textContent = 0;
    p2Display.textContent = 0;
});