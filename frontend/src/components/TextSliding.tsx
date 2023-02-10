import React from "react";

interface TextSlidingProps {
  text?: string;
  children?: React.ReactNode;
}

export const TextSliding = ({ text, children }: TextSlidingProps) => {
  return (
    <div className="leading-unset font-semibold text-[1.25rem] tracking-[0.0125em] font-roboto">
      <div className="truncate whitespace-nowrap">
        <span className="inline-block pl-[100%] animate-marquee">
          {text || children}
        </span>
      </div>
    </div>
  );
};
