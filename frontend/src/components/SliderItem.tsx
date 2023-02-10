import React from "react";
import { SliderItemCard } from "./SliderItemCard";

interface SliderItemProps {
  reward: SliderItemType;
}

export function SliderItem({ reward }: SliderItemProps) {
  return (
    <div className="flex justify-between w-ful h-full items-start">
      <SliderItemCard data={reward.left} />
      <SliderItemCard data={reward.right} />
    </div>
  );
}
