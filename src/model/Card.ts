
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
    bgImage: 'IMG_6622.JPG',
    bgImagePortrait: 'IMG_6658_3.JPG',

  },
  "hard": {
    displayName: 'hard',
    imgPrefix: 'r',
    pairPrefix: 'i',
    cardsNumber: 14,
    shirt: 'hard2.jpg',
    solvedPrefix: 'i',
    bgImage: undefined,
    bgImagePortrait: undefined,
  }

}

const setsNames = Object.keys(sets);

export {
  sets, setsNames, Card
}
