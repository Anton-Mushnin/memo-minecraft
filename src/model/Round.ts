import type { Options } from "./Options";
import _ from 'lodash';


class Round {
  cards: Card[];
  options: Options;
  started = false;
  constructor (options: Options) {
    this.options = options;
    this.cards = [];
    this.update();
  }

  update() {
    const array: number[] = [];
    const set = sets[this.options.setName as keyof typeof sets];
    for(let i = 0; i < set.cardsNumber; i += 1) {
      array.push(i+1);
    }
    const sampleArray = _.sampleSize(array, this.options.numberOfCards / 2);
    const cards: Card[] = [];
    const shirt = set.shirt;
    sampleArray.forEach((n) => {
      const img = `${set.imgPrefix}${n}.jpg`;
      const pair = set.pairPrefix ? `${set.pairPrefix}${n}.jpg` : img;

      cards.push(new Card(img, pair, shirt));
      cards.push(new Card(pair, img, shirt));
    })
    this.cards = _.shuffle(cards);
  }

}





class Card {
  img: string;
  pair: string;
  open: boolean;
  shirt: string;
  display: string;
  constructor(img: string, pair: string, shirt: string) {
    this.img = img;
    this.pair = pair;
    this.shirt = shirt;
    this.open = false;
    this.display = shirt;
  }
}


const sets = {
  "easy": {
    displayName: 'easy',
    imgPrefix: 'cr',
    pairPrefix: undefined,
    cardsNumber: 14,
    shirt: 'easy.jpg',
  },
  "hard": {
    displayName: 'hard',
    imgPrefix: 'r',
    pairPrefix: 'i',
    cardsNumber: 14,
    shirt: 'hard.jpg',
  }

}

const setsNames = Object.keys(sets);

export {
  Round, sets, setsNames, Card
}
