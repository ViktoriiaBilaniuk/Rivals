export interface Player {
  nickname: string;
  rank: string;
  avatar?: string;
  score: number;
}

export enum PlayerRank {
  bronze = "bronze",
  silver = "silver",
  gold = "gold",
}
