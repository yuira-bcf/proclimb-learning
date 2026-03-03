/**
 * 設計書駆動プロンプト開発 チュートリアル ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "index.html",
        icon: "description",
        iconType: "material",
        text: "設計書駆動プロンプト開発"
    },
    chapters: [
        { href: "1doc-overview.html", num: "1", text: "設計書駆動開発とは" },
        { href: "2doc-requirements.html", num: "2", text: "要件定義書の書き方" },
        { href: "3doc-functional-spec.html", num: "3", text: "機能仕様書の書き方" },
        { href: "4doc-api-design.html", num: "4", text: "API設計書の書き方" },
        { href: "5doc-db-design.html", num: "5", text: "DB設計書の書き方" },
        { href: "6doc-screen-test.html", num: "6", text: "画面設計書・テスト仕様書" },
        { href: "7doc-exercise-todo.html", num: "7", text: "演習: Todoアプリ" },
        { href: "8doc-exercise-ec.html", num: "8", text: "演習: ECサイト" }
    ],
    appendix: [],
    categories: [
        { href: "../../index.html", text: "ダッシュボード" },
        { href: "../../index.html#software-design", text: "ソフトウェア設計" },
        { href: "../../index.html#backend", text: "バックエンド開発" },
        { href: "../../index.html#ai", text: "AI・自動化" },
        { href: "../../index.html#design", text: "デザイン・UX" }
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

    const chaptersHTML = navData.chapters.map(chapter => {
        const isActive = currentPage === chapter.href ? ' active' : '';
        return `<li class="nav-item"><a href="${chapter.href}" class="nav-link${isActive}"><span class="nav-chapter-num">${chapter.num}</span><span>${chapter.text}</span></a></li>`;
    }).join('\n                    ');

    const appendixHTML = navData.appendix.map(item => {
        const isActive = currentPage === item.href ? ' active' : '';
        return `<li class="nav-item"><a href="${item.href}" class="nav-link${isActive}"><span>${item.text}</span></a></li>`;
    }).join('\n                    ');

    const categoryHTML = navData.categories.map(item => {
        return `<a href="${item.href}">${item.text}</a>`;
    }).join('\n                ');

    const categoryMenuHTML = navData.categories.map(item => {
        return `<li class="nav-item"><a href="${item.href}" class="nav-link"><span>${item.text}</span></a></li>`;
    }).join('\n                    ');

    const logoIcon = renderIcon(navData.logo.icon, navData.logo.iconType);

    let navHTML = `
        <div class="nav-container">
            <a href="${navData.logo.href}" class="nav-logo">
                <span class="nav-logo-icon" style="background: #5856D6; color: white;">${logoIcon}</span>
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
                </ul>`;

    if (navData.appendix.length > 0) {
        navHTML += `
                <div class="nav-menu-title" style="margin-top: 1rem;"><span class="material-icons">library_books</span> Appendix</div>
                <ul class="nav-list">
                    ${appendixHTML}
                </ul>`;
    }

    navHTML += `
                <div class="nav-menu-title" style="margin-top: 1rem;"><span class="material-icons">dashboard</span> カテゴリ</div>
                <ul class="nav-list">
                    ${categoryMenuHTML}
                </ul>
            </div>
        </div>
    `;

    return navHTML;
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
