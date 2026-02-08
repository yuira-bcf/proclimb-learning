/**
 * WEB総合制作演習 3 ナビゲーション
 * 外部読み込み用JavaScriptファイル
 */

// ナビゲーションデータ
const navData = {
    logo: {
        href: "../generaltraining/web-exercises-3.html",
        icon: "code",
        iconType: "material",
        text: "WEB総合制作演習 3"
    },
    phases: [
        {
            title: "Phase 1: 基本実装",
            items: [
                { href: "../promptpg-step/promptpg-1.html", num: "1", text: "プロジェクト作成" },
                { href: "../promptpg-step/promptpg-2.html", num: "2", text: "データベース設計" },
                { href: "../promptpg-step/promptpg-3.html", num: "3", text: "Repository層" },
                { href: "../promptpg-step/promptpg-4.html", num: "4", text: "Service層" },
                { href: "../promptpg-step/promptpg-5.html", num: "5", text: "Controller層" },
                { href: "../promptpg-step/promptpg-6.html", num: "6", text: "View層（一覧・登録）" },
                { href: "../promptpg-step/promptpg-7.html", num: "7", text: "View層（編集・削除）" },
                { href: "../promptpg-step/promptpg-8.html", num: "8", text: "スタイリング" }
            ]
        },
        {
            title: "Phase 2: 機能追加（初級）",
            items: [
                { href: "01_extends-todo.html", num: "01", text: "ToDo項目の拡張" },
                { href: "02_validation.html", num: "02", text: "バリデーション" },
                { href: "03_status.html", num: "03", text: "ステータス管理" },
                { href: "04_search.html", num: "04", text: "検索機能" },
                { href: "05_sort.html", num: "05", text: "ソート機能" },
                { href: "06_delete_dialog.html", num: "06", text: "削除確認ダイアログ" }
            ]
        },
        {
            title: "Phase 2: 機能追加（中級）",
            items: [
                { href: "07_pagination.html", num: "07", text: "ページネーション" },
                { href: "08_priority.html", num: "08", text: "優先度設定" },
                { href: "09_category.html", num: "09", text: "カテゴリ管理" },
                { href: "10_deadline.html", num: "10", text: "期限設定" },
                { href: "11_bulk_delete.html", num: "11", text: "一括削除" },
                { href: "12_csv_export.html", num: "12", text: "CSVエクスポート" }
            ]
        },
        {
            title: "Phase 2: 機能追加（上級）",
            items: [
                { href: "13_login.html", num: "13", text: "ログイン機能" },
                { href: "14_user_todo.html", num: "14", text: "ユーザー別ToDo" },
                { href: "15_role.html", num: "15", text: "権限管理" },
                { href: "16_rest_api.html", num: "16", text: "REST API" },
                { href: "17_exception.html", num: "17", text: "例外処理" },
                { href: "18_aop.html", num: "18", text: "AOP" },
                { href: "19_transaction.html", num: "19", text: "トランザクション" }
            ]
        },
        {
            title: "Phase 2: 機能追加（エキスパート）",
            items: [
                { href: "20_file_upload.html", num: "20", text: "ファイルアップロード" },
                { href: "21_i18n.html", num: "21", text: "国際化（i18n）" },
                { href: "22_unit_test.html", num: "22", text: "単体テスト" },
                { href: "23_async.html", num: "23", text: "非同期処理" },
                { href: "24_mail.html", num: "24", text: "メール送信" },
                { href: "25_audit_log.html", num: "25", text: "監査ログ" },
                { href: "26_javadoc.html", num: "26", text: "Javadoc作成" }
            ]
        }
    ],
    categories: [
        { href: "../../../index.html", text: "ダッシュボード" },
        { href: "../../../exercises/generaltraining/web-exercises-3.html", text: "演習トップ" }
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

    // Phaseごとのリンクを生成
    let phasesHTML = '';
    navData.phases.forEach((phase, index) => {
        const itemsHTML = phase.items.map(item => {
            const isActive = currentPage === item.href ? ' active' : '';
            return `<li class="nav-item"><a href="${item.href}" class="nav-link${isActive}"><span class="nav-chapter-num">${item.num}</span><span>${item.text}</span></a></li>`;
        }).join('\n                    ');

        phasesHTML += `
                <div class="nav-menu-title"${index > 0 ? ' style="margin-top: 1rem;"' : ''}><span class="material-icons">folder</span> ${phase.title}</div>
                <ul class="nav-list">
                    ${itemsHTML}
                </ul>`;
    });

    // カテゴリリンクを生成
    const categoryMenuHTML = navData.categories.map(item => {
        return `<li class="nav-item"><a href="${item.href}" class="nav-link"><span>${item.text}</span></a></li>`;
    }).join('\n                    ');

    const logoIcon = renderIcon(navData.logo.icon, navData.logo.iconType);

    return `
        <div class="nav-container">
            <a href="${navData.logo.href}" class="nav-logo">
                <span class="nav-logo-icon" style="background: #FF3B30; color: white;">${logoIcon}</span>
                <span>${navData.logo.text}</span>
            </a>
            <button class="nav-toggle" aria-label="メニューを開く">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="nav-menu">
                ${phasesHTML}
                <div class="nav-menu-title" style="margin-top: 1rem;"><span class="material-icons">dashboard</span> リンク</div>
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
