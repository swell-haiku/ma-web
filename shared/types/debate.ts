// Debate types
export type DebateMode = '1v1' | '2v2' | '3v3';
export type DebateStatus = 'waiting' | 'active' | 'finished' | 'cancelled';
export type DebateTopic = string;

export interface DebateParticipant {
  userId: string;
  username: string;
  avatar: string;
  team: 'team-a' | 'team-b';
  joinedAt: Date;
}

export interface DebateMessage {
  userId: string;
  username: string;
  message: string;
  team: 'team-a' | 'team-b';
  timestamp: Date;
  flagged: boolean;
  warnings: number;
}

export interface DebateScore {
  teamA: number;
  teamB: number;
}

export interface DebateRound {
  roundNumber: number;
  teamASpeaker: string;
  teamBSpeaker: string;
  messages: DebateMessage[];
  startTime: Date;
  endTime?: Date;
}

export interface Debate {
  _id: string;
  topic: DebateTopic;
  mode: DebateMode;
  status: DebateStatus;
  createdBy: string;
  createdAt: Date;
  startedAt?: Date;
  endedAt?: Date;
  participants: DebateParticipant[];
  rounds: DebateRound[];
  durationMinutes: number;
  region?: string;
  isPublic: boolean;
  invitedPlayers?: string[];
  finalScore?: DebateScore;
  winner?: 'team-a' | 'team-b' | 'draw';
  aiJudgmentText?: string;
  aiAnalysis?: {
    bestArgument: string;
    weakestArgument: string;
    overallQuality: number;
    reasoning: string;
  };
  recordingUrl?: string;
  transcript?: string;
}

export interface DebateRequestPayload {
  topic: DebateTopic;
  mode: DebateMode;
  isPublic: boolean;
  region?: string;
  invitedPlayers?: string[];
}
