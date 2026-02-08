# Java基礎教材 - 全HTML再生成プロンプト集

以下のプロンプトを使って、`backend/java/` ディレクトリ内の全HTMLファイルをサンプルソースコードから生成できます。

---

## 共通指示（全ファイル共通）

```
あなたは職業訓練校向けのJava基礎教材（HTML）を作成するエキスパートです。以下の共通ルールに従ってHTMLファイルを生成してください。

### 共通テーマカラー
:root {
  --primary: #0097A7;
  --primary-dark: #00838F;
  --primary-light: #E0F7FA;
  --primary-lighter: #B2EBF2;
}

### 共通リソース
- フォント: Noto Sans JP (300,400,500,700,900), JetBrains Mono (400,500,600)
- CSS: ../../shared/common.css
- ナビゲーション: ../../shared/js/nav-java.js
- フッター: ../../shared/footer.js
- デモ: ../../shared/demo.js

### HTMLテンプレート構造
各チャプターHTMLは以下の構造に従う：
1. head: meta, fonts, common.css, カスタムstyle（:root変数とbody padding-top: 48px, .nav-category-links display:none）
2. body:
   - <nav class="global-nav"></nav> + nav-java.jsスクリプト
   - <div class="container">
     - chapter-header（chapter-badge, chapter-number, chapter-title）
     - nav.toc（toc-title, toc-list with toc-items）
     - 複数の section.section（section-header, intro-text, subsections）
     - Exercise セクション（exercise-list, exercise-items with Q番号）
     - Answer セクション（answer-list, answer-items）
   - page-nav（prev/nextリンク）
   - footer.js, demo.js スクリプト
   - ハンバーガーメニュー外クリック閉じるスクリプト

### コンテンツ要素
各セクション内には以下の要素を適切に使用：
- prompt-box: AIプロンプト（## 機能, ## 生成先, ## 実装要件, ## 使用するJava構文）
- code-block: Javaソースコード（code-header with code-title + code-lang, pre.code-content > code）
- syntax-box: 構文説明（syntax-item with h4, syntax-pattern, p）
- info-box: 補足情報（info-box-header with lightbulb icon, info-box-title, p）
- warning-box: 注意事項（warning-box-header with warning icon, warning-box-title, p）
- data-table: データ表（thead, tbody）
- exercise-item: 練習問題（exercise-number, exercise-content with 選択肢）
- answer-item: 解答（answer-header, answer-content）

### プロンプトボックスのフォーマット
各Javaコード例には対応するプロンプトを記述する：
- ## 機能: 「〜を確認するサンプルプロジェクト」形式で記述（1行）
- ## 生成先: ディレクトリとファイル名
- ## 実装要件: 箇条書きで具体的な実装内容。以下を必ず含める：
  - 「mainメソッドを含め、System.out.printlnで各処理の実行結果を出力して動作確認できるようにする」
  - 複数クラスが必要な場合は「1ファイルで完結するよう、必要なクラスをすべて含める」
- ## 使用するJava構文: 使用する文法要素のリスト

### コードブロックの要件
- すべてのサンプルコードはmainメソッドを含み、単体で実行可能であること
- System.out.printlnで実行結果を出力し、動作確認できるようにすること
- 複数クラスが必要な場合は1ファイルに含める（publicクラスは1つ）
- コンパイルエラーになるコード（疑似コード）は使用しない
```

---

## 1. index.html（コース目次ページ）

```
## ファイル
- 生成先: backend/java/index.html

## 概要
Java基礎コースの目次（インデックス）ページを作成してください。Apple風デザインのランディングページです。

## レイアウト
- Apple Global Navigation（apple-gnav）: ダッシュボード、フロントエンド、バックエンド（active）、環境構築、AI・自動化、デザイン、ビジネス、総合演習
- Apple Sub Navigation: アイコン local_cafe + "Java基礎"、ダッシュボードに戻るリンク
- Hero Section: local_cafe アイコン、h1 "Java基礎"、説明文
- Chapters Section: 7章のカードグリッド（chapters-grid, 各カード300px min）
- Related Section: Spring基礎、HTML/CSS入門、JavaScript入門、システム開発概論
- Apple Footer: カテゴリ別リンク集、コピーライト

## 各チャプターカード情報
1. Javaの概要 - tags: 歴史, JVM, 環境構築
2. 基本データ型と文字列 - tags: 変数, リテラル, String
3. 演算子と条件分岐 - tags: 演算子, if-else, switch
4. 繰り返しと制御文 - tags: for, while, 配列
5. クラスとインスタンス - tags: class, new, メソッド
6. 継承とインタフェース - tags: extends, interface, ポリモーフィズム
7. 例外処理 - tags: try-catch, throws, カスタム例外

## スタイル
- --course-accent: #0097A7
- --course-accent-light: rgba(0, 151, 167, 0.08)
- body class="apple-layout"
- 共通CSS: ../../shared/common.css, ../../shared/apple-header-footer.css
- インラインstyleでHero、カード、関連セクションのスタイル定義

## リンクパス
- ダッシュボード: ../../index.html
- 各章: 1java-overview.html 〜 7java-exception.html
- 関連: ../../backend/spring/index.html, ../../frontend/html/index.html, etc.
```

---

## 2. 1java-overview.html（第1章: Javaの概要）

```
## ファイル
- 生成先: backend/java/1java-overview.html
- Chapter番号: 1
- タイトル: Javaの概要と簡単なJavaプログラムの作成

## 目次
- 1-1: Javaの概要
- 1-2: Java環境とJDK
- 1-3: コマンドラインでのJavaプログラムのコンパイルと実行
- 1-4: パッケージ宣言とインポート

## Section 1-1: Javaの概要
### 1.1 Java言語の特徴
- feature-list形式で4つの特徴を紹介:
  - オブジェクト指向（💻）: クラスとオブジェクト、継承、カプセル化、ポリモーフィズム
  - 型安全性（🔒）: 静的型付け、コンパイル時型チェック
  - ガベージコレクション（📦）: 自動メモリ管理
  - プラットフォーム非依存（🌐）: JVM上で動作

### 1.2 実行環境の特徴
- step-list形式で3ステップ: ソースコード作成(.java) → コンパイル(javac) → 実行(java)
- info-box: バイトコードの説明

## Section 1-2: Java環境とJDK
### 2.1 Java環境とは
- data-table: JDK/JRE/JVMの正式名称と用途
- warning-box: Java 11以降JRE単独配布なし

### 2.2 環境セットアップ
- numbered-list: JDKダウンロード〜バージョン確認の5ステップ
- code-block (Terminal): java -version の出力例

## Section 1-3: コマンドラインでのコンパイルと実行
### 3.1 プログラム実行までの流れ
- flow-diagram: .java → javac → .class → java

### 3.2 ソースファイルの作成
- prompt-box: HelloWorldプログラム生成プロンプト
- code-block: HelloWorld.java
- syntax-box: クラス宣言、mainメソッド、System.out.println()
- info-box: ファイル名の規則

### 3.3〜3.6
- コンパイルコマンド、実行コマンド、ソースファイルとクラスファイルの関係、ソースファイルモード

## Section 1-4: パッケージ宣言とインポート
### 4.1 パッケージ
- prompt-box + code-block: MyClass.java（package宣言付き）
- syntax-box: パッケージ宣言

### 4.2〜4.4
- パッケージ化、コンパイルと実行、クラスパス

### 4.5 インポート
- prompt-box + code-block: ImportDemo.java（import文の3種類）
- syntax-box: 単一インポート、ワイルドカード、staticインポート
- info-box: java.langパッケージ

### 4.6 標準APIのパッケージ
- data-table: java.lang, java.util, java.io, java.nio, java.sql, java.time

## 練習問題 (3問)
- Q1: 実行手順の正しい順序（答: B）
- Q2: パッケージ化されたクラスの実行コマンド（答: C）
- Q3: JDK/JRE/JVMの関係（答: B）

## ページナビ
- next: 2java-datatype.html（第2章）
```

---

## 3. 2java-datatype.html（第2章: 基本データ型と文字列）

```
## ファイル
- 生成先: backend/java/2java-datatype.html
- Chapter番号: 2
- タイトル: Javaの基本データ型と文字列の操作

## 目次
- 2-1: リテラル
- 2-2: 変数や定数の宣言と初期化
- 2-3: ローカル変数の型推論
- 2-4: 配列
- 2-5: コマンドライン引数の利用
- 2-6: 文字列の操作

## Section 2-1: リテラル
### 1.1 数値リテラル
- data-table: 整数(10/2/8/16進), long, float, double の7種類
- info-box: アンダースコア区切り (1_000_000)

### 1.2 文字と文字列リテラル
- prompt-box + code-block: LiteralDemo.java（char, String, エスケープシーケンス）
- syntax-box: 文字リテラル、文字列リテラル、エスケープシーケンス
- data-table: エスケープシーケンス一覧（\n, \t, \\, \", \'）

### 1.3 テキストブロック
- prompt-box + code-block: TextBlockDemo.java（"""による複数行文字列）
- syntax-box: テキストブロック構文

### 1.4 その他のリテラル
- prompt-box + code-block: BooleanNullDemo.java（boolean, null）
- syntax-box: 真偽値リテラル、nullリテラル

## Section 2-2: 変数や定数の宣言と初期化
### 2.1 変数と命名規則
- bullet-list: 命名ルール4点
- prompt-box + code-block: NamingDemo.java
- syntax-box: 変数宣言

### 2.2 データ型
- data-table: 8種類のプリミティブ型（byte/short/int/long/float/double/char/boolean）

### 2.3 変数宣言と値の代入
- prompt-box + code-block: VariableDemo.java（3パターン）
- syntax-box: 分離宣言、同時宣言、複数宣言
- warning-box: ローカル変数の初期化必須

### 2.4 定数
- prompt-box + code-block: ConstantDemo.java（final）
- syntax-box: 定数宣言

### 2.5 文字列の型
- prompt-box + code-block: StringBasicDemo.java
- syntax-box: リテラル初期化、文字列連結

## Section 2-3: ローカル変数の型推論
- prompt-box + code-block: VarDemo.java（var キーワード）
- syntax-box: var構文
- info-box: varの使用制限

## Section 2-4: 配列
### 4.1 1次元配列
- prompt-box + code-block: ArrayDemo.java
- syntax-box: 宣言、生成、初期化子、アクセス
- warning-box: 配列の初期値

### 4.2 多次元配列
- prompt-box + code-block: MultiArrayDemo.java（2次元、ジャグ配列）
- syntax-box: 2次元配列、アクセス、ジャグ配列

## Section 2-5: コマンドライン引数
- prompt-box + code-block: CommandLineDemo.java
- syntax-box: args配列
- code-block (Terminal): 実行例

## Section 2-6: 文字列の操作
### 6.1 Stringクラスの特徴
- prompt-box + code-block: StringImmutableDemo.java
- syntax-box: メソッド呼び出しとイミュータブル性

### 6.2 Stringクラスのメソッド
- data-table: 12メソッド（length, charAt, substring, indexOf, toUpperCase, toLowerCase, trim, replace, equals, contains, startsWith, split）
- syntax-box: length(), charAt(), substring(), equals()

### 6.3 テキストブロックの操作
- prompt-box + code-block: TextBlockMethodDemo.java
- syntax-box: stripIndent(), formatted()

### 6.4 StringBuilderクラス
- prompt-box + code-block: StringBuilderDemo.java
- syntax-box: StringBuilder生成、append(), insert(), toString()
- info-box: StringBufferとの違い

## 練習問題 (3問)
- Q1: 有効な変数宣言（答: B, C）
- Q2: String.toUpperCase()の出力（答: B）
- Q3: int配列の初期値（答: B）

## ページナビ
- prev: 1java-overview.html, next: 3java-operator.html
```

---

## 4. 3java-operator.html（第3章: 演算子と条件分岐）

```
## ファイル
- 生成先: backend/java/3java-operator.html
- Chapter番号: 3
- タイトル: 演算子と条件分岐

## 目次
- 3-1: 演算子と優先順位
- 3-2: データの比較
- 3-3: 基本データ型の型変換
- 3-4: 基本データ型から参照型への型変換
- 3-5: 条件分岐
- 3-6: ifによる分岐
- 3-7: switchによる分岐

## Section 3-1: 演算子と優先順位
### 1.1 算術演算子と単項演算子
- data-table: +, -, *, /, %, ++, -- の7演算子
- prompt-box + code-block: IncrementDemo.java（前置/後置インクリメント）
- syntax-box: 算術演算子、インクリメント/デクリメント

### 1.2 代入演算子と複合代入演算子
- prompt-box + code-block: CompoundAssignDemo.java（+=, -=, *=, /=, %=）
- syntax-box: 代入演算子、複合代入演算子

### 1.3 関係演算子
- data-table: ==, !=, <, >, <=, >= の6演算子
- syntax-box: 比較演算子

### 1.4 論理演算子
- data-table: &&, ||, !, &, | の5演算子
- syntax-box: 論理演算子
- info-box: 短絡評価

### 1.5 条件演算子（三項演算子）
- prompt-box + code-block: TernaryDemo.java
- syntax-box: 三項演算子

## Section 3-2: データの比較
### 2.1 基本データ型と参照型の比較
- prompt-box + code-block: ComparisonDemo.java（== vs equals()）

### 2.2 文字列プール
- prompt-box + code-block: StringPoolDemo.java
- warning-box: equals()を使用すること

### 2.4 nullの比較
- prompt-box + code-block: NullCheckDemo.java（null安全、Objects.equals）

## Section 3-3: 基本データ型の型変換
### 3.1 暗黙の型変換
- prompt-box + code-block: WideningDemo.java
- syntax-box: 拡大変換
- 変換順序: byte→short→int→long→float→double

### 3.2 キャストによる型変換
- prompt-box + code-block: CastingDemo.java
- syntax-box: キャスト演算子
- warning-box: データ損失

### 3.4 型変換の注意点
- prompt-box + code-block: ArithmeticCastDemo.java

## Section 3-4: 基本データ型から参照型への型変換
### 4.1 ラッパークラス
- data-table: 8種類のラッパークラス対応表

### 4.2 ボクシングとアンボクシング
- prompt-box + code-block: BoxingDemo.java
- warning-box: nullのアンボクシング

### 4.3 文字列の変換
- prompt-box + code-block: ParseDemo.java

## Section 3-5, 3-6: 条件分岐とifによる分岐
### 6.1 if文
- prompt-box + code-block: IfDemo.java
- syntax-box: if文

### 6.2 if-else文
- prompt-box + code-block: IfElseDemo.java
- syntax-box: if-else文

### 6.3 if-else if文
- prompt-box + code-block: GradeDemo.java（5段階評価）
- syntax-box: if-else if-else文

### 6.4 if文のネスト
- prompt-box + code-block: NestedIfDemo.java

## Section 3-7: switchによる分岐
### 7.1 switch文
- prompt-box + code-block: SwitchDemo.java（従来型）
- syntax-box: switch文
- warning-box: break忘れ

### 7.2 アロー構文（Java 14以降）
- prompt-box + code-block: SwitchArrowDemo.java
- syntax-box: switchアロー構文

### 7.3 switch式（Java 14以降）
- prompt-box + code-block: SwitchExprDemo.java（yield含む）
- syntax-box: switch式、yieldキーワード

## 練習問題 (3問)
- Q1: 後置インクリメントの出力（答: B → "6 5"）
- Q2: 文字列比較の正しい方法（答: D → BとC両方）
- Q3: 整数除算の結果（答: C → "2 2.0"）

## ページナビ
- prev: 2java-datatype.html, next: 4java-loop.html
```

---

## 5. 4java-loop.html（第4章: 繰り返しと制御文）

```
## ファイル
- 生成先: backend/java/4java-loop.html
- Chapter番号: 4
- タイトル: 繰り返しと制御文の組み合わせ

## 目次
- 4-1: whileによる繰り返し
- 4-2: forによる繰り返し
- 4-3: 制御文の組み合わせ
- 4-4: 繰り返しの制御

## Section 4-1: whileによる繰り返し
### 1.1 while文
- prompt-box + code-block: WhileDemo.java
- syntax-box: while文

### 1.2 do-while文
- prompt-box + code-block: DoWhileDemo.java（条件false でも1回実行）
- syntax-box: do-while文

## Section 4-2: forによる繰り返し
### 2.1 for文
- prompt-box + code-block: ForDemo.java（基本+複数変数）
- syntax-box: for文

### 2.2 拡張for文（for-each）
- prompt-box + code-block: ForEachDemo.java（配列+List）
- syntax-box: for-each文
- warning-box: 拡張for文の制限（インデックス不可、削除不可）

## Section 4-3: 制御文の組み合わせ
### 3.1 変数のスコープ
- prompt-box + code-block: ScopeDemo.java

### 3.2 繰り返し文のネスト
- prompt-box + code-block: MultiplicationTable.java（九九表）

## Section 4-4: 繰り返しの制御
### 4.1 無限ループ
- prompt-box + code-block: InfiniteLoopDemo.java（while(true), for(;;)）
- syntax-box: 無限ループ

### 4.2 break文
- prompt-box + code-block: BreakDemo.java
- syntax-box: break文

### 4.3 continue文
- prompt-box + code-block: ContinueDemo.java
- syntax-box: continue文

### 4.4 ラベルによる制御
- prompt-box + code-block: LabelBreakDemo.java（outer: ラベル）
- syntax-box: ラベル付きbreak/continue

## 練習問題 (1問)
- Q1: do-whileの出力回数（答: B → 1回）

## ページナビ
- prev: 3java-operator.html, next: 5java-class.html
```

---

## 6. 5java-class.html（第5章: クラスとインスタンス）

```
## ファイル
- 生成先: backend/java/5java-class.html
- Chapter番号: 5
- タイトル: クラスの宣言とインスタンス化

## 目次
- 5-1: クラスとオブジェクト
- 5-2: クラスの作成
- 5-3: オブジェクトの生成とアクセス
- 5-4: アクセス修飾子の使用
- 5-5: メソッドのオーバーロード
- 5-6: オブジェクトの初期化
- 5-7: static変数とstaticメソッド
- 5-8: オブジェクトの扱い

## Section 5-1: クラスとオブジェクト
- info-box: クラス=設計図、オブジェクト=実体の関係

## Section 5-2: クラスの作成
### 2.1 クラス宣言
- prompt-box + code-block: Person.java（private fields, constructor, method）
- syntax-box: クラス宣言、フィールド宣言、コンストラクタ、thisキーワード

### 2.2 メンバ変数
- prompt-box + code-block: Product.java（アクセス修飾子の違い）
- syntax-box: フィールド宣言（アクセス修飾子別）

### 2.3 メンバメソッド
- prompt-box + code-block: Calculator.java（戻り値あり/void）
- syntax-box: メソッド宣言

### 2.4 変数のスコープとthis
- prompt-box + code-block: ThisDemo.java
- syntax-box: thisキーワード

## Section 5-3: オブジェクトの生成とアクセス
- prompt-box + code-block: PersonMain.java（new, メソッド呼び出し, getter）
- syntax-box: インスタンス化、Getter

## Section 5-4: アクセス修飾子の使用
### 4.1 アクセス修飾子
- data-table: public/protected/デフォルト/private のアクセス範囲表

### 4.2 カプセル化
- prompt-box + code-block: BankAccount.java（private + getter + バリデーション付きsetter）
- syntax-box: Getter/Setter

## Section 5-5: メソッドのオーバーロード
- prompt-box + code-block: Printer.java（int/String/int,int の3パターン）
- syntax-box: オーバーロード
- warning-box: 戻り値の型だけ異なるのはNG

## Section 5-6: オブジェクトの初期化
### 6.2 コンストラクタ
- prompt-box + code-block: PersonConstructor.java（引数付き + デフォルト + this()）
- syntax-box: コンストラクタ、this()チェーン

### 6.3 デフォルトコンストラクタ
- info-box: 自動生成の条件

## Section 5-7: static変数とstaticメソッド
- prompt-box + code-block: Counter.java（static count + getCount()）
- syntax-box: static変数、staticメソッド
- warning-box: staticメソッドの制限

## Section 5-8: オブジェクトの扱い
### 8.1 参照コピー
- prompt-box + code-block: ReferenceDemo.java

### 8.2 ガベージコレクション（テキスト説明のみ）

## 練習問題 (1問)
- Q1: staticメソッド内で使用できないもの（答: B → this）

## ページナビ
- prev: 4java-loop.html, next: 6java-inheritance.html
```

---

## 7. 6java-inheritance.html（第6章: 継承とインタフェース）

```
## ファイル
- 生成先: backend/java/6java-inheritance.html
- Chapter番号: 6
- タイトル: 継承とインタフェース

## 目次
- 6-1: 継承
- 6-2: メソッドのオーバーライド
- 6-3: 継承関係におけるコンストラクタ
- 6-4: Objectクラスとレコードクラス
- 6-5: 抽象クラス
- 6-6: インタフェース
- 6-7: シールクラス
- 6-8: 参照型の型変換とポリモーフィズム
- 6-9: コレクションフレームワーク

## Section 6-1: 継承
### 1.1 クラスの継承関係
- prompt-box + code-block: InheritanceDemo.java（Animal → Dog, protected, extends）
- syntax-box: extends、protected修飾子
- info-box: Javaは単一継承のみ

## Section 6-2: メソッドのオーバーライド
### 2.1 オーバーライドとsuper
- prompt-box + code-block: OverrideDemo.java（@Override, super.speak()）
- syntax-box: @Override、super.メソッド()

### 2.2 @Overrideアノテーション（テキスト説明）

### 2.4 finalメソッドとfinalクラス
- prompt-box + code-block: FinalDemo.java
- syntax-box: final修飾子

## Section 6-3: 継承関係におけるコンストラクタ
- prompt-box + code-block: SuperConstructorDemo.java（super(name)）
- syntax-box: super()
- warning-box: super()は最初の行

## Section 6-4: Objectクラスとレコードクラス
### 4.1 Objectクラス
- bullet-list: toString(), equals(), hashCode()

### 4.2 レコードクラス（Java 16以降）
- prompt-box + code-block: RecordDemo.java（record Person）

## Section 6-5: 抽象クラス
- prompt-box + code-block: AbstractDemo.java（abstract Shape → Circle）
- syntax-box: abstract class、abstract method

## Section 6-6: インタフェース
### 6.1 インタフェースの作成と実装
- prompt-box + code-block: InterfaceDemo.java（Printable, Saveable → Document）
- syntax-box: interface、implements

### 6.4 defaultメソッド（Java 8以降）
- prompt-box + code-block: DefaultMethodDemo.java
- syntax-box: default メソッド、static メソッド

## Section 6-8: 参照型の型変換とポリモーフィズム
### 8.1 アップキャストとダウンキャスト
- prompt-box + code-block: CastDemo.java（instanceof, パターンマッチング）
- syntax-box: アップキャスト、ダウンキャスト、instanceof

### 8.6 ポリモーフィズム
- prompt-box + code-block: PolymorphismDemo.java（List<Animal>）
- syntax-box: ポリモーフィズム

## Section 6-9: コレクションフレームワーク
### 9.2 ArrayList
- prompt-box + code-block: ListDemo.java（add, get, size, remove）

### 9.4 HashMap
- prompt-box + code-block: MapDemo.java（put, get, containsKey）

## 練習問題 (1問)
- Q1: インタフェースに定義できないもの（答: C → コンストラクタ）

## ページナビ
- prev: 5java-class.html, next: 7java-exception.html
```

---

## 8. 7java-exception.html（第7章: 例外処理）

```
## ファイル
- 生成先: backend/java/7java-exception.html
- Chapter番号: 7
- タイトル: 例外処理

## 目次
- 7-1: 例外発生の仕組みと例外処理
- 7-2: try-catchによる例外のキャッチ
- 7-3: try-with-resourcesによるリソースのクローズ
- 7-4: throwsによる例外の転送

## Section 7-1: 例外発生の仕組みと例外処理
### 1.1 例外の発生
- prompt-box + code-block: ExceptionDemo.java（3種のRuntimeException）
- syntax-box: 実行時例外

### 1.2 例外の種類
- data-table: 検査例外/非検査例外/エラーの3分類

### 1.3 カスタム例外
- prompt-box + code-block: CustomExceptionDemo.java（extends Exception / RuntimeException）
- syntax-box: カスタム例外クラスの作成

## Section 7-2: try-catchによる例外のキャッチ
### 2.1 try-catch-finally
- prompt-box + code-block: TryCatchDemo.java
- syntax-box: try-catch文、try-catch-finally文
- info-box: finallyブロック

### 2.2 複数のcatchブロック
- prompt-box + code-block: MultiCatchDemo.java（サブクラス→親クラス順）
- syntax-box: 複数catchブロック
- warning-box: catchの順序

### 2.3 multi-catch（Java 7以降）
- prompt-box + code-block: MultiCatchPipeDemo.java（| パイプ構���）
- syntax-box: マルチキャッチ

## Section 7-3: try-with-resourcesによるリソースのクローズ
### 3.1 try-with-resources
- prompt-box + code-block: TryWithResourcesDemo.java（従来方式 vs try-with-resources）
- syntax-box: try-with-resources文

### 3.2 実行順
- numbered-list: 4ステップの実行順序

## Section 7-4: throwsによる例外の転送
### 4.1 throws
- prompt-box + code-block: ThrowsDemo.java（throws IOException）
- syntax-box: throws句

### 4.2 オーバーライド時のthrows制約（テキスト）

### 4.3 例外の再スロー
- prompt-box + code-block: RethrowDemo.java（throw e, 例外チェーン）
- syntax-box: throw文

## 練習問題 (3問)
- Q1: 検査例外はどれか（答: C → IOException）
- Q2: try-with-resourcesに必要なインタフェース（答: B → AutoCloseable）
- Q3: try-catch-finally の出力（答: C → "A B C"）

## ページナビ
- prev: 6java-inheritance.html（nextなし - 最終章）
```

---

## 9. style.css

```
## ファイル
- 生成先: backend/java/style.css

## 概要
Spring Frameworkチュートリアル統一スタイルシート（スマホファースト）。
このCSSはJava/Spring教材で共有されるスタイルです。
※ 現在のHTMLは ../../shared/common.css を使用しており、style.css は直接使用されていません。

## 主要なカラー変数
--primary: #0ea5e9（水色）, --accent: #f97316（オレンジ）, --success: #10b981（緑）, --danger: #ef4444（赤）

## コンポーネント一覧（約2600行）
- グローバルナビゲーション（固定ヘッダー、ハンバーガーメニュー）
- チャプターヘッダー、目次、セクション、サブセクション
- コードブロック（シンタックスハイライト含む）
- インフォボックス、ワーニングボックス、ポイントボックス
- テーブル、リスト、フォーム
- ステップリスト、フローコンテナ
- MVC図解、レイヤー図、画面遷移図
- メリット/デメリットカード
- ページナビゲーション、フッター
- レスポンシブ対応（768px, 1024px ブレークポイント）
```
