import Image from "next/image";
import React from "react";
import { TextSliding } from "./TextSliding";

interface SliderItemCardProps {
  data: {
    img: string;
    title: string;
    textCarousel: string;
    footerText: string;
  };
}

export function SliderItemCard({ data }: SliderItemCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="aspect-w-16 aspect-h-9">
        <Image src={data.img} alt="" width={110} height={110} priority />
      </div>
      <div>
        <span>{data.title}</span>
        <span>{data.textCarousel}</span>
        <TextSliding text="R$ 10.000,00" />
        <span>{data.footerText}</span>
      </div>
    </div>
  );
}
