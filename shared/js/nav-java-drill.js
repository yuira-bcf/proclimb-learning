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
        { href: "level-d.html", num: "D", text: "Level D — 読める" },
        { href: "level-c.html", num: "C", text: "Level C — 書ける" },
        { href: "level-b.html", num: "B", text: "Level B — 組み合わせられる" },
        { href: "level-a.html", num: "A", text: "Level A — 見抜ける" },
        { href: "level-s.html", num: "S", text: "Level S — 解き切れる" }
    ],
    categories: [
        { href: "../../index.html", text: "ダッシュボード" },
        { href: "../../index.html#backend", text: "バックエンド開発" },
        { href: "../../backend/java/index.html", text: "Java基礎講座" },
        { href: "../../index.html#exercises", text: "総合演習" }
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
    <header class="global-header">
        <div class="header-inner">
            <a href="${navData.logo.href}" class="header-logo${logoActive}">
                ${logoIcon}
                <span>${navData.logo.text}</span>
            </a>
            <div class="nav-category-links">${categoryHTML}</div>
            <button class="header-nav-toggle" aria-label="メニュー">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>
    <nav class="tutorial-nav">
        <ul class="nav-list">
            ${chaptersHTML}
            <li class="nav-divider"></li>
            ${categoryMenuHTML}
        </ul>
    </nav>`;
}

function insertNavigation() {
    const navElement = document.querySelector('.global-nav');
    if (navElement) {
        navElement.innerHTML = generateNavHTML();
    }
}

function setupNavToggle() {
    const toggle = document.querySelector('.header-nav-toggle');
    const nav = document.querySelector('.tutorial-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    insertNavigation();
    setupNavToggle();
});
