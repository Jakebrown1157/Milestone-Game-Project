let suits = ['spades','hearts','diamonds','clubs']
let rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
let deck = []

//create a deck of 52 card objects each contained in an array that have key and value pairs
function createDeck(){
    for(let i = 0; i < suits.length; i++){
        for(let u = 0; u < rank.length; u++){
            let cardValue = rank[u]

            let weight = parseInt(cardValue);
            if (cardValue === "T" || cardValue === "J" || cardValue === "Q" || cardValue === "K"){
                weight = 10;
            }else if (cardValue == "A"){
                weight = 11;
            }
            
            let card = document.createElement('div')
            card.classList.add('card')
            var ID1 = card.dataset.suit = (suits[i])
            var ID2 = card.dataset.value = (cardValue)
            card.dataset.weight = (weight)
            
            addCardElements(ID1)

            function addCardElements(ID1){
            let text = ''
            let cardSuit = document.createElement('h2')
            cardSuit.classList.add('cardValue')
            cardSuit.textContent = (cardValue)
                card.append(cardSuit)
                if(ID1 === 'spades'){
                    text = '&#9824;'
                } else if (ID1 === 'hearts'){
                    text = '&hearts;'
                } else if (ID1 === 'diamonds'){
                    text = '&#9670;'
                } else {
                    text = '&#9827;'
                }
                if(ID1 === 'spades' || ID1 === 'hearts' || ID1 === 'diamonds' || ID1 === 'clubs'){
                    let placeholder = document.createElement('h2')
                    placeholder.classList.add('cardSymbol')
                    placeholder.textContent = text
                    card.append(placeholder)
                }
               
                }
                 deck.push(card)
            }
        }   
        return deck
    }


createDeck()
console.log(deck)


//make it possible to shuffle the deck to get a random order of cards 
function shuffle(deck){
   for(let i = deck.length - 1; i > 0; i--){
    let randomCard = Math.floor(Math.random() * i);
    let temporary = deck[i];
    deck[i] = deck[randomCard];
    deck[randomCard] = temporary;
   }
}

shuffle(deck)


