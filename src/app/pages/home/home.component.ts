import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { SoundService } from '../../services/sound.service';
import { Game } from '../../models/game.model';

type MetroTileAccent = 'hero' | 'wide' | 'tall' | 'square';

type MetroTile = Game & {
  colSpan: number;
  rowSpan: number;
  accent: MetroTileAccent;
};

type MetroLayout = Pick<MetroTile, 'colSpan' | 'rowSpan' | 'accent'>;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private gamesService = inject(GamesService);
  private soundService = inject(SoundService);

  games: Game[] = this.gamesService.getAll();
  gamesMap: Record<string, MetroTile> = {};
  metroTiles: MetroTile[] = [];
  soundEnabled = true;

  private readonly layoutBlueprint: Record<string, MetroLayout> = {
    'human-knot': { colSpan: 3, rowSpan: 2, accent: 'hero' },
    'reverse-charades': { colSpan: 2, rowSpan: 2, accent: 'wide' },
    'conducted-story': { colSpan: 1, rowSpan: 2, accent: 'tall' },
    'silent-lineup': { colSpan: 1, rowSpan: 1, accent: 'square' },
    'counting-game': { colSpan: 2, rowSpan: 2, accent: 'wide' },
    'back-drawing': { colSpan: 1, rowSpan: 1, accent: 'square' },
    'word-by-word-story': { colSpan: 1, rowSpan: 1, accent: 'square' }
  };

  constructor() {
    this.composeTilesFromGames();
  }

  onHover() {
    this.soundService.playHover();
  }

  onClick() {
    this.soundService.playClick();
  }

  toggleSound() {
    this.soundService.toggle();
    this.soundEnabled = !this.soundEnabled;
    if (this.soundEnabled) {
      this.soundService.playSuccess();
    }
  }

  trackBySlug(_: number, tile: MetroTile): string {
    return tile.slug;
  }

  tileBackground(color: string): string {
    return `linear-gradient(135deg, ${color}, ${this.adjustColor(color, -18)})`;
  }

  adjustColor(color: string, percent: number): string {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  private composeTilesFromGames(): void {
    const fallbackLayouts: MetroLayout[] = [
      { colSpan: 2, rowSpan: 1, accent: 'wide' },
      { colSpan: 1, rowSpan: 1, accent: 'square' },
      { colSpan: 1, rowSpan: 2, accent: 'tall' }
    ];

    let fallbackIndex = 0;

    for (const game of this.games) {
      const predefinedLayout = this.layoutBlueprint[game.slug];
      const layout = predefinedLayout ?? fallbackLayouts[fallbackIndex % fallbackLayouts.length];

      if (!predefinedLayout) {
        fallbackIndex += 1;
      }

      this.gamesMap[game.slug] = {
        ...game,
        colSpan: layout.colSpan,
        rowSpan: layout.rowSpan,
        accent: layout.accent
      };
    }

    this.metroTiles = Object.values(this.gamesMap);
  }
}
