class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = {};
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {

      var j, x, i;
      for (i = this.cards.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = this.cards[i];
          this.cards[i] = this.cards[j];
          this.cards[j] = x;
      }
      return undefined;
   }
  
  checkIfPair(card1, card2) {

    this.pairsClicked +=1

    if (card1 == card2) {
      this.pairsGuessed += 1;
      console.log("it's a pair!")
      return true;
    }
    console.log('no pair, here')
    return false;

  }

  
  isFinished() {

    return this.pairsGuessed === (this.cards.length)/2

  }
  
}