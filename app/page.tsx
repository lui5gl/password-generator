"use client";

import { useState } from "react";
import { Toaster } from "sonner";

import Background from "@components/background";
import Password from "@components/password";
import Configuration from "./components/configuration";

export default function Home() {
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);

  const passwordConfig = [symbols, uppercase, lowercase, numbers];

  const setPasswordConfig = [
    setSymbols,
    setUppercase,
    setLowercase,
    setNumbers,
  ];

  return (
    <>
      <Background />
      <main className="grid min-h-screen place-content-center">
        <section className="z-10 grid gap-1 rounded-md bg-white px-10 py-5 shadow-box_md">
          <h2 className="text-xl font-medium">Generador de contraseñas</h2>
          <Password passwordConfig={passwordConfig} />
          <Configuration
            passwordConfig={passwordConfig}
            setPasswordConfig={setPasswordConfig}
          />
        </section>
      </main>
      <Toaster position="top-center" />
    </>
  );
}
