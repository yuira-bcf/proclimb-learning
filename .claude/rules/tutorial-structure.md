# 教材構成ルール

## 章ファイルの必須要素

### head セクション
1. `<meta charset="UTF-8">`
2. `<meta name="viewport">`
3. `<title>` にコース名と章タイトルを含める
4. Google Fonts: Noto Sans JP + JetBrains Mono
5. Material Icons CSS
6. `../../shared/common.css` の読み込み
7. コースアクセントカラーの CSS変数定義

### body セクション
1. `<nav class="global-nav">` + コース別ナビJS
2. チャプターヘッダー（章番号・タイトル・サブタイトル）
3. 目次（TOC）
4. 本文セクション（4〜6セクション）
5. 練習問題（3問）
6. ページナビゲーション（前章・次章リンク）

### セクション品質基準
- 各セクションに1つ以上の図解（SVG, CSS diagram, テーブル等）
- コード例がある場合は `<pre><code>` で記述
- 重要ポイントは `info-box` で強調
- サブセクション番号は `N-S-X` 形式

## index.html（コース一覧ページ）の必須要素
1. ヒーローセクション（アイコン・タイトル・説明文）
2. 章カードグリッド（章番号・タイトル・説明・タグ）
3. 関連チュートリアルリンク
4. Apple風フッター（カテゴリ別リンク + コピーライト）
5. `data-active` 属性でカテゴリを指定

## ナビゲーション JS の必須要素
1. `navData` オブジェクト（logo, chapters, appendix, categories）
2. `getCurrentPage()` 関数
3. `generateNavHTML()` 関数
4. `insertNavigation()` 関数
5. `setupNavToggle()` 関数
6. `DOMContentLoaded` イベントリスナー
