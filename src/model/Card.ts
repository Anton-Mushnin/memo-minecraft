
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
    imgPrefix: 'r_',
    pairPrefix: undefined,
    cardsNumber: 437,
    shirt: 'easy.jpg',
    solvedPrefix: 'i_',
    bgImage: 'IMG_6622.JPG',
    bgImagePortrait: 'IMG_6658_3.JPG',

  },
  "hard": {
    displayName: 'hard',
    imgPrefix: 'r_',
    pairPrefix: 'i_',
    cardsNumber: 437,
    shirt: 'hard2.jpg',
    solvedPrefix: 'i_',
    bgImage: undefined,
    bgImagePortrait: undefined,
  }

}

const setsNames = Object.keys(sets);

export {
  sets, setsNames, Card
}
