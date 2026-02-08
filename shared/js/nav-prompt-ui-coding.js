/**
 * プロンプトUIコーディング チュートリアル ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "index.html",
        icon: "auto_awesome",
        iconType: "material",
        text: "プロンプトUIコーディング"
    },
    chapters: [
        { href: "1puic-intro.html", num: "1", text: "プロンプトUIコーディングとは" },
        { href: "2puic-prompt-basics.html", num: "2", text: "UI生成プロンプトの基本" },
        { href: "3puic-html-generation.html", num: "3", text: "HTMLの自動生成" },
        { href: "4puic-css-generation.html", num: "4", text: "CSSの自動生成" },
        { href: "5puic-components.html", num: "5", text: "UIコンポーネント生成" },
        { href: "6puic-responsive.html", num: "6", text: "レスポンシブデザイン生成" },
        { href: "7puic-tailwind.html", num: "7", text: "Tailwind CSSとの連携" },
        { href: "8puic-landing-page.html", num: "8", text: "ランディングページ制作" },
        { href: "9puic-refactoring.html", num: "9", text: "コードのリファクタリング" },
        { href: "10puic-best-practices.html", num: "10", text: "ベストプラクティス" },
        { href: "11puic-uiux-forms.html", num: "11", text: "フォームUX改善の20ポイント" },
        { href: "12puic-table-ui.html", num: "12", text: "テーブルUIの実装" },
        { href: "13puic-kanban.html", num: "13", text: "看板ボードの実装" },
        { href: "14puic-chat.html", num: "14", text: "チャットUIの実装" },
        { href: "15puic-ui-layout.html", num: "15", text: "プロンプトUIレイアウト" }
    ],
    utilities: [
        { href: "search.html", icon: "search", text: "検索" }
    ],
    categories: [
        { href: "../../index.html", text: "ダッシュボード" },
        { href: "../../index.html#frontend", text: "フロントエンド基礎" },
        { href: "../../index.html#backend", text: "バックエンド開発" },
        { href: "../../index.html#ai", text: "AI・自動化" },
        { href: "../../index.html#design", text: "デザイン・UX" },
        { href: "../../index.html#business", text: "ビジネススキル" }
    ]
};

// 現在のページを判定
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename || 'index.html';
}

// アイコンをレンダリング
function renderIcon(icon, iconType) {
    if (iconType === 'material') {
        return `<span class="material-icons">${icon}</span>`;
    }
    return icon;
}

// ナビゲーションHTMLを生成
function generateNavHTML() {
    const currentPage = getCurrentPage();

    // チャプターリンクを生成
    const chaptersHTML = navData.chapters.map(chapter => {
        const isActive = currentPage === chapter.href ? ' active' : '';
        return `<li class="nav-item"><a href="${chapter.href}" class="nav-link${isActive}"><span class="nav-chapter-num">${chapter.num}</span><span>${chapter.text}</span></a></li>`;
    }).join('\n                    ');

    // ユーティリティリンクを生成（検索など）
    const utilitiesHTML = navData.utilities ? navData.utilities.map(util => {
        const isActive = currentPage === util.href ? ' active' : '';
        return `<li class="nav-item"><a href="${util.href}" class="nav-link${isActive}"><span class="material-icons" style="font-size: 18px; margin-right: 8px;">${util.icon}</span><span>${util.text}</span></a></li>`;
    }).join('\n                    ') : '';

    // カテゴリリンクを生成（ヘッダー用）
    const categoryHTML = navData.categories.map(item => {
        return `<a href="${item.href}">${item.text}</a>`;
    }).join('\n                ');

    // カテゴリリンクを生成（ハンバーガーメニュー用）
    const categoryMenuHTML = navData.categories.map(item => {
        return `<li class="nav-item"><a href="${item.href}" class="nav-link"><span>${item.text}</span></a></li>`;
    }).join('\n                    ');

    // ロゴのアクティブ判定
    const logoActive = currentPage === '1puic-intro.html' ? ' active' : '';
    const logoIcon = renderIcon(navData.logo.icon, navData.logo.iconType);

    return `
        <div class="nav-container">
            <a href="${navData.logo.href}" class="nav-logo${logoActive}">
                <span class="nav-logo-icon" style="background: #007ACC; color: white;">${logoIcon}</span>
                <span>${navData.logo.text}</span>
            </a>
            <div class="nav-category-links">
                ${categoryHTML}
            </div>
            <button class="nav-toggle" aria-label="メニューを開く">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="nav-menu">
                <div class="nav-menu-title"><span class="material-icons">menu_book</span> Chapter</div>
                <ul class="nav-list">
                    ${chaptersHTML}
                </ul>
                ${utilitiesHTML ? `<div class="nav-menu-title" style="margin-top: 1rem;"><span class="material-icons">build</span> ツール</div>
                <ul class="nav-list">
                    ${utilitiesHTML}
                </ul>` : ''}
                <div class="nav-menu-title" style="margin-top: 1rem;"><span class="material-icons">dashboard</span> カテゴリ</div>
                <ul class="nav-list">
                    ${categoryMenuHTML}
                </ul>
            </div>
        </div>
    `;
}

// ナビゲーションを挿入
function insertNavigation() {
    const navElement = document.querySelector('.global-nav');
    if (navElement) {
        navElement.innerHTML = generateNavHTML();
        setupNavToggle();
    }
}

// モバイルメニュートグルを設定
function setupNavToggle() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

// DOMContentLoaded時にナビゲーションを挿入
document.addEventListener('DOMContentLoaded', insertNavigation);
