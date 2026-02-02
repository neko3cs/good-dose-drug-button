import { Component, signal, inject, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PraiseService } from './praise.service';

@Component({
  selector: 'app-dose-button',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  template: `
    <div class="flex flex-col items-center justify-center p-8 gap-4">
      @if (praise(); as message) {
        <mat-card class="max-w-2xl w-full animate-in fade-in slide-in-from-bottom-2 duration-500">
          <mat-card-header class="flex justify-center pb-4">
            <mat-card-title class="text-3xl text-green-600">えらい！</mat-card-title>
          </mat-card-header>
          <mat-card-content class="py-10">
            <p class="text-4xl font-bold text-center leading-relaxed">{{ message }}</p>
          </mat-card-content>
          <mat-card-actions class="flex justify-center gap-6 pb-4">
            <a
              mat-flat-button
              color="accent"
              class="text-lg px-8 py-4 flex items-center"
              [href]="shareUrl()"
              target="_blank"
              rel="noopener noreferrer"
            >
              <mat-icon class="scale-125 mr-2">share</mat-icon>
              Xで報告する
            </a>
            <button mat-stroked-button class="text-lg px-8 py-4" (click)="reset()">戻る</button>
          </mat-card-actions>
        </mat-card>
      } @else {
        <button
          mat-fab
          extended
          color="primary"
          class="text-4xl px-32 py-16 hover:scale-105 transition-transform shadow-2xl !rounded-full whitespace-nowrap"
          (click)="takeDose()"
        >
          <mat-icon class="scale-[2] mr-10">medication</mat-icon>
          お薬を飲みました！
        </button>
      }
    </div>
  `,
  styles: [],
})
export class DoseButtonComponent {
  private readonly praiseService = inject(PraiseService);
  readonly praise = signal<string | null>(null);

  readonly shareUrl = computed(() => {
    const baseUrl = 'https://x.com/intent/post';
    const text = 'お薬を飲みました。えらい！';
    const hashtags = '#お薬飲んだボタン #健康第一';
    const url = window.location.origin + window.location.pathname;
    
    // 全て text パラメータに含める手法（モバイルアプリでの確実性が高い）
    const fullText = `${text}\n${url}\n${hashtags}`;
    
    return `${baseUrl}?text=${encodeURIComponent(fullText)}`;
  });

  takeDose(): void {
    const message = this.praiseService.getRandomPraise();
    this.praise.set(message);
  }

  reset(): void {
    this.praise.set(null);
  }
}
