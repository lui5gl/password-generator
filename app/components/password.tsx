import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function Password({ passwordConfig }: { passwordConfig: any }) {
  const [numbers, symbols, capitals, lowercase] = passwordConfig;
  const [password, setPassword] = useState(String);
  const [range, setRange] = useState(25);

  // Generar contraseña
  const handleGeneratePassword = () => {
    const capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const numberCharacters = "0123456789";
    const symbolCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = "";

    capitals && (characters += capitalCharacters);
    lowercase && (characters += lowercaseCharacters);
    numbers && (characters += numberCharacters);
    symbols && (characters += symbolCharacters);

    let password = "";

    for (let i = 0; i < range; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }

    if (password === "") {
      password = "Debes seleccionar al menos una opción";
    }

    setPassword(password);
  };

  const handleCopyPassword = () => {
    if (password === "Debes seleccionar al menos una opción") {
      toast("Contraseña invalida");
    } else {
      toast("Contraseña copiada");
      navigator.clipboard.writeText(password);
    }
  };

  // Change range of password
  const range_btn = useRef<HTMLInputElement>(null);

  function handleChangeRange() {
    setRange(range_btn.current?.valueAsNumber ?? 0);
    handleGeneratePassword();
  }

  useEffect(() => {
    handleGeneratePassword();
  }, []);

  return (
    <section className="flex flex-col gap-1 drop-shadow-sm">
      <fieldset className="flex rounded-md border px-2 pb-2">
        <legend>
          {range <= 6
            ? "Muy mala ❌"
            : range <= 11
              ? "Débil 👎🏻"
              : range <= 16
                ? "Bien 👍🏻"
                : range <= 25
                  ? "Excelente 🌟"
                  : "Perfecta 👌🏻"}
        </legend>
        <input
          value={password}
          spellCheck={false}
          className="w-full bg-transparent font-mono text-xl outline-none selection:bg-neutral-800 selection:text-white"
        />

        <button
          className="rounded-md p-1 hover:bg-neutral-100"
          onClick={handleCopyPassword}
        >
          <Image src={"icons/copy.svg"} alt={"copy"} width={24} height={24} />
        </button>

        <button
          className="rounded-md p-1 hover:bg-neutral-100"
          onClick={handleGeneratePassword}
        >
          <Image
            src={"icons/refresh.svg"}
            alt={"refresh"}
            width={24}
            height={24}
          />
        </button>
      </fieldset>
      <div className="flex gap-2">
        <div className="relative flex w-full items-center">
          <input
            className={
              "absolute z-20 w-full appearance-none bg-transparent " +
              (range <= 6
                ? "accent-red-700"
                : range <= 11
                  ? "accent-orange-700"
                  : range <= 16
                    ? "accent-yellow-700"
                    : range <= 25
                      ? "accent-green-700"
                      : "accent-green-900")
            }
            type="range"
            max="50"
            min="1"
            defaultValue={range}
            ref={range_btn}
            onChange={handleChangeRange}
          />
          <hr
            className={
              "w-full rounded-full border-2 " +
              (range <= 6
                ? "border-red-500"
                : range <= 11
                  ? "border-orange-500"
                  : range <= 16
                    ? "border-yellow-500"
                    : range <= 25
                      ? "border-green-500"
                      : "border-green-700")
            }
          />
        </div>
        <span>{range}</span>
      </div>
    </section>
  );
}
