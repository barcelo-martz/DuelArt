<div align="center">

<img src="https://img.shields.io/badge/DuelArt-Where%20Art%20Goes%20To%20Battle-F5C842?style=for-the-badge&labelColor=0A0A0B" alt="DuelArt" />

<br />
<br />

<h1>⚔️ DuelArt</h1>

<p><strong>The arena where photographers, illustrators and musicians fight for glory.</strong></p>

<p>
  <a href="#-demo">Demo</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-tech-stack">Tech Stack</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-project-structure">Structure</a> ·
  <a href="#-roadmap">Roadmap</a>
</p>

<br />

![Next.js](https://img.shields.io/badge/Next.js%2014-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)

</div>

---

## 🎯 Overview

**DuelArt** is a community platform where artists compete in head-to-head battles across three disciplines: **Photography**, **Illustration**, and **Music**. Users vote to decide winners, advance through tournament brackets, and sell their work in an integrated marketplace — all in one place.

> Artists upload → Enter tournaments → Community votes → Winners sell their art

---

## ✨ Features

### 🏆 Battle System
- Head-to-head art battles with real-time vote counters
- Tournament brackets (8 / 16 / 32 participants)
- Multiple categories: Photography, Illustration, Digital Art, Music
- Anti-fraud voting with Redis rate limiting (1 vote per user per battle)
- Automated round advancement via Vercel Cron Jobs

### 🎨 Artist Profiles
- Personal gallery with masonry grid layout
- Tournament history, win/loss record, trophy shelf
- Follow system with personalized feed
- Public profile at `/artist/[username]`

### 🛒 Marketplace
- Sell original digital files with custom pricing
- License types: Personal / Commercial
- Stripe Connect for automatic artist/platform revenue split
- Works that win tournaments get a verified badge

### ⚡ Real-time
- Live vote counters during active battles via Supabase Realtime
- In-battle activity feed (who voted for what)
- Push notifications for battle results (OneSignal)

### 🔐 Auth & Security
- OAuth with Google and Discord (Supabase Auth)
- Email/password with magic link support
- Role-based access control: `user` / `artist` / `admin`
- Middleware-protected private routes

---

## 🛠 Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | SSR, SEO, API Routes, Image optimization |
| **Language** | TypeScript | Type safety across the full stack |
| **Styling** | Tailwind CSS + shadcn/ui | Fast iteration, accessible components |
| **Database** | PostgreSQL via Supabase | Relational data, Row Level Security |
| **ORM** | Prisma | Type-safe queries, migrations |
| **Auth** | Supabase Auth | OAuth, magic link, session management |
| **Storage** | Cloudinary | Image/audio upload, auto-optimization |
| **Realtime** | Supabase Realtime | Live vote counters in battles |
| **Cache** | Upstash Redis | Rate limiting, real-time rankings |
| **Payments** | Stripe Connect | Marketplace splits, artist payouts |
| **Email** | Resend + React Email | Transactional emails, beautiful templates |
| **Push** | OneSignal | Web push notifications |
| **Deploy** | Vercel | CI/CD, Cron Jobs, Edge Functions |

### 💰 Cost at launch: $0/month
Everything above has a free tier sufficient for launch. Only Stripe is pay-per-transaction (2.9% + $0.30), meaning you only pay when artists earn.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- A [Supabase](https://supabase.com) account (free)
- A [Cloudinary](https://cloudinary.com) account (free)
- A [Upstash](https://upstash.com) account (free)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/duelart.git
cd duelart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your credentials:

```bash
cp .env.example .env.local
```

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database (Supabase → Settings → Database → Connection String)
DATABASE_URL="postgresql://postgres:password@db.project.supabase.co:5432/postgres"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Upstash Redis
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stripe (add when enabling marketplace)
# STRIPE_SECRET_KEY=sk_test_...
# STRIPE_WEBHOOK_SECRET=whsec_...
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 4. Set up the database

```bash
npx prisma generate
npx prisma db push
```

Optionally seed with demo data:

```bash
npx prisma db seed
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you should see the DuelArt landing page.

---

## 📁 Project Structure

```
duelart/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (auth)/                 # Auth pages (no navbar)
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (main)/                 # Public pages (with navbar)
│   │   │   ├── layout.tsx
│   │   │   ├── explore/
│   │   │   ├── tournaments/
│   │   │   │   └── [id]/
│   │   │   │       └── battle/[battleId]/
│   │   │   ├── marketplace/
│   │   │   └── artist/[username]/
│   │   ├── (dashboard)/            # Private artist area
│   │   │   ├── layout.tsx
│   │   │   └── dashboard/
│   │   │       ├── artworks/
│   │   │       ├── earnings/
│   │   │       └── settings/
│   │   ├── (admin)/                # Admin only
│   │   │   └── admin/
│   │   ├── api/                    # API Routes (backend)
│   │   │   ├── artworks/
│   │   │   ├── tournaments/
│   │   │   ├── votes/
│   │   │   ├── upload/
│   │   │   ├── webhooks/stripe/
│   │   │   └── cron/close-rounds/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui base components
│   │   ├── layout/                 # Navbar, Sidebar, Footer
│   │   ├── artwork/                # ArtworkCard, ArtworkGrid, MusicPlayer
│   │   ├── tournament/             # Bracket, BattleView, VoteButton, CountdownTimer
│   │   ├── artist/                 # ArtistCard, ProfileHeader, FollowButton
│   │   └── common/                 # UploadDropzone, EmptyState, LoadingSpinner
│   │
│   ├── lib/
│   │   ├── supabase/               # client.ts, server.ts, middleware.ts
│   │   ├── db/                     # artworks.ts, tournaments.ts, votes.ts, users.ts
│   │   ├── validations/            # Zod schemas
│   │   ├── tournament-engine.ts    # Pure bracket logic (reusable in mobile)
│   │   ├── cloudinary.ts
│   │   ├── redis.ts
│   │   ├── stripe.ts
│   │   ├── resend.ts
│   │   ├── utils.ts                # cn(), formatDate(), etc.
│   │   └── constants.ts
│   │
│   ├── hooks/
│   │   ├── useUser.ts
│   │   ├── useVote.ts
│   │   ├── useBattleLive.ts        # Supabase Realtime subscription
│   │   ├── useUpload.ts
│   │   └── useInfiniteScroll.ts
│   │
│   ├── types/
│   │   ├── database.ts             # Supabase generated types
│   │   ├── artwork.ts
│   │   ├── tournament.ts
│   │   └── user.ts
│   │
│   └── store/
│       ├── useAuthStore.ts         # Zustand
│       └── useTournamentStore.ts
│
├── prisma/
│   ├── schema.prisma               # Full data model
│   ├── migrations/
│   └── seed/
│       └── index.ts
│
├── public/
├── middleware.ts                   # Route protection
├── next.config.ts
├── tailwind.config.ts
├── .env.example
└── package.json
```

---

## 🗄 Database Schema

Core models and their relationships:

```
User ──< Artwork ──< Battle ──< Vote
  │         │
  │         └──< TournamentParticipant >── Tournament ──< Round ──< Battle
  │
  └──< Follow >── User
  └──< Purchase >── Artwork
```

Key models:
- **User** — profile, role (`user` / `artist` / `admin`), Stripe Connect ID
- **Artwork** — file URL (Cloudinary), category, price, license type, status
- **Tournament** — category, bracket size, start/end dates, status
- **Battle** — two artworks, round reference, vote counts, winner
- **Vote** — user + battle reference (unique constraint prevents double voting)
- **Purchase** — buyer, artwork, amount, Stripe payment intent ID

---

## 🗺 Roadmap

### Phase 1 — Foundation ✅
- [x] Project setup (Next.js + TypeScript + Tailwind)
- [x] Folder structure
- [ ] Prisma schema + Supabase setup
- [ ] Authentication (Supabase Auth + OAuth)
- [ ] Base layouts and design system

### Phase 2 — Core Content 🔨
- [ ] Artwork upload with Cloudinary
- [ ] Artist public profile
- [ ] Explore gallery with filters + infinite scroll
- [ ] Follow system

### Phase 3 — Tournaments ⚔️
- [ ] Tournament creation (admin)
- [ ] Bracket generation engine
- [ ] Battle page with real-time voting
- [ ] Anti-fraud Redis rate limiting
- [ ] Automated round advancement (Vercel Cron)

### Phase 4 — Marketplace 💰
- [ ] Stripe Connect integration
- [ ] Artwork purchase flow
- [ ] Artist earnings dashboard
- [ ] Email notifications (Resend)

### Phase 5 — Launch 🚀
- [ ] SEO + dynamic OG images
- [ ] Push notifications (OneSignal)
- [ ] Admin panel
- [ ] Beta with 20–30 invited artists
- [ ] Public launch

### Future — Mobile App 📱
- [ ] React Native + Expo in monorepo
- [ ] Shared business logic packages
- [ ] App Store + Play Store

---

## 🔑 Key Concepts

**Route Groups** — Folders like `(auth)`, `(main)`, `(dashboard)` are Next.js route groups. They let you apply different layouts to different sections without affecting the URL. `/dashboard` stays `/dashboard`, not `/(dashboard)/dashboard`.

**Tournament Engine** — The bracket logic lives in `lib/tournament-engine.ts` as pure functions with no DB dependencies. This makes it fully testable and reusable in a future mobile app without any changes.

**Anti-fraud Voting** — Every vote hits Redis first (Upstash). If the key `vote:userId:battleId` already exists, the request is rejected before touching PostgreSQL. Redis TTL matches the battle duration.

**Real-time Counters** — Supabase Realtime Channels broadcast vote updates to all connected clients watching a battle. No polling, no external WebSocket server needed.

---

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines before submitting a PR.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: new feature
fix: bug fix
docs: documentation only
style: formatting, no logic change
refactor: code restructure without feature change
chore: build process, dependencies
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with these amazing open source projects:
[Next.js](https://nextjs.org) · [Supabase](https://supabase.com) · [Prisma](https://prisma.io) · [Tailwind CSS](https://tailwindcss.com) · [shadcn/ui](https://ui.shadcn.com) · [Stripe](https://stripe.com) · [Cloudinary](https://cloudinary.com)

---

<div align="center">
  <p>Made with ❤️ for the art community</p>
  <p><strong>DuelArt</strong> — Where Art Goes To Battle ⚔️</p>
</div>
