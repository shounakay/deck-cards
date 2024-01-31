import React from "react";

export const DrawCard = ({
  handleDrawCard,
}: {
  handleDrawCard: () => void;
}) => {
  return (
    <div
      onClick={handleDrawCard}
      className="flex h-[250px] w-56 cursor-pointer items-center justify-center rounded-md border bg-neutral-400 p-3"
    >
      <h4 className="text-2xl font-semibold text-neutral-800">Draw Card</h4>
    </div>
  );
};
