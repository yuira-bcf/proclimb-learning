/**
 * Java実力養成ドリル ナビゲーション
 */

const navData = {
    logo: {
        href: "index.html",
        icon: "fitness_center",
        iconType: "material",
        text: "Javaドリル"
    },
    chapters: [
        { href: "level-d.html", num: "D", text: "Level D — 基礎実装" },
        { href: "level-c.html", num: "C", text: "Level C — 仕様実装" },
        { href: "level-b.html", num: "B", text: "Level B — 複合実装" },
        { href: "level-a.html", num: "A", text: "Level A — 設計実装" },
        { href: "level-s.html", num: "S", text: "Level S — 総合実装" }
    ],
    categories: [
        { href: "../../index.html", text: "ダッシュボード" },
        { href: "../../index.html#backend", text: "バックエンド開発" },
        { href: "../../backend/java/index.html", text: "Java基礎講座" },
        { href: "../../index.html#training", text: "応用トレーニング" }
    ]
};

function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename || 'index.html';
}

function renderIcon(icon, iconType) {
    if (iconType === 'material') {
        return `<span class="material-icons">${icon}</span>`;
    }
    return icon;
}

function generateNavHTML() {
    const currentPage = getCurrentPage();

    const chaptersHTML = navData.chapters.map(chapter => {
        const isActive = currentPage === chapter.href ? ' active' : '';
        return `<li class="nav-item"><a href="${chapter.href}" class="nav-link${isActive}"><span class="nav-chapter-num">${chapter.num}</span><span>${chapter.text}</span></a></li>`;
    }).join('\n                    ');

    const categoryHTML = navData.categories.map(item => {
        return `<a href="${item.href}">${item.text}</a>`;
    }).join('\n                ');

    const categoryMenuHTML = navData.categories.map(item => {
        return `<li class="nav-item"><a href="${item.href}" class="nav-link"><span>${item.text}</span></a></li>`;
    }).join('\n                    ');

    const logoActive = currentPage === 'index.html' ? ' active' : '';
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
                <div class="nav-menu-title"><span class="material-icons">fitness_center</span> レベルを選択</div>
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

function insertNavigation() {
    const navElement = document.querySelector('.global-nav');
    if (navElement) {
        navElement.innerHTML = generateNavHTML();
        setupNavToggle();
    }
}

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

document.addEventListener('DOMContentLoaded', insertNavigation);
