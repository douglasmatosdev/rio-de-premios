import React from "react";

interface ButtonProps {
  text?: string;
  background?: string;
  color?: string;
}

export function Button({
  text = "",
  background = "blue",
  color = "white",
}: ButtonProps) {
  return (
    <button
      style={{ backgroundColor: background, color: color }}
      className="text-center p-4 rounded-2xl h-10 min-h-[10px] max-h-[100px] min-w-[64px] will-change-[box-shadow] shadow-button flex items-center justify-center tracking-[.0892857143em]"
    >
      {text}
    </button>
  );
}
