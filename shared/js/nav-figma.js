/**
 * Figma入門 チュートリアル ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "index.html",
        icon: "edit",
        iconType: "material",
        text: "Figma入門"
    },
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
    ],
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
                <div class="nav-menu-title" style="margin-top: 1rem;"><span class="material-icons">library_books</span> Appendix</div>
                <ul class="nav-list">
                    ${appendixHTML}
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
