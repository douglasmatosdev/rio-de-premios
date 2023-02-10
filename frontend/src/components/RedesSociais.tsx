import Image from "next/image";
import React from "react";

const listSocial = ["facebook", "youtube", "instagram"];

export function RedesSociais() {
  return (
    <div className="flex justify-between items-center w-full">
      {listSocial.map((social, index) => {
        return (
          <button
            key={social}
            type="button"
            className="py-4 px-0 min-w-[64px] h-9 min-h-[10px] max-h-[100px] bg-transparent"
          >
            <span className="text-center flex justify-center relative leading-normal">
              <Image
                src={`/redes-sociais/${social}.png`}
                alt="Etapa 131"
                className="max-h-[15px] w-11/12"
                width={80}
                height={15}
                priority
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
