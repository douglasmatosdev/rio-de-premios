import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./Button";

const defaultAmount = [4, 8, 12, 30, 50];
const ticketInitPrice = 2.5;

export const Ticket = () => {
  const [amountTicket, setAmountTicket] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.0);

  const amountDecrement = () => {
    const updatedValue = amountTicket === 0 ? 0 : amountTicket - 1;
    setAmountTicket(updatedValue);
    setTotalPrice(updatedValue * ticketInitPrice);
  };
  const amountIncrement = () => {
    const updatedValue = amountTicket + 1;
    setAmountTicket(updatedValue);
    setTotalPrice(updatedValue * ticketInitPrice);
  };

  return (
    <div className="relative flex flex-col items-center justify-end bg-white w-full min-h-[336px] pl-4 pr-4 pb-4 pt-[90px] mb-8 mt-10 rounded-md will-change-[box-shadow] shadow-ticket">
      <div className="flex justify-center items-center absolute w-[90%] -top-[90px]">
        <Image
          src="/topo_quero_concorrer_quadro.png"
          alt="quero concorrer quadro"
          width={300}
          height={180}
          priority
        />
      </div>

      <div className="m-[0 auto] w-full mb-2 flex justify-evenly">
        <Button
          onClick={() => amountDecrement()}
          className="w-8 h-8 text-2xl font-bold"
          text="-"
          background="var(--cor2)"
          color="var(--cor1)"
        />
        <span className="text-3xl font-bold text-[var(--corF1)]">
          {amountTicket}
        </span>
        <Button
          onClick={() => amountIncrement()}
          className="w-8 h-8 text-2xl font-bold"
          text="+"
          background="var(--cor2)"
          color="var(--cor1)"
        />
      </div>

      <span className="text-[16px] text-[var(--corF1)]">
        bilhete{amountTicket > 1 ? "s" : ""}!
      </span>

      <div className="mb-4 mt-4 w-full flex justify-between">
        {defaultAmount.map((dAmount, index) => {
          return (
            <Button
              key={`${dAmount}_${index}`}
              background={amountTicket === dAmount ? "var(--cor1)" : "#fff"}
              color={amountTicket === dAmount ? "#fff" : "var(--corF1)"}
              className={`w-[42px] h-[42px] p-2 rounded-md border font-bold text-[23px] leading-[12px] shadow-none ${
                amountTicket === dAmount
                  ? "border-[var(--cor1)]"
                  : "border-[var(--corF1)]"
              }`}
              text={dAmount}
            />
          );
        })}
      </div>

      <div className="flex mb-4">
        <span className="text-[var(--corF1)] text-2xl">
          Total R$ {totalPrice.toFixed(2).replace(".", ",")}
        </span>
      </div>

      <div className="flex flex-col mb-4">
        <Button
          className="mb-8"
          background="var(--cor4)"
          text="Comprar e concorrer"
          color="white"
        />

        <Button
          background="var(--cor1)"
          text="Cadastrar Bilhete"
          color="white"
        />
      </div>
    </div>
  );
};
