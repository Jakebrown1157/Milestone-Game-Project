let suits = ['spades','hearts','diamonds','clubs']
let rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
let deck = []
let deckElement = document.getElementById('deck')

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


createDeck()
console.log(deck)


//make it possible to shuffle the deck to get a random order of cards 
function shuffle(){
        for (var i = 0; i < 1000; i++)
        {
            var location1 = Math.floor((Math.random() * deck.length));
            var location2 = Math.floor((Math.random() * deck.length));
            var tmp = deck[location1];

            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
    }

    //create the player and the dealer

    var players = new Array();
    function createPlayers(num)
    {
        players = new Array();
        for(var i = 1; i <= num; i++)
        {
            var hand = new Array();
            var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
            players.push(player);
        }
    }

    function createPlayersUI()
    {
        document.getElementById('players').innerHTML = '';
        for(var i = 0; i < players.length; i++)
        {
            var div_player = document.createElement('div');
            var div_playerid = document.createElement('div');
            var div_hand = document.createElement('div');
            var div_points = document.createElement('div');

            div_points.className = 'points';
            div_points.id = 'points_' + i;
            div_player.id = 'player_' + i;
            div_player.className = 'player';
            div_hand.id = 'hand_' + i;

            div_playerid.innerHTML = players[i].ID;
            div_player.appendChild(div_playerid);
            div_player.appendChild(div_hand);
            div_player.appendChild(div_points);
            document.getElementById('players').appendChild(div_player);
        }
    }
    