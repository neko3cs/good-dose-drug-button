import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DoseButtonComponent } from './dose-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DoseButtonComponent, MatToolbarModule],
  template: `
    <mat-toolbar class="flex flex-col justify-center !bg-green-100 !h-24">
      <span class="text-3xl font-black text-green-800 tracking-wider">{{ title() }}</span>
      <span class="text-sm font-medium text-green-700 mt-1">お薬飲んだら褒めてもらえます</span>
    </mat-toolbar>
    <main class="max-w-3xl mx-auto text-center p-12 font-sans">
      <app-dose-button />
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('お薬飲んだボタン');
}
