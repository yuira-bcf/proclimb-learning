# /new-chapter - 新規章ファイル生成

新しい章HTMLファイルをテンプレートに基づいて自動生成します。

## 使い方
```
/new-chapter [コースパス] [章番号] [タイトル]
```

例: `/new-chapter software-design/design-pattern 9 Singletonパターン`

## 処理手順

1. 引数からコースパス、章番号、タイトルを取得する
2. 同コースの既存章ファイルを1つ読み込み、テンプレートとして使用する
3. 以下の要素を含む新規章HTMLファイルを生成する:
   - head: charset, viewport, title, Google Fonts, Material Icons, common.css, CSS変数
   - body: global-nav + ナビJS, chapter-header, toc, 4〜6セクション, 練習問題3問, page-nav
4. コースの `index.html` に章カードを追加する
5. コースのナビJS (`shared/js/nav-{course}.js`) の chapters 配列に追加する
6. 前章の page-nav の「次の章」リンクを更新する

## ファイル命名規則
- `{番号}{接頭辞}-{トピック}.html`
- 接頭辞はコースの既存ファイルに合わせる（例: `dp-`, `arch-`, `doc-`）

## 注意事項
- セクション内容はプレースホルダーとして生成し、ユーザーに確認を求める
- サブセクション番号は `N-S-X` 形式で付与する
- 練習問題は章の内容に関連したものを3問生成する
