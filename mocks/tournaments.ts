export type Artist = {
  id: string;
  name: string;
  avatar?: string;
  handle?: string;
  record?: string;
  winRate?: string;
};

export type Match = {
  id: string;
  a?: Artist;
  b?: Artist;
  aScore?: number;
  bScore?: number;
};

export type Round = {
  id: string;
  name?: string;
  matches: Match[];
};

export type Bracket = {
  rounds: Round[];
};

export type Tournament = {
  id: string;
  slug: string;
  title: string;
  heroImage?: string;
  participantsList: Artist[];
  bracket?: Bracket;
};

const avatar = (seed: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/800`;

const tournaments: Tournament[] = [
  {
    id: "midnight-ronin",
    slug: "midnight-ronin",
    title: "Midnight Ronin",
    heroImage: avatar("midnight-ronin-hero"),
    participantsList: [
      {
        id: "p1",
        name: "V. Thorne",
        avatar: avatar("V_Thorne"),
        handle: "@VThorne",
        record: "12 - 2",
        winRate: "85.7%",
      },
      {
        id: "p2",
        name: "K. Aris",
        avatar: avatar("K_Aris"),
        handle: "@KAris",
        record: "10 - 4",
        winRate: "71.4%",
      },
      {
        id: "p3",
        name: "M. Rossi",
        avatar: avatar("M_Rossi"),
        handle: "@MRossi",
        record: "12 - 2",
        winRate: "85.7%",
      },
      {
        id: "p4",
        name: "L. Chen",
        avatar: avatar("L_Chen"),
        handle: "@LChen",
        record: "8 - 6",
        winRate: "57.1%",
      },
      {
        id: "p5",
        name: "J. Hideo",
        avatar: avatar("J_Hideo"),
        handle: "@JHideo",
        record: "9 - 5",
        winRate: "64.3%",
      },
      {
        id: "p6",
        name: "Obsidian Protocol",
        avatar: avatar("Obsidian_Protocol"),
        handle: "@obsidian",
        record: "7 - 7",
        winRate: "50%",
      },
      {
        id: "p7",
        name: "Ethereal Fracture",
        avatar: avatar("Ethereal_Fracture"),
        handle: "@ethfract",
        record: "11 - 3",
        winRate: "78.6%",
      },
      {
        id: "p8",
        name: "Aurora Shade",
        avatar: avatar("Aurora_Shade"),
        handle: "@aurorashade",
        record: "6 - 8",
        winRate: "42.9%",
      },
    ],
    bracket: {
      rounds: [
        {
          id: "r1",
          name: "Quarter Finals",
          matches: [
            {
              id: "m1",
              a: { id: "p1", name: "V. Thorne", avatar: avatar("V_Thorne") },
              b: { id: "p2", name: "K. Aris", avatar: avatar("K_Aris") },
              aScore: 42,
              bScore: 58,
            },
            {
              id: "m2",
              a: { id: "p3", name: "M. Rossi", avatar: avatar("M_Rossi") },
              b: { id: "p4", name: "L. Chen", avatar: avatar("L_Chen") },
              aScore: 61,
              bScore: 39,
            },
          ],
        },
        {
          id: "r2",
          name: "Semi Finals",
          matches: [
            {
              id: "m3",
              a: { id: "p2", name: "K. Aris", avatar: avatar("K_Aris") },
              b: { id: "p3", name: "M. Rossi", avatar: avatar("M_Rossi") },
              aScore: 48,
              bScore: 52,
            },
          ],
        },
      ],
    },
  },
  {
    id: "cyber-dynasty",
    slug: "cyber-dynasty",
    title: "Cyber Dynasty",
    heroImage: avatar("cyber-dynasty-hero"),
    participantsList: [
      { id: "c1", name: "Neon Flux", avatar: avatar("Neon_Flux") },
      { id: "c2", name: "Silk Circuit", avatar: avatar("Silk_Circuit") },
      { id: "c3", name: "Byte Painter", avatar: avatar("Byte_Painter") },
      { id: "c4", name: "Pixel Shogun", avatar: avatar("Pixel_Shogun") },
    ],
    bracket: {
      rounds: [
        {
          id: "rc1",
          name: "Semi Finals",
          matches: [
            {
              id: "c_m1",
              a: { id: "c1", name: "Neon Flux", avatar: avatar("Neon_Flux") },
              b: {
                id: "c2",
                name: "Silk Circuit",
                avatar: avatar("Silk_Circuit"),
              },
              aScore: 55,
              bScore: 45,
            },
            {
              id: "c_m2",
              a: {
                id: "c3",
                name: "Byte Painter",
                avatar: avatar("Byte_Painter"),
              },
              b: {
                id: "c4",
                name: "Pixel Shogun",
                avatar: avatar("Pixel_Shogun"),
              },
              aScore: 60,
              bScore: 40,
            },
          ],
        },
      ],
    },
  },
  {
    id: "ethereal-forge",
    slug: "ethereal-forge",
    title: "Ethereal Forge",
    heroImage: avatar("ethereal-forge-hero"),
    participantsList: [
      { id: "e1", name: "Valkyrie", avatar: avatar("Valkyrie") },
      { id: "e2", name: "Seraphic", avatar: avatar("Seraphic") },
    ],
    bracket: {
      rounds: [
        {
          id: "final",
          name: "Final",
          matches: [
            {
              id: "ef_m1",
              a: { id: "e1", name: "Valkyrie", avatar: avatar("Valkyrie") },
              b: { id: "e2", name: "Seraphic", avatar: avatar("Seraphic") },
              aScore: 70,
              bScore: 30,
            },
          ],
        },
      ],
    },
  },
];

export { tournaments };
export default tournaments;
