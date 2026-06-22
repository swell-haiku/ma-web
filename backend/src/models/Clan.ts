import mongoose, { Schema, Document } from 'mongoose';

interface IClan extends Document {
  name: string;
  tag: string;
  description: string;
  logo: string;
  banner: string;
  leader: mongoose.Schema.Types.ObjectId;
  members: Array<{
    userId: mongoose.Schema.Types.ObjectId;
    username: string;
    role: 'leader' | 'officer' | 'member';
    joinedAt: Date;
  }>;
  stats: {
    totalDebates: number;
    totalWins: number;
    treasury: number;
    ranking: number;
    averageElo: number;
  };
  status: 'active' | 'inactive' | 'disbanded';
  createdAt: Date;
  updatedAt: Date;
  publicProfile: boolean;
}

const clanSchema = new Schema<IClan>(
  {
    name: { type: String, required: true, unique: true },
    tag: { type: String, required: true, unique: true },
    description: { type: String, default: '' },
    logo: { type: String, default: '' },
    banner: { type: String, default: '' },
    leader: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        username: String,
        role: { type: String, enum: ['leader', 'officer', 'member'], default: 'member' },
        joinedAt: { type: Date, default: Date.now },
      },
    ],
    stats: {
      totalDebates: { type: Number, default: 0 },
      totalWins: { type: Number, default: 0 },
      treasury: { type: Number, default: 0 },
      ranking: { type: Number, default: 0 },
      averageElo: { type: Number, default: 1200 },
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'disbanded'],
      default: 'active',
    },
    publicProfile: { type: Boolean, default: true },
  },
  { timestamps: true }
);

clanSchema.index({ leader: 1 });
clanSchema.index({ 'stats.ranking': 1 });
clanSchema.index({ 'members.userId': 1 });

export const Clan = mongoose.model<IClan>('Clan', clanSchema);
