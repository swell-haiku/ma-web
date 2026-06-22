# MutualDebate - Global Debate Platform

## Overview
MutualDebate is a real-time debate platform where players compete in 1v1, 2v2, and 3v3 debates on controversial topics. Players register with Google OAuth, choose a country, form clans, and participate in structured 15-minute debates with AI judging.

## Core Features

### 🌍 Global Community
- **Country Selection**: Register and choose your country
- **General Chat**: Worldwide chat to find debate partners
- **Clan System**: Create/join clans with custom branding
- **Rankings**: Global and clan-based rankings

### ⚔️ Debate Modes
- **1v1 Debates**: One-on-one confrontations
- **2v2 Debates**: Team-based debates
- **3v3 Debates**: Extended team format
- **15-Minute Duration**: Structured time limit with turn-based speaking

### 🤖 AI Judging System
- AI analyzes arguments, rhetoric, and evidence
- Determines winning team/player
- Provides feedback on debate quality
- Tracks debate history

### ⚠️ Content Moderation
- **Warning System**: 5 warnings before permanent ban
- **Allowed Words**: fuck, bitch, nigga, stfu, tf, fym
- **Auto-flagging**: Automated detection of flagged content
- **Appeal System**: Users can appeal bans

### 🎮 Gamification
- **XP System**: Earn points for winning debates
- **Achievements**: Badges for milestones
- **Streaks**: Win streaks with bonuses
- **Tournaments**: Seasonal competitions

## Tech Stack
- **Frontend**: Next.js 14, React, TailwindCSS, Socket.IO
- **Backend**: Node.js, Express, MongoDB
- **Real-time**: WebSocket (Socket.IO)
- **Auth**: Google OAuth 2.0
- **AI**: OpenAI API for debate judging
- **Deployment**: Docker, Vercel/Railway

## Project Structure
```
ma-web/
├── frontend/          # Next.js frontend app
├── backend/           # Express backend server
├── shared/            # Shared types and utilities
└── docs/              # Documentation
```

## Getting Started
See individual README files in frontend/ and backend/ directories.
