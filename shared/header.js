/**
 * 共通ヘッダー
 * 全ページで読み込み
 */

// ヘッダーデータ
const headerData = {
    logo: {
        href: "index.html",
        text: "Tutorial"
    },
    categories: [
        { href: "index.html", text: "ダッシュボード", id: "" },
        { href: "index.html#frontend", text: "フロントエンド", id: "frontend" },
        { href: "index.html#backend", text: "バックエンド", id: "backend" },
        { href: "index.html#ai", text: "AI・自動化", id: "ai" },
        { href: "index.html#design", text: "デザイン", id: "design" },
        { href: "index.html#business", text: "ビジネス", id: "business" }
    ]
};

// ベースパスを取得（現在のページの深さに応じて調整）
function getHeaderBasePath() {
    const path = window.location.pathname;
    // ファイル名を除外してディレクトリ部分のみ取得
    const pathParts = path.split('/').filter(p => p && !p.endsWith('.html'));
    const tutorialsIndex = pathParts.indexOf('tutorials');
    if (tutorialsIndex === -1) return '';

    // tutorials フォルダからの深さを計算
    const depth = pathParts.length - tutorialsIndex - 1;
    if (depth === 0) return '';
    return '../'.repeat(depth);
}

// 現在のページがダッシュボードかどうか
function isHeaderDashboard() {
    const path = window.location.pathname;
    return path.endsWith('/tutorials/') ||
           path.endsWith('/tutorials/index.html') ||
           path.endsWith('/tutorials');
}

// ハンバーガーメニューがあるかどうか
function hasHamburgerNav() {
    return document.querySelector('.tutorial-nav') !== null;
}

// ヘッダーHTMLを生成
function generateHeaderHTML() {
    const basePath = getHeaderBasePath();
    const onDashboard = isHeaderDashboard();
    const hasNav = hasHamburgerNav();

    // カテゴリリンクを生成
    const categoryLinks = headerData.categories.map(cat => {
        const href = basePath + cat.href;
        const isActive = onDashboard && cat.id === '' ? ' class="active"' : '';
        return `<a href="${href}"${isActive}>${cat.text}</a>`;
    }).join('\n                ');

    // ハンバーガーボタン（教材詳細ページのみ）
    const hamburgerBtn = hasNav ? `
            <button class="header-nav-toggle" aria-label="メニューを開く" onclick="toggleTutorialNav()">
                <span></span>
                <span></span>
                <span></span>
            </button>` : '';

    return `
        <div class="gnav-inner">
            <a href="${basePath}index.html" class="gnav-logo">
                <div class="logo-dot">T</div>
                Tutorial
            </a>
            <div class="gnav-links">
                ${categoryLinks}
            </div>${hamburgerBtn}
        </div>
    `;
}

// ハンバーガーメニュートグル
function toggleTutorialNav() {
    const nav = document.querySelector('.tutorial-nav');
    const toggle = document.querySelector('.header-nav-toggle');
    if (nav && toggle) {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    }
}

// ヘッダーを挿入
function insertHeader() {
    const headerElement = document.querySelector('.global-header');
    if (headerElement) {
        headerElement.innerHTML = generateHeaderHTML();
    }
}

// ヘッダーを挿入（DOMの状態に応じて実行）
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertHeader);
} else {
    insertHeader();
}
