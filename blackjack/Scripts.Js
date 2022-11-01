let suits = ['spades','hearts','diamonds','clubs']
let rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
let deck = []
let deckElement = document.getElementById('deck')
let cardValue = ''
let cardWeight = ''
let card = ''

    //create a deck of 52 card objects each contained in an array that have key and value pairs
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
function createH2(placeholder,name,text){
    placeholder = document.createElement('h2')
    placeholder.classList.add(name)
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
let data = document.querySelector('weight')

} 

    //create the player and the dealer
let dealerAceCount = 0;
let yourAceCount = 0;
let hiddenCard = 0;
let canHIt = true;

let dealerSum = 0;
let yourSum = 0;

function startBlackJack(){
    createDeck()
    shuffle(deck)
    getValue()
    // createPlayers()

    for(let i = 0; i < 5; i++){
    hiddenCard = deck.pop();
    dealerSum += getValue(hiddenCard)
    console.log(hiddenCard)
    }
    console.log(deck)
}

startBlackJack()