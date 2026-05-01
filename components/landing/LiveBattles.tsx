import BattleCard from "../ui/BattleCard";

export default function LiveBattles() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="px-8 mb-12 flex justify-between items-end max-w-7xl mx-auto">
        <div>
          <span className="font-label text-primary tracking-[0.3em] uppercase text-xs">
            The Arena
          </span>
          <h2 className="text-5xl font-headline italic mt-2">Live Battles</h2>
        </div>
        <div className="flex gap-4">
          <button className="p-2 border border-outline-variant/20 rounded-full hover:bg-surface-container transition-colors">
            <img src="/icons/chevron_left.svg" alt="" />
          </button>
          <button className="p-2 border border-outline-variant/20 rounded-full hover:bg-surface-container transition-colors">
            <img src="/icons/chevron_right.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-8 px-8 pb-8 no-scrollbar snap-x">
        <BattleCard
          title={"Battle 1"}
          userName1="Juan"
          userName2="María"
          imageAlt={""}
          imageArt1={"/artImages/art1.jpg"}
          imageArt2={"/artImages/art2.jpg"}
          porcentVote1={10}
          porcentVote2={90}
        />
        <BattleCard
          title={"Battle 1"}
          imageAlt={""}
          imageArt1={"/artImages/art1.jpg"}
          imageArt2={"/artImages/art2.jpg"}
          porcentVote1={20}
          porcentVote2={80}
        />
        <BattleCard
          title={"Battle 1"}
          imageAlt={""}
          imageArt1={"/artImages/art1.jpg"}
          imageArt2={"/artImages/art2.jpg"}
          porcentVote1={20}
          porcentVote2={80}
        />
      </div>
    </section>
  );
}
