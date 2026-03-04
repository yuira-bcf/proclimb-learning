# /new-course - 新規コース一括生成

新しいコース（ディレクトリ + index.html + ナビJS + 章ファイル群）を一括生成します。

## 使い方
```
/new-course [カテゴリ] [コース名] [章数]
```

例: `/new-course backend rest-api 8`

## 処理手順

1. 引数からカテゴリパス、コース名、章数を取得する
2. ユーザーに以下を質問する:
   - コースタイトル（日本語）
   - コース説明文
   - アクセントカラー（カテゴリデフォルトを提案）
   - Material Icons のアイコン名
   - 各章のタイトルと簡単な説明
3. 以下のファイルを生成する:
   - `{カテゴリ}/{コース名}/` ディレクトリ作成
   - `{カテゴリ}/{コース名}/index.html` コース一覧ページ
   - `shared/js/nav-{コース名}.js` ナビゲーションJS
   - 各章HTMLファイル（テンプレートベース）
4. ダッシュボード `index.html` の該当カテゴリセクションにコースカードを追加する
5. `shared/js/apple-nav.js` のカテゴリ定義を必要に応じ更新する

## 参照テンプレート
- ナビJS: `shared/js/nav-design-pattern.js`
- コースindex: `software-design/design-pattern/index.html`
- 章ファイル: `software-design/design-pattern/1dp-mvc.html`

## 注意事項
- 章の中身はプレースホルダー構成で生成する
- 各章に最低4セクション + 練習問題3問を含める
- フッターの関連リンクは同カテゴリの他コースを含める
