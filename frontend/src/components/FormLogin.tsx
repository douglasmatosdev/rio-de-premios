import React, { useState } from "react";
import { LabelInput } from "./LabelInput";
import { Icon } from "@iconify/react";

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
    <div className="w-full h-64 min-h-[100px] p-2 mb-10 flex flex-col bg-white absolute top-28">
      <span className="text-[var(--corF1)] text-center text-2xl">
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
    </div>
  );
};
