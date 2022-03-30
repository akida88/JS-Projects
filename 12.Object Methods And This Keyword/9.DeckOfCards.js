const mainDeck = makeDeck();

function makeDeck() {
   const deck = [];
   const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
   const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
   for (let value of values.split(',')) {
      for (let suit of suits) {
         deck.push({
            value,
            suit
         })
      }
   }
   return deck;
}

function drawCard(deck){
   return deck.pop()
}

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);
// card1 return A clubs

const myDeck = {
   deck: [],
   drawCards: [],
   suits: ['hearts', 'diamonds', 'spades', 'clubs'],
   values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
   initialDeck(){
   const {suits, values, deck} = this; // suits = this.suits, etc. using destructuring
   for (let value of values.split(',')) {
      for (let suit of suits) { // iterating over suits
         deck.push({
            value,
            suit
         })
      }
   }
   // return deck;
   }, // implemating a draw method
   drawCard(){
      // return this.deck.pop()
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
   },
   drawMulti(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards; // myDeck.drawMulti(4) // returns 4 random and myDeck will contain 48 cards
   }
}

myDeck.initialDeck()
myDeck.deck // returns the cards

const card = myDeck.drawCard();
card // A clubs
myDeck.deck // 51 cards




// **********************************
// WRITING EVERYTHING USING FUNCTIONS
// **********************************
function initializeDeck() {
   const deck = [];
   const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
   const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
   for (let value of values.split(',')) {
     for (let suit of suits) {
       deck.push({
         value,
         suit
       })
     }
   }
   return deck;
 }

 function drawCard(deck, drawnCards) {
   const card = deck.pop();
   drawnCards.push(card);
   return card;
 }

 function drawMultiple(numCards, deck, drawnCards) {
   const cards = [];
   for (let i = 0; i < numCards; i++) {
     cards.push(drawCard(deck, drawnCards));
   }
   return cards;
 }

 function shuffle(deck) {
   // loop over array backwards
   for (let i = deck.length - 1; i > 0; i--) {
     //pick random index before current element
     let j = Math.floor(Math.random() * (i + 1));
     //swap
     [deck[i], deck[j]] = [deck[j], deck[i]];
   }
   return deck;
 }


 // We have to create a bunch of variables:
 const firstDeck = initializeDeck();
 const drawnCards = [];
 shuffle(firstDeck);
 // We have to pass a ton of arguments around:
 const hand1 = drawMultiple(2, firstDeck, drawnCards);
 const hand2 = drawMultiple(2, firstDeck, drawnCards);
 const pokerHand = drawMultiple(5, firstDeck, drawnCards);





 // **********************************
 // USING AN OBJECT + METHODS INSTEAD:
 // **********************************

 const myDek = {
   deck: [],
   drawnCards: [],
   suits: ['hearts', 'diamonds', 'spades', 'clubs'],
   values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
   initializeDeck() {
     const {
       suits,
       values,
       deck
     } = this;
     for (let value of values.split(',')) {
       for (let suit of suits) {
         deck.push({
           value,
           suit
         })
       }
     }
     // return deck;
   },
   drawCard() {
     const card = this.deck.pop();
     this.drawnCards.push(card);
     return card;
   },
   drawMultiple(numCards) {
     const cards = [];
     for (let i = 0; i < numCards; i++) {
       cards.push(this.drawCard());
     }
     return cards;
   },
   shuffle() {
     const { // destructuring the deck out of this
       deck
     } = this;
     // loop over array backwards
     for (let i = deck.length - 1; i > 0; i--) {
       //pick random index before current element
       let j = Math.floor(Math.random() * (i + 1));
       //swap
       [deck[i], deck[j]] = [deck[j], deck[i]];
     }
   }
 }

 // Much cleaner!!
 myDeck.initializeDeck();
 myDeck.shuffle();
 const h1 = myDeck.drawMultiple(2);
 const h2 = myDeck.drawMultiple(2);
 const h3 = myDeck.drawMultiple(5);
