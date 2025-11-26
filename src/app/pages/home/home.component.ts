import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { SoundService } from '../../services/sound.service';
import { Game } from '../../models/game.model';

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
  soundEnabled = true;

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

  adjustColor(color: string, percent: number): string {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }
}
