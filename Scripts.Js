let suits = ["Spades", "Hearts", "Diamonds", 'Clubs']
let cardValues = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
let deck = []

//create a deck of 52 card objects each contained in an array that have key and value pairs
function createDeck(){
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