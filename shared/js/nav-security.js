/**
 * 情報セキュリティ チュートリアル ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "index.html",
        icon: "lock",
        iconType: "material",
        text: "情報セキュリティ"
    },
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

    // 付録リンクを生成
    const appendixHTML = navData.appendix.map(item => {
        const isActive = currentPage === item.href ? ' active' : '';
        return `<li class="nav-item"><a href="${item.href}" class="nav-link${isActive}"><span>${item.text}</span></a></li>`;
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

    let appendixSection = '';
    if (navData.appendix.length > 0) {
        appendixSection = `
                <div class="nav-menu-title" style="margin-top: 1rem;"><span class="material-icons">library_books</span> Appendix</div>
                <ul class="nav-list">
                    ${appendixHTML}
                </ul>`;
    }

    return `
        <div class="nav-container">
            <a href="${navData.logo.href}" class="nav-logo">
                <span class="nav-logo-icon" style="background: #FF9F0A; color: white;">${logoIcon}</span>
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
                </ul>${appendixSection}
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
