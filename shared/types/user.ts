// User types
export type UserRole = 'user' | 'moderator' | 'admin';
export type UserBanStatus = 'active' | 'banned-24h' | 'banned-7d' | 'permanently-banned';

export interface UserProfile {
  _id: string;
  googleId: string;
  email: string;
  username: string;
  displayName: string;
  avatar: string;
  country: string;
  region?: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserStats {
  userId: string;
  totalDebates: number;
  winsCount: number;
  lossesCount: number;
  currentStreak: number;
  longestStreak: number;
  totalXp: number;
  level: number;
  eloRating: number;
  averageDebateScore: number;
  averageOpponentRating: number;
  favoriteTopics: string[];
  debateHistory: string[]; // Debate IDs
  lastDebateAt?: Date;
}

export interface UserWarning {
  _id: string;
  userId: string;
  reason: string;
  debateId?: string;
  issuedAt: Date;
  issuedBy: string; // Moderator ID or 'system'
  appealed: boolean;
  appealReason?: string;
  appealStatus?: 'pending' | 'approved' | 'rejected';
}

export interface UserPreferences {
  userId: string;
  privacyLevel: 'public' | 'friends-only' | 'private';
  notifications: {
    debateInvites: boolean;
    messages: boolean;
    achievements: boolean;
    clanUpdates: boolean;
  };
  preferredLanguage: string;
  theme: 'light' | 'dark';
  soundEnabled: boolean;
}

export interface User extends UserProfile {
  stats?: UserStats;
  warnings?: UserWarning[];
  preferences?: UserPreferences;
  role: UserRole;
  banStatus: UserBanStatus;
  clanId?: string;
  friends: string[]; // User IDs
  blockedUsers: string[]; // User IDs
  achievements: string[]; // Achievement IDs
}

export interface AuthToken {
  token: string;
  expiresIn: number;
  user: User;
}
