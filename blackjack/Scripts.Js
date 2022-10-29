var suits = ['spades','hearts','diamonds','clubs']
var cardValues = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
let deck = ''

//create a deck of 52 card objects each contained in an array that have key and value pairs
function createDeck(){
    deck = new Array()
    for(let i = 0; i < suits.length; i++){
        for(let u = 0; u < cardValues.length; u++){
            let weight = parseInt(cardValues[u]);
            if (cardValues[u] == "T" || cardValues[u] == "J" || cardValues[u] == "Q" || cardValues[u] == "K"){
                weight = 10;
            }else if (cardValues[u] == "A"){
                weight = 11;
            }
            
            let card = document.createElement('div')
            card.classList.add('card')
            card.dataset.suit = (suits[i])
            card.dataset.value = (cardValues[u])
            card.dataset.weight = (weight)
            
            console.log(card)
            let blankCard = document.querySelectorAll('.card')
            blankCard.forEach(addCardElements)
    
            function addCardElements(){
            let cardSuit = document.createElement('h2')
                card.append(cardSuit)
            if(card.dataset.suit == 'spades'){
                    let spades = 
                    spades.textContent = '&#9824;'
                    card.append(spades)
                } else if (card.dataset.suit == 'hearts'){
                    let hearts = document.createElement('h2')
                    hearts.textContent = '&hearts;'
                    card.append(hearts)
                } else if (card.dataset.suit == 'diamonds'){
                    let diamonds = document.createElement('h2')
                    diamonds.textContent = '&#9670;'
                    card.append(diamonds)
                } else {
                    let clubs = document.createElement('h2')
                    clubs.textContent = '&#9827;'
                    card.append(clubs)
                }
            
        }}
    }
    return deck
}
   



//make it possible to shuffle the deck to get a random order of cards 
function shuffle(deck){
   for(let i = deck.length - 1; i > 0; i--){
    let randomCard = Math.floor(Math.random() * i);
    let temporary = deck[i];
    deck[i] = deck[randomCard];
    deck[randomCard] = temporary;
   }
}
createDeck()
shuffle(deck)

console.log(deck)


            // <div class="card" data-suit="hearts" data-value="2">
            // <h2 class="cardValue">2</h2>
            // <h2 class="cardSymbol">&hearts;</h2>
            // </div>