// Chat types
export type ChatChannelType = 'global' | 'regional' | 'clan' | 'dm' | 'debate';

export interface ChatMessage {
  _id: string;
  sender: string; // User ID
  senderUsername: string;
  senderAvatar: string;
  channelId: string;
  message: string;
  createdAt: Date;
  edited?: Date;
  flagged: boolean;
  reactions?: {
    emoji: string;
    count: number;
    users: string[];
  }[];
}

export interface ChatChannel {
  _id: string;
  name: string;
  type: ChatChannelType;
  description?: string;
  topic?: string;
  region?: string;
  clanId?: string;
  participants: string[]; // User IDs
  messages: ChatMessage[];
  createdAt: Date;
  createdBy: string; // User ID
  isPrivate: boolean;
}

export interface DirectMessage {
  _id: string;
  from: string; // User ID
  to: string; // User ID
  message: string;
  read: boolean;
  createdAt: Date;
}
