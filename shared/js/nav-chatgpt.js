/**
 * ChatGPT活用 チュートリアル ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "index.html",
        icon: "forum",
        iconType: "material",
        text: "ChatGPT活用"
    },
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
                <span class="nav-logo-icon" style="background: #AF52DE; color: white;">${logoIcon}</span>
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
