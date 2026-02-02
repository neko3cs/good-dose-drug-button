import { Injectable } from '@angular/core';

const PRAISE_MESSAGES = [
  'えらい！お薬飲めて天才！✨',
  'すごい！健康への第一歩ですね！💪',
  '今日もバッチリ！素晴らしいです！🎉',
  'お薬タイム完了！自分を褒めてあげてください！🥰',
  'ナイス！その調子で続けていきましょう！👍',
];

@Injectable({
  providedIn: 'root',
})
export class PraiseService {
  getRandomPraise(): string {
    const randomIndex = Math.floor(Math.random() * PRAISE_MESSAGES.length);
    return PRAISE_MESSAGES[randomIndex];
  }
}
