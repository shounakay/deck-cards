export const createDeck = () => {
  const deck: TDeck[] = [];
  const icons = ["❤️", "♦️", "♠️", "♣️"];
  icons.forEach((icon) => {
    for (let i = 0; i < 13; i++) {
      if (i === 0) {
        deck.push({ icon, name: "A" });
      } else if (i < 10) {
        deck.push({ icon, name: (i + 1).toString() });
      } else if (i >= 10) {
        deck.push(createCourtCard(i, icon));
      }
    }
  });
  return deck;
};

const createCourtCard = (num: number, icon: string) => {
  return { icon, name: num === 10 ? "J" : num === 11 ? "Q" : "K" };
};

export const generateRandomCards = (arr: TDeck[], num: number) => {
  const originalArr = [...arr];
  const newArr = [];
  for (let i = 0; i < num; i++) {
    const rIdx = Math.floor(Math.random() * originalArr.length);
    const removedItem = originalArr.splice(rIdx, 1)[0];
    newArr.push(removedItem);
  }
  return { newArr, remaining: originalArr };
};

export interface TDeck {
  name: string;
  icon: string;
}

export const getColor = (icon: string) => {
  if (icon === "❤️" || icon === "♦️") {
    return "text-red-500";
  }
  return "text-neutral-800";
};
