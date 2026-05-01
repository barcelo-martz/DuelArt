import React from "react";
import Link from "next/link";

export default function ArtistsPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-20">
        <h1 className="editorial-title text-7xl md:text-8xl font-light italic text-primary leading-tight mb-4">
          The <span className="font-bold not-italic">Elite</span> Vanguard
        </h1>
        <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed font-body">
          Curating the world's most formidable digital combatants. Browse the
          directory of master artists and track their ascent through the arena
          rankings.
        </p>
      </header>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Large */}
        <div className="md:col-span-8 group relative bg-surface-container rounded-xl overflow-hidden shadow-ambient transition-all duration-500 hover:bg-surface-container-high">
          <Link
            href="/artist/xavier-thorne"
            className="block relative h-[500px] overflow-hidden"
          >
            <img
              alt="Abstract digital art"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="dramatic abstract digital art piece with flowing dark ribbons and sharp gold metallic shards against a deep obsidian background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkRau27lkiWzGwSGwPeg57pBNiI4dBt3lC1B1RmXGRxBnHodo5KjN5Eu-5HJG5T-jP7M3oYfSSvRc_BU_03O1CT2Hk7krtuZSyRsMI9NcakxwfXYr1TcSexyvgpVFMI72ZOkTSn45dUWgP59KlvmTZ-CXtRUu1_WJRAHmVIOU1yWMQBjvMY-a5Y_oBUpBCGdLleTHLGWqqP87_entsS2u9_YE31fnMLEHyELbXPgYJFm56d4_SFIvGoy0dBAg2rMGmuj8F6rmSQYvT"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
          </Link>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-primary-container font-label text-xs tracking-widest uppercase mb-2 block">
                  Grandmaster
                </span>
                <Link
                  href="/artist/xavier-thorne"
                  className="editorial-title text-4xl text-on-surface font-bold block"
                >
                  Xavier Thorne
                </Link>
              </div>
              <div className="flex gap-10">
                <div className="text-right">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest stat-font mb-1">
                    Total Wins
                  </p>
                  <p className="text-2xl text-primary font-bold stat-font">
                    142
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest stat-font mb-1">
                    Win Rate
                  </p>
                  <p className="text-2xl text-primary font-bold stat-font">
                    94.2%
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full py-4 border border-outline-variant/30 rounded-lg text-primary font-bold hover:bg-primary/10 transition-colors flex items-center justify-center gap-2">
              <span
                className="material-symbols-outlined text-lg"
                data-icon="person_add"
              >
                person_add
              </span>
              Follow Artist
            </button>
          </div>
        </div>

        {/* Vertical Profile */}
        <div className="md:col-span-4 bg-surface-container rounded-xl overflow-hidden shadow-ambient hover:bg-surface-container-high transition-all">
          <Link
            href="/artist/elena-vossen"
            className="block h-64 relative overflow-hidden"
          >
            <img
              alt="Cinematic lighting portrait"
              className="w-full h-full object-cover"
              data-alt="high fashion editorial portrait of a mysterious figure in shadow with sharp golden highlights on facial features and silk clothing"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpuP8ZDjqhph74WTVjMxHci1_ZDjQW6SB9bwKIBrAvwJfh0V5N8NKHZCTOx9xPoZbEBkqp8cTt4ykRtg-HM6VnjibtuR5Uk88OnEpWpZOVALKE0qEX7OBbBIdkGwxJMbqXFZXp4YBqIkKF0wBz811dBwlYPOMRRWNIZLjfvxSkZNP0jZbxZEZ3IRgu0cJfmDOPetRf_sYqL8lVMY59-cqs1gvfeDgpHnD6XWKatayPMXwOd8PdYdjSH35eG_IkkmnJ6QfgzCn5gpAV"
            />
          </Link>
          <div className="p-6">
            <Link
              href="/artist/elena-vossen"
              className="editorial-title text-2xl text-on-surface mb-4 block"
            >
              Elena Vossen
            </Link>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                <span className="text-sm text-on-surface-variant font-label">
                  Wins
                </span>
                <span className="text-sm text-primary font-bold stat-font">
                  89
                </span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                <span className="text-sm text-on-surface-variant font-label">
                  Win Rate
                </span>
                <span className="text-sm text-primary font-bold stat-font">
                  81.5%
                </span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/10 pb-2">
                <span className="text-sm text-on-surface-variant font-label">
                  Rank
                </span>
                <span className="text-sm text-primary font-bold stat-font">
                  #14
                </span>
              </div>
            </div>
            <button className="w-full py-3 border border-outline-variant/30 rounded-lg text-primary font-bold hover:bg-primary/10 transition-colors">
              Follow
            </button>
          </div>
        </div>

        {/* Standard Square */}
        <div className="md:col-span-4 bg-surface-container rounded-xl overflow-hidden shadow-ambient hover:bg-surface-container-high transition-all">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-high ring-2 ring-primary/20">
                <img
                  alt="Artist avatar"
                  className="w-full h-full object-cover"
                  data-alt="professional headshot of an artist with cool dramatic lighting and a charcoal gray backdrop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWbehR3ald5kih7Sj_SikS0Rg9YtYhNpQYw07C6pI32_VWXEmFTOvXGc3nsWa8JfQb0Xt9y64aS9Cvn3Nmf7kZQYoUFSSFKnm9FI4LE72ZWibYzEKbefOLvQ7fSpmanzabv8eOs0xtkpELk587-LmHp_EtC_tbLI_a-Ia8RobiDhmOv0YVkwH0Ta2qNuFzSZHKtRmGSwUaurWTVtHZa2UkyZ9-LAuwThPaAoBCHyCywpQve1ohXCEUqOJaNWTNfo9Hp-u9yQv2NqiP"
                />
              </div>
              <div>
                <Link
                  href="/artist/julian-grey"
                  className="editorial-title text-xl block"
                >
                  Julian Grey
                </Link>
                <span className="text-xs text-on-surface-variant font-label uppercase">
                  Street Surrealist
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container-lowest p-3 rounded-lg text-center">
                <span className="block text-[10px] text-on-surface-variant uppercase mb-1">
                  Wins
                </span>
                <span className="text-lg text-primary font-bold stat-font">
                  56
                </span>
              </div>
              <div className="bg-surface-container-lowest p-3 rounded-lg text-center">
                <span className="block text-[10px] text-on-surface-variant uppercase mb-1">
                  Rate
                </span>
                <span className="text-lg text-primary font-bold stat-font">
                  76%
                </span>
              </div>
            </div>
            <button className="w-full py-3 border border-outline-variant/30 rounded-lg text-primary font-bold hover:bg-primary/10 transition-colors">
              Follow
            </button>
          </div>
        </div>

        {/* Detailed Portrait */}
        <div className="md:col-span-4 bg-surface-container rounded-xl overflow-hidden shadow-ambient hover:bg-surface-container-high transition-all">
          <div className="h-48 bg-surface-container-highest relative">
            <img
              alt="Oil painting style digital art"
              className="w-full h-full object-cover"
              data-alt="vibrant digital oil painting of a classical bust exploding into colorful flower petals with dramatic rim lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9I-kX_X9_PGb7OgumI5v1boWRKN99-kIrq1YpfIrqW-NIlhiX-D50E_ZqReDLLd3gpeAdVD0JZRuCIe7XNlOB-FAKg_YRRsdVer8wH5Q7wcGDaSKvPAOXeIuLWYDiEoD_BKlEsCCDx-mAvm09PIlOarniNoF46GWuULYCzEyRePi9xsq7IxBxSKGpWiFoPTDEamBGjqXa2iW5F0mNvhiEhBgm1ouwB5DZBT0jZlsuxSvmtUlpXjri1VUeB09OivtzUmHkk5BKmBJC"
            />
          </div>
          <div className="p-6">
            <h3 className="editorial-title text-xl mb-4">
              <Link href="/artist/maya-sterling" className="block">
                Maya Sterling
              </Link>
            </h3>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
              Specializing in neo-classical digital sculpture and light-play
              battles.
            </p>
            <div className="flex justify-between items-center">
              <span className="stat-font text-primary-container font-bold text-lg">
                72%{" "}
                <span className="text-[10px] text-on-surface-variant uppercase font-normal ml-1">
                  Success
                </span>
              </span>
              <button className="px-6 py-2 border border-outline-variant/30 rounded-lg text-primary font-bold hover:bg-primary/10 transition-colors">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Wide stats view */}
        <div className="md:col-span-4 bg-surface-container rounded-xl overflow-hidden shadow-ambient hover:bg-surface-container-high transition-all p-8 flex flex-col justify-between">
          <div>
            <span
              className="material-symbols-outlined text-primary-container text-4xl mb-4"
              data-icon="trophy"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              trophy
            </span>
            <h3 className="editorial-title text-2xl mb-2">
              <Link href="/artist/arturo-k" className="block">
                Arturo K.
              </Link>
            </h3>
            <p className="text-on-surface-variant font-body text-sm mb-6">
              Current arena title holder for the Cyber-Punk division.
            </p>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl text-primary font-bold stat-font">
                201
              </span>
              <span className="text-xs text-on-surface-variant uppercase tracking-widest font-label">
                Bouts Won
              </span>
            </div>
            <button className="w-full py-3 gold-gradient text-on-primary-fixed rounded-lg font-bold hover:opacity-90 transition-opacity">
              Follow Legend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
