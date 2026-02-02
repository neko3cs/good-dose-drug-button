import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DoseButtonComponent } from './dose-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DoseButtonComponent, MatToolbarModule],
  template: `
    <mat-toolbar class="flex justify-center !bg-green-100 !h-16">
      <span class="text-3xl font-black text-green-800 tracking-wider">{{ title() }}</span>
    </mat-toolbar>
    <main class="max-w-3xl mx-auto text-center p-12 font-sans">
      <app-dose-button />
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Good Dose Drug Button');
}
