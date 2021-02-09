const command = require('discord.js-commando');
const fs = require('fs');

function getRandInt (limit){

  return Math.floor(Math.random() * limit);
}

function getWhiteCard(cards, whiteCardsAmount, pick){

  switch (pick) {
    case 1:
      return [cards.whiteCards[getRandInt(whiteCardsAmount)]]
      break;

    case 2:
      var pickedCards = [];
      pickedCards.push(cards.whiteCards[getRandInt(whiteCardsAmount)]);
      pickedCards.push(cards.whiteCards[getRandInt(whiteCardsAmount)]);
      return pickedCards;
    case 3:
      var pickedCards = [];
      pickedCards.push(cards.whiteCards[getRandInt(whiteCardsAmount)]);
      pickedCards.push(cards.whiteCards[getRandInt(whiteCardsAmount)]);
      pickedCards.push(cards.whiteCards[getRandInt(whiteCardsAmount)]);
      return pickedCards;
    default: message.channel.send("error");
  }
}

class Cards extends command.Command {

  constructor(client){
    super(client,{
      name: 'cah',
      group: 'basic',
      memberName: 'cah',
      description: 'Generates a Cards Against Humanity Questiona and Answer'
    });
  }

  async run(message, args){

    var cardsData = fs.readFileSync(__dirname + '/resources/card_list.json');
    var cards = JSON.parse(cardsData);

    var blackCardsAmount = cards.blackCards.length;
    var whiteCardsAmount = cards.whiteCards.length;

    var blackCard = cards.blackCards[getRandInt(blackCardsAmount)];
    var whiteCard = getWhiteCard(cards, whiteCardsAmount, blackCard.pick);

    switch (whiteCard.length) {
      case 1:
        message.channel.send(blackCard.text + "\n \n" + whiteCard[0]);
        break;

      case 2:
        message.channel.send(blackCard.text + "\n \n" + whiteCard[0] + "\n" + whiteCard[1]);
        break;

      case 3:
        message.channel.send(blackCard.text + "\n \n" + whiteCard[0] + "\n" + whiteCard[1] + "\n" + whiteCard[1]);
        break;

      default: message.channel.send("error");
    }
  }
}
module.exports = Cards;
