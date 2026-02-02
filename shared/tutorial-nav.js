/**
 * 教材詳細ページ用ハンバーガーナビゲーション
 * 各教材のnav.jsの代わりに使用
 *
 * 使用方法:
 * 1. HTMLに <nav class="tutorial-nav" data-course="java"></nav> を追加
 * 2. このスクリプトを読み込み
 */

// 全コースのナビゲーションデータ
const courseNavData = {
    java: {
        logo: { icon: "coffee", iconType: "material", text: "Java基礎", color: "#34C759" },
        chapters: [
            { href: "1java-overview.html", num: "1", text: "Javaの概要" },
            { href: "2java-datatype.html", num: "2", text: "基本データ型と文字列" },
            { href: "3java-operator.html", num: "3", text: "演算子と条件分岐" },
            { href: "4java-loop.html", num: "4", text: "繰り返しと制御文" },
            { href: "5java-class.html", num: "5", text: "クラスとインスタンス" },
            { href: "6java-inheritance.html", num: "6", text: "継承とインタフェース" },
            { href: "7java-exception.html", num: "7", text: "例外処理" }
        ]
    },
    spring: {
        logo: { icon: "eco", iconType: "material", text: "Spring基礎", color: "#34C759" },
        chapters: [
            { href: "1spring-framework-tutorial.html", num: "1", text: "Spring Frameworkについて知ろう" },
            { href: "2java_basics.html", num: "2", text: "基礎知識を身に付けよう" },
            { href: "3di-tutorial.html", num: "3", text: "DIを知ろう" },
            { href: "4aop-tutorial.html", num: "4", text: "AOPを知ろう" },
            { href: "5mvc-tutorial.html", num: "5", text: "MVCを知ろう" },
            { href: "6thymeleaf-tutorial.html", num: "6", text: "Thymeleafを知ろう" },
            { href: "7ServerDataSubmission.html", num: "7", text: "サーバーへのデータ送信" },
            { href: "8Validation_Textbook_Rewrite.html", num: "8", text: "バリデーション" },
            { href: "9_MyBatis_Tutorial__2_.html", num: "9", text: "MyBatisチュートリアル" },
            { href: "10app-preparation-tutorial.html", num: "10", text: "アプリケーション作成準備" },
            { href: "11-database-operations.html", num: "11", text: "データベース操作" },
            { href: "12service-tutorial.html", num: "12", text: "サービス層" },
            { href: "13_application_layer.html", num: "13", text: "アプリケーション層" },
            { href: "14_validation.html", num: "14", text: "バリデーション（応用）" },
            { href: "15-spring-security-tutorial.html", num: "15", text: "Spring Security" }
        ]
    },
    html: {
        logo: { icon: "code", iconType: "material", text: "HTML/CSS入門", color: "#007AFF" },
        chapters: [
            { href: "1html-setup.html", num: "1", text: "Web制作の準備" },
            { href: "2html-basics.html", num: "2", text: "HTMLの基本" },
            { href: "3css-basics.html", num: "3", text: "CSSの基本" },
            { href: "4layout-basics.html", num: "4", text: "レイアウトの基本" },
            { href: "5single-column.html", num: "5", text: "シングルカラムサイト" },
            { href: "6two-column.html", num: "6", text: "2カラムサイト" },
            { href: "7tile-layout.html", num: "7", text: "タイル型サイト" },
            { href: "8external-services.html", num: "8", text: "外部サービス連携" },
            { href: "9tailwind-css.html", num: "9", text: "Tailwind CSS" }
        ]
    },
    javascript: {
        logo: { icon: "javascript", iconType: "material", text: "JavaScript入門", color: "#f7df1e" },
        chapters: [
            { href: "1js-introduction.html", num: "1", text: "JavaScriptの世界へ" },
            { href: "2js-basics.html", num: "2", text: "基礎文法" },
            { href: "3js-control-flow.html", num: "3", text: "条件分岐と繰り返し" },
            { href: "4js-functions.html", num: "4", text: "関数" },
            { href: "5js-dom.html", num: "5", text: "DOM操作" },
            { href: "6js-events.html", num: "6", text: "イベント処理" },
            { href: "7js-objects-arrays.html", num: "7", text: "オブジェクトと配列" },
            { href: "8js-forms.html", num: "8", text: "フォーム処理" },
            { href: "9js-async.html", num: "9", text: "非同期処理とAPI" },
            { href: "10js-animation.html", num: "10", text: "アニメーション" },
            { href: "11js-modules.html", num: "11", text: "モジュール" },
            { href: "12js-portfolio.html", num: "12", text: "総合演習" }
        ],
        appendix: [
            { href: "appendix-errors.html", text: "エラー一覧" },
            { href: "appendix-debug.html", text: "デバッグのコツ" },
            { href: "appendix-resources.html", text: "学習リソース" }
        ]
    },
    uiux: {
        logo: { icon: "palette", iconType: "material", text: "UI/UX概論", color: "#FF6B35" },
        chapters: [
            { href: "1-web-basics.html", num: "1", text: "Webが動くしくみ" },
            { href: "2-web-production.html", num: "2", text: "Web制作基礎知識" },
            { href: "3-uiux-basics.html", num: "3", text: "UI/UXの基礎知識" },
            { href: "4-design-basics.html", num: "4", text: "デザインの基本概念" },
            { href: "5-typography.html", num: "5", text: "タイポグラフィ" },
            { href: "6-layout-grid.html", num: "6", text: "レイアウトとグリッド" },
            { href: "7-color-basics.html", num: "7", text: "色彩基礎1" },
            { href: "8-color-scheme.html", num: "8", text: "色彩基礎2（配色）" },
            { href: "9-color-effects.html", num: "9", text: "色彩の影響と効果" },
            { href: "10-web-color.html", num: "10", text: "Webの色の実用知識" }
        ]
    },
    figma: {
        logo: { icon: "design_services", iconType: "material", text: "Figma入門", color: "#a259ff" },
        chapters: [
            { href: "1figma-what.html", num: "1", text: "Figmaとはなにか" },
            { href: "2figma-why.html", num: "2", text: "なぜFigmaなのか" },
            { href: "3figma-features.html", num: "3", text: "Figmaの特徴" },
            { href: "4figma-setup.html", num: "4", text: "アカウント作成と初期設定" },
            { href: "5figma-screen.html", num: "5", text: "画面説明" },
            { href: "6figma-team.html", num: "6", text: "チーム・プロジェクト・ファイル" },
            { href: "7figma-starter.html", num: "7", text: "スタータープランの制限" },
            { href: "8figma-editor.html", num: "8", text: "デザインエディター画面構成" },
            { href: "9figma-color-text.html", num: "9", text: "カラー・テキストスタイル" },
            { href: "10figma-component.html", num: "10", text: "コンポーネント" },
            { href: "11figma-header.html", num: "11", text: "ヘッダー制作" },
            { href: "12figma-hero.html", num: "12", text: "ヒーローセクション" },
            { href: "13figma-service.html", num: "13", text: "サービスセクション" },
            { href: "14figma-works.html", num: "14", text: "ワークスセクション" },
            { href: "15figma-about-footer.html", num: "15", text: "About・フッター" }
        ],
        appendix: [
            { href: "appendix-shortcuts.html", text: "ショートカットキー一覧" },
            { href: "appendix-tips.html", text: "便利なTips" },
            { href: "appendix-resources.html", text: "学習リソース" }
        ]
    },
    chatgpt: {
        logo: { icon: "smart_toy", iconType: "material", text: "ChatGPT活用", color: "#10a37f" },
        chapters: [
            { href: "1chatgpt-ai-basics.html", num: "1", text: "AIの基礎・LLMの仕組み" },
            { href: "2chatgpt-features.html", num: "2", text: "ChatGPTの特徴と制約" },
            { href: "3chatgpt-use-cases.html", num: "3", text: "ビジネス・教育での活用" },
            { href: "4chatgpt-how-to-use.html", num: "4", text: "ChatGPTの使い方" },
            { href: "5chatgpt-ideation.html", num: "5", text: "アイディア発想法" },
            { href: "6chatgpt-frameworks.html", num: "6", text: "企画のフレームワーク" },
            { href: "7chatgpt-prompts.html", num: "7", text: "プロンプト生成実践" },
            { href: "8chatgpt-verification.html", num: "8", text: "AI回答の検証と改善" },
            { href: "9chatgpt-summary.html", num: "9", text: "総合課題" }
        ]
    },
    promptpg: {
        logo: { icon: "smart_toy", iconType: "material", text: "プロンプトプログラミング", color: "#AF52DE" },
        chapters: [
            { href: "promptpg-1.html", num: "1", text: "Hello! Spring Boot" },
            { href: "promptpg-2.html", num: "2", text: "画面作成（リンク遷移）" },
            { href: "promptpg-3.html", num: "3", text: "フォームデータ持ち回り" },
            { href: "promptpg-4.html", num: "4", text: "データベース設定" },
            { href: "promptpg-5.html", num: "5", text: "データ登録" },
            { href: "promptpg-6.html", num: "6", text: "一覧表示" },
            { href: "promptpg-7.html", num: "7", text: "削除機能" },
            { href: "promptpg-8.html", num: "8", text: "編集機能" }
        ]
    },
    security: {
        logo: { icon: "security", iconType: "material", text: "情報セキュリティ", color: "#dc2626" },
        chapters: [
            { href: "1security-basics.html", num: "1", text: "情報セキュリティ基礎" },
            { href: "2security-history.html", num: "2", text: "セキュリティ対策の変遷" },
            { href: "3important-info.html", num: "3", text: "企業にとって重要な情報" },
            { href: "4cia.html", num: "4", text: "情報セキュリティの三要素" },
            { href: "5physical-security.html", num: "5", text: "物理的セキュリティ" },
            { href: "6digital-security.html", num: "6", text: "デジタル技術とセキュリティ" },
            { href: "7privacy-law.html", num: "7", text: "改正個人情報保護法" },
            { href: "8isms-password.html", num: "8", text: "ISMS・パスワード管理" },
            { href: "9incidents.html", num: "9", text: "インシデント事例" }
        ]
    },
    "system-dev": {
        logo: { icon: "developer_board", iconType: "material", text: "システム開発概論", color: "#3b82f6" },
        chapters: [
            { href: "1sd-it-engineer.html", num: "1", text: "ITエンジニアとシステム" },
            { href: "2sd-requirements.html", num: "2", text: "要件定義・非機能要件" },
            { href: "3sd-webapp-backend.html", num: "3", text: "Webアプリとバックエンド" },
            { href: "4sd-waterfall-agile.html", num: "4", text: "ウォーターフォールとアジャイル" },
            { href: "5sd-lifecycle.html", num: "5", text: "開発ライフサイクル" },
            { href: "6sd-wbs-meetings.html", num: "6", text: "WBSとミーティング" },
            { href: "7sd-environments.html", num: "7", text: "環境構成" },
            { href: "8sd-security.html", num: "8", text: "情報セキュリティ" },
            { href: "9sd-logging.html", num: "9", text: "ログの設計と運用" },
            { href: "10sd-compliance.html", num: "10", text: "法令・コンプライアンス" }
        ]
    },
    ga4: {
        logo: { icon: "GA4", iconType: "text", text: "GA4入門", color: "#E37400" },
        chapters: [
            { href: "1ga4-basics.html", num: "1", text: "GA4の基本" },
            { href: "2ga4-interface.html", num: "2", text: "GA4の画面と基本操作" },
            { href: "3ga4-user-tech.html", num: "3", text: "ユーザー属性とテクノロジー" },
            { href: "4ga4-acquisition.html", num: "4", text: "集客レポート" },
            { href: "5ga4-engagement.html", num: "5", text: "エンゲージメントレポート" },
            { href: "6ga4-explore.html", num: "6", text: "探索レポート" }
        ]
    },
    marketing: {
        logo: { icon: "MK", iconType: "text", text: "マーケティング入門", color: "#7B1FA2" },
        chapters: [
            { href: "1marketing-basics.html", num: "1", text: "マーケティングとは？" },
            { href: "2webmarketing-basics.html", num: "2", text: "Webマーケティングとは？" },
            { href: "3strategic-3c-swot.html", num: "3", text: "戦略的プロセス（3C/SWOT）" },
            { href: "4tactical-stp.html", num: "4", text: "戦術的プロセス（STP分析）" },
            { href: "5tactical-4p4c.html", num: "5", text: "戦術的プロセス（4P/4C）" },
            { href: "6persona-design.html", num: "6", text: "ペルソナ設計" },
            { href: "7customer-journey.html", num: "7", text: "カスタマージャーニー設計" },
            { href: "8webmarketing-design.html", num: "8", text: "Webマーケティング全体設計" },
            { href: "9lead-acquisition.html", num: "9", text: "集客設計（LEAD）" },
            { href: "10lp-structure.html", num: "10", text: "LP構造設計（CV）" },
            { href: "11copy-expression.html", num: "11", text: "コピーと表現設計" },
            { href: "12advertising-metrics.html", num: "12", text: "広告と数値思考" },
            { href: "13improvement-tools.html", num: "13", text: "継続・改善・ツール活用" }
        ]
    }
};

// 現在のページを判定
function getTutorialCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename || 'index.html';
}

// アイコンをレンダリング
function renderNavIcon(icon, iconType) {
    if (iconType === 'material') {
        return `<span class="material-icons">${icon}</span>`;
    }
    return icon;
}

// ナビゲーションHTMLを生成
function generateTutorialNavHTML(courseId) {
    const data = courseNavData[courseId];
    if (!data) return '';

    const currentPage = getTutorialCurrentPage();

    // チャプターリンクを生成
    const chaptersHTML = data.chapters.map(chapter => {
        const isActive = currentPage === chapter.href ? ' active' : '';
        return `<li class="nav-item"><a href="${chapter.href}" class="nav-link${isActive}"><span class="nav-chapter-num">${chapter.num}</span><span>${chapter.text}</span></a></li>`;
    }).join('\n                    ');

    // 付録リンクを生成
    let appendixHTML = '';
    if (data.appendix && data.appendix.length > 0) {
        const appendixItems = data.appendix.map(item => {
            const isActive = currentPage === item.href ? ' active' : '';
            return `<li class="nav-item"><a href="${item.href}" class="nav-link${isActive}"><span>${item.text}</span></a></li>`;
        }).join('\n                    ');

        appendixHTML = `
                <div class="nav-menu-title" style="margin-top: 1rem;"><span class="material-icons">library_books</span> Appendix</div>
                <ul class="nav-list">
                    ${appendixItems}
                </ul>`;
    }

    const logoIcon = renderNavIcon(data.logo.icon, data.logo.iconType);
    const logoStyle = data.logo.iconType === 'text'
        ? `background: ${data.logo.color}; color: white; font-weight: 700; font-size: 14px;`
        : `background: ${data.logo.color}; color: white;`;

    return `
        <div class="nav-menu-header">
            <span class="nav-logo-icon" style="${logoStyle}">${logoIcon}</span>
            <span>${data.logo.text}</span>
        </div>
        <div class="nav-menu-content">
            <div class="nav-menu-title"><span class="material-icons">menu_book</span> Chapter</div>
            <ul class="nav-list">
                ${chaptersHTML}
            </ul>${appendixHTML}
        </div>
    `;
}

// ナビゲーションを挿入
function insertTutorialNav() {
    const navElement = document.querySelector('.tutorial-nav');
    if (navElement) {
        const courseId = navElement.dataset.course;
        if (courseId) {
            navElement.innerHTML = generateTutorialNavHTML(courseId);
        }
    }
}

// DOMContentLoaded時にナビゲーションを挿入
document.addEventListener('DOMContentLoaded', insertTutorialNav);
