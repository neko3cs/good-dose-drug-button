# AGENTS.md

このファイルは、AIエージェントがこのプロジェクト（Good Dose Drug Button）を操作・開発する際のガイドラインとルールをまとめたものです。

## 1. プロジェクト概要

- **名前**: Good Dose Drug Button (お薬飲めてえらいボタン）
- **目的**:
  - ユーザーが薬を飲めた時にボタンを押す
  - ユーザーが薬を飲めたことを褒める
  - X(旧Twitter)に共有・投稿する
- **構造**: リポジトリルートにはドキュメント類のみがあり、実際のアプリケーションプロジェクトは `src/` ディレクトリ以下に配置されています。

## 2. 技術スタック

- **Framework**: Angular v21+
  - Standalone Componentsを使用。
  - Signalsを積極的に活用し、モダンなAngular開発スタイルを維持すること。
- **Language**: TypeScript v5.9+
- **Package Manager**: pnpm v10+
- **Testing**: Vitest
- **Formatter**: Prettier (設定は `src/package.json` に記述あり）

## 3. 作業ルール (Core Mandates)

### 3.1 ワーキングディレクトリ

**最重要**: `package.json` や `angular.json` は `src/` ディレクトリ内に存在します。
したがって、`pnpm` コマンドや `ng` コマンド、ファイル操作を行う際は、基本的に `src/` ディレクトリを起点（ワーキングディレクトリ）として動作してください。

### 3.2 コーディング規約

- **フォーマット**: `src/package.json` 内の `prettier` 設定にしたがってください。
  - `printWidth: 100`
  - `singleQuote: true`
- **Angular**:
  - 最新のAngular機能（Signals, Control Flow Syntax `@if`, `@for` 等）を使用してください。
  - モジュール（NgModule）ではなく、Standalone Componentベースで開発してください。

### 3.3 コミットと変更

- 変更を行う際は、既存のコードスタイル（命名規則、ファイル構造）を尊重してください。
- 機能追加・修正後は `pnpm test` を実行し、既存のテストが壊れていないか確認してください。

## 4. 開発コマンド

（すべて `src/` ディレクトリ内で実行）

- **セットアップ**: `pnpm install`
- **開発サーバー**: `pnpm start` (デフォルトポート: 4200)
- **ビルド**: `pnpm build`
- **テスト**: `pnpm test`

## 5. ディレクトリ構造の注意点

```txt
.
├── AGENTS.md          # このファイル
├── README.md          # プロジェクトの簡易説明
└── src/               # 【重要】ここがAngularプロジェクトのルート
    ├── angular.json
    ├── package.json
    ├── pnpm-lock.yaml
    └── src/           # ソースコード実体
        ├── app/
        ├── assets/
        └── index.html
```
