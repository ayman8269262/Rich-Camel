/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Game {
  id: string;
  name: string;
  description: string;
  category: 'arcade' | 'puzzle' | 'action' | 'classic';
  icon: string; // lucide icon name
  thumbnail: string; // visual representation
  rating: number;
  playCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  color: string; // tailwind gradient or color
  highScoreKey: string;
}

export interface UserStats {
  uid: string;
  level: number;
  xp: number;
  coins: number;
  dailyRewardClaimed: boolean;
  lastClaimDate: string | null;
  highScores: Record<string, number>;
  gamesPlayedCount: number;
  usdtBalance: number;
  referralsCount: number;
  referralsClaimed: boolean;
  withdrawals: Array<{
    id: string;
    amount: number;
    address: string;
    status: 'Processing' | 'Completed' | 'Rejected';
    date: string;
  }>;
  history: Array<{
    gameId: string;
    gameName: string;
    score: number;
    coins: number;
    date: string;
  }>;
}
