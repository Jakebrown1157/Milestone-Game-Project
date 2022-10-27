let suits = ["Spades", "Hearts", "Diamonds", 'Clubs']
let cardValues = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
let deck = ''

//create a deck of 52 card objects each contained in an array that have key and value pairs
function createDeck(){
    deck = new Array()
    for(let i = 0; i < suits.length; i++){
        for(let u = 0; u < cardValues.length; u++){
            let card = {cardValue: cardValues[u], suit: suits[i]}
            deck.push(card);
        }
    }
    return deck;
}
//Check the console to make sure the objects are setup correctly
console.log (createDeck())

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
