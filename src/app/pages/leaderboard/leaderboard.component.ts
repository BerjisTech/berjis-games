import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LeaderboardService, PlayerRank, CountryRank, MyRank } from '../../services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './leaderboard.component.html'
})
export class LeaderboardComponent implements OnInit {
  private lb = inject(LeaderboardService);

  tab = signal<'players' | 'countries'>('players');
  players = signal<PlayerRank[]>([]);
  countries = signal<CountryRank[]>([]);
  myRank = signal<MyRank | null>(null);
  loading = signal(true);

  ngOnInit() {
    this.loadPlayers();
    this.loadCountries();
    this.loadMyRank();
  }

  setTab(t: 'players' | 'countries') {
    this.tab.set(t);
  }

  loadPlayers() {
    this.loading.set(true);
    this.lb.getPlayers(100).subscribe({
      next: res => { this.players.set(res.data || []); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  loadCountries() {
    this.lb.getCountries().subscribe({
      next: res => this.countries.set(res.data || []),
      error: () => {}
    });
  }

  loadMyRank() {
    this.lb.getMyRank().subscribe({
      next: res => this.myRank.set(res.data),
      error: () => {}
    });
  }

  medalFor(rank: number): string {
    if (rank === 1) return '\u{1F947}';
    if (rank === 2) return '\u{1F948}';
    if (rank === 3) return '\u{1F949}';
    return '#' + rank;
  }
}
