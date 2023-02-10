import React from "react";

interface ParagraphProps {
  text?: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Paragraph({
  text = "",
  color = "white",
  className = "",
  children,
}: ParagraphProps) {
  return (
    <p
      className={`${className} font-project-400 text-base text-center mt-5 mb-5 leading-[34.5px]`}
      style={{ color: color }}
    >
      {text}
      {children}
    </p>
  );
}
