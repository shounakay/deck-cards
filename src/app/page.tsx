"use client";

import { useState } from "react";
import { TDeck, createDeck, generateRandomCards, test } from "./helpers";
import { DeckCard } from "./_components/DeckCard";
import { DrawCard } from "./_components/DrawCard";

const DRAW_SIZE = 5;

export default function HomePage() {
  const [deck, setDeck] = useState<TDeck[]>(createDeck());
  const [drawnCards, setDrawnCards] = useState<TDeck[]>([]);
  const onDrawCard = () => {
    const { newArr, remaining } = generateRandomCards(deck, DRAW_SIZE);
    setDeck(remaining);
    const clone = Array.from(drawnCards);
    clone.splice(0, 0, ...(newArr as any));
    setDrawnCards(clone.filter((item) => item?.name));
  };

  return (
    <main className="flex min-h-full flex-col gap-16 bg-gradient-to-b from-green-700 to-green-800 py-10 pl-14 pr-24 text-white">
      <section className="self-center md:self-start">
        {deck.length > 0 ? (
          <DrawCard handleDrawCard={onDrawCard} />
        ) : (
          <h4 className="font-2xl font-semibold">No Cards available to draw</h4>
        )}
      </section>
      <section className="flex flex-wrap justify-center gap-14 md:justify-start">
        {drawnCards.map((card, i) => (
          <DeckCard key={i} {...card} />
        ))}
      </section>
    </main>
  );
}
