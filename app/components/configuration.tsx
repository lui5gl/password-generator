import Image from "next/image";
import { useRef } from "react";

export default function Configuration({
  passwordConfig,
  setPasswordConfig,
}: {
  passwordConfig: any;
  setPasswordConfig: any;
}) {
  const [numbers, symbols, capitals, lowercase] = passwordConfig;
  const [setNumbers, setSymbols, setCapitals, setLowercase] = setPasswordConfig;

  const $capital = useRef<HTMLButtonElement>(null);
  const $lowercase = useRef<HTMLButtonElement>(null);
  const $number = useRef<HTMLButtonElement>(null);
  const $symbols = useRef<HTMLButtonElement>(null);

  const handleChangeStateCapital = () => {
    if (capitals) {
      $capital.current?.classList.remove("shadow-box_sm");
    } else {
      $capital.current?.classList.add("shadow-box_sm");
    }
    setCapitals(!capitals);
  };

  const handleChangeStateLowercase = () => {
    if (lowercase) {
      $lowercase.current?.classList.remove("bg-neutral-200");
    } else {
      $lowercase.current?.classList.add("bg-neutral-200");
    }
    setLowercase(!lowercase);
  };

  const handleChangeStateNumbers = () => {
    if (numbers) {
      $number.current?.classList.remove("bg-neutral-200");
    } else {
      $number.current?.classList.add("bg-neutral-200");
    }
    setNumbers(!numbers);
  };

  const handleChangeStateSymbols = () => {
    $symbols.current?.classList.remove("shadow-box_sm");

    setSymbols(!symbols);
  };

  return (
    <section className="flex gap-3">
      <Button
        text={"Mayúsculas"}
        onClick={handleChangeStateCapital}
        ref={$capital}
        src={"icons/upper_case.svg"}
        alt={"numbers icon"}
      />
      <Button
        text={"Números"}
        onClick={handleChangeStateLowercase}
        ref={$lowercase}
        src={"icons/lower_case.svg"}
        alt={"lowercase icon"}
      />
      <Button
        text={"Números"}
        onClick={handleChangeStateNumbers}
        ref={$number}
        src={"icons/numbers.svg"}
        alt={"numbers icon"}
      />
      <Button
        text={"Símbolos"}
        onClick={handleChangeStateSymbols}
        ref={$symbols}
        src={"icons/symbols.svg"}
        alt={"symbols icon"}
      />
    </section>
  );
}

function Button({
  ref,
  onClick,
  src,
  alt,
  text,
}: {
  ref: any;
  onClick: any;
  src: any;
  alt: any;
  text: any;
}) {
  return (
    <button
      className="flex place-items-center gap-1 rounded-md border px-2 py-1 shadow-box_sm"
      onClick={onClick}
      ref={ref}
    >
      <Image src={src} alt={alt} width={20} height={20} />
      {text}
    </button>
  );
}
