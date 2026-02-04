# JavaScript講座 - Claude Code 統合実装プロンプト

## 📌 プロジェクト概要

職業訓練校向けJavaScript講座の教材を作成してください。
プロンプトプログラミング手法で学習する構成です。

---

## 🎯 実装指示

以下の構成でJavaScript講座の教材プロジェクトを一括作成してください。

---

## 📁 ディレクトリ構成

```
javascript-course/
├── README.md
├── assets/
│   ├── css/
│   │   └── common.css
│   └── images/
│       └── .gitkeep
├── chapter01-introduction/
│   ├── index.html
│   ├── 01-what-is-javascript.html
│   ├── 02-what-can-do.html
│   ├── 03-dev-environment.html
│   ├── 04-devtools.html
│   └── 05-first-code.html
├── chapter02-basics/
│   ├── index.html
│   ├── 01-variables.html
│   ├── 02-datatypes.html
│   ├── 03-operators.html
│   ├── 04-strings.html
│   └── 05-calculator.html
├── chapter03-control-flow/
│   ├── index.html
│   ├── 01-if-else.html
│   ├── 02-switch.html
│   ├── 03-for-loop.html
│   ├── 04-while-loop.html
│   ├── 05-array-basics.html
│   └── 06-omikuji.html
├── chapter04-functions/
│   ├── index.html
│   ├── 01-function-declaration.html
│   ├── 02-arrow-function.html
│   ├── 03-parameters.html
│   ├── 04-return-value.html
│   ├── 05-callback.html
│   ├── 06-scope.html
│   └── 07-color-picker.html
├── chapter05-dom/
│   ├── index.html
│   ├── 01-selectors.html
│   ├── 02-create-elements.html
│   ├── 03-modify-elements.html
│   ├── 04-attributes.html
│   ├── 05-styles.html
│   └── 06-todo-list.html
├── chapter06-events/
│   ├── index.html
│   ├── 01-event-listener.html
│   ├── 02-event-types.html
│   ├── 03-event-object.html
│   ├── 04-event-flow.html
│   ├── 05-delegation.html
│   └── 06-dark-mode.html
├── chapter07-objects-arrays/
│   ├── index.html
│   ├── 01-object-basics.html
│   ├── 02-array-methods.html
│   ├── 03-destructuring.html
│   ├── 04-spread-operator.html
│   ├── 05-json.html
│   └── 06-product-list.html
├── chapter08-forms/
│   ├── index.html
│   ├── 01-form-elements.html
│   ├── 02-form-events.html
│   ├── 03-validation-basic.html
│   ├── 04-regex.html
│   └── 05-registration.html
├── chapter09-async/
│   ├── index.html
│   ├── 01-callback.html
│   ├── 02-promise.html
│   ├── 03-async-await.html
│   ├── 04-fetch-api.html
│   ├── 05-error-handling.html
│   └── 06-weather-app.html
├── chapter10-animation/
│   ├── index.html
│   ├── 01-css-transition.html
│   ├── 02-css-animation.html
│   ├── 03-intersection-observer.html
│   ├── 04-scroll-animation.html
│   └── 05-portfolio-section.html
├── chapter11-modules/
│   ├── index.html
│   ├── 01-es-modules/
│   │   ├── index.html
│   │   ├── main.js
│   │   ├── math.js
│   │   └── utils.js
│   ├── 02-module-patterns/
│   │   ├── index.html
│   │   └── js/
│   │       ├── main.js
│   │       ├── config.js
│   │       └── modules/
│   │           ├── storage.js
│   │           ├── api.js
│   │           └── ui.js
│   └── 03-todo-modular/
│       ├── index.html
│       ├── css/
│       │   └── style.css
│       └── js/
│           ├── main.js
│           ├── config.js
│           └── modules/
│               ├── todo.js
│               ├── storage.js
│               ├── ui.js
│               └── events.js
├── chapter12-portfolio/
│   ├── index.html
│   ├── css/
│   │   ├── style.css
│   │   └── animations.css
│   ├── js/
│   │   ├── main.js
│   │   └── modules/
│   │       ├── loader.js
│   │       ├── navigation.js
│   │       ├── gallery.js
│   │       ├── scroll.js
│   │       ├── form.js
│   │       └── api.js
│   └── images/
│       └── .gitkeep
└── appendix/
    ├── index.html
    ├── error-list.html
    ├── debug-tips.html
    └── resources.html
```

---

## 🎨 共通CSS（assets/css/common.css）

以下の要件で共通CSSを作成：

```css
/* === カラーパレット === */
:root {
  /* Primary */
  --primary: #3b82f6;
  --primary-dark: #1d4ed8;
  --primary-light: #93c5fd;
  
  /* Secondary */
  --secondary: #f97316;
  --secondary-dark: #ea580c;
  
  /* Semantic */
  --success: #22c55e;
  --warning: #eab308;
  --danger: #ef4444;
  --info: #06b6d4;
  
  /* Background */
  --bg-main: #f8fafc;
  --bg-card: #ffffff;
  --bg-code: #1e293b;
  
  /* Text */
  --text-main: #1e293b;
  --text-muted: #64748b;
  --text-light: #f1f5f9;
  
  /* Border */
  --border: #e2e8f0;
  --border-dark: #cbd5e1;
  
  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
}

/* === 含めるコンポーネント === */
- リセットCSS
- Google Fonts読み込み（Noto Sans JP, JetBrains Mono）
- タイポグラフィ（h1-h6, p, code, pre）
- コードブロック（シンタックスハイライト風、行番号対応）
- ボタン（.btn, .btn-primary, .btn-secondary, .btn-outline, .btn-danger）
- フォーム要素（input, select, textarea, checkbox, radio）
- カード（.card, .card-header, .card-body）
- アラート（.alert, .alert-info, .alert-success, .alert-warning, .alert-danger）
- 学習ポイントボックス（.learning-point - 黄色背景）
- コラムボックス（.column-box - オレンジ左ボーダー）
- テーブル（.table, ストライプ対応）
- ナビゲーション（.nav, .breadcrumb）
- ユーティリティ（margin, padding, text-align, display, flex）
- ダークモード（@media (prefers-color-scheme: dark)）
- レスポンシブ（768px, 1024pxブレークポイント）
```

---

## 📖 各章の詳細要件

### Chapter 1: JavaScriptの世界へようこそ

**index.html** - 章のトップページ（学習目標、セクション一覧）

**01-what-is-javascript.html**
- JavaScriptの歴史（1995年〜現在）
- ブラウザで動くプログラミング言語
- ECMAScriptとの関係
- 図解：JavaScriptの進化タイムライン（SVG）

**02-what-can-do.html**
- Webページの動的な変更
- ユーザーインタラクション
- サーバーサイド（Node.js）
- モバイルアプリ、デスクトップアプリ
- 実例サイトの紹介（リンク集）

**03-dev-environment.html**
- VS Codeのインストール手順
- 推奨拡張機能リスト
  - Live Server
  - Prettier
  - ESLint
  - JavaScript (ES6) code snippets
- ブラウザ（Chrome推奨）

**04-devtools.html**
- Chromeデベロッパーツールの開き方（F12）
- Consoleパネルの使い方
- Elementsパネルの使い方
- console.log()でのデバッグ
- 実習：コンソールで計算してみよう

**05-first-code.html**
- HTMLファイルの作成
- scriptタグの書き方（内部/外部）
- alert(), console.log()
- 実習：「Hello, JavaScript!」を表示

---

### Chapter 2: JavaScript基礎文法

**index.html** - 章トップページ

**01-variables.html**
- let, const, varの違い
- 変数の命名規則（キャメルケース）
- 再代入の可否
- スコープの違い（ブロックスコープ vs 関数スコープ）
- 図解：スコープの範囲（SVG）
- コード例：
```javascript
// const - 再代入不可
const PI = 3.14159;
// PI = 3.14; // エラー！

// let - 再代入可能
let count = 0;
count = 1; // OK

// var - 古い書き方（非推奨）
var oldStyle = "避けましょう";
```

**02-datatypes.html**
- プリミティブ型
  - String（文字列）
  - Number（数値）
  - Boolean（真偽値）
  - undefined
  - null
  - Symbol（ES6）
  - BigInt（ES2020）
- オブジェクト型
  - Object
  - Array
  - Function
- typeof演算子
- 型変換（暗黙的・明示的）
- 図解：データ型の分類（SVG）

**03-operators.html**
- 算術演算子（+, -, *, /, %, **）
- 代入演算子（=, +=, -=, *=, /=）
- 比較演算子（==, ===, !=, !==, <, >, <=, >=）
- 論理演算子（&&, ||, !）
- 三項演算子（条件 ? 真 : 偽）
- ==と===の違いを重点解説
- コード例で実演

**04-strings.html**
- 文字列の作成（', ", `）
- テンプレートリテラル
- エスケープシーケンス
- 文字列メソッド
  - length
  - toUpperCase(), toLowerCase()
  - slice(), substring()
  - split(), join()
  - replace(), replaceAll()
  - includes(), indexOf()
  - trim()
- 実習：文字列操作の練習

**05-calculator.html**（実習）
- 四則演算電卓のUI
- 数字ボタン（0-9）
- 演算子ボタン（+, -, ×, ÷）
- クリアボタン（C）、イコールボタン（=）
- 結果表示エリア
- デザイン：グリッドレイアウト
- 学習ポイント：
  - イベントリスナー
  - 文字列から数値への変換
  - 計算ロジック

---

### Chapter 3: 条件分岐と繰り返し

**index.html** - 章トップページ

**01-if-else.html**
- if文の基本構文
- else if, else
- 条件式の書き方
- 複合条件（&&, ||）
- ネストしたif文
- 図解：条件分岐のフローチャート（SVG）

**02-switch.html**
- switch文の構文
- case, break, default
- if-elseとの使い分け
- フォールスルーの注意点

**03-for-loop.html**
- for文の構文
- 初期化、条件、更新
- ループカウンタ
- ネストしたfor文（二重ループ）
- 配列との組み合わせ
- break, continue

**04-while-loop.html**
- while文
- do-while文
- 無限ループの注意
- for文との使い分け

**05-array-basics.html**
- 配列の作成
- インデックスアクセス
- length
- push(), pop()
- unshift(), shift()
- 配列の走査（for, for...of）
- 図解：配列のイメージ（SVG）

**06-omikuji.html**（実習）
- 機能要件：
  - 「おみくじを引く」ボタン
  - ランダムで運勢を決定
  - 運勢確率：大吉(10%), 中吉(20%), 小吉(25%), 吉(30%), 凶(15%)
  - 結果に応じて背景色変更
  - 絵文字アイコン表示
  - アニメーション付き表示
- 学習ポイント：
  - Math.random()
  - Math.floor()
  - if-else if連鎖
  - classList操作

---

### Chapter 4: 関数

**index.html** - 章トップページ

**01-function-declaration.html**
- function宣言
- 関数式
- 関数の呼び出し
- ホイスティング
- 図解：関数の動作イメージ（SVG）

**02-arrow-function.html**
- アロー関数の構文
- 省略記法
- thisの違い
- function宣言との比較
- いつ使うべきか

**03-parameters.html**
- 引数（パラメータ）
- デフォルト引数
- 可変長引数（...rest）
- 引数の分割代入

**04-return-value.html**
- return文
- 戻り値の型
- 早期リターン
- 複数の値を返す（配列、オブジェクト）

**05-callback.html**
- コールバック関数とは
- 関数を引数として渡す
- 匿名関数
- 配列メソッドでの使用（forEach, map, filter）

**06-scope.html**
- グローバルスコープ
- 関数スコープ
- ブロックスコープ
- クロージャの基礎
- 図解：スコープチェーン（SVG）

**07-color-picker.html**（実習）
- 機能要件：
  - input type="color"
  - HEXコード表示
  - RGB値表示
  - ページ背景色リアルタイム変更
  - 色名表示（近似値マッピング）
  - コピーボタン
- 関数構成：
```javascript
// HEXコード取得
function getHexColor(colorInput) { }

// HEXをRGBに変換
function hexToRgb(hex) { }

// 色名取得
function getColorName(hex) { }

// 表示更新
function updateDisplay(hex, rgb, name) { }

// 背景色変更
function changeBackground(hex) { }

// クリップボードにコピー
function copyToClipboard(text) { }
```

---

### Chapter 5: DOM操作

**index.html** - 章トップページ

**01-selectors.html**
- DOMとは（図解）
- document.getElementById()
- document.querySelector()
- document.querySelectorAll()
- getElementsByClassName()
- getElementsByTagName()
- 使い分けガイド

**02-create-elements.html**
- document.createElement()
- element.appendChild()
- element.append()
- element.insertBefore()
- insertAdjacentHTML()
- DocumentFragment

**03-modify-elements.html**
- textContent
- innerHTML（XSSリスクの説明）
- innerText
- element.remove()
- element.replaceWith()
- cloneNode()

**04-attributes.html**
- getAttribute()
- setAttribute()
- removeAttribute()
- hasAttribute()
- dataset（data-*属性）
- id, className, classList

**05-styles.html**
- element.style
- getComputedStyle()
- classList.add(), remove(), toggle(), contains()
- CSSカスタムプロパティの操作

**06-todo-list.html**（実習）
- 機能要件：
  - タスク入力フィールド
  - 追加ボタン
  - 完了チェックボックス
  - 完了タスクは打ち消し線＋色薄く
  - 個別削除ボタン
  - 全削除ボタン
  - タスク数カウント表示（残り○件）
  - フィルター（すべて/未完了/完了）
  - LocalStorageに保存（Chapter 6の予習）
- デザイン：
  - カード形式
  - 追加時フェードインアニメーション
  - 削除時フェードアウト
- 学習ポイント：
  - querySelector / querySelectorAll
  - createElement / appendChild
  - classList操作
  - textContent
  - remove()

---

### Chapter 6: イベント処理

**index.html** - 章トップページ

**01-event-listener.html**
- addEventListener()
- removeEventListener()
- イベントハンドラ属性（onclick等）との違い
- 複数のリスナー登録

**02-event-types.html**
- マウスイベント（click, dblclick, mouseenter, mouseleave, mousemove）
- キーボードイベント（keydown, keyup, keypress）
- フォームイベント（submit, input, change, focus, blur）
- ウィンドウイベント（load, DOMContentLoaded, resize, scroll）
- 一覧表とコード例

**03-event-object.html**
- イベントオブジェクトの取得
- 主要プロパティ（target, currentTarget, type）
- マウス位置（clientX, clientY, pageX, pageY）
- キー情報（key, keyCode, ctrlKey, shiftKey）
- preventDefault()
- stopPropagation()

**04-event-flow.html**
- イベントバブリング
- イベントキャプチャリング
- 伝播の順序
- 図解：イベントフロー（SVG）

**05-delegation.html**
- イベント委譲とは
- 親要素にリスナーを設定
- event.target で判別
- パフォーマンスメリット
- 動的に追加された要素への対応

**06-dark-mode.html**（実習）
- 機能要件：
  - トグルスイッチUI
  - ダークモード/ライトモード切替
  - LocalStorageに設定保存
  - ページ読み込み時に設定復元
  - スムーズなトランジション（0.3s）
  - システム設定の検出（prefers-color-scheme）
  - システム設定に追従オプション
- CSS変数で管理：
```css
:root {
  --bg-color: #ffffff;
  --text-color: #1e293b;
  --card-bg: #f8fafc;
  --border-color: #e2e8f0;
}
[data-theme="dark"] {
  --bg-color: #1e293b;
  --text-color: #f1f5f9;
  --card-bg: #334155;
  --border-color: #475569;
}
```
- 学習ポイント：
  - click/changeイベント
  - DOMContentLoaded
  - LocalStorage API
  - CSS Custom Properties
  - matchMedia()

---

### Chapter 7: オブジェクトと配列の応用

**index.html** - 章トップページ

**01-object-basics.html**
- オブジェクトリテラル
- プロパティのアクセス（ドット記法、ブラケット記法）
- プロパティの追加・削除
- メソッド
- this キーワード
- オブジェクトのネスト

**02-array-methods.html**
- forEach()
- map()
- filter()
- find(), findIndex()
- some(), every()
- reduce()
- sort()
- 各メソッドの使い分けフローチャート（SVG）

**03-destructuring.html**
- 配列の分割代入
- オブジェクトの分割代入
- デフォルト値
- 残余パターン
- 関数パラメータでの使用

**04-spread-operator.html**
- スプレッド構文（配列）
- スプレッド構文（オブジェクト）
- 配列のコピー、結合
- オブジェクトのコピー、マージ
- 関数呼び出しでの使用

**05-json.html**
- JSONとは
- JSON.stringify()
- JSON.parse()
- LocalStorageとの連携
- APIレスポンスの扱い

**06-product-list.html**（実習）
- 機能要件：
  - 商品データ（配列＋オブジェクト）
  - 商品一覧表示（カード形式）
  - カテゴリフィルター
  - 価格順ソート
  - 検索機能（商品名）
  - 合計金額計算
- 商品データ構造：
```javascript
const products = [
  { id: 1, name: "商品A", price: 1000, category: "食品", image: "..." },
  { id: 2, name: "商品B", price: 2500, category: "雑貨", image: "..." },
  // ...
];
```
- 学習ポイント：
  - map() でリスト生成
  - filter() で絞り込み
  - sort() で並び替え
  - reduce() で合計計算

---

### Chapter 8: フォーム処理とバリデーション

**index.html** - 章トップページ

**01-form-elements.html**
- input（text, email, password, number, date, checkbox, radio）
- select, option
- textarea
- button
- label
- フォームの値の取得方法

**02-form-events.html**
- submit イベント
- input イベント
- change イベント
- focus, blur イベント
- preventDefault() でのフォーム送信制御

**03-validation-basic.html**
- 必須チェック
- 文字数チェック
- 数値範囲チェック
- エラーメッセージ表示
- HTML5バリデーション属性（required, minlength, pattern等）

**04-regex.html**
- 正規表現の基本
- test(), match(), replace()
- よく使うパターン：
  - メールアドレス
  - 電話番号
  - 郵便番号
  - パスワード（複雑さ）
  - カタカナ
  - 半角英数字
- パターン解説（各記号の意味）

**05-registration.html**（実習）
- フォーム項目：
  - 名前（必須、2〜20文字）
  - フリガナ（カタカナのみ）
  - メールアドレス（形式チェック）
  - 電話番号（ハイフンあり/なし対応）
  - パスワード（8文字以上、英大文字・小文字・数字含む）
  - パスワード確認（一致チェック）
  - 生年月日（18歳以上チェック）
  - 利用規約同意（チェック必須）
- 機能：
  - リアルタイムバリデーション（blur/input）
  - パスワード強度メーター（弱/中/強）
  - エラー：赤文字で項目下に表示
  - 成功：緑チェックマーク
  - 全項目OK → 送信ボタン有効化
  - 送信時の最終チェック
- 正規表現パターン（コメントで詳細解説）

---

### Chapter 9: 非同期処理とAPI連携

**index.html** - 章トップページ

**01-callback.html**
- 同期処理と非同期処理
- コールバック関数の復習
- setTimeout(), setInterval()
- コールバック地獄の問題
- 図解：同期vs非同期（SVG）

**02-promise.html**
- Promiseとは
- new Promise()
- resolve, reject
- then(), catch(), finally()
- Promise.all(), Promise.race()
- チェーン処理

**03-async-await.html**
- async関数
- await キーワード
- Promiseとの関係
- エラーハンドリング（try-catch）
- 並列実行（Promise.all + await）

**04-fetch-api.html**
- fetch() の基本
- GET リクエスト
- POST リクエスト
- レスポンスの処理（.json(), .text()）
- ヘッダーの設定
- クエリパラメータ

**05-error-handling.html**
- try-catch-finally
- Errorオブジェクト
- カスタムエラー
- fetch のエラーハンドリング
- ユーザーへのエラー表示

**06-weather-app.html**（実習）
- 使用API：Open-Meteo API（キー不要）
- 機能：
  - 都市名入力（または緯度経度）
  - 天気情報取得・表示
  - 天気アイコン表示
  - 気温、湿度、風速表示
  - 検索履歴（最新5件）
  - お気に入り都市登録
  - LocalStorage保存
- UI：
  - ローディングスピナー
  - エラーメッセージ表示
  - カード形式の結果表示
  - レスポンシブデザイン
- API例：
```javascript
const API_URL = "https://api.open-meteo.com/v1/forecast";
// ?latitude=35.6895&longitude=139.6917&current_weather=true
```

---

### Chapter 10: アニメーション

**index.html** - 章トップページ

**01-css-transition.html**
- CSS transition の基本
- JavaScriptからのトリガー
- transitionend イベント
- 複数プロパティのアニメーション

**02-css-animation.html**
- CSS @keyframes
- animation プロパティ
- JavaScriptでの制御（再生/停止）
- animationend イベント
- classList での切り替え

**03-intersection-observer.html**
- Intersection Observer API とは
- IntersectionObserver() コンストラクタ
- observe(), unobserve(), disconnect()
- オプション（threshold, rootMargin, root）
- isIntersecting の判定
- 図解：交差の概念（SVG）

**04-scroll-animation.html**
- スクロール位置の取得
- スクロールイベント
- requestAnimationFrame()
- パフォーマンス考慮（throttle）
- スクロールプログレスバー

**05-portfolio-section.html**（実習）
- セクション構成：
  - ヒーロー（フェードイン + タイピングアニメーション）
  - スキル（プログレスバーアニメーション）
  - 作品（スクロールで順次フェードイン）
  - お問い合わせ（フォーム要素スライドイン）
- アニメーション効果：
  - 下から上へスライドフェードイン
  - 左右からスライドイン
  - スケールアップ
  - プログレスバー伸長
  - スタガーアニメーション（遅延表示）
- Intersection Observer設定：
```javascript
const options = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};
```

---

### Chapter 11: モダンJavaScriptとモジュール

**index.html** - 章トップページ

**01-es-modules/**
- ES Modules の基本
- export / import
- default export vs named export
- type="module" 指定
- ファイル構成：
  - index.html
  - main.js（エントリーポイント）
  - math.js（計算関数）
  - utils.js（ユーティリティ）

**02-module-patterns/**
- モジュール分割パターン
- 設定ファイルの分離
- 依存関係の管理
- ファイル構成：
  - index.html
  - js/main.js
  - js/config.js
  - js/modules/storage.js
  - js/modules/api.js
  - js/modules/ui.js

**03-todo-modular/**（実習）
- モジュール版ToDoアプリ
- ファイル構成と責務：
```
js/
├── main.js          # エントリーポイント、初期化
├── config.js        # 設定値（キー、セレクタ等）
└── modules/
    ├── todo.js      # ToDoのデータモデル、CRUD
    ├── storage.js   # LocalStorage抽象化
    ├── ui.js        # DOM操作、レンダリング
    └── events.js    # イベントリスナー設定
```
- 学習ポイント：
  - named export / default export
  - 循環参照の回避
  - 単一責任の原則
  - コメントで依存関係図を記載

---

### Chapter 12: 総合演習 - プロジェクトアーカイブサイト

**ファイル構成：**
```
chapter12-portfolio/
├── index.html
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   ├── main.js
│   └── modules/
│       ├── loader.js
│       ├── navigation.js
│       ├── gallery.js
│       ├── scroll.js
│       ├── form.js
│       └── api.js
└── images/
    └── .gitkeep
```

**index.html**
- セマンティックHTML構造
- ヘッダー（ナビゲーション）
- ヒーローセクション
- Aboutセクション
- スキルセクション
- 作品セクション
- お問い合わせセクション
- フッター

**modules/loader.js**
- ページ読み込み完了まで表示
- プログレスバーまたはスピナー
- フェードアウトしてメインコンテンツ表示
- window.addEventListener('load', ...)

**modules/navigation.js**
- ハンバーガーメニューアイコン
- クリックでサイドからスライドイン
- メニュー項目クリックでスムーズスクロール
- 外側クリックで閉じる
- ESCキーで閉じる
- スクロール時ヘッダー縮小

**modules/gallery.js**
- グリッド表示
- ホバーで拡大エフェクト
- クリックでモーダル表示
- 左右キー/ボタンで画像切替
- 背景クリック/ESCで閉じる

**modules/scroll.js**
- Intersection Observer使用
- 各セクションフェードイン
- 要素ごとのスタガーアニメーション
- スクロールプログレスバー

**modules/form.js**
- お問い合わせフォーム
- リアルタイムバリデーション
- 送信成功メッセージ表示
- フォームリセット

**modules/api.js**
- GitHub API でリポジトリ一覧取得
- または JSONPlaceholder でダミーデータ
- ローディング表示
- エラーハンドリング

**デザイン要件：**
- モダンでミニマル
- ダークモード対応
- 完全レスポンシブ
- アクセシビリティ考慮（ARIA属性）

---

### Appendix: トラブルシューティング

**index.html** - 付録トップページ

**error-list.html**
- よくあるエラー一覧
  - SyntaxError
  - ReferenceError
  - TypeError
  - RangeError
- 各エラーの原因と対処法
- エラーメッセージの読み方

**debug-tips.html**
- console.log() の活用
- console.table(), console.group()
- breakpoint の設定
- ステップ実行
- Watch式
- Network タブの確認

**resources.html**
- 公式ドキュメント（MDN）
- 学習サイト
- 便利なツール
- 次のステップ（React, Vue, Node.js）

---

## 🎨 デザイン共通仕様

**各HTMLファイル共通構造：**
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[セクション名] - JavaScript講座</title>
  <link rel="stylesheet" href="../assets/css/common.css">
</head>
<body>
  <header class="site-header">
    <nav class="breadcrumb">...</nav>
  </header>
  
  <main class="main-content">
    <article class="lesson">
      <h1>[セクションタイトル]</h1>
      
      <section class="learning-objectives">
        <h2>🎯 学習目標</h2>
        <ul>...</ul>
      </section>
      
      <section class="content">
        <!-- 本文 -->
      </section>
      
      <section class="practice">
        <h2>✍️ 実習</h2>
        <!-- 実習内容 -->
      </section>
      
      <section class="summary">
        <h2>📝 まとめ</h2>
        <!-- まとめ -->
      </section>
      
      <nav class="lesson-nav">
        <a href="前のページ">← 前へ</a>
        <a href="次のページ">次へ →</a>
      </nav>
    </article>
  </main>
  
  <footer class="site-footer">
    <p>JavaScript講座 - 職業訓練校教材</p>
  </footer>
</body>
</html>
```

**コードブロックの表示形式：**
```html
<div class="code-block">
  <div class="code-header">
    <span class="code-title">ファイル名.js</span>
    <span class="code-lang">JavaScript</span>
  </div>
  <pre class="code-content"><code>
// コード
  </code></pre>
</div>
```

**学習ポイントボックス：**
```html
<div class="learning-point">
  <div class="learning-point-title">💡 学習ポイント</div>
  <p>重要な内容...</p>
</div>
```

**注意ボックス：**
```html
<div class="alert alert-warning">
  <strong>⚠️ 注意</strong>
  <p>注意内容...</p>
</div>
```

---

## 📋 実装時の注意事項

1. **文字コード**: すべてUTF-8
2. **インデント**: スペース2つ
3. **コメント**: 日本語で詳細に記載
4. **図解**: すべてSVGで作成（アスキーアート不可）
5. **レスポンシブ**: モバイルファースト
6. **アクセシビリティ**: alt属性、aria属性を適切に設定
7. **パス**: 相対パスを使用
8. **ファイル名**: 小文字、ハイフン区切り

---

## 🚀 実行指示

上記の全ファイルを一括作成してください。
各ファイルには完全な内容（省略なし）を記載してください。
