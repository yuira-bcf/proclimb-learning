/**
 * チュートリアル共通 デモ表示機能
 * コードとプレビューの連動、コピー機能など
 */

// コピーボタンの機能
function initCopyButtons() {
    document.querySelectorAll('.demo-copy-btn').forEach(btn => {
        btn.addEventListener('click', async function() {
            const codeBlock = this.closest('.demo-code-section').querySelector('.demo-code-content code');
            if (!codeBlock) return;

            const code = codeBlock.textContent;

            try {
                await navigator.clipboard.writeText(code);
                this.textContent = 'コピー完了!';
                this.classList.add('copied');

                setTimeout(() => {
                    this.textContent = 'コピー';
                    this.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('コピーに失敗しました:', err);
            }
        });
    });
}

// タブ切り替え機能
function initDemoTabs() {
    document.querySelectorAll('.demo-tabs').forEach(tabsContainer => {
        const tabs = tabsContainer.querySelectorAll('.demo-tab');
        const demoContainer = tabsContainer.closest('.demo-container');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // アクティブタブの更新
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // コンテンツの切り替え
                const target = this.dataset.target;
                if (target && demoContainer) {
                    const sections = demoContainer.querySelectorAll('[data-tab-content]');
                    sections.forEach(section => {
                        section.style.display = section.dataset.tabContent === target ? 'block' : 'none';
                    });
                }
            });
        });
    });
}

// リフレッシュボタンの機能
function initRefreshButtons() {
    document.querySelectorAll('.demo-refresh-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const previewContent = this.closest('.demo-preview-section').querySelector('.demo-preview-content');
            const iframe = this.closest('.demo-preview-section').querySelector('.demo-iframe');

            if (iframe) {
                iframe.src = iframe.src;
            }

            if (previewContent) {
                // アニメーション効果
                previewContent.style.opacity = '0';
                setTimeout(() => {
                    previewContent.style.opacity = '1';
                }, 100);
            }
        });
    });
}

// サイズ切り替え機能（レスポンシブデモ用）
function initSizeControls() {
    document.querySelectorAll('.demo-size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const container = this.closest('.demo-container');
            const previewContent = container.querySelector('.demo-preview-content');
            const iframe = container.querySelector('.demo-iframe');
            const target = previewContent || iframe;

            if (!target) return;

            // ボタンのアクティブ状態更新
            this.closest('.demo-size-controls').querySelectorAll('.demo-size-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');

            // サイズ変更
            const size = this.dataset.size;
            switch(size) {
                case 'mobile':
                    target.style.maxWidth = '375px';
                    target.style.margin = '0 auto';
                    break;
                case 'tablet':
                    target.style.maxWidth = '768px';
                    target.style.margin = '0 auto';
                    break;
                case 'desktop':
                    target.style.maxWidth = '100%';
                    target.style.margin = '0';
                    break;
            }
        });
    });
}

// 編集可能なデモの初期化
function initEditableDemo() {
    document.querySelectorAll('.demo-editable').forEach(demo => {
        const codeArea = demo.querySelector('.demo-code-content');
        const previewArea = demo.querySelector('.demo-preview-content');

        if (!codeArea || !previewArea) return;

        // コードエリアを編集可能に
        codeArea.setAttribute('contenteditable', 'true');
        codeArea.style.outline = 'none';

        // リアルタイムプレビュー更新
        let updateTimeout;
        codeArea.addEventListener('input', function() {
            clearTimeout(updateTimeout);
            updateTimeout = setTimeout(() => {
                previewArea.innerHTML = this.textContent;
            }, 300);
        });
    });
}

// 比較デモのアニメーション
function initCompareDemo() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.demo-compare-item').forEach(item => {
        observer.observe(item);
    });
}

// プロンプトコピーボタンの機能
function initPromptCopyButtons() {
    document.querySelectorAll('.prompt-copy-btn').forEach(btn => {
        btn.addEventListener('click', async function() {
            const promptContent = this.closest('.prompt-box').querySelector('.prompt-box-content');
            if (!promptContent) return;

            const text = promptContent.textContent.trim();

            try {
                await navigator.clipboard.writeText(text);
                this.textContent = 'コピー完了!';
                this.classList.add('copied');

                setTimeout(() => {
                    this.textContent = 'コピー';
                    this.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('コピーに失敗しました:', err);
            }
        });
    });
}

// 全ての初期化を実行
document.addEventListener('DOMContentLoaded', function() {
    initCopyButtons();
    initDemoTabs();
    initRefreshButtons();
    initSizeControls();
    initEditableDemo();
    initCompareDemo();
    initPromptCopyButtons();
});
