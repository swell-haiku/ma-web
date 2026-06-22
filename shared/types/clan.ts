// Clan types
export type ClanRole = 'leader' | 'officer' | 'member';
export type ClanStatus = 'active' | 'inactive' | 'disbanded';

export interface ClanMember {
  userId: string;
  username: string;
  role: ClanRole;
  joinedAt: Date;
  debatesPlayed: number;
  wins: number;
}

export interface ClanStats {
  totalMembers: number;
  totalDebates: number;
  totalWins: number;
  treasury: number;
  ranking: number;
  averageElo: number;
  foundedAt: Date;
}

export interface Clan {
  _id: string;
  name: string;
  tag: string; // 4-6 letter acronym
  description: string;
  logo: string;
  banner: string;
  leader: string; // User ID
  members: ClanMember[];
  stats: ClanStats;
  status: ClanStatus;
  createdAt: Date;
  updatedAt: Date;
  publicProfile: boolean;
  joinRequests?: string[]; // User IDs
  invitedPlayers?: string[]; // User IDs
}

export interface ClanWar {
  _id: string;
  clan1Id: string;
  clan2Id: string;
  startDate: Date;
  endDate?: Date;
  debates: string[]; // Debate IDs
  clan1Wins: number;
  clan2Wins: number;
  winner?: string; // Clan ID
  prizePool: number;
}
