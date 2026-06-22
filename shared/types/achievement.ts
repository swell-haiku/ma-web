// Achievement types
export type AchievementRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface Achievement {
  _id: string;
  name: string;
  description: string;
  icon: string;
  rarity: AchievementRarity;
  xpReward: number;
  condition: {
    type: string; // 'wins', 'streak', 'debatesPlayed', 'first_debate', etc.
    value: number;
  };
  unlockedBy: string[]; // User IDs
  createdAt: Date;
}

export interface UserAchievement {
  userId: string;
  achievementId: string;
  unlockedAt: Date;
}
