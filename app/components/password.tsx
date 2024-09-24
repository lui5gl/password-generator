import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { toast } from "sonner";

export default function Password({
  passwordConfig,
  setPasswordConfig,
}: {
  passwordConfig: any;
  setPasswordConfig: any;
}) {
  const [password, setPassword] = useState(String);
  const [range, symbols, uppercase, lowercase, numbers] = passwordConfig;
  const [setRange, setSymbols, setUppercase, setLowercase, setNumbers] =
    setPasswordConfig;

  // Generar contraseña
  const handleGeneratePassword = () => {
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase_letters = "abcdefghijklmnopqrstuvwxyz";

    let characters = "";

    numbers && (characters += numbers);
    symbols && (characters += symbols);
    uppercase && (characters += uppercase_letters);
    lowercase && (characters += lowercase_letters);

    let password = "";

    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    password ?? "Selecciona una configuración";
    setPassword(password);
  };

  const handleCopyPassword = () => {
    toast("Password successfully copied");
  };

  // Change range of password
  const $range = useRef<HTMLInputElement>(null);

  function handleChangeRange() {
    const current_range = parseInt($range.current?.value || "0", 10);
    setRange(current_range);
    handleGeneratePassword();
  }

  // Generate password on load
  useEffect(() => {
    handleGeneratePassword();
  }, []);

  // Text of legend
  const password_strong =
    range <= 6
      ? "Muy mala ✖️"
      : range <= 11
        ? "Débil 👎"
        : range <= 16
          ? "Bien 👍"
          : range <= 25
            ? "Excelente 🌟"
            : "Perfecta 💯";

  // Styles of range
  const line =
    range <= 6
      ? " border-red-500"
      : range <= 11
        ? " border-orange-500"
        : range <= 16
          ? " border-green-500"
          : " border-green-700";

  const dot =
    range <= 6
      ? " accent-red-500"
      : range <= 11
        ? " accent-orange-500"
        : range <= 16
          ? " accent-green-500"
          : " accent-green-700";

  return (
    <section className="flex flex-col gap-1 drop-shadow-sm">
      <fieldset className="flex rounded-md border px-2 pb-2">
        <legend>{password_strong}</legend>
        <input
          value={password}
          spellCheck={false}
          className="w-full bg-transparent font-mono text-xl outline-none selection:bg-neutral-800 selection:text-white"
        />
        <Button onClick={handleCopyPassword} src="icons/copy.svg" alt="copy" />
        <Button
          onClick={handleGeneratePassword}
          src="icons/refresh.svg"
          alt="refresh"
        />
      </fieldset>
      <div className="flex gap-2">
        <div className="relative flex w-full items-center">
          <input
            className={
              "absolute z-20 w-full appearance-none bg-transparent" + dot
            }
            type="range"
            max="50"
            min="1"
            defaultValue={range}
            ref={$range}
            onChange={handleChangeRange}
          />
          <hr className={"w-full border-2" + line} />
        </div>
        <span>{range}</span>
      </div>
    </section>
  );
}

function Button({ onClick, src, alt }: { onClick: any; src: any; alt: any }) {
  return (
    <button className="rounded-md p-1 hover:bg-neutral-100" onClick={onClick}>
      <Image src={src} alt={alt} width={24} height={24} />
    </button>
  );
}
