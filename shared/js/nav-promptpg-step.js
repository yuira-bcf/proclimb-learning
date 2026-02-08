/**
 * プロンプトプログラミング チュートリアル ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "index.html",
        icon: "stairs",
        iconType: "material",
        text: "プロンプトプログラミング"
    },
    steps: [
        { href: "promptpg-1.html", num: "1", text: "Hello! Spring Boot" },
        { href: "promptpg-2.html", num: "2", text: "画面作成（リンク遷移）" },
        { href: "promptpg-3.html", num: "3", text: "フォームデータ持ち回り" },
        { href: "promptpg-4.html", num: "4", text: "データベース設定" },
        { href: "promptpg-5.html", num: "5", text: "データ登録" },
        { href: "promptpg-6.html", num: "6", text: "一覧表示" },
        { href: "promptpg-7.html", num: "7", text: "削除機能" },
        { href: "promptpg-8.html", num: "8", text: "編集機能" }
    ],
    promptpg: [
        { href: "promptpg-overview.html", text: "HOME", icon: "home", iconType: "material" },
        { href: "promptpg-1.html", text: "ステップアップ版", icon: "rocket_launch", iconType: "material" },
        { href: "../promptpg-all/index.html", text: "オールインワン版", icon: "menu_book", iconType: "material" },
        { href: "../promptpg-function/01_extends-todo.html", text: "機能追加", icon: "build", iconType: "material" }
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

    // ステップリンクを生成
    const stepsHTML = navData.steps.map(step => {
        const isActive = currentPage === step.href ? ' active' : '';
        return `<li class="nav-item"><a href="${step.href}" class="nav-link${isActive}"><span class="nav-chapter-num">${step.num}</span><span>${step.text}</span></a></li>`;
    }).join('\n                    ');

    // プロンプトプログラミングリンクを生成
    const promptpgHTML = navData.promptpg.map(item => {
        const isActive = currentPage === item.href ? ' active' : '';
        const icon = renderIcon(item.icon, item.iconType);
        return `<li class="nav-item"><a href="${item.href}" class="nav-link${isActive}"><span>${icon} ${item.text}</span></a></li>`;
    }).join('\n                    ');

    // カテゴリリンクを生成（ヘッダー用）
    const categoryHTML = navData.categories.map(item => {
        return `<a href="${item.href}">${item.text}</a>`;
    }).join('\n                ');

    // カテゴリリンクを生成（ハンバーガーメニュー用）
    const categoryMenuHTML = navData.categories.map(item => {
        return `<li class="nav-item"><a href="${item.href}" class="nav-link"><span>${item.text}</span></a></li>`;
    }).join('\n                    ');

    // ロゴのアクティブ判定
    const logoActive = currentPage === 'promptpg-overview.html' ? ' active' : '';
    const logoIcon = renderIcon(navData.logo.icon, navData.logo.iconType);

    return `
        <div class="nav-container">
            <a href="${navData.logo.href}" class="nav-logo${logoActive}">
                <span class="nav-logo-icon" style="background: #AF52DE; color: white;">${logoIcon}</span>
                <span>${navData.logo.text}</span>
            </a>
            <div class="nav-category-links">
                ${categoryHTML}
            </div>
            <button class="nav-toggle" aria-label="メニューを開く">
                <span class="nav-toggle-icon"></span>
            </button>
            <div class="nav-menu">
                <div class="nav-menu-title"><span class="material-icons">rocket_launch</span> ステップ別チュートリアル</div>
                <ul class="nav-list">
                    ${stepsHTML}
                </ul>
                <div class="nav-menu-title" style="margin-top: 1rem;"><span class="material-icons">smart_toy</span> プロンプトプログラミング</div>
                <ul class="nav-list">
                    ${promptpgHTML}
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
