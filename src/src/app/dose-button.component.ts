import { Component, signal, inject, computed } from '@angular/core';
import { PraiseService } from './praise.service';

@Component({
  selector: 'app-dose-button',
  standalone: true,
  template: `
    <div class="dose-container">
      @if (praise(); as message) {
        <div class="praise-area">
          <p class="praise-message">{{ message }}</p>
          <div class="action-buttons">
            <button class="share-button" (click)="shareOnX()">Xで報告する 🚀</button>
            <button class="reset-button" (click)="reset()">戻る</button>
          </div>
        </div>
      } @else {
        <button class="main-button" (click)="takeDose()">
          お薬を飲みました！ 💊
        </button>
      }
    </div>
  `,
  styles: `
    .dose-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      gap: 1rem;
    }
    .main-button {
      font-size: 1.5rem;
      padding: 1rem 2rem;
      cursor: pointer;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 50px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    .main-button:hover {
      transform: scale(1.05);
    }
    .praise-area {
      text-align: center;
      animation: fadeIn 0.5s ease-in;
    }
    .praise-message {
      font-size: 1.8rem;
      font-weight: bold;
      color: #28a745;
      margin-bottom: 1.5rem;
    }
    .action-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    .share-button {
      padding: 0.8rem 1.5rem;
      background-color: #000;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .reset-button {
      padding: 0.8rem 1.5rem;
      background-color: #6c757d;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
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
