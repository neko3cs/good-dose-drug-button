import { Injectable } from '@angular/core';

const PRAISE_MESSAGES = [
  'えらい！お薬飲めて天才！✨',
  'すごい！健康への第一歩ですね！💪',
  '今日もバッチリ！素晴らしいです！🎉',
  'お薬タイム完了！自分を褒めてあげてください！🥰',
  'ナイス！その調子で続けていきましょう！👍',
  '最高！健康管理のプロですね！🌟',
  '素晴らしい！自分を大切にできていますね！💖',
  'お見事！毎日の積み重ねが大切です！📈',
  'やったね！これでもう安心です！🌈',
  'さすが！忘れずに飲めて偉すぎます！🏅',
  '完璧！今日のミッション完了ですね！🚀',
  'ブラボー！体も喜んでいますよ！🥗',
  '100点満点！健康への投資、バッチリです！💯',
  'いい感じ！その誠実さが素敵です！✨',
  'お疲れ様！今日も一歩前進しましたね！🐾',
  'ハッピー！お薬飲んで健やかに！🍀',
  '優勝！自分に優しくできて最高です！🏆',
  'キラキラ！心も体もリフレッシュ！💎',
  'エクセレント！明日への準備万端ですね！☀',
  'グッジョブ！あなたは本当に偉いです！🤝',
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
