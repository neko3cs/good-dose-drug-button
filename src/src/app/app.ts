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
        <span class="text-4xl font-black text-green-800 tracking-wider leading-tight">{{
          title()
        }}</span>
        <span class="text-base font-medium text-green-700 mt-1">お薬飲んだら褒めてもらえます</span>
      </div>
    </mat-toolbar>
    <main class="max-w-3xl mx-auto text-center p-12 font-sans flex-grow">
      <app-dose-button />
      <router-outlet />
    </main>
    <footer class="py-8 text-center text-green-700 bg-green-50 border-t border-green-100">
      <div class="flex justify-center items-center gap-4 mb-4">
        <a
          href="https://github.com/neko3cs/good-dose-drug-button"
          class="flex items-center hover:text-green-900 transition-colors"
        >
          <span
            class="font-medium underline underline-offset-4 decoration-green-200 hover:decoration-green-400"
            >このアプリのGitHubリポジトリ</span
          >
        </a>
        <span class="text-green-200" aria-hidden="true">/</span>
        <a
          href="https://x.com/neko3cs"
          class="flex items-center hover:text-green-900 transition-colors"
        >
          <span
            class="font-medium underline underline-offset-4 decoration-green-200 hover:decoration-green-400"
            >開発者のTwitterアカウント</span
          >
        </a>
      </div>
      <p class="text-xs opacity-60">&copy; 2026 neko3cs</p>
    </footer>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('お薬飲んだボタン');
}
