# Milestone-Game-Project 
Topic --
Make a game using all aspects of the 3 main topics, JS, HTML, and CSS. The game I choose was BlackJack

*Description* 
The Application allows you to play a simple game of blackjack aginsed an Ai opponent ("The Dealer").
In order for this to work it first starts by making a deck of 52 randomly generated cards. 

Each card looks like this 

    <div class="card">
    <h2 id="Weight">11</h2>
    <h2 id="cardValue">A</h2>
    <h2 id="cardSuit">♠</h2>
    </div>

These cards are made 
Through some Dom manipulation and other co-processes like the card Suit if statements 
and a little css with borders and position placements 

Furthermore when the page is loaded it calls both the createDeck() function (lines 10 - 47)and the Shuffle(deck) functions (lines 57 - 64)
one creates a deck of 52 cards full of weights, values, and suits. While the other shuffles the order completly. 


skipping along abit, when the page loads it also auto generates your hand and the dealers hand 
using some logic the dealer will draw cards using the .pop() call and add them to his hand using .append 
an almost identical process happens with your hand

The only exception is that your hand will auto populate 2 cards everytime, while the dealers hand will continue to fill until his total is over 17 

Example code: (lines 153 - 159)

    while(dealerSum < 17){
        let dealersHand = document.getElementById('dealers-Hand')
        newCard = deck.pop()
        dealerSum += getValue(newCard)
        dealerAceCount += checkAce(newCard)
        dealersHand.append(newCard)
    } 

In order to get the actual values of any card on the table the program runs getValue() (lines 67 - 70). A function designed to look for a cards "Weight" Id and find the value. Further allowing high cards to be counted correctly.

One big issue with the card weight system is it only allows Aces to count as 11 in order to correct this 
after it uses getValue() it proceeds to checkAce() (lines 71 - 77) and reduceAce() (lines 79 - 85)


function checkAce(card){
    if(card.childNodes[1].innerHTML === 'A'){
        return 1;
    } else{
        return 0;
    }
}
function reduceAce(playerSum, playerAceCount){
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
} 

Finally it checks the players hand total aginsed the dealers hand total and deals with the different win conditions 

*needed features* 
I wanted to implement a If statement that checked the suit of each card and changed the color

It also needs a bit of sound when the player wins or looses

Finally it needs a while statement that automatically ends the game when the player draws cards worth more than 21 points 

credits 
Most of the project was built from scratch, but some parts of the code have been attapted from multipul
public examples and videos 

creating a custom deck of cards using Css
Web Dev Simplified 
https://youtu.be/iEPK5fppX8w

giving cards weight values 
Walter Guevara
https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript

Object notation and Dom manipulation
w3schools 
https://www.w3schools.com/JSREF/dom_obj_all.asp