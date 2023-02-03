let textEl = document.getElementById("text-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

let startBtn = document.getElementById("start-btn")
let newCardBtn = document.getElementById("newCard-btn")

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]
let hasBlackJack = false
let isAlive = false


//Get random card 
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()* 13) +1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


//Start game 
function startGame(){
    isAlive = true;
    cardEl.textContent = `Cards: `
    for(let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = `Sum: ${sum}`

// Blackjack conditions
    textEl.textContent = `Sum:`
    if(sum < 21){
        textEl.textContent = "Do you want to pick another card? 🔥"
        isAlive = true
    }
    else if(sum === 21){
        textEl.textContent = "Congrats! You won Blackjack!! 🥳🥳"
        isAlive = true
        hasBlackJack = true
    }
    else{
        textEl.textContent = "Sorry! You lose. Try again! 🥲"
        isAlive = false
    }
}


//New Card

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        cardEl.textContent += card
        cards.push(card)
        sum += card
        startGame()
    }
}

//Restart game

function reset(){
    location.reload();
}



