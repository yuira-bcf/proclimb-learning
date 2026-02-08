/**
 * プロンプトプログラミング 機能追加 ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "01_extends-todo.html",
        icon: "build",
        iconType: "material",
        text: "プロンプトPG 機能追加"
    },
    chapters: [
        { href: "01_extends-todo.html", num: "1", text: "機能追加提案" },
        { href: "02_validation.html", num: "2", text: "バリデーション" },
        { href: "03_status.html", num: "3", text: "ステータス管理" },
        { href: "04_search.html", num: "4", text: "検索機能" },
        { href: "05_sort.html", num: "5", text: "ソート機能" },
        { href: "06_delete_dialog.html", num: "6", text: "削除確認" },
        { href: "07_pagination.html", num: "7", text: "ページネーション" },
        { href: "08_priority.html", num: "8", text: "優先度" },
        { href: "09_category.html", num: "9", text: "カテゴリ" },
        { href: "10_deadline.html", num: "10", text: "期限" },
        { href: "11_bulk_delete.html", num: "11", text: "一括削除" },
        { href: "12_csv_export.html", num: "12", text: "CSV出力" },
        { href: "13_login.html", num: "13", text: "ログイン" },
        { href: "14_user_todo.html", num: "14", text: "ユーザー別Todo" },
        { href: "15_role.html", num: "15", text: "ロール管理" },
        { href: "16_rest_api.html", num: "16", text: "REST API" },
        { href: "17_exception.html", num: "17", text: "例外処理" },
        { href: "18_aop.html", num: "18", text: "AOP" },
        { href: "19_transaction.html", num: "19", text: "トランザクション" },
        { href: "20_file_upload.html", num: "20", text: "ファイル" },
        { href: "21_i18n.html", num: "21", text: "多言語化" },
        { href: "22_unit_test.html", num: "22", text: "単体テスト" },
        { href: "23_async.html", num: "23", text: "非同期処理" },
        { href: "24_mail.html", num: "24", text: "メール送信" },
        { href: "25_audit_log.html", num: "25", text: "監査ログ" },
        { href: "26_javadoc.html", num: "26", text: "Javadoc" }
    ],
    promptpg: [
        { href: "../promptpg-step/promptpg-overview.html", text: "HOME", icon: "home", iconType: "material" },
        { href: "../promptpg-step/index.html", text: "ステップアップ版", icon: "stairs", iconType: "material" },
        { href: "../promptpg-all/index.html", text: "オールインワン版", icon: "view_compact", iconType: "material" },
        { href: "01_extends-todo.html", text: "機能追加", icon: "build", iconType: "material" }
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
    return filename || '01_extends-todo.html';
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
    const logoActive = currentPage === '01_extends-todo.html' ? ' active' : '';
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
                <div class="nav-menu-title"><span class="material-icons">build</span> 機能追加チュートリアル</div>
                <ul class="nav-list">
                    ${chaptersHTML}
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
