# セキュリティルール

## 外部リソース制限
- 許可する外部CDN: Google Fonts, Material Icons, cdnjs (Raphael.js, Flowchart.js)
- それ以外の外部スクリプト読み込みは禁止
- インラインイベントハンドラ (`onclick` 等) の使用は最小限に

## XSS防止
- ユーザー入力を扱うJSコードでは `textContent` を使用（`innerHTML` の直接代入を避ける）
- 練習問題の解答表示トグルでは `classList.toggle()` を使用

## ファイル管理
- `.env`, `credentials`, APIキー等の機密ファイルをコミットしない
- 教材内のサンプルコードで実際のAPIキーやパスワードを使用しない
- サンプルでは `YOUR_API_KEY`, `example-password` 等のプレースホルダーを使用

## リンク安全性
- 外部リンクには `target="_blank" rel="noopener noreferrer"` を付与
- 内部リンクは相対パスを使用
