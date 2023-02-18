import React from "react";

interface ButtonProps {
  text?: string | number;
  background?: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

export function Button({
  text = "",
  background = "blue",
  color = "white",
  style = {},
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ ...style, backgroundColor: background, color: color }}
      className={`${className} text-center p-4 rounded-2xl h-10 will-change-[box-shadow] shadow-button flex items-center justify-center tracking-[.0892857143em]`}
    >
      {text}
    </button>
  );
}
