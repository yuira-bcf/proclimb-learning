##JavaアプリケーションをWebで公開する


##前提：
- javaプロジェクトがローカルに存在している
- GitHubリポジトリに最新の状態がプッシュされている


##Step1：Dockerfileと.dockerignoreを作成
1.Renderでビルド・公開するために必要なファイルを作成します。
　VScodeを立ち上げ、対象のJavaプロジェクトを開きます。

2.CODEXに以下のプロンプトを投入します。

========

Spring Boot（Maven）プロジェクトを Render（Docker デプロイ）で確実に動作させる前提で、必要なファイル作成・修正・検証まで実施してください。

【目的】
- Render でビルド/起動エラーなくデプロイできる状態にする
- 過去に発生した以下を再発させない
  - mvnw 実行権限エラー（Permission denied）
  - Java ファイル先頭の BOM によるコンパイルエラー（illegal character: '\ufeff'）
  - ルート URL `/` で 404 になる問題（必要なら `/todo` へ誘導）

【必須対応】
1. ルート直下に Dockerfile を作成/更新
   - Maven Wrapper を使ってビルド
   - Linux 上で `mvnw` が必ず実行できるように `chmod +x ./mvnw` を入れる
   - Render の待受ポート 10000 で起動する（`-Dserver.port=10000`）
   - マルチステージビルドにする（build + runtime）

2. ルート直下に .dockerignore を作成/更新
   - 必須:
     - .git
     - .idea
     - .vscode
     - target
     - build
     - out
   - .gradle は任意（Maven運用だが、入れて問題なければ含める）

3. 文字コードチェック
   - `src/main/java/**/*.java` を走査し、UTF-8 BOM（EF BB BF）があれば除去
   - 変換後もコード内容は変更しない（エンコーディングのみ修正）

4. ルーティング確認
   - `/` アクセス時に 404 になるなら、`/todo` へリダイレクトする最小修正を追加
   - 既存の業務ロジックは変更しない

5. 検証
   - `./mvnw test` を実行して成功を確認
   - 可能なら `docker build` も実行し、Docker ビルド成功を確認

【出力してほしい内容】
- 変更したファイル一覧
- Dockerfile と .dockerignore の最終内容
- BOM 除去を行ったファイル一覧（なければ「なし」）
- テスト結果（成功/失敗）
- Render 側で確認すべきポイント（Auto-Deploy、対象ブランチ、デプロイ対象コミットSHA）

========

3.問題なく作成されたら、sourcetreeでコミット・プッシュします。
　事前準備はこれだけで完了です。

　※ Renderは言語としてjavaをサポートしていないため、代わりにDockerという仮想コンテナ技術を利用します。
　　 ビルドはRender側でDockerfileを読み取って行われるため、ローカルにDockerをインストールしていなくても問題ありません。
　　 Docker構築入門URL：https://edixstock.sakura.ne.jp/devtools/docker/index.html




##Step2：Renderアカウント作成とGitHub連携

1.Renderにアクセスします。
　URL：https://render.com/

2.「Start for free」をクリック
<img src="01_render-home.png">

3.任意の方法でアカウントを作成（添付はGoogleのOAuth）
<img src="02_make-account.png">

4.ワークスペース画面が開いたら、右上の「+New」をクリックし、
　「Web Service」をクリック
<img src="03_new-webservice.png">

5.New Web Service画面で「Git Provider」→「GitHub」をクリック
<img src="04_git-settings.png">

6.「Authrize Render」をクリック
<img src="05_git-permission.png">

7.Renderにインストールするリポジトリを選択します
　※ Install Render画面が表示されたら、自身のGitHubアカウントを選択してください
　※ 「for these Repositories」の項目では、任意のリポジトリインストール方式を選択してください。
　　・All Repositores → GitHubに作成している全リポジトリをRenderにインストール
　　・Only Select Repositories → GitHubに作成しているリポジトリのうち、任意のひとつだけをRenderにインストール
<img src="06_select-repository.png">


8.Installボタンをクリック、New Web Service画面にリポジトリが表示されたらOK
<img src="07_connect-repository.png">


 ※ この段階ではまだデプロイ（公開）はされていません。
　　Render側に、デプロイ対象となるリポジトリを登録だけした、という状態です。





##Step3：RenderでJavaアプリケーションをデプロイ

1.Renderにインストールしたリポジトリの中から、デプロイするリポジトリをクリック
<img src="07_connect-repository.png">

2.設定画面が開くので、各種設定を登録していきます
	・Name：任意（デフォルトはリポジトリ名）
	・Language：Docker
	・Branch：main（デフォルトブランチ）
	・Region：Oregon(US West)
	・Root Directory：入力しない
	・Instance Type：Free（デフォルトはStarterになっているので注意）
	・Environment Variables：入力しない
		※ Environment Variables はJavaプロジェクトの内容によって変わるため、CODEXに必要な環境変数があるか確認しておくと良い
<img src="08_service-settings.png">
<img src="09_service-instanceType.png">

3.下部の「Deploy Web Service」をクリック

4.サービス画面が表示され、赤い×が出ていなければデプロイ成功
	※ デプロイが失敗している場合は、画面中央付近に赤い×のアイコンが表示されます。
	※ 失敗している場合は、下部のログをメモ帳などに保存し、
	　 CODEXにファイル添付して修正依頼 → 修正後コミット・プッシュで自動再デプロイ対応します。
<img src="10_deploy_render.png">





##Step4：URLにアクセスし、表示・機能のテスト

1.サービス画面上部に表示されているURLをコピーし、ブラウザでアクセスします
	※ リダイレクト設定がされていれば自動的に正しいURL先に遷移します
	※ リダイレクト未実装の場合は、コピペ後に適切なURLを追加します
	　　例）https://todos-o31a.onrender.com → https://todos-o31a.onrender.com/todo

<img src="11_prodution-page.png">

2.各下層ページ、機能が正しく動くかチェックします

3.問題がなければデプロイは完了です。
　以降機能などを追加し、プッシュするたびに再デプロイされるので、確認しながら開発を進めます





##Notice：
・Renderは15分間の無アクセスでServiceが停止し、次回アクセス時にService起動で1分程度かかります
・FreeプランではDBが停止するたびにリセットされます。永続的にデータを保存するには有料プランの登録が必要となります
・Freeプランでは月間Service起動時間が750hとなっています。1Serviceでは常時稼働させても744hで収まりますが、
　複数Serviceを動かしていると不足し、次月リセットまで表示されない場合があります
・Freeプランではメモリがかなり小さいため、重いサービスでは動きが鈍くなる可能性があります
・Node.jsなどを導入している場合は動作の保証ができません。CODEXに確認しながら適切なデプロイ環境に整えましょう