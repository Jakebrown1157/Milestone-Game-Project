let suits = ['spades','hearts','diamonds','clubs']
let rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
let deck = []
let deckElement = document.getElementById('deck')
let cardValue = ''
let cardWeight = ''
let card = ''

    //create a deck of 52 card divs each contained in an array that have key and value pairs
function createDeck(){
    for(let i = 0; i < suits.length; i++){
        for(let u = 0; u < rank.length; u++){
            cardValue = rank[u]
            let weight = parseInt(cardValue);
            if (cardValue === "T" || cardValue === "J" || cardValue === "Q" || cardValue === "K"){
                weight = 10;
            }else if (cardValue == "A"){
                weight = 11;
            }
            
            card = document.createElement('div')
            card.classList.add('card')
            const ID1 = (suits[i])
            addCardElements(ID1)

            function addCardElements(ID1){
            let ElementText = ''
            let placeholder = ''
                if(ID1 === 'spades'){
                    ElementText = '&#9824;'
                } else if (ID1 === 'hearts'){
                    ElementText = '&hearts;'
                } else if (ID1 === 'diamonds'){
                    ElementText = '&#9670;'
                } else {
                    ElementText = '&#9827;'
                }
                let cardSuit = ElementText;
                createH2(placeholder,'Weight',weight)
                createH2(placeholder,'cardValue', cardValue)
                createH2(placeholder,'cardSuit',cardSuit)
            }
            deck.push(card)
        } 
    }   
    return deck
    
}
    //make a refactor function for creating cards 
function createH2(placeholder,name,text){
    placeholder = document.createElement('h2')
    placeholder.setAttribute("id",name)
    placeholder.innerHTML = text
    card.append(placeholder)
}

    //make it possible to shuffle the deck to get a random order of cards 
function shuffle(){
       for (let i = 0; i < deck.length; i++){
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
       }
       return deck
}
// Grabs the Weight value of any card
function getValue(card){
data = card.childNodes[0].innerHTML
return parseInt(data)
} 
function checkAce(card){
    if(card.childNodes[1].innerHTML === 'A'){
        return 1;
    } else{
        return 0;
    }
}
// This function allows a player to continue drawing because it redefines an Ace as a 1 
function reduceAce(playerSum, playerAceCount){
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}
// allows the hit button to work
function hit(){
    if(!canHit){
        return;
    }
    let playersHand = document.getElementById('players-Hand')
    newCard = deck.pop()
    playerSum += getValue(newCard)
    playerAceCount += checkAce(newCard)
    playersHand.append(newCard)

    if (reduceAce(playerSum,playerAceCount) > 21){
        canHit = false;
    }
}
function stay(){
    dealerSum = reduceAce(dealerSum,dealerAceCount);
    playerSum = reduceAce(playerSum,playerAceCount);

    canHit = false;
    let reveal = document.getElementById('Hidden')
    reveal.style.display = 'inline';
    let hide = document.getElementById('cardBack');
    hide.style.display = 'none';
    //win conditions and messages
    let message = ''
    if(playerSum > 21){
        message = 'You Lose!'
    } else if (dealerSum > 21){
        message = 'You Win!'
    } else if (playerSum == dealerSum){
        message = "Tie!"
    } else if (playerSum > dealerSum){
        message = 'You Win!'
    } else if (playerSum < dealerSum){
        message = 'you lose!'
    }
    let playerTotal = document.getElementById('playersTitle')
    playerTotal.innerHTML = ('Your Hand' + ':   ' + playerSum)
    let dealerTotal = document.getElementById('dealerTitle')
    dealerTotal.innerText = ('Dealers Hand' + ':    ' + dealerSum)
    let results = document.getElementById('results')
    results.style.display = 'inline';
    results.innerHTML = message
}

let data = 0;

let dealerAceCount = 0;
let playerAceCount = 0;
let hiddenCard = 0;
let canHit = true;

let dealerSum = 0;
let playerSum = 0;

function startBlackJack(){
    createDeck()
    shuffle(deck)
    
    for(let i = 0; i < 1; i++){
    let  Hidden = document.getElementById('Hidden')
    hiddenCard = deck.pop();
    dealerSum += getValue(hiddenCard)
    dealerAceCount += checkAce(hiddenCard)
    Hidden.append(hiddenCard)
   
         while(dealerSum < 17){
             let dealersHand = document.getElementById('dealers-Hand')
             newCard = deck.pop()
             dealerSum += getValue(newCard)
             dealerAceCount += checkAce(newCard)
             dealersHand.append(newCard)
        }
    }
    for(let i = 0; i < 2; i++){
        let playersHand = document.getElementById('players-Hand')
        newCard = deck.pop()
        playerSum += getValue(newCard)
        playerAceCount += checkAce(newCard)
        playersHand.append(newCard)
    }
    document.getElementById('Hit').addEventListener('click',hit);
    document.getElementById('Stay').addEventListener('click',stay);
}

startBlackJack()