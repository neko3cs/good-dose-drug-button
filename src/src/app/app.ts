import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DoseButtonComponent } from './dose-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DoseButtonComponent, MatToolbarModule],
  template: `
    <mat-toolbar class="!bg-green-100 !h-28 flex justify-center">
      <div class="flex flex-col items-center">
        <span class="text-4xl font-black text-green-800 tracking-wider leading-tight">{{ title() }}</span>
        <span class="text-base font-medium text-green-700 mt-1">お薬飲んだら褒めてもらえます</span>
      </div>
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
