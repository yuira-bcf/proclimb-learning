/**
 * UI/UX概論 チュートリアル ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "index.html",
        icon: "palette",
        iconType: "material",
        text: "UI/UX概論"
    },
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
    ],
    appendix: [],
    categories: [
        { href: "../index.html", text: "ダッシュボード" },
        { href: "../index.html#frontend", text: "フロントエンド基礎" },
        { href: "../index.html#backend", text: "バックエンド開発" },
        { href: "../index.html#ai", text: "AI・自動化" },
        { href: "../index.html#design", text: "デザイン・UX" },
        { href: "../index.html#business", text: "ビジネススキル" }
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

    // カテゴリリンクを生成（ヘッダー用）
    const categoryHTML = navData.categories.map(item => {
        return `<a href="${item.href}">${item.text}</a>`;
    }).join('\n                ');

    // カテゴリリンクを生成（ハンバーガーメニュー用）
    const categoryMenuHTML = navData.categories.map(item => {
        return `<li class="nav-item"><a href="${item.href}" class="nav-link"><span>${item.text}</span></a></li>`;
    }).join('\n                    ');

    const logoIcon = renderIcon(navData.logo.icon, navData.logo.iconType);

    return `
        <div class="nav-container">
            <a href="${navData.logo.href}" class="nav-logo">
                <span class="nav-logo-icon" style="background: #FF6B35; color: white;">${logoIcon}</span>
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
