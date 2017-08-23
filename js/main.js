var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	},
]

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}

checkForMatch();

var flipCard = function(event){
	var cardId = event.target.getAttribute('data-id');
	var card = cards[cardId];
	event.target.setAttribute('src', card.cardImage);
	event.target.setAttribute('class', 'clicked');
	console.log(this);
	cardsInPlay.push(card.rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	// console.log("User flipped queen");
	// console.log("User flipped king");

	// console.log("User flipped " + cards[cardId].rank);
	// console.log(cards[cardId].cardImage);
	// console.log(cards[cardId].suit);
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		this.addEventListener('click', flipCard);
		var board = document.getElementById('game-board');
		board.appendChild(cardElement);

  }
}

createBoard();
