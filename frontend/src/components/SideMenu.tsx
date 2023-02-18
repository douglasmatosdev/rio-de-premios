import React from "react";
import { Button } from "./Button";

const listMenu = [
  { icon: "home", label: "Página Inicial" },
  { icon: "trevo", label: "Minha Conta" },
  { icon: "estrela", label: "Como Participar" },
  { icon: "carrinho", label: "Comprar Bilhetes" },
  { icon: "bilhete", label: "Cadastrar Bilhete" },
  { icon: "sorteio", label: "Sorteio Online" },
  { icon: "bandeirola", label: "Resultados" },
  { icon: "check", label: "Regulamento" },
  { icon: "arquivo", label: "Condições Gerais Aprovados" },
  { icon: "check2", label: "Termo de Uso" },
  { icon: "info", label: "Política de Privacidade" },
  { icon: "duvida", label: "Dúvidas" },
  { icon: "mensagens", label: "Contato" },
  { icon: "mensagem", label: "Chat" },
];

interface SideMenuProps {
  show: boolean;
}

export const SideMenu = ({ show }: SideMenuProps) => {
  return (
    <div
      className={`w-[265px] h-full shadow-md bg-white absolute z-10 transition-all ease-in-out duration-500 ${
        show ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <div className="flex justify-evenly items-center bg-[var(--cor3)] h-16">
        <Button
          className="w-[106px] h-[32px] text-sm"
          background="var(--cor2)"
          text={"Entrar"}
        />
        <Button
          className="w-[106px] h-[32px] text-sm"
          background="var(--cor2)"
          text={"Cadastar"}
        />
      </div>
      <ul className="relative">
        {listMenu.map((item, index) => {
          return (
            <li key={`${item.icon}_${index}`} className="relative h-[44px]">
              <a
                className="bg-white flex justify-start items-center text-sm py-4 px-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <div className={`svg-icon ${item.icon} mr-4`} />
                <span className="text-[var(--corF1)] text-sm font-normal">
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
