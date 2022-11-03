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
    //create the player's and the dealer's score counters 
let data = 0;

let dealerAceCount = 0;
let yourAceCount = 0;
let hiddenCard = 0;
let canHIt = true;

let dealerSum = 0;
let yourSum = 0;

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
             let dealCard = deck.pop()
             dealerSum += getValue(dealCard)
             dealerAceCount += checkAce(dealCard)
             dealersHand.append(dealCard)
        }
    }
}

startBlackJack()