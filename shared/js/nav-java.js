/**
 * Java基礎 チュートリアル ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "index.html",
        icon: "local_cafe",
        iconType: "material",
        text: "Java基礎"
    },
    chapters: [
        { href: "1java-overview.html", num: "1", text: "Javaの概要と環境構築" },
        { href: "2java-compile-package.html", num: "2", text: "コンパイル・パッケージ・インポート" },
        { href: "3java-variable.html", num: "3", text: "変数・リテラル・データ型" },
        { href: "4java-array.html", num: "4", text: "配列" },
        { href: "5java-string.html", num: "5", text: "文字列の操作" },
        { href: "6java-operator.html", num: "6", text: "演算子とデータの比較" },
        { href: "7java-typecast.html", num: "7", text: "型変換とラッパークラス" },
        { href: "8java-condition.html", num: "8", text: "条件分岐" },
        { href: "9java-loop.html", num: "9", text: "繰り返しと制御文" },
        { href: "10java-class.html", num: "10", text: "クラスの基本" },
        { href: "11java-static.html", num: "11", text: "コンストラクタとstatic" },
        { href: "12java-inheritance.html", num: "12", text: "継承" },
        { href: "13java-abstract-interface.html", num: "13", text: "抽象クラスとインタフェース" },
        { href: "14java-polymorphism.html", num: "14", text: "ポリモーフィズム" },
        { href: "15java-collection.html", num: "15", text: "コレクションフレームワーク" },
        { href: "16java-exception.html", num: "16", text: "例外処理" },
        { href: "17java-maven.html", num: "17", text: "Mavenの基礎" }
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
    const logoActive = currentPage === '1java-overview.html' ? ' active' : '';
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
