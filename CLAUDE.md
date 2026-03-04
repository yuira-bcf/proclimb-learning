# Proclimb教材2026 プロジェクト指示書

## プロジェクト概要
職業訓練校向けHTML教材プラットフォーム。ブラウザで閲覧する静的HTML教材を制作・管理する。

## 技術スタック
- HTML5 / CSS3 / JavaScript（バニラ）
- 外部ライブラリ: Google Fonts (Noto Sans JP, JetBrains Mono), Material Icons
- ビルドツール: なし（静的ファイルのみ）

## ディレクトリ構成
```
├── index.html                  # ダッシュボード（全コース一覧）
├── shared/                     # 共有リソース
│   ├── common.css              # 章ファイル用共通CSS
│   ├── apple-header-footer.css # index.html用ヘッダー/フッターCSS
│   └── js/
│       ├── apple-nav.js        # グローバルナビゲーション
│       └── nav-*.js            # コース別ナビゲーション
├── frontend/                   # フロントエンド教材
├── backend/                    # バックエンド教材
├── devtools/                   # 開発ツール教材
├── ai/                         # AI・自動化教材
├── design/                     # デザイン・UX教材
├── software-design/            # ソフトウェア設計教材
├── business/                   # ビジネススキル教材
└── exercises/                  # 実習教材
```

## デザインシステム

### フォント
- コード: `JetBrains Mono`
- テキスト: `Noto Sans JP`

### アイコン
Material Icons を使用: `<span class="material-icons">icon_name</span>`

### カテゴリ別アクセントカラー
| カテゴリ | カラー |
|---------|--------|
| フロントエンド | #007AFF |
| バックエンド | #34C759 |
| 開発ツール | #FF9500 |
| AI・自動化 | #AF52DE |
| デザイン | #FF2D55 |
| ソフトウェア設計 | #5856D6 |
| ビジネス | #FF3B30 |

### 図解スタイル
- インライン図解: `background:#f8fafc; border:2px solid #e2e8f0; border-radius:16px; padding:24px;`
- SVG図解: `viewBox` + `max-width` style でレスポンシブ対応

## 章ファイルの構成ルール
1. 各章は4〜6セクションで構成
2. SVG/CSS図解を含める
3. コード例を含める（該当する場合）
4. 練習問題3問を末尾に配置
5. ページナビゲーション（前後章リンク）を末尾に配置
6. サブセクション番号形式: `N-S-X`（例: `1-1-1`, `10-2-3`）

### 練習問題HTMLパターン
```html
<div class="exercise-list">
  <div class="exercise-item">
    <div class="exercise-number">Q1</div>
    <div class="exercise-content">問題文</div>
  </div>
</div>
<div class="answer-list">
  <div class="answer-item">
    <div class="answer-header">A1</div>
    <div class="answer-content">解答</div>
  </div>
</div>
```

## Git ワークフロー
- ステージは特定ファイル指定（`git add -A` は使用しない）
- コミット・プッシュはユーザーが `commit push` と明示した時のみ実行
- コミットメッセージの末尾に `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>` を付与
- コミットメッセージプレフィクス: `add:` / `update:` / `fix:` / `remove:`

## コース新規作成時の手順
1. カテゴリディレクトリにコースディレクトリを作成
2. `shared/js/nav-{course}.js` ナビゲーションJS作成
3. コースの `index.html` 作成（章カード一覧）
4. 各章HTMLファイル作成
5. ダッシュボード `index.html` にコースカード追加
6. `shared/js/apple-nav.js` のカテゴリ定義を必要に応じ更新
7. 全コースのフッターにリンク追加（該当する場合）
