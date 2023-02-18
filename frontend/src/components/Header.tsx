import React from "react";
import Image from "next/image";

import * as Toolbar from "@radix-ui/react-toolbar";

interface HeaderProps {
  onClick: () => void;
}

export function Header({ onClick }: HeaderProps) {
  return (
    <Toolbar.Root>
      <header className="flex justify-between items-center h-[115px] w-full">
        <div className="flex justify-center items-center mx-5 my-0">
          <Toolbar.Button
            onClick={onClick}
            className="bg-logo w-10 h-10 bg-white"
          />
        </div>
        <div className="bg-curva-topo">
          <div className="flex justify-center items-center mb-3">
            <Image
              src="/logos/logo_projeto.png"
              alt="Vercel Logo"
              width={160}
              height={90}
              priority
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/logos/logo_entidade_topo.png"
              alt="Vercel Logo"
              width={80}
              height={55}
              priority
            />
          </div>
        </div>
      </header>
    </Toolbar.Root>
  );
}
