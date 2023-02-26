import React, { useState } from "react";
import { LabelInput } from "./LabelInput";
import { Icon } from "@iconify/react";
import { Button } from "./Button";
import Image from "next/image";
import GoogleLogo from "../assets/images/diversas/google.svg";

interface FormLoginProps {}
export type InputTypes = "cpf" | "senha";
export type InputStateItem = {
  focus: boolean;
  leave: boolean;
  warning: boolean;
};
export type InputState = {
  [key in "cpf" | "senha"]: InputStateItem;
};

export const FormLogin = ({}: FormLoginProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const [inputState, setInputState] = useState<InputState>({
    cpf: { focus: false, leave: false, warning: false },
    senha: { focus: false, leave: false, warning: false },
  });

  return (
    <div className="w-full h-full min-h-[200px] p-2 mb-10 flex flex-col bg-white absolute top-28 z-10">
      <span className="text-[var(--corF1)] text-center text-2xl mt-6">
        Entre ou cadastre-se para participar!
      </span>

      <div className="mt-6 pl-2 pr-2 w-full">
        <LabelInput
          inputState={inputState}
          setInputState={setInputState}
          label="CPF"
          icon="user"
        />
      </div>
      <div className="mt-12 pl-2 pr-2 mb-6 w-full relative">
        <LabelInput
          inputState={inputState}
          setInputState={setInputState}
          label="Senha"
          icon="lock"
          type={showPassword ? "text" : "password"}
          warnMessage="É obrigatório informar a Senha"
        />
        <Icon
          icon={`mdi:eye${!showPassword ? "-off" : ""}`}
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 bottom-0 text-[24px] text-[var(--corF1)] opacity-[0.85]"
        />
      </div>

      <div className="flex flex-col items-center w-full h-full">
        <Button
          background="#000"
          text="Entrar"
          className="w-full min-w-[64px] max-w-[258px] max-h-[100px] min-h-[10px] h-5 text-sm mt-2 rounded-xl"
        />

        <a href="#!" className="underline mt-2 mb-6">
          Esqueci a senha
        </a>

        <div className="flex justify-center items-center w-full">
          <div className="w-[20%]">
            <hr
              className="text-[var(--corF1)] opacity-70  border-[var(--corF1)]"
              role="separator"
            />
          </div>
          <div className="ml-2 mr-2">
            <span className="text-[var(--corF1)]">ou</span>
          </div>
          <div className="w-[20%]">
            <hr
              className="text-[var(--corF1)] opacity-70 border-[var(--corF1)]"
              role="separator"
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-6">
          <Button
            background=""
            color="black"
            className="mb-2 hover:bg-[rgba(0,0,0,0.1)] w-full min-w-[64px] max-w-[258px] max-h-[100px] min-h-[10px] h-5 text-sm mt-2 rounded-xl"
          >
            <Image
              src={GoogleLogo}
              alt="Google Logo"
              className="mr-2"
              width={16}
              height={16}
              priority
            />{" "}
            Entrar com Google
          </Button>
          <Button
            background="white"
            text="Cadastrar-me"
            color="black"
            className="w-full min-w-[64px] max-w-[258px] max-h-[100px] min-h-[10px] h-5 text-sm mt-2 rounded-xl shadow-none border border-1 border-gray-700"
          />
        </div>
        <div className="flex justify-center items-center mt-2">
          <div className="w-[14px] h-[14px] bg-svg-left-arrow bg-no-repeat -mr-2" />
          <Button
            background="transparent"
            text="Voltar"
            color="black"
            className="relative shadow-none"
          />
        </div>
      </div>
    </div>
  );
};
