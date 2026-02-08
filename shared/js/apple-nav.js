/**
 * Apple Design System - Global Navigation
 * 全ページ共通のグローバルナビゲーション + ハンバーガーメニュー
 *
 * 使い方:
 *   <nav class="apple-gnav" data-active="frontend"></nav>
 *   <script src="../../shared/js/apple-nav.js"></script>
 *
 * data-active: 現在のカテゴリ（"dashboard","frontend","backend","devtools","ai","design","business","exercises"）
 */

const appleNavData = {
    categories: [
        { id: "dashboard", href: "index.html",           text: "ダッシュボード" },
        { id: "frontend",  href: "index.html#frontend",  text: "フロントエンド" },
        { id: "backend",   href: "index.html#backend",   text: "バックエンド" },
        { id: "devtools",  href: "index.html#devtools",  text: "環境構築" },
        { id: "ai",        href: "index.html#ai",        text: "AI・自動化" },
        { id: "design",    href: "index.html#design",    text: "デザイン" },
        { id: "business",  href: "index.html#business",  text: "ビジネス" },
        { id: "exercises", href: "index.html#exercises",  text: "総合演習" }
    ]
};

(function () {
    // ベースパスを計算
    function getBasePath() {
        const scripts = document.querySelectorAll('script[src*="apple-nav.js"]');
        if (scripts.length > 0) {
            const src = scripts[scripts.length - 1].getAttribute('src');
            // "../../shared/js/apple-nav.js" → "../../"
            // "shared/js/apple-nav.js" → ""
            return src.replace('shared/js/apple-nav.js', '');
        }
        return '';
    }

    function generateAppleNav() {
        const nav = document.querySelector('.apple-gnav');
        if (!nav) return;

        const basePath = getBasePath();
        const activeId = nav.getAttribute('data-active') || '';

        // カテゴリリンク
        const links = appleNavData.categories.map(cat => {
            const href = basePath + cat.href;
            const cls = cat.id === activeId ? ' class="active"' : '';
            return `<a href="${href}"${cls}>${cat.text}</a>`;
        }).join('\n                ');

        // モバイルメニューリンク
        const mobileLinks = appleNavData.categories.map(cat => {
            const href = basePath + cat.href;
            const cls = cat.id === activeId ? ' class="active"' : '';
            return `<a href="${href}"${cls}>${cat.text}</a>`;
        }).join('\n        ');

        // グローバルナビHTML
        nav.innerHTML = `
        <div class="apple-gnav-inner">
            <a href="${basePath}index.html" class="apple-gnav-logo">
                <div class="logo-dot">T</div>
                Tutorial
            </a>
            <div class="apple-gnav-links">
                ${links}
            </div>
            <button class="hamburger-btn" aria-label="メニューを開く">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>`;

        // モバイルメニューを挿入（navの直後）
        let mobileMenu = document.getElementById('appleNavMobileMenu');
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.id = 'appleNavMobileMenu';
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = mobileLinks;
            nav.insertAdjacentElement('afterend', mobileMenu);
        }

        // ハンバーガーボタンのイベント
        const btn = nav.querySelector('.hamburger-btn');
        if (btn) {
            btn.addEventListener('click', function () {
                btn.classList.toggle('active');
                mobileMenu.classList.toggle('active');
            });
        }

        // モバイルメニュー内リンククリックで閉じる
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                btn.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // DOM準備後に実行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', generateAppleNav);
    } else {
        generateAppleNav();
    }
})();
