/**
 * Spring基礎 チュートリアル ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "index.html",
        icon: "eco",
        iconType: "material",
        text: "Spring基礎"
    },
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
        { href: "15-spring-security-tutorial.html", num: "15", text: "Spring Security" },
        { href: "16-annotation-component-scan.html", num: "16", text: "アノテーションとコンポーネントスキャン" }
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

    // カテゴリリンクを生成（ヘッダー用）
    const categoryHTML = navData.categories.map(item => {
        return `<a href="${item.href}">${item.text}</a>`;
    }).join('\n                ');

    // カテゴリリンクを生成（ハンバーガーメニュー用）
    const categoryMenuHTML = navData.categories.map(item => {
        return `<li class="nav-item"><a href="${item.href}" class="nav-link"><span>${item.text}</span></a></li>`;
    }).join('\n                    ');

    // ロゴのアクティブ判定
    const logoActive = currentPage === '1spring-framework-tutorial.html' ? ' active' : '';
    const logoIcon = renderIcon(navData.logo.icon, navData.logo.iconType);

    return `
        <div class="nav-container">
            <a href="${navData.logo.href}" class="nav-logo${logoActive}">
                <span class="nav-logo-icon" style="background: #0097A7; color: white;">${logoIcon}</span>
                <span>${navData.logo.text}</span>
            </a>
            <div class="nav-category-links">
                ${categoryHTML}
            </div>
            <button class="nav-toggle" aria-label="メニューを開く">
                <span class="nav-toggle-icon"></span>
            </button>
            <div class="nav-menu">
                <div class="nav-menu-title"><span class="material-icons">menu_book</span> 章を選択</div>
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
