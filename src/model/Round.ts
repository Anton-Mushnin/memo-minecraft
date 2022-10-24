import type { Options } from "./Options";
import _ from 'lodash';


const SHOW_TIME = 1500;

class Round {
  cards: Card[];
  options: Options;
  started = false;
  openCard = -1;
  disabled = false;
  errors = -1;
  constructor (options: Options) {
    this.options = options;
    this.cards = [];
    this.update();
  }

  get errorsStr(): string {
    const errors = this.errors;
    return `<player> has made ${errors ? errors : 'no'} error${errors === 1 ? '' : 's'}${errors ? '' : '!'}`
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
      const solved = `${set.solvedPrefix}${n}.jpg`;
      cards.push(new Card(img, pair, shirt, solved));
      cards.push(new Card(pair, img, shirt, solved));
    })
    this.cards = _.shuffle(cards);
  }

  click(index: number) {
    if (this.cards[index].open || !this.started || this.disabled) { return; }
    this.cards[index].open = true;
    
    if (this.openCard > -1) {
      const firstCard = this.cards[this.openCard];
      const secondCard = this.cards[index];
      firstCard.clickedTimes += 1;
      secondCard.clickedTimes += 1;
      this.openCard = -1;
      if (firstCard.pair === secondCard.img) {
        secondCard.open = true;
        secondCard.solved = true;
        firstCard.solved = true;
        setTimeout(() => {
          firstCard.backImg = firstCard.solvedImg;
          secondCard.backImg = secondCard.solvedImg;
        }, 1000);
        if (this.cards.filter((c) => c.open).length === this.cards.length) {
          setTimeout(() => {
            this.started = false;
          }, 1500)
          setTimeout(() => {
            if (!this.started) {
              this.errors = -1;
            }
          }, 16500)
        }
      } else {
        this.disabled = true;
        if (firstCard.clickedTimes > 1 || secondCard.clickedTimes > 1) {
           this.errors += 1 
        } else if(this.cards.find((c) => c.img === firstCard.pair && c !== firstCard)!.clickedTimes > 0) {
            this.errors += 1 
        }
        setTimeout(() => {
          firstCard.open = false;
          this.cards[this.openCard] = {...firstCard};
          secondCard.open = false;
          this.cards[this.openCard] = {...secondCard};
          this.disabled = false;
        }, SHOW_TIME);
      }
    } else {
      this.openCard = index;
    }
  }

  start() {
    this.errors = this.started ? -1 : 0;
    this.started = !this.started;
    for (const card of this.cards) {
      card.open = false;
    }
    setTimeout(() => {
      this.update();

    }, 600);
  }

  close() {
    for (const card of this.cards) {
      card.open = false;
    }
  }

}





class Card {
  img: string;
  pair: string;
  open: boolean;
  shirt: string;
  frontImg: string;
  backImg: string;
  solved = false;
  clickedTimes = 0;
  solvedImg: string;
  constructor(img: string, pair: string, shirt: string, solved: string) {
    this.open = false;
    this.img = img;
    this.pair = pair;
    this.shirt = shirt;
    this.frontImg = shirt;
    this.backImg = img;
    this.solvedImg = solved;
  }
}


const sets = {
  "easy": {
    displayName: 'easy',
    imgPrefix: 'r',
    pairPrefix: undefined,
    cardsNumber: 14,
    shirt: 'easy.jpg',
    solvedPrefix: 'i',
  },
  "hard": {
    displayName: 'hard',
    imgPrefix: 'r',
    pairPrefix: 'i',
    cardsNumber: 14,
    shirt: 'hard2.jpg',
    solvedPrefix: 'i',
  }

}

const setsNames = Object.keys(sets);

export {
  Round, sets, setsNames, Card
}
