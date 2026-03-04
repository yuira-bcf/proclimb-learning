# コードスタイルルール

## HTML
- インデント: スペース2つ
- 属性の引用符: ダブルクォート
- 自己閉じタグ: `<br>`, `<img>`, `<input>`, `<meta>`, `<link>`（スラッシュ不要）
- lang属性: `<html lang="ja">`
- charset: `<meta charset="UTF-8">` を必ず含める
- viewport: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## CSS
- クラス命名: ケバブケース（例: `chapter-card-header`, `exercise-list`）
- CSS変数: `--` プレフィクス（例: `--course-accent`, `--apple-text-primary`）
- カラー値: 6桁HEX（例: `#5856D6`）またはCSS変数を使用
- レスポンシブ: `@media (min-width: 768px)` をブレイクポイントに使用
- max-width: コンテンツ領域は `1200px`

## JavaScript
- 変数宣言: `const` 優先、変更がある場合のみ `let`（`var` 禁止）
- 文字列: シングルクォート（HTML属性内のJSはダブルクォート）
- セミコロン: あり
- 関数: function宣言またはアロー関数

## ファイル命名規則
- 章ファイル: `{番号}{接頭辞}-{トピック}.html`（例: `1dp-mvc.html`, `3arch-layered.html`）
- ナビJS: `nav-{コース名}.js`（例: `nav-design-pattern.js`）
- インデックス: `index.html`
