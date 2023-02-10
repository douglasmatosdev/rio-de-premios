import React from "react";

interface StyleEffectsProps {
  effect: "confetes" | "estrelas" | "luzes" | "raios";
  children: React.ReactNode;
}

export function StyleEffects({ effect, children }: StyleEffectsProps) {
  return <div className="raios h-auto">{children}</div>;
}
