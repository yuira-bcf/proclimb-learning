# プロンプトUIコーディング - 実行結果サンプル再生成プロンプト集

以下のプロンプトを使って、`frontend/prompt-ui-coding/samples/` ディレクトリ内の全HTMLファイルを再生成できます。

---

## 共通指示（全ファイル共通）

```
あなたは職業訓練校向けのプロンプトUIコーディング教材の「実行結果サンプル」HTMLを作成するエキスパートです。以下の共通ルールに従ってHTMLファイルを生成してください。

### 必須HTML構造
すべてのファイルは以下の完全なHTML構造で開始すること：
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>実行結果サンプル - 第X章 タイトル</title>
  <style>
    /* CSSはすべてこの<style>タグ内に記述すること */
    /* 外部CSSファイルへのリンクは使用しない（Tailwind CDNを除く） */
  </style>
</head>
<body>
  <!-- コンテンツ -->
</body>
</html>

### CSS記述ルール（重要）
- CSSは必ず<head>内の<style>タグに記述すること
- 外部CSSファイル（.cssファイル）は作成しない
- インラインstyle属性は最小限にとどめ、<style>タグ内にまとめること
- 第7章・第8章のTailwind CSS使用時のみ <script src="https://cdn.tailwindcss.com"></script> を許可
- CSS変数（:root）を活用してカラーを統一管理すること

### 共通テーマカラー
:root {
  --primary: #007ACC;
  --primary-hover: #005A9E;
  --primary-light: #E8F4FD;
  --secondary: #5856D6;
  --secondary-hover: #4240A8;
  --text: #1D1D1F;
  --text-sub: #6E6E73;
  --border: #D2D2D7;
  --bg: #F5F5F7;
  --white: #FFFFFF;
  --success: #34C759;
  --warning: #FF9F0A;
  --danger: #FF3B30;
}

### 文字化け防止
- <meta charset="UTF-8"> を必ず含めること
- フォントファミリー: "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Meiryo", sans-serif
- HTMLエンティティが必要な場合は適切にエスケープ（&lt; &gt; &amp;）

### カードデザイン（全パーツ共通）
すべてのUIパーツは以下のカードデザインを<style>タグ内に定義して適用すること：

.card {
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 32px;
  margin-bottom: 24px;
}
.card-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--primary);
}
.card-description {
  font-size: 14px;
  color: var(--text-sub);
  margin-bottom: 20px;
}

### ページヘッダー
各ファイルの先頭にグラデーションヘッダーを<style>タグ内で定義して配置：
- 背景: linear-gradient(135deg, #007ACC, #5856D6)
- 白文字、角丸16px、影付き
- h1で章タイトル、pで「プロンプトUIコーディング - 実行結果サンプル」

### レスポンシブ対応
- body の背景: var(--bg)（#F5F5F7）
- .container: max-width 960px, margin 0 auto
- モバイル（767px以下）でグリッドを1カラムに変更
- padding: 24px（モバイルでは16px）
```

---

## 1. sample-ch1-button.html（第1章: ボタンコンポーネント）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch1-button.html
- 章番号: 1
- タイトル: プロンプトUIコーディングとは - ボタンコンポーネント

## 概要
AIプロンプトで生成するボタンコンポーネントの実行結果サンプル。

## CSSルール
- すべてのスタイルは<style>タグ内に記述（外部CSS禁止）
- BEM命名規則: .btn, .btn--disabled
- CSS変数で共通カラーを管理

## コンテンツ（各カード）

### カード1: ボタンプレビュー
- card-title: 「ボタンコンポーネント プレビュー」
- card-description: 仕様の説明テキスト
- demo-area（中央寄せ背景グレー）内にボタン表示
- ボタン仕様:
  - 幅: 200px, 高さ: 48px
  - 背景: #007ACC, 文字: 白
  - 角丸: 8px
  - ホバー: #005A9E（少し暗く）+ 影追加
  - transition: 0.2s ease

### カード2: ボタンの状態一覧
- デフォルト、ホバー（マウスを乗せて確認）、無効（opacity 0.5, not-allowed）
- 各状態にラベル付き

### カード3: コンポーネント仕様
- spec-table形式でプロパティと値を一覧表示
- 行: 幅, 高さ, 背景色, 文字色, 角丸, ホバー時背景, トランジション, 命名規則
```

---

## 2. sample-ch2-contact-form.html（第2章: お問い合わせフォーム）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch2-contact-form.html
- 章番号: 2
- タイトル: UI生成プロンプトの基本 - お問い合わせフォーム

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- BEM命名規則: .form, .form__group, .form__label, .form__input, .form__submit
- フォーカス: border-color #007ACC + box-shadow
- エラー: border-color #FF3B30

## コンテンツ（各カード）

### カード1: グラデーションボタン（pill型）
- 幅160px, 高さ44px, グラデーション(青→紫), 角丸22px
- ホバーで影追加

### カード2: お問い合わせフォーム
- form要素にnovalidate属性
- 入力項目: 会社名(任意), お名前(必須), メールアドレス(必須), 電話番号(任意), お問い合わせ内容(必須)
- 必須バッジ: 赤背景白文字「必須」/ 任意バッジ: グレー
- placeholder: 入力例
- 送信ボタン: 幅100%, 高さ48px, 青背景
- autocomplete属性を適切に設定

### カード3: 修正前後比較
- 2カラムグリッドで変更前/変更後を並列表示
- 変更前: 140x40px, #007ACC
- 変更後: 180x48px, #5856D6, ホバーで影
```

---

## 3. sample-ch3-semantic-html.html（第3章: セマンティックHTML）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch3-semantic-html.html
- 章番号: 3
- タイトル: HTMLの自動生成 - セマンティックHTML

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- セマンティックタグのスタイル定義を含む

## コンテンツ（各カード）

### カード1: セマンティックHTMLページ構造
- preview-frame（border + border-radius）内にサイト全体を表示
- header: ロゴ(h1) + nav(ul>li>a) 5項目
- section.hero: キャッチコピー + CTA
- section.features: 3カラムgrid, article.feature-card x 3
- section.cta: 青背景CTA
- footer: コピーライト + SNSリンク
- aria-label設定

### カード2: ブログカード一覧
- 3カラムgrid, a.blog-card x 3
- article > figure > figcaption構造
- カテゴリバッジ、h3タイトル(2行clamp)、抜粋(2行clamp)、日付、「続きを読む →」

### カード3: お問い合わせフォーム（アクセシブル）
- label for紐付け、required属性
- select要素(4選択肢)
- textarea
- aria-live="polite"エラーメッセージ用span
```

---

## 4. sample-ch4-css-generation.html（第4章: CSSの自動生成）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch4-css-generation.html
- 章番号: 4
- タイトル: CSSの自動生成 - レイアウト・デザイン

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- :root でCSS変数（カラー・スペーシング）を定義
- フォント: Inter + Noto Sans JP

## コンテンツ（各カード）

### カード1: Flexboxナビゲーション
- display:flex, justify-content:space-between, align-items:center, height:64px
- ロゴ(左) + ナビリンク5項目(右), gap:24px

### カード2: CSS Gridカードレイアウト
- auto-fit, minmax(280px, 1fr), gap:24px
- 3枚のグリッドカード

### カード3: CSS変数カラーパレット
- プライマリ/セカンダリ: 5色のスウォッチ
- セマンティック: 4色のスウォッチ（Success/Warning/Error/Info）
- 各スウォッチ: プレビュー(60px高さ) + 名前 + HEX値

### カード4: タイポグラフィ設定
- h1(48px/800) 〜 caption(12px/400) まで7段階
- 各サイズにラベル表示
- レスポンシブ: モバイルでh1=32px, h2=28px, h3=22px

### カード5: 8pxベース スペーシングシステム
- xs(4px)〜3xl(64px) の7段階ブロック表示

### カード6: アニメーション（2カラム）
- 左: ホバーアニメーションボタン（translateY -2px + shadow）
- 右: ローディングスピナー（40px, 4px border, 1秒回転, linear, infinite）
- @keyframes spin 定義
```

---

## 5. sample-ch5-components.html（第5章: UIコンポーネント生成）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch5-components.html
- 章番号: 5
- タイトル: UIコンポーネント生成

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- BEM命名規則: .btn--primary, .btn--sm, .ui-card, .form-input 等

## コンテンツ（各カード）

### カード1: ボタンコンポーネント
- 4バリエーション x 3サイズ のマトリックス表示
  - Primary(青塗り), Secondary(青枠), Ghost(テキスト), Danger(赤)
  - sm(32px), md(40px), lg(48px)
- Disabled行: opacity 0.5, cursor not-allowed
- BEM: .btn, .btn--primary, .btn--sm

### カード2: カードコンポーネント
- 3カラムgrid, a.ui-card x 3
- 画像(16:9) + カテゴリバッジ(position:absolute) + h3タイトル(line-clamp:2) + 説明(line-clamp:3) + メタ情報
- ホバー: translateY(-4px) + shadow強化

### カード3: フォーム入力要素セット
- テキスト、メール、エラー状態、セレクト、日付、カスタムチェックボックス、カスタムラジオボタン、テキストエリア、無効状態
- カスタムチェック: input非表示 + 20x20px box + チェックアニメーション
- カスタムラジオ: input非表示 + 20x20px circle + 内側ドット
```

---

## 6. sample-ch6-responsive.html（第6章: レスポンシブデザイン生成）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch6-responsive.html
- 章番号: 6
- タイトル: レスポンシブデザイン生成

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- モバイルファースト: デフォルト → @media(min-width:768px) → @media(min-width:1024px)
- @media(hover:hover) でホバー効果を制御

## コンテンツ（各カード）

### カード1: 現在のブレイクポイント
- bp-indicator: CSS ::after で現在のブレイクポイントを表示
  - モバイル: 青背景「モバイル (〜767px)」
  - タブレット: 紫背景「タブレット (768px〜1023px)」
  - PC: 緑背景「PC (1024px以上)」

### カード2: レスポンシブヘッダー
- PC: ロゴ + ナビ5項目 + CTAボタン表示
- モバイル: ロゴ + ハンバーガーボタン + クリックでスライドダウンメニュー
- aria-label="メニューを開く"

### カード3: レスポンシブカードグリッド
- 6枚のカード
- モバイル: 1カラム, gap:16px
- タブレット: 2カラム, gap:20px
- PC: 3カラム, gap:24px

### カード4: 表示切り替えユーティリティ
- .visible-mobile / .visible-tablet / .visible-desktop
- 各ブレイクポイントで表示中のクラスだけ見える

### カード5: タッチ最適化ボタン
- min-width/height: 44px
- -webkit-tap-highlight-color: transparent
- :active でscale(0.96) + opacity:0.9
- @media(hover:hover) 内でホバーエフェクト
```

---

## 7. sample-ch7-tailwind.html（第7章: Tailwind CSS）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch7-tailwind.html
- 章番号: 7
- タイトル: Tailwind CSSとの連携

## CSSルール
- Tailwind CDN使用: <script src="https://cdn.tailwindcss.com"></script>
- フォント設定のみ<style>タグに記述:
  body { font-family: "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Meiryo", sans-serif; }
- カスタムCSSは書かない、Tailwindクラスのみ使用
- body class="bg-gray-100 text-gray-900"

## コンテンツ（各カード = bg-white rounded-xl shadow-sm p-8 mb-6）

### カード1: Tailwindボタン
- bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors
- Secondary: border border-gray-300 text-gray-700
- Danger: bg-red-500

### カード2: ヒーローセクション
- bg-gradient-to-b from-blue-50 to-white
- text-4xl lg:text-5xl font-bold
- flex flex-col sm:flex-row gap-4 justify-center

### カード3: レスポンシブグリッド
- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8
- 3枚の特徴カード（アイコン + タイトル + 説明）

### カード4: カードコンポーネント
- rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow
- line-clamp-2 (タイトル), line-clamp-3 (説明)
- 3枚のブログカード

### カード5: よく使うTailwindクラス一覧テーブル
- レイアウト、レスポンシブ、スペーシング、タイポグラフィ、カラー、インタラクション
```

---

## 8. sample-ch8-landing-page.html（第8章: ランディングページ）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch8-landing-page.html
- 章番号: 8
- タイトル: ランディングページ制作

## CSSルール
- Tailwind CDN使用
- フォント設定のみ<style>タグに記述
- body class="bg-gray-100"

## コンテンツ
教材用ページヘッダー + LP本体（bg-white rounded-xl shadow-sm）

### LP構造（上から順に）
1. ヘッダー: ロゴ「TaskFlow」+ ナビ4項目 + CTAボタン
2. ヒーロー: 2カラム（テキスト + ダッシュボード画像プレースホルダー）
   - h1「チームの生産性を3倍に」、サブタイトル、CTA
3. 特徴: 3カラム、カード3枚（AIタスク整理、リアルタイム同期、スマート通知）
4. 使い方: 3ステップ（アカウント作成→招待→タスク追加）
5. 料金プラン: 3カラム（無料/スタンダード/エンタープライズ）
   - スタンダード: 青背景 + 「人気」バッジ + scale-105
6. FAQ: 3つの質問（アコーディオン風）
7. 最終CTA: 青グラデーション背景
8. フッター: 4カラム（ロゴ/プロダクト/サポート/法的情報）+ コピーライト
```

---

## 9. sample-ch9-refactoring.html（第9章: リファクタリング）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch9-refactoring.html
- 章番号: 9
- タイトル: コードのリファクタリング

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- コードパネル: 背景#1e1e1e, フォントJetBrains Mono
- シンタックスハイライト: .keyword(青), .tag(緑), .string(オレンジ), .comment(緑)

## コンテンツ（各カード）

### カード1: HTML構造改善（Before / After）
- 2カラムcode-compare
- Before: div地獄（赤ヘッダー）
- After: セマンティックHTML（緑ヘッダー）+ ハイライト表示
- 変更点リスト: 4項目（→アイコン付き）

### カード2: CSSリファクタリング（Before / After）
- Before: float, !important, マジックナンバー
- After: CSS変数, Flexbox, BEM
- 変更点リスト: 5項目

### カード3: リファクタリング後のUI表示
- refactored-demo枠内にヘッダー + 3カラムカード + フッター
- 「見た目は変わらない」ことを実証
```

---

## 10. sample-ch10-best-practices.html（第10章: ベストプラクティス）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch10-best-practices.html
- 章番号: 10
- タイトル: ベストプラクティス

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- チェックリスト: クリックでチェック/解除切替（onclick）
- プログレスバー: 幅%をinline styleで指定

## コンテンツ（各カード）

### カード1: 品質チェックリスト
- 3カテゴリ: HTML品質(4項目), CSS品質(4項目), レスポンシブ(3項目)
- checklist__checkbox: クリックでcheckedトグル + テキストにline-through

### カード2: 品質スコアダッシュボード
- 5項目のプログレスバー
  - HTML品質: 85%(緑), CSS品質: 72%(黄), レスポンシブ: 90%(緑), アクセシビリティ: 45%(赤), パフォーマンス: 68%(黄)

### カード3: AIワークフロー
- 5ステップ横並び（→矢印接続）
  - 要件整理 → プロンプト作成 → 検証 → 修正指示 → 微調整
- モバイル: 縦並び

### カード4: よくある失敗パターンと対策
- 2カラムgrid
- NG(赤左線): 曖昧なプロンプト / 検証せずに使用
- OK(緑左線): 具体的な仕様記載 / チェックリストで確認
```

---

## 11. sample-ch11-form-ux.html（第11章: フォームUX改善）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch11-form-ux.html
- 章番号: 11
- タイトル: フォームUX改善の20ポイント

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- フォーム入力: border 2px, border-radius 8px, focus時 box-shadow 4px
- ラジオボタン: カード型（border付きラベル）

## コンテンツ（各カード）

### カード1: お問い合わせフォーム（UX20ポイント適用済み）
- 各入力項目にUXポイント注釈（.ux-point: 青背景カード）付き
- 入力項目:
  1. お名前（必須）+ UX注釈
  2. メールアドレス（成功状態: 緑ボーダー + チェックマーク）
  3. メールアドレス（エラー状態: 赤ボーダー + エラーメッセージ例付き）
  4. 電話番号（任意）+ ヒント表示
  5. お問い合わせ種別（カード型ラジオボタン3択 + 「その他」）
  6. お問い合わせ内容（textarea）
  7. 送信ボタン「無料で相談する」+ プライバシーリンク(target="_blank")

### カード2: UX20ポイントサマリー
- 2カラムgrid、20項目を一覧表示（背景グレーのタグ風）
```

---

## 12. sample-ch12-table.html（第12章: テーブルUI）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch12-table.html
- 章番号: 12
- タイトル: テーブルUIの実装

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- max-width: 1100px
- テーブル: border-collapse, hover行ハイライト
- ステータスバッジ: border-radius 20px

## コンテンツ（各カード）

### カード1: 顧客一覧テーブル（DataTables風）
- ツールバー: 件数セレクト(10/25/50) + 検索ボックス
- テーブル7列: ID, 顧客名, メール, 電話, 登録日, ステータス, 操作
- 6行のダミーデータ
- ステータスバッジ: 有効(緑), 無効(赤), 保留(黄)
- 操作: 編集(✎) + 削除(✕) ボタン
- ページネーション: 「全32件中1〜6件」+ ページ番号ボタン(1-4)

### カード2: 商品管理テーブル（jsGrid風）
- フィルター行: 各列にinput/select
- 3行のダミーデータ（有機野菜, 天然水, 洗剤）
- 新規追加行: 青ボーダーinput + 「追加」ボタン(緑)
- 価格列: 右寄せ、¥記号付き
```

---

## 13. sample-ch13-kanban.html（第13章: 看板ボード）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch13-kanban.html
- 章番号: 13
- タイトル: 看板ボードの実装

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- max-width: 1200px
- カラム: 横並びflex, overflow-x:auto
- タスクカード: cursor:grab, border-left 3px

## コンテンツ（各カード）

### カード1: タスク管理 看板ボード（Trello風）
- 4カラム横並び:
  1. 未着手(3タスク): LP設計(高), API doc(中), テスト環境(低)
  2. 進行中(2タスク): 認証機能(高), レスポンシブ(中)
  3. レビュー待ち(1タスク): ダッシュボード(中) + ドラッグプレースホルダー
  4. 完了(2タスク): DB設計(高), 環境構築手順(低) ← opacity:0.7, line-through

- タスクカード構成:
  - 左線カラー: 高=赤, 中=黄, 低=緑
  - タイトル(14px bold), 説明(12px, 2行clamp)
  - メタ: 優先度バッジ + 期限 + アバター(2文字イニシャル)
  - ホバー: translateY(-1px) + shadow

- 各カラム下部に「+ タスクを追加」ボタン（dashed border）
- モバイル: 縦並び
```

---

## 14. sample-ch14-chat.html（第14章: チャットUI）

```
## ファイル
- 生成先: frontend/prompt-ui-coding/samples/sample-ch14-chat.html
- 章番号: 14
- タイトル: チャットUIの実装

## CSSルール
- すべてのスタイルは<style>タグ内に記述
- チャットコンテナ: max-width制限, height固定, flex column
- メッセージバブル: border-radius 18px
- タイピングアニメーション: @keyframes typingAnim

## コンテンツ（各カード）

### カード1: 基本チャットUI（LINE風）
- max-width: 420px, height: 520px
- ヘッダー: 青背景, アバター + 名前「田中太郎」+ オンラインステータス(緑ドット)
- メッセージエリア: グレー背景
  - 日付区切り「2026年2月8日」
  - 受信(左寄せ, 白バブル) x 2
  - 送信(右寄せ, 青バブル) x 2 + 「既読」表示
  - タイピングインジケーター（3つのドットアニメーション）
- 入力エリア: 添付ボタン + input + 絵文字ボタン + 送信ボタン(青丸)

### カード2: AIチャットUI（ChatGPT風）
- max-width: 600px, height: 560px
- ヘッダー: 紫グラデーション + ロボットアバター + 「AI Assistant」
- メッセージエリア:
  - ユーザー質問「配列の重複削除」（右寄せ青バブル）
  - AI回答: テキスト + コードブロック(#2d2d2d背景, シンタックスカラー) + Copyボタン
  - ユーザー質問「パフォーマンスの違い」
  - AI回答: テキスト（strong, code要素使用）
- 入力エリア: textarea(Shift+Enterで改行) + 送信ボタン
```

---

## 共通注意事項

1. **CSSは必ず`<style>`タグ内に記述する**（外部CSSファイル禁止）
2. **`<meta charset="UTF-8">`を必ず含める**（文字化け防止）
3. **全パーツにカードデザイン**（白背景・角丸12px・ボックスシャドウ）
4. **レスポンシブ対応**（767px以下で1カラム化）
5. **BEM命名規則**を使用
6. **CSS変数**でカラーとスペーシングを統一管理
7. **フォント**: "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Meiryo", sans-serif
8. **Tailwind使用は第7章・第8章のみ**（CDN経由）
