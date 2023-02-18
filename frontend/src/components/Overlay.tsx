import React from "react";

interface OverlayProps {
  onClick: () => void;
}

export const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <div
      onClick={onClick}
      className="opacity-[0.46] bg-black absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10"
    />
  );
};
