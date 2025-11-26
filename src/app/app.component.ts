import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <router-outlet />
    </div>
  `
})
export class AppComponent {}

