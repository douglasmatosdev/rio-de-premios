import React, { use, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { InputState, InputTypes } from "./FormLogin";

interface LabelInputProps {
  label: string;
  icon?: string;
  type?: React.HTMLInputTypeAttribute;
  warnMessage?: string;
  inputState: InputState;
  setInputState: Function;
}

export const LabelInput = ({
  label,
  icon,
  type = "text",
  warnMessage = "Campo obrigatório",
  inputState,
  setInputState,
}: LabelInputProps) => {
  const [value, setValue] = useState("");
  const name = `${label}`.toLowerCase() as InputTypes;

  const handleLeaveClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const id = `${
      (e.target as HTMLInputElement).id
    }`.toLowerCase() as InputTypes;

    const key = Object.keys(inputState).filter(
      (k) => k !== id
    )[0] as InputTypes;

    let updatePrev = {
      ...inputState[key],
    };

    if (inputState[key].focus) {
      updatePrev = {
        focus: false,
        leave: true,
        warning: true,
      };
    }

    setInputState({
      ...inputState,
      [key]: {
        ...updatePrev,
      },
      [id]: {
        ...inputState[id],
        focus: true,
      },
    });
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex group relative">
        {icon && (
          <div className="flex justify-center items-center mr-3">
            <Icon
              icon={`mdi:${icon}`}
              className={` ${
                inputState[name].warning ? "text-error" : ""
              } text-[var(--corF1)] group-focus-within:text-focus  text-[24px] opacity-1`}
            />
          </div>
        )}
        <div
          datatype={label}
          className={`${
            inputState[name].warning ? "before:text-error" : ""
          } before:pointer-events-none fake-placeholder relative border-input duration-500 ${
            inputState[name].warning ? "border-input-leave" : ""
          }   w-full`}
        >
          <input
            required
            value={value}
            onClick={(event) => handleLeaveClick(event)}
            onChange={(e) => setValue(e.target.value)}
            className="outline-none text-[var(--corF1)] placeholder:text-[var(--corF1)] group-focus-within:placeholder:text-blue-500"
            type={type}
            id={label}
          />
        </div>
        <div
          className={`w-max ${
            inputState[name].warning ? "-bottom-6 h-3" : "-bottom-3 h-0"
          } text-[12px] overflow-hidden leading-3 absolute left-[36px] transition-all duration-700`}
        >
          <span className="text-error">{warnMessage}</span>
        </div>
      </div>
    </div>
  );
};
