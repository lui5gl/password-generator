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

  const capital_button = useRef<HTMLButtonElement>(null);
  const lowercase_button = useRef<HTMLButtonElement>(null);
  const number_button = useRef<HTMLButtonElement>(null);
  const symbols_button = useRef<HTMLButtonElement>(null);

  const toggleCapital = () => {
    capital_button.current?.classList.toggle("active");

    if (capitals) {
      setCapitals(false);
    } else {
      setLowercase(true);
    }
  };

  const toggleLowercase = () => {
    lowercase_button.current?.classList.toggle("active");

    if (lowercase) {
      setLowercase(false);
    } else {
      setLowercase(true);
    }
  };

  const toggleNumber = () => {
    number_button.current?.classList.toggle("active");
    setNumbers(!numbers);
  };

  const toggleSymbols = () => {
    symbols_button.current?.classList.toggle("active");
    setSymbols(!symbols);
  };

  return (
    <section className="flex gap-3 py-1">
      <button
        className="active flex place-items-center gap-1 rounded-md border px-2 py-1"
        onClick={toggleCapital}
        ref={capital_button}
      >
        <Image
          src={"icons/upper_case.svg"}
          alt="capital icon"
          width={20}
          height={20}
        />
        Mayúsculas
      </button>

      <button
        className="active flex place-items-center gap-1 rounded-md border px-2 py-1"
        onClick={toggleLowercase}
        ref={lowercase_button}
      >
        <Image
          src={"icons/lower_case.svg"}
          alt="lowercase icon"
          width={20}
          height={20}
        />
        Minúsculas
      </button>

      <button
        className="active flex place-items-center gap-1 rounded-md border px-2 py-1"
        onClick={toggleNumber}
        ref={number_button}
      >
        <Image
          src={"icons/numbers.svg"}
          alt="numbers icon"
          width={20}
          height={20}
        />
        Números
      </button>

      <button
        className="active flex place-items-center gap-1 rounded-md border px-2 py-1"
        onClick={toggleSymbols}
        ref={symbols_button}
      >
        <Image
          src={"icons/symbols.svg"}
          alt="symbols icon"
          width={20}
          height={20}
        />
        Símbolos
      </button>
    </section>
  );
}
