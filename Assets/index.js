
let cards = [];            // ordered list of items (cards)
let sum = 0;
let hasBlackJack = false;   // starts as false
let isAlive = false;        // starts as false 
let message = "";           // Message

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');

// object player
let player = {             
    nome: "Marco",
    chips: 0
}              

let playerEl = document.getElementById("player-el");        // select the <p> element in the HTML document

playerEl.textContent = player.nome + ": $" + player.chips;  // show the result inside the <p> element

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😂"


// Make this function return a random number between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;       // 1 2 3 4 5 6 7 8 9 10 11 12 13
    if (randomNumber === 1){
        return 11;
    } else if (randomNumber > 10){
        return 10;
    } else {
        return randomNumber;
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard];
    sum += firstCard + secondCard;
    
    renderGame();
}


function renderGame(){
  cardsEl.textContent = "Cards: ";

  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i += 1){
    cardsEl.textContent += cards[i] + " ";
   }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20){
      message = "Do you want to draw a new card? 🙂";
   }

  else if (sum === 21){
      message = "You've got Blackjack! 🥳";
      playerEl.textContent = player.nome + ": $" + (player.chips + 200);     // if wins, incrise the chips to $200
      hasBlackJack = true;                                                      
  }

  else {
      message = "You're out of the game! 😂";
      isAlive = false;
  } 
  // CASH OUT!
  messageEl.textContent = message;
}


function newCard(){

    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);         // push the card to the cards array
        renderGame();             // call the renderGame function again!
    }
    
    //console.log(cards);       // show the cards in the console
}

console.log(cards)