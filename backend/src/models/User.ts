import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  googleId: string;
  email: string;
  username: string;
  displayName: string;
  avatar: string;
  country: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
  stats: {
    totalDebates: number;
    wins: number;
    losses: number;
    currentStreak: number;
    longestStreak: number;
    totalXp: number;
    level: number;
    eloRating: number;
    averageScore: number;
  };
  clanId?: mongoose.Schema.Types.ObjectId;
  friends: mongoose.Schema.Types.ObjectId[];
  blockedUsers: mongoose.Schema.Types.ObjectId[];
  warnings: number;
  banStatus: 'active' | 'banned-24h' | 'banned-7d' | 'permanently-banned';
  bannedUntil?: Date;
  role: 'user' | 'moderator' | 'admin';
  preferences: {
    privacyLevel: 'public' | 'friends-only' | 'private';
    notifications: {
      debateInvites: boolean;
      messages: boolean;
      achievements: boolean;
      clanUpdates: boolean;
    };
    theme: 'light' | 'dark';
    soundEnabled: boolean;
  };
}

const userSchema = new Schema<IUser>(
  {
    googleId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    avatar: { type: String, default: '' },
    country: { type: String, required: true },
    bio: { type: String, default: '' },
    stats: {
      totalDebates: { type: Number, default: 0 },
      wins: { type: Number, default: 0 },
      losses: { type: Number, default: 0 },
      currentStreak: { type: Number, default: 0 },
      longestStreak: { type: Number, default: 0 },
      totalXp: { type: Number, default: 0 },
      level: { type: Number, default: 1 },
      eloRating: { type: Number, default: 1200 },
      averageScore: { type: Number, default: 0 },
    },
    clanId: { type: Schema.Types.ObjectId, ref: 'Clan', default: null },
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    blockedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    warnings: { type: Number, default: 0 },
    banStatus: {
      type: String,
      enum: ['active', 'banned-24h', 'banned-7d', 'permanently-banned'],
      default: 'active',
    },
    bannedUntil: { type: Date, default: null },
    role: {
      type: String,
      enum: ['user', 'moderator', 'admin'],
      default: 'user',
    },
    preferences: {
      privacyLevel: {
        type: String,
        enum: ['public', 'friends-only', 'private'],
        default: 'public',
      },
      notifications: {
        debateInvites: { type: Boolean, default: true },
        messages: { type: Boolean, default: true },
        achievements: { type: Boolean, default: true },
        clanUpdates: { type: Boolean, default: true },
      },
      theme: { type: String, enum: ['light', 'dark'], default: 'dark' },
      soundEnabled: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ country: 1 });
userSchema.index({ 'stats.eloRating': -1 });

export const User = mongoose.model<IUser>('User', userSchema);
