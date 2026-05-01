"use client";
import { title } from "process";
import { use, useEffect, useState } from "react";

interface Props {
  title: string;
  imageAlt: string;
  imageArt1: string;
  imageArt2?: string;
  porcentVote1?: number;
  porcentVote2?: number;
  time?: string;
  userName1?: string;
  userName2?: string;
}

export default function BattleCard({
  title,
  imageArt1,
  imageArt2,
  imageAlt,
  porcentVote1,
  porcentVote2,
  time,
  userName1,
  userName2,
}: Props) {
  useEffect(() => {
    console.log("BattleCard rendered with title:", title);
  }, [title]);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    // enviar la lógica a tu base de datos/API
    setHasVoted(true);
  };

  const Countdown = () => {
    const [countdown, setCountdown] = useState("");
    useEffect(() => {}, []);

    return <span className="text-error font-mono text-xs">{countdown}</span>;
  };

  return (
    <div className="min-w-[500px] snap-center bg-surface-container rounded-xl overflow-hidden border border-outline-variant/5">
      <div className="grid grid-cols-2 relative h-72">
        <img
          className="w-full h-full object-cover border-r border-surface"
          alt={imageAlt}
          src={imageArt1}
          onClick={handleVote}
        />
        <img
          className="w-full h-full object-cover"
          alt={imageAlt}
          src={imageArt2}
          onClick={handleVote}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-surface-container-highest px-4 py-2 rounded-full border border-primary/20 text-primary-container font-mono text-xl shadow-2xl">
            VS
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* USERNAMEs */}
        <div className="flex justify-between mb-2">
          <div>
            <h3 className="font-bold">{userName1}</h3>
          </div>
          <div>
            <h3 className="font-bold">{userName2}</h3>
          </div>
        </div>

        {hasVoted ? (
          <div className="w-full mb-6 animate-in fade-in duration-500">
            <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-700"
                style={{ width: `${porcentVote1}%` }}
              ></div>
              <div
                className="h-full bg-amber-400 transition-all duration-700"
                style={{ width: `${porcentVote2}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs font-medium">
              <span className="text-blue-600">{porcentVote1}%</span>
              <span className="text-amber-400">{porcentVote2}%</span>
            </div>
          </div>
        ) : (
          /* Mensaje o espacio vacío mientras no vota */
          <div className="h-[52px] mb-6 flex items-center justify-center border-2 border-dashed border-outline-variant/20 rounded-lg">
            <p className="text-xs text-outline-variant uppercase tracking-widest">
              Selecciona una imagen para ver resultados
            </p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-error text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              <img src="/icons/timer.svg" alt="timer icon" />
            </span>
            <span className="text-error font-mono text-xs">{Countdown()}</span>
          </div>
          <button className="text-primary text-xs font-bold tracking-[0.2em] uppercase border-b border-primary/20 pb-1">
            Cast Vote
          </button>
        </div>
      </div>
    </div>
  );
}
