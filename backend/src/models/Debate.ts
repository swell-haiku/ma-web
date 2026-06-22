import mongoose, { Schema, Document } from 'mongoose';

interface IDebate extends Document {
  topic: string;
  mode: '1v1' | '2v2' | '3v3';
  status: 'waiting' | 'active' | 'finished' | 'cancelled';
  createdBy: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  startedAt?: Date;
  endedAt?: Date;
  participants: Array<{
    userId: mongoose.Schema.Types.ObjectId;
    username: string;
    avatar: string;
    team: 'team-a' | 'team-b';
    joinedAt: Date;
  }>;
  messages: Array<{
    userId: mongoose.Schema.Types.ObjectId;
    username: string;
    message: string;
    team: 'team-a' | 'team-b';
    timestamp: Date;
    flagged: boolean;
  }>;
  durationMinutes: number;
  region?: string;
  isPublic: boolean;
  winner?: 'team-a' | 'team-b' | 'draw';
  finalScore?: {
    teamA: number;
    teamB: number;
  };
  aiJudgment?: string;
  aiAnalysis?: {
    bestArgument: string;
    weakestArgument: string;
    overallQuality: number;
    reasoning: string;
  };
  recordingUrl?: string;
  transcript?: string;
}

const debateSchema = new Schema<IDebate>(
  {
    topic: { type: String, required: true },
    mode: {
      type: String,
      enum: ['1v1', '2v2', '3v3'],
      required: true,
    },
    status: {
      type: String,
      enum: ['waiting', 'active', 'finished', 'cancelled'],
      default: 'waiting',
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    startedAt: { type: Date, default: null },
    endedAt: { type: Date, default: null },
    participants: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        username: String,
        avatar: String,
        team: { type: String, enum: ['team-a', 'team-b'] },
        joinedAt: { type: Date, default: Date.now },
      },
    ],
    messages: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        username: String,
        message: String,
        team: { type: String, enum: ['team-a', 'team-b'] },
        timestamp: { type: Date, default: Date.now },
        flagged: { type: Boolean, default: false },
      },
    ],
    durationMinutes: { type: Number, default: 15 },
    region: { type: String, default: null },
    isPublic: { type: Boolean, default: true },
    winner: { type: String, enum: ['team-a', 'team-b', 'draw'], default: null },
    finalScore: {
      teamA: { type: Number, default: 0 },
      teamB: { type: Number, default: 0 },
    },
    aiJudgment: { type: String, default: null },
    aiAnalysis: {
      bestArgument: String,
      weakestArgument: String,
      overallQuality: Number,
      reasoning: String,
    },
    recordingUrl: { type: String, default: null },
    transcript: { type: String, default: null },
  },
  { timestamps: true }
);

debateSchema.index({ createdBy: 1, createdAt: -1 });
debateSchema.index({ status: 1 });
debateSchema.index({ topic: 1 });
debateSchema.index({ 'participants.userId': 1 });

export const Debate = mongoose.model<IDebate>('Debate', debateSchema);
