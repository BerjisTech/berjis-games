import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const base = (typeof window !== 'undefined' && (window as any).__GAMES_API__) || 'http://games-api.berjis.test';

export interface PlayerRank {
  userId: string;
  score: number;
  rankTitle: string | null;
  country: string | null;
  rank: number;
}

export interface CountryRank {
  countryId: string;
  name: string;
  totalScore: number;
  playerCount: number;
  rank: number;
}

export interface MyRank {
  score: number;
  rankTitle: string | null;
  position: number;
}

@Injectable({ providedIn: 'root' })
export class LeaderboardService {
  constructor(private http: HttpClient) {}

  getPlayers(limit = 50) {
    return this.http.get<{ success: boolean; data: PlayerRank[] }>(`${base}/v1/leaderboard/players?limit=${limit}`);
  }

  getCountries() {
    return this.http.get<{ success: boolean; data: CountryRank[] }>(`${base}/v1/leaderboard/countries`);
  }

  getMyRank() {
    return this.http.get<{ success: boolean; data: MyRank | null }>(`${base}/v1/leaderboard/me`, { withCredentials: true });
  }
}
