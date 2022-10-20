class Options {
  numberOfCards: number;
  setName: string;

  constructor(numberOfCards: number, setName: string) {
    if (numberOfCards % 2) { throw("Odd number of cards") }
    this.numberOfCards = numberOfCards;
    this.setName = setName;
  }
}

export {Options }
