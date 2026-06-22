# Global Debate Arena (GDA) - MutualDebate

A competitive, real-time debate platform where players worldwide register with Google, choose a country, and engage in strategic 1v1, 2v2, and 3v3 debates on global issues. An AI judge determines winners, and the community builds clans for epic team-based competition.

## 🌟 Core Features

### ⚔️ Debate System
- **Multiple Formats**: 1v1 (solo), 2v2 (teams), 3v3 (expanded)
- **Duration**: 15 minutes per debate with structured turns
- **Topics**: Geopolitical, social, tech, sports, entertainment, philosophy
- **Debate Queue**: Join public debates or create private invite-only debates
- **Spectator Mode**: Watch live debates and learn strategies

### 🤖 AI Judging & Analytics
- **Smart Judge**: OpenAI-powered analysis of arguments, logic, evidence, and persuasiveness
- **Winner Determination**: Transparent scoring breakdown
- **Debate Feedback**: AI generates constructive feedback for each player
- **Recording & Playback**: Review past debates and improve skills
- **Debate Statistics**: Win/loss ratios, average score, debate history

### 🌍 Global Community
- **Authentication**: Google OAuth 2.0 integration
- **Country System**: Select country for regional pride and stats
- **General Chat**: Worldwide chat to find opponents and request debates
- **Player Profiles**: Custom avatars, bio, stats, achievements
- **Region-based Matchmaking**: Find players in your region or globally

### 👥 Clan System
- **Create/Join Clans**: Build teams with friends
- **Clan Hierarchy**: Leader, officers, members
- **Clan Wars**: Organized tournaments between clans
- **Clan Chat**: Private communication channels
- **Clan Rankings**: Global clan leaderboards
- **Clan Treasury**: Collect rewards from debates

### 🏆 Progression & Gamification
- **Elo Rating System**: Skill-based ranking (1200-3000)
- **XP & Leveling**: Earn XP for debates (win = +50, loss = +10, participate = +5)
- **Achievements**: Badges for milestones
  - First Debate, 10-Win Streak, Flawless Victory, Debater of the Month
- **Season Pass**: Monthly/seasonal rewards and challenges
- **Leaderboards**: Global, Regional, Clan, Monthly, All-Time

### ⚠️ Moderation & Safety System
- **Warning System**:
  - **Allowed Profanity**: fuck, bitch, nigga, stfu, tf, fym (no penalty)
  - **Other Violations**: Racism, hate speech, spam, doxxing (1 warning)
  - **5 Warnings** = 24-hour ban
  - **3 Bans** = 7-day ban
  - **Repeat Offender** = Permanent ban
- **Real-time Monitoring**: AI scans debate text during live session
- **Player Reports**: Report toxic behavior with evidence
- **Appeal System**: Users can appeal bans with written explanation
- **Moderator Dashboard**: Manual review of flagged content
- **Timeout System**: Instant timeout for severe violations

### 💬 Communication
- **General Chat**: Global, region-based, clan-based channels
- **Direct Messaging**: 1-on-1 private messages
- **Debate Notifications**: Real-time alerts for debate invites
- **Friend System**: Add friends, track their stats
- **Mention System**: @mention players in chat

### 📱 Additional Features
- **Mobile Responsive**: Full mobile support with app
- **Debate Search**: Filter by topic, region, skill level
- **Replay System**: Download debate transcripts
- **Statistics Dashboard**: Detailed analytics for users
- **Streaming Integration**: Potential Twitch/YouTube integration
- **Tournament Mode**: Organized competitive events
- **Daily Challenges**: Special debate scenarios for bonus XP
- **Referral System**: Invite friends for rewards

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: React 18
- **Styling**: TailwindCSS + Shadcn/ui
- **Real-time**: Socket.IO (client)
- **State Management**: Zustand / Redux
- **HTTP Client**: Axios
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts or Chart.js

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (primary) + Redis (cache)
- **Real-time**: Socket.IO (server)
- **Auth**: Google OAuth 2.0, JWT tokens
- **AI Integration**: OpenAI API
- **Validation**: Joi / Zod
- **Logging**: Winston
- **Task Queue**: Bull (Redis-based)

### Database Schema
- **Users**: Profile, stats, preferences, security
- **Debates**: Metadata, participants, transcript, winner, score
- **Clans**: Members, treasury, rankings
- **Messages**: Chat history, timestamps
- **Warnings**: User violations, appeals
- **Achievements**: User badges and progress
- **Leaderboards**: Pre-computed rankings

### Infrastructure
- **Deployment**: Docker + Docker Compose
- **Hosting**: Vercel (frontend), Railway/Heroku (backend)
- **CDN**: Cloudflare
- **Database Hosting**: MongoDB Atlas
- **Storage**: AWS S3 (replay videos/transcripts)
- **Monitoring**: Sentry, LogRocket

## 📁 Project Structure

```
ma-web/
├── frontend/                          # Next.js application
│   ├── app/
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Home page
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── dashboard/page.tsx        # User dashboard
│   │   ├── debates/
│   │   │   ├── page.tsx              # Find debates
│   │   │   └── [id]/page.tsx         # Live debate room
│   │   ├── clans/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── leaderboard/page.tsx
│   │   ├── profile/[id]/page.tsx
│   │   └── chat/page.tsx
│   ├── components/
│   │   ├── DebateRoom.tsx            # Live debate UI
│   │   ├── ChatWindow.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlayerCard.tsx
│   │   └── ... (other components)
│   ├── hooks/
│   │   ├── useSocket.ts              # WebSocket hook
│   │   ├── useAuth.ts
│   │   └── ... (custom hooks)
│   ├── lib/
│   │   ├── api.ts                    # API client
│   │   ├── socket.ts                 # Socket setup
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   └── public/
│       └── assets/
│
├── backend/                           # Express server
│   ├── src/
│   │   ├── index.ts                  # Entry point
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── env.ts
│   │   │   └── socket.ts
│   │   ├── routes/
│   │   │   ├── auth.ts               # Google OAuth
│   │   │   ├── debates.ts
│   │   │   ├── users.ts
│   │   │   ├── clans.ts
│   │   │   ├── chat.ts
│   │   │   └── admin.ts
│   │   ├── controllers/
│   │   │   ├── debateController.ts
│   │   │   ├── userController.ts
│   │   │   ├── clanController.ts
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── debateService.ts      # Debate logic
│   │   │   ├── aiJudgeService.ts     # OpenAI integration
│   │   │   ├── userService.ts
│   │   │   ├── moderationService.ts  # Warning system
│   │   │   └── ...
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Debate.ts
│   │   │   ├── Clan.ts
│   │   │   ├── Message.ts
│   │   │   ├── Warning.ts
│   │   │   └── Achievement.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts               # JWT verification
│   │   │   ├── errorHandler.ts
│   │   │   └── validation.ts
│   │   └── sockets/
│   │       ├── debateSocket.ts       # Debate room events
│   │       ├── chatSocket.ts
│   │       └── notificationSocket.ts
│   ├── .env.example
│   └── package.json
│
├── shared/                            # Shared types & utils
│   ├── types/
│   │   ├── debate.ts
│   │   ├── user.ts
│   │   ├── clan.ts
│   │   └── ...
│   └── constants/
│       ├── debateTopic.ts
│       └── config.ts
│
├── docs/                              # Documentation
│   ├── API.md
│   ├── SOCKET_EVENTS.md
│   ├── DEPLOYMENT.md
│   └── DEVELOPMENT.md
│
└── docker-compose.yml                # Local development
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Google OAuth credentials
- OpenAI API key

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/swell-haiku/ma-web.git
   cd ma-web
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.example .env.local
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npm run dev
   ```

4. **Access Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🔑 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/debate-arena
JWT_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
OPENAI_API_KEY=your_openai_key
REDIS_URL=redis://localhost:6379
```

## 🎮 How It Works

1. **Register & Setup**: User registers with Google, chooses country, creates profile
2. **Find Debate**: Browse active debates or create new one
3. **Join Debate**: Enter debate room with opponent(s)
4. **Debate**: Take turns speaking for 15 minutes total
5. **AI Judging**: AI analyzes arguments and declares winner
6. **Rewards**: Earn XP, update rating, unlock achievements
7. **Clan Play**: Join clan for organized competitions

## 📊 Moderation Flow

```
Player speaks
    ↓
Real-time text analysis
    ↓
Profanity detected?
    ├─ YES → Allowed words? → YES = OK / NO = Flag
    └─ NO → OK
    ↓
Hate speech detected?
    ├─ YES → Add warning
    └─ NO → Continue
    ↓
Warning count ≥ 5?
    ├─ YES → Ban (24h)
    └─ NO → Continue debate
```

## 🤝 Contributing

See DEVELOPMENT.md for contribution guidelines.

## 📝 License

MIT License - see LICENSE file

## 👥 Team

- Created by: swell-haiku

---

**Status**: In Development 🚀
