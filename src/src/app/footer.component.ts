import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
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
})
export class FooterComponent {}
