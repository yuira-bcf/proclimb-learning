/**
 * 共通フッター
 * 全ページで読み込み
 */

// フッターデータ
const footerData = {
    categories: [
        {
            title: "フロントエンド",
            links: [
                { href: "html/index.html", text: "HTML/CSS入門" },
                { href: "javascript/index.html", text: "JavaScript入門" }
            ]
        },
        {
            title: "バックエンド",
            links: [
                { href: "java/index.html", text: "Java基礎" },
                { href: "spring/index.html", text: "Spring基礎" },
                { href: "system-dev/index.html", text: "システム開発概論" }
            ]
        },
        {
            title: "AI・自動化",
            links: [
                { href: "promptpg-step/index.html", text: "プロンプトプログラミング" },
                { href: "chatgpt/index.html", text: "ChatGPT活用" }
            ]
        },
        {
            title: "デザイン",
            links: [
                { href: "uiux/index.html", text: "UI/UX概論" },
                { href: "figma/index.html", text: "Figma入門" }
            ]
        },
        {
            title: "ビジネス",
            links: [
                { href: "security/index.html", text: "情報セキュリティ" },
                { href: "ga4/index.html", text: "GA4入門" },
                { href: "marketing/index.html", text: "マーケティング入門" }
            ]
        }
    ],
    legal: [
        { href: "#", text: "プライバシーポリシー" },
        { href: "#", text: "利用規約" },
        { href: "#", text: "サイトマップ" }
    ],
    copyright: "Copyright © 2025 Tutorial Dashboard. All rights reserved."
};

// ベースパスを取得
function getFooterBasePath() {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(p => p);
    const tutorialsIndex = pathParts.indexOf('tutorials');
    if (tutorialsIndex === -1) return '';

    const depth = pathParts.length - tutorialsIndex - 1;
    if (depth === 0) return '';
    if (depth === 1) return '../';
    return '../'.repeat(depth);
}

// フッターHTMLを生成
function generateFooterHTML() {
    const basePath = getFooterBasePath();

    // カテゴリカラムを生成
    const categoryCols = footerData.categories.map(cat => {
        const links = cat.links.map(link => {
            return `<a href="${basePath}${link.href}">${link.text}</a>`;
        }).join('\n                ');

        return `
            <div class="footer-col">
                <h4>${cat.title}</h4>
                ${links}
            </div>`;
    }).join('');

    // 法的リンクを生成
    const legalLinks = footerData.legal.map(link => {
        return `<a href="${link.href}">${link.text}</a>`;
    }).join('\n                ');

    return `
        <div class="footer-main">
            <div class="footer-main-inner">
                ${categoryCols}
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottom-inner">
                <span class="footer-copy">${footerData.copyright}</span>
                <div class="footer-legal">
                    ${legalLinks}
                </div>
            </div>
        </div>
    `;
}

// フッターを挿入
function insertFooter() {
    const footerElement = document.querySelector('.global-footer');
    if (footerElement) {
        footerElement.innerHTML = generateFooterHTML();
    }
}

// DOMContentLoaded時にフッターを挿入
document.addEventListener('DOMContentLoaded', insertFooter);
