import { Component, signal, inject, computed } from '@angular/core';
import { PraiseService } from './praise.service';

@Component({
  selector: 'app-dose-button',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center p-8 gap-4">
      @if (praise(); as message) {
        <div class="text-center transition-all duration-500">
          <p class="text-3xl font-bold text-green-600 mb-6">{{ message }}</p>
          <div class="flex gap-4 justify-center">
            <button 
              class="px-6 py-3 bg-black text-white rounded-md cursor-pointer hover:bg-gray-800 transition-colors" 
              (click)="shareOnX()"
            >
              Xで報告する 🚀
            </button>
            <button 
              class="px-6 py-3 bg-gray-500 text-white rounded-md cursor-pointer hover:bg-gray-600 transition-colors" 
              (click)="reset()"
            >
              戻る
            </button>
          </div>
        </div>
      } @else {
        <button 
          class="text-2xl px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform" 
          (click)="takeDose()"
        >
          お薬を飲みました！ 💊
        </button>
      }
    </div>
  `,
  styles: [],
})
export class DoseButtonComponent {
  private readonly praiseService = inject(PraiseService);
  readonly praise = signal<string | null>(null);

  takeDose(): void {
    const message = this.praiseService.getRandomPraise();
    this.praise.set(message);
  }

  reset(): void {
    this.praise.set(null);
  }

  shareOnX(): void {
    const message = this.praise();
    if (!message) return;

    const baseUrl = 'https://x.com/intent/post';
    const params = new URLSearchParams();

    params.append('text', message);
    params.append('hashtags', ['お薬飲んだボタン', '健康第一'].join(','));
    params.append('url', window.location.origin);

    const xUrl = `${baseUrl}?${params.toString()}`;
    window.open(xUrl, '_blank', 'noreferrer');
  }
}
