# Claude Code用 実装プロンプト集
# HTML/CSS入門書 サンプルコード作成

---

## 使用方法

各プロンプトをClaude Codeにコピー＆ペーストして実行してください。
章ごとに分割しているため、順番に実行することを推奨します。

---

## 実行順序

| 順番 | プロンプト | 内容 |
|------|-----------|------|
| 1 | プロンプト0 | プロジェクト初期設定 |
| 2 | プロンプト1 | Ch1 - 準備 |
| 3 | プロンプト2 | Ch2 - HTML前半 |
| 4 | プロンプト3 | Ch2 - HTML後半 |
| 5 | プロンプト4 | Ch3 - CSS前半 |
| 6 | プロンプト5 | Ch3 - CSS後半 |
| 7 | プロンプト6 | Ch4 - レイアウト前半 |
| 8 | プロンプト7 | Ch4 - レイアウト後半 |
| 9 | プロンプト8 | Ch5 - シングルカラム |
| 10 | プロンプト9 | Ch6 - 2カラム |
| 11 | プロンプト10 | Ch7 - タイル型 |
| 12 | プロンプト11 | Ch8 - 外部サービス |
| 13 | プロンプト12 | Ch9 - Tailwind前半 |
| 14 | プロンプト13 | Ch9 - Tailwind後半 |
| 15 | プロンプト14 | 共通ファイル |
| 16 | プロンプト15 | 最終確認 |

---

## プロンプト0：プロジェクト初期設定

```
# HTML/CSS入門書 サンプルコード プロジェクト作成

以下の構成でプロジェクトフォルダを作成してください。

## ディレクトリ構成

html-css-book/
├── ch01-setup/
├── ch02-html/
├── ch03-css/
├── ch04-layout/
├── ch05-single-column/
├── ch06-two-column/
├── ch07-tile-layout/
├── ch08-external-services/
├── ch09-tailwind/
├── assets/
│   └── images/
│       └── .gitkeep
└── README.md

## README.md の内容

- プロジェクト名：HTML/CSS入門書 サンプルコード
- 各章の概要を簡潔に記載
- 動作環境：モダンブラウザ（Chrome、Firefox、Safari、Edge）
- 使用方法：各章のフォルダ内のHTMLファイルをブラウザで開く

各フォルダには空の.gitkeepファイルを配置してください。
```

---

## プロンプト1：Chapter 1 - Web制作をはじめる準備

```
# Chapter 1: Web制作をはじめる準備 サンプルコード作成

html-css-book/ch01-setup/ 内に以下のファイルを作成してください。

## 1. 01-first-page.html

最初のWebページのサンプル
- DOCTYPE宣言
- html、head、body の基本構造
- meta charset、viewport設定
- titleタグ
- bodyに「はじめてのWebページ」という見出しと簡単な段落

## 2. 02-folder-structure.html

フォルダ構成の説明ページ
- 推奨フォルダ構成を<pre>タグで表示
- css/、images/、js/ フォルダの役割を説明

## 3. 03-emmet-examples.html

Emmet記法のサンプル集
- よく使うEmmet記法とその展開結果をコメントで併記
- 例：! → HTML5テンプレート
- 例：ul>li*5 → リスト5つ
- 例：.container → div.container
- 実際に展開されたHTMLを記述

## 4. README.md

この章の概要と各ファイルの説明を記載
```

---

## プロンプト2：Chapter 2 - HTMLの基本（前半）

```
# Chapter 2: HTMLの基本（前半）サンプルコード作成

html-css-book/ch02-html/ 内に以下のファイルを作成してください。

## 1. 01-basic-structure.html

HTMLの基本構造
- 完全なHTML5テンプレート
- DOCTYPE、html、head、body
- 各要素の役割をコメントで説明

## 2. 02-headings.html

見出しタグのサンプル
- h1〜h6 すべての見出しレベルを表示
- 適切な階層構造の例
- 不適切な使用例（コメントで説明）

## 3. 03-paragraphs.html

段落と改行
- pタグによる段落
- brタグによる改行
- 複数段落の文章サンプル

## 4. 04-images.html

画像の挿入
- imgタグの基本
- src、alt属性の説明
- width、height属性
- 相対パスと絶対パスの例
- ※画像はプレースホルダー（https://via.placeholder.com/300x200）を使用

## 5. 05-links.html

リンクの設置
- 外部リンク（target="_blank"）
- 内部リンク（相対パス）
- ページ内リンク（アンカー）
- メールリンク（mailto:）
- 電話リンク（tel:）
```

---

## プロンプト3：Chapter 2 - HTMLの基本（後半）

```
# Chapter 2: HTMLの基本（後半）サンプルコード作成

html-css-book/ch02-html/ 内に以下のファイルを作成してください。

## 6. 06-lists.html

リストの作成
- 順序なしリスト（ul）
- 順序付きリスト（ol）
- 定義リスト（dl、dt、dd）
- ネストしたリスト

## 7. 07-tables.html

テーブルの作成
- 基本的なテーブル構造
- thead、tbody、tfoot
- th、td の使い分け
- colspan、rowspanの例
- 実用的なテーブル例（価格表、スケジュール表）

## 8. 08-forms.html

フォームの作成
- form要素の基本
- input各種（text、email、password、number、date、checkbox、radio）
- textarea
- select、option
- button
- label要素との紐付け
- required属性、placeholder属性

## 9. 09-semantic.html

セマンティックHTML
- header、nav、main、article、section、aside、footer
- 実際のページ構成例
- divとの使い分けをコメントで説明

## 10. 10-exercise.html

演習問題用テンプレート
- 課題：自己紹介ページを作成
- 必須要素のヒントをコメントで記載
- 見出し、段落、画像、リスト、リンクを含む

## 11. README.md

この章の概要と各ファイルの説明
```

---

## プロンプト4：Chapter 3 - CSSの基本（前半）

```
# Chapter 3: CSSの基本（前半）サンプルコード作成

html-css-book/ch03-css/ 内に以下のファイルを作成してください。

## 1. 01-css-introduction.html + css/01-style.css

CSSの適用方法
- 外部CSS（link要素）
- 内部CSS（style要素）
- インラインCSS（style属性）
- 3つの方法の違いをコメントで説明

## 2. 02-selectors.html + css/02-selectors.css

セレクタの種類
- 要素セレクタ
- クラスセレクタ
- IDセレクタ
- 子孫セレクタ
- 子セレクタ
- 隣接セレクタ
- 属性セレクタ
- 疑似クラス（:hover、:first-child、:nth-child）
- 疑似要素（::before、::after）
- 各セレクタの優先度をコメントで説明

## 3. 03-colors.html + css/03-colors.css

色の指定方法
- カラーネーム
- HEX（16進数）
- RGB / RGBA
- HSL / HSLA
- 色見本を実際に表示

## 4. 04-typography.html + css/04-typography.css

テキストのスタイリング
- font-family（ゴシック系、明朝系、等幅）
- font-size（px、rem、em）
- font-weight
- line-height
- letter-spacing
- text-align
- text-decoration
- color
```

---

## プロンプト5：Chapter 3 - CSSの基本（後半）

```
# Chapter 3: CSSの基本（後半）サンプルコード作成

html-css-book/ch03-css/ 内に以下のファイルを作成してください。

## 5. 05-webfonts.html + css/05-webfonts.css

Webフォントの導入
- Google Fonts の読み込み方法
- @import と link の違い
- Noto Sans JP を使用した例
- フォントウェイトの指定

## 6. 06-background.html + css/06-background.css

背景の設定
- background-color
- background-image
- background-size（cover、contain）
- background-position
- background-repeat
- background-attachment
- グラデーション（linear-gradient、radial-gradient）
- 複数背景の重ね合わせ

## 7. 07-box-model.html + css/07-box-model.css

ボックスモデルの理解
- content、padding、border、margin の図解
- box-sizing: border-box の重要性
- 各プロパティの指定方法
- ショートハンド記法

## 8. 08-border.html + css/08-border.css

ボーダーの設定
- border-width、border-style、border-color
- border-radius（角丸）
- 各辺個別の指定
- ボーダーを使ったデザイン例（吹き出し、三角形）

## 9. 09-class-id.html + css/09-class-id.css

クラスとIDの使い分け
- クラスの複数指定
- IDの一意性
- 命名規則（BEM記法の紹介）
- 実践的な使い分け例

## 10. 10-exercise.html + css/10-exercise.css

演習問題
- 課題：プロフィールカードのスタイリング
- HTML構造は提供済み
- CSSを追加して完成させる

## 11. README.md

この章の概要と各ファイルの説明
```

---

## プロンプト6：Chapter 4 - レイアウトの基本（前半）

```
# Chapter 4: レイアウトの基本（前半）サンプルコード作成

html-css-book/ch04-layout/ 内に以下のファイルを作成してください。

## 1. 01-display.html + css/01-display.css

displayプロパティ
- block、inline、inline-block の違い
- none による非表示
- 各要素のデフォルト display 値
- 実際の表示例と図解

## 2. 02-flexbox-basic.html + css/02-flexbox-basic.css

Flexboxの基本
- display: flex
- flex-direction（row、column）
- justify-content（flex-start、center、flex-end、space-between、space-around、space-evenly）
- align-items（stretch、flex-start、center、flex-end）
- 各プロパティの効果を視覚的に確認できるサンプル

## 3. 03-flexbox-items.html + css/03-flexbox-items.css

Flexアイテムのプロパティ
- flex-grow
- flex-shrink
- flex-basis
- flex ショートハンド
- order
- align-self

## 4. 04-flexbox-practical.html + css/04-flexbox-practical.css

Flexbox実践例
- ナビゲーションメニュー（横並び）
- カードの横並び
- フッターのレイアウト
- 中央配置（縦横中央）
- Holy Grailレイアウト
```

---

## プロンプト7：Chapter 4 - レイアウトの基本（後半）

```
# Chapter 4: レイアウトの基本（後半）サンプルコード作成

html-css-book/ch04-layout/ 内に以下のファイルを作成してください。

## 5. 05-grid-basic.html + css/05-grid-basic.css

CSS Gridの基本
- display: grid
- grid-template-columns
- grid-template-rows
- gap（row-gap、column-gap）
- fr単位の使い方
- repeat() 関数

## 6. 06-grid-placement.html + css/06-grid-placement.css

Gridアイテムの配置
- grid-column、grid-row
- grid-area
- span キーワード
- 名前付きグリッドライン
- 名前付きグリッドエリア

## 7. 07-grid-practical.html + css/07-grid-practical.css

Grid実践例
- 画像ギャラリー（3×3）
- ダッシュボードレイアウト
- 雑誌風レイアウト
- auto-fill、auto-fit の違い

## 8. 08-flex-vs-grid.html + css/08-flex-vs-grid.css

FlexboxとGridの使い分け
- 同じレイアウトを両方で実装
- 1次元 vs 2次元 の違い
- 適切な使用シーンの説明

## 9. 09-responsive.html + css/09-responsive.css

レスポンシブデザイン基礎
- viewport meta タグ
- メディアクエリの基本構文
- ブレークポイント（480px、768px、1024px、1280px）
- モバイルファーストの書き方
- PC ファーストとの比較

## 10. 10-responsive-practical.html + css/10-responsive-practical.css

レスポンシブ実践例
- ナビゲーションの切り替え（横並び → 縦並び）
- カードレイアウト（3列 → 2列 → 1列）
- 画像のレスポンシブ対応
- フォントサイズの調整

## 11. 11-exercise.html + css/11-exercise.css

演習問題
- 課題：レスポンシブ対応の3カラムレイアウト作成
- PC：3列、タブレット：2列、モバイル：1列

## 12. README.md

この章の概要と各ファイルの説明
```

---

## プロンプト8：Chapter 5 - シングルカラムサイト制作

```
# Chapter 5: シングルカラムサイト制作 サンプルコード作成

html-css-book/ch05-single-column/ 内に以下のファイルを作成してください。

## プロジェクト概要

架空のカフェ「SAMPLE CAFE」のシングルカラムLPを作成

## ファイル構成

ch05-single-column/
├── index.html
├── css/
│   └── style.css
├── images/
│   └── .gitkeep
└── README.md

## index.html 要件

### head要素
- 適切なmeta設定（charset、viewport、description）
- OGP設定（og:title、og:description、og:image、og:url）
- ファビコン設定
- Google Fonts読み込み（Noto Sans JP）

### body構造
1. header
   - ロゴ（テキスト）
   - ナビゲーション（メニュー、アクセス、お問い合わせ）

2. メインビジュアル（hero）
   - キャッチコピー「こだわりの一杯を、あなたに」
   - サブテキスト
   - CTAボタン

3. コンセプトセクション
   - 見出し
   - 説明文
   - 画像（プレースホルダー使用）

4. メニューセクション
   - 見出し
   - メニューカード3つ（画像、名前、価格、説明）

5. アクセスセクション
   - 見出し
   - 住所、電話番号、営業時間
   - Google Maps埋め込み用スペース（iframeコメント）

6. footer
   - コピーライト
   - SNSリンク（アイコンはテキストで代用可）

## css/style.css 要件

- リセットCSS（簡易版）含む
- CSS変数でカラーパレット定義
- モバイルファースト設計
- ブレークポイント：768px、1024px
- Flexbox中心のレイアウト
- 適切な余白設計
- ホバーエフェクト

## README.md

制作手順の説明、カスタマイズポイント
```

---

## プロンプト9：Chapter 6 - 2カラムサイト制作

```
# Chapter 6: 2カラムサイト制作 サンプルコード作成

html-css-book/ch06-two-column/ 内に以下のファイルを作成してください。

## プロジェクト概要

架空のブログサイト「TECH BLOG」を作成

## ファイル構成

ch06-two-column/
├── index.html
├── article.html
├── css/
│   └── style.css
├── images/
│   └── .gitkeep
└── README.md

## index.html（トップページ）要件

### 構造
1. header
   - サイトタイトル
   - グローバルナビ（ホーム、カテゴリ、アーカイブ、お問い合わせ）

2. main（左カラム・メインコンテンツ）
   - 記事一覧（3〜4件）
   - 各記事：サムネイル、タイトル、日付、カテゴリ、抜粋文、続きを読むリンク
   - ページネーション

3. aside（右カラム・サイドバー）
   - プロフィールウィジェット
   - カテゴリ一覧ウィジェット
   - 最新記事ウィジェット
   - アーカイブウィジェット

4. footer
   - コピーライト
   - フッターナビ

## article.html（記事詳細ページ）要件

1. 共通のheader、footer

2. main（記事本文）
   - 記事タイトル
   - 投稿日、カテゴリ、著者
   - アイキャッチ画像
   - 本文（見出し、段落、リスト、コードブロック、引用を含む）
   - 前後記事へのリンク

3. aside（サイドバー）
   - index.html と同じ

## css/style.css 要件

- 2カラムレイアウト（Flexbox または Grid）
- メイン：70%、サイドバー：30%（PC時）
- レスポンシブ対応
  - タブレット以下：1カラム、サイドバーは下に移動
- ウィジェットの共通スタイル
- 記事カードのスタイル
- コードブロック、引用のスタイル

## README.md

制作手順、レイアウトの考え方説明
```

---

## プロンプト10：Chapter 7 - タイル型サイト制作

```
# Chapter 7: タイル型サイト制作 サンプルコード作成

html-css-book/ch07-tile-layout/ 内に以下のファイルを作成してください。

## プロジェクト概要

架空のプロジェクトアーカイブサイト「DESIGN WORKS」を作成

## ファイル構成

ch07-tile-layout/
├── index.html
├── css/
│   └── style.css
├── images/
│   └── .gitkeep
└── README.md

## index.html 要件

### 構造
1. header
   - サイトタイトル/ロゴ
   - ナビゲーション

2. heroセクション
   - 自己紹介テキスト
   - 簡単なプロフィール

3. worksセクション（タイル型）
   - セクション見出し
   - フィルターボタン（All、Web、App、Graphic）
   - 作品カード 8〜12枚
     - 画像（object-fit: cover）
     - タイトル
     - カテゴリタグ
     - ホバーでオーバーレイ表示

4. aboutセクション
   - 詳細プロフィール
   - スキルリスト

5. contactセクション
   - 簡単な問い合わせフォーム
   - メールリンク

6. footer
   - SNSリンク
   - コピーライト

## css/style.css 要件

- CSS Gridによるタイル配置
- grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
- gap設定
- カードホバーエフェクト
  - 画像の拡大
  - オーバーレイ表示
  - transition設定
- object-fit による画像トリミング
- レスポンシブ対応
  - 自動的に列数が変化
- フィルターボタンのスタイル（JSなしでUIのみ）

## README.md

CSS Gridの解説、object-fitの解説
```

---

## プロンプト11：Chapter 8 - 外部サービス連携

```
# Chapter 8: 外部サービス連携 サンプルコード作成

html-css-book/ch08-external-services/ 内に以下のファイルを作成してください。

## ファイル構成

ch08-external-services/
├── 01-google-maps.html
├── 02-youtube.html
├── 03-sns-embed.html
├── 04-mail-link.html
├── 05-ogp.html
├── 06-favicon.html
├── 07-complete-contact.html
├── css/
│   └── style.css
└── README.md

## 1. 01-google-maps.html

Google Maps埋め込み
- iframeによる埋め込み方法
- レスポンシブ対応（アスペクト比維持）
- 幅100%、高さ自動調整のテクニック

## 2. 02-youtube.html

YouTube動画埋め込み
- iframeによる埋め込み方法
- レスポンシブ対応（16:9維持）
- パラメータ設定（autoplay、mute、loop等）

## 3. 03-sns-embed.html

SNS埋め込み
- Twitter/X 投稿の埋め込み（blockquote + script）
- Instagram 投稿の埋め込み
- 埋め込みコードの取得方法をコメントで説明
- レスポンシブ対応

## 4. 04-mail-link.html

メールリンク
- mailto: 基本
- 件名設定（subject）
- 本文設定（body）
- CC、BCC設定
- 複数パラメータの組み合わせ
- 電話リンク（tel:）も併記

## 5. 05-ogp.html

OGP設定
- 基本OGPタグ一式
- Twitter Card設定
- 各プロパティの説明をコメントで記載
- OGP画像の推奨サイズ説明

## 6. 06-favicon.html

ファビコン設定
- 基本的なfavicon.ico設定
- Apple Touch Icon
- 各種サイズ対応
- manifest.json の例

## 7. 07-complete-contact.html + css/style.css

総合：お問い合わせページ
- Google Maps埋め込み
- 住所、電話、メールリンク
- 問い合わせフォーム
- SNSリンク
- OGP、ファビコン設定済み
- レスポンシブ対応

## README.md

各外部サービスの注意事項、利用規約への配慮
```

---

## プロンプト12：Chapter 9 - Tailwind CSS（前半）

```
# Chapter 9: Tailwind CSSの活用（前半）サンプルコード作成

html-css-book/ch09-tailwind/ 内に以下のファイルを作成してください。

## 1. 01-introduction.html

Tailwind CSS導入
- CDN読み込み
- 最初のサンプル（Hello Tailwind）
- 従来CSSとの比較をコメントで説明

## 2. 02-utility-basics.html

ユーティリティクラス基本
- 主要プレフィックスの一覧表示
- text-、bg-、p-、m-、w-、h- の実例
- クラスの組み合わせ例

## 3. 03-colors.html

色の指定
- カラーパレット一覧（gray、red、blue、green等）
- 濃淡（50〜900）の表示
- text-color、bg-color、border-color
- 透明度の指定

## 4. 04-typography.html

テキストスタイリング
- text-xs 〜 text-9xl
- font-thin 〜 font-black
- leading-（行間）
- tracking-（文字間）
- text-left、text-center、text-right
- uppercase、lowercase、capitalize
- truncate、line-clamp

## 5. 05-spacing.html

余白とサイズ
- p-0 〜 p-96 のスケール
- m-auto、mx-auto
- space-x-、space-y-
- w-full、w-screen、w-1/2等
- h-screen、min-h-screen
- max-w-sm 〜 max-w-7xl

## 6. 06-borders.html

ボーダーと角丸
- border、border-2、border-4
- border-t、border-b、border-l、border-r
- rounded、rounded-lg、rounded-full
- ring-、ring-offset-
- divide-x、divide-y
```

---

## プロンプト13：Chapter 9 - Tailwind CSS（後半）

```
# Chapter 9: Tailwind CSSの活用（後半）サンプルコード作成

html-css-book/ch09-tailwind/ 内に以下のファイルを作成してください。

## 7. 07-flexbox.html

Flexboxユーティリティ
- flex、inline-flex
- flex-row、flex-col、flex-row-reverse
- justify-start、justify-center、justify-between、justify-around、justify-evenly
- items-start、items-center、items-end、items-stretch
- flex-wrap、flex-nowrap
- flex-1、flex-auto、flex-none
- gap-x-、gap-y-、gap-
- 実用例：ナビゲーション、カード横並び

## 8. 08-grid.html

Gridユーティリティ
- grid、inline-grid
- grid-cols-1 〜 grid-cols-12
- grid-rows-
- col-span-、row-span-
- gap-
- auto-cols-、auto-rows-
- 実用例：画像ギャラリー

## 9. 09-responsive.html

レスポンシブデザイン
- ブレークポイント（sm:、md:、lg:、xl:、2xl:）
- モバイルファースト設計
- 実例：grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- 実例：hidden md:block、md:hidden
- 実例：text-sm md:text-base lg:text-lg

## 10. 10-states.html

状態変化
- hover:、focus:、active:
- disabled:、checked:
- first:、last:、odd:、even:
- group-hover:
- transition、duration-、ease-
- 実例：ホバーで色が変わるボタン
- 実例：フォーカスリング付きインプット

## 11. 11-components.html

コンポーネント作成
- ボタン各種（プライマリ、セカンダリ、アウトライン、disabled）
- フォーム要素（input、select、textarea）
- バッジ
- アラート（success、warning、error）
- アバター

## 12. 12-card-ui.html

カードUI実践
- 基本カード
- 画像付きカード
- 横型カード
- カードリスト（レスポンシブグリッド）

## 13. 13-exercise.html

演習問題
- 課題1：プロフィールカード作成
- 課題2：価格表カード作成
- 課題3：レスポンシブナビゲーション作成

## 14. README.md

Tailwind CSS学習リソース、次のステップ
```

---

## プロンプト14：リセットCSSと共通スタイル

```
# 共通ファイル作成

html-css-book/assets/ 内に以下のファイルを作成してください。

## 1. css/reset.css

シンプルなリセットCSS
- box-sizing: border-box 全要素適用
- margin、padding リセット
- リストスタイルリセット
- 画像の max-width: 100%
- フォーム要素のフォント継承

## 2. css/variables.css

CSS変数定義ファイル
- カラーパレット（primary、secondary、accent、gray系）
- フォントファミリー
- フォントサイズスケール
- 余白スケール
- ブレークポイント（参照用コメント）
- シャドウ
- ボーダー半径

## 3. sample-images.md

サンプル画像のURL一覧
- プレースホルダーサービスのURL
- 各章で使用する推奨サイズ
- Unsplash等のフリー素材サイト紹介

## 4. cheatsheet.html + css/cheatsheet.css

HTML/CSSチートシート
- よく使うHTMLタグ一覧
- よく使うCSSプロパティ一覧
- Flexboxプロパティ早見表
- Gridプロパティ早見表
- 印刷用スタイル付き
```

---

## プロンプト15：最終確認と調整

```
# プロジェクト最終確認

以下の確認と調整を行ってください。

## 1. 全ファイルの整合性確認

- 全HTMLファイルが正しいHTML5構文か検証
- 全CSSファイルの構文エラーチェック
- リンク切れがないか確認
- 画像パスが正しいか確認

## 2. README.md 更新

ルートの README.md を以下の内容で更新：

- プロジェクト概要
- 全章の目次と概要
- 環境要件
- 使用方法
- ディレクトリ構成（tree形式）
- ライセンス表記
- 著者情報

## 3. index.html 作成

ルートに全章へのリンク集となる index.html を作成：

- 書籍タイトル
- 各章へのリンクカード
- シンプルなスタイリング

## 4. .gitignore 作成

- .DS_Store
- Thumbs.db
- *.log
- node_modules/（将来の拡張用）

## 5. 最終ディレクトリ構成の出力

完成したプロジェクトの全ファイル構成をtree形式で出力してください。
```

---

## 補足：プロンプト使用時の注意事項

### 推奨環境
- Claude Code（Anthropic公式CLI）
- 作業ディレクトリを事前に設定

### 実行のコツ
1. 各プロンプトは独立して実行可能
2. エラーが出た場合は該当箇所のみ再実行
3. 生成後は必ずブラウザで動作確認

### カスタマイズ
- カフェ名、ブログ名等は自由に変更可能
- 画像はプレースホルダーを使用（後から差し替え）
- カラーパレットは好みに応じて調整

---

## ライセンス

このプロンプト集は自由に使用・改変可能です。
