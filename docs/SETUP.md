# Global Debate Arena - Setup Guide

## Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Redis
- Google OAuth credentials
- OpenAI API key

## Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` with your credentials:
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- OPENAI_API_KEY
- JWT_SECRET
- MONGODB_URI (if not local)

```bash
npm run dev
```

Backend will run on `http://localhost:5000`

## Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
```

Edit `.env.local` with your Google Client ID and API URLs.

```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## Docker Setup (Alternative)

```bash
docker-compose up
```

This will spin up:
- MongoDB on port 27017
- Redis on port 6379
- Backend on port 5000
- Frontend on port 3000

## Testing the Setup

1. Visit `http://localhost:3000`
2. Click "Sign in with Google"
3. Choose a country
4. Create or join a debate
5. Start debating!
