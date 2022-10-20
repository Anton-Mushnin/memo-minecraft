import { Options } from "@/model/Options";
import { Round, sets } from "@/model/Round";
import { defineStore } from "pinia";

const defaultOptions = new Options(8, Object.keys(sets)[0]);
const newRound = new Round(defaultOptions);
export const useRoundStore = defineStore('round', {
  state: () => ({
    round: newRound,
  }),
  actions: {
    setSize(newSize: number) {
      this.round.options.numberOfCards = newSize;
      this.round.update();
    },
    setSet(newSet: string) {
      this.round.options.setName = newSet;
      this.round.update();
    },
  },
})


