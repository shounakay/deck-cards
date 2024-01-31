import React from "react";
import { TDeck, getColor } from "../helpers";

export const DeckCard = ({ name, icon }: TDeck) => {
  const textColor = getColor(icon);
  return (
    <div
      className={`flex h-[250px] w-56 flex-col gap-9 rounded-md bg-white px-3 py-3 text-xl font-semibold ${textColor}`}
    >
      <h4 className={`${textColor} text-3xl`}>{name}</h4>
      <div className="h-12 self-center text-[80px]">{icon}</div>
    </div>
  );
};
