let suits = ['spades','hearts','diamonds','clubs']
let rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
let deck = []
let deckElement = document.getElementById('deck')

startBlackJack()
function startBlackJack(){
    createDeck()
    shuffle(deck)
    createPlayers()
}


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
            const ID1 = card.dataset.suit = (suits[i])
            const ID2 = card.dataset.value = (cardValue)
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
                let placeholder = document.createElement('h2')
                placeholder.classList.add('cardSymbol')
                placeholder.innerHTML = text
                card.append(placeholder)
               
               
                }
                 deck.push(card)
            }
        }   
        return deck
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
   

    //create the player and the dealer

    function createPlayers(){
        let player = new Array();
        let playersHand = document.getElementById('Hand')

        for(let i = 0; i < deck.length; i++){
            let randomCard = Math.floor(Math.random() * deck.length)
            playersHand.append = randomCard
        }
        player.push(playersHand)
        
    }





    function renderCard(card, player){
        hand = document.getElementById('hand_' + player);
        hand.appendChild(getCardUI(card));
    }
    function getCardUI(card){
        math.floor(Math.random() * deck.length);
        let hand = document.getElementById('deck')
        hand.append(deck[i])
    }
    function trackPoints(){
        console.log('everything works')
    }
    function hitMe(){

    }
    function stay(){

    }
