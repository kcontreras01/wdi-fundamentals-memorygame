// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";



var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}

checkForMatch();

var flipCard = function(cardId){
	console.log("User flipped queen");
	console.log("User flipped king");

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(2);




// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);