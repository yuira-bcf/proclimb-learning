// ========== Sidebar HTML Template ==========
const sidebarHTML = `
<aside class="sidebar" id="sidebar">
  <a href="../../../index.html" class="sidebar-back" style="display: flex; align-items: center; gap: 8px; padding: 12px 20px; color: #c2c7d0; text-decoration: none; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <span class="material-icons" style="font-size: 18px;">arrow_back</span>
    戻る
  </a>
  <a href="sample-3-dashboard.html" class="sidebar-brand">
    <span class="material-icons">dashboard</span>
    UI Panel
  </a>

  <div class="sidebar-user">
    <div class="sidebar-user-avatar">
      <span class="material-icons">person</span>
    </div>
    <div class="sidebar-user-info">
      <div class="sidebar-user-name">EDIX</div>
      <div class="sidebar-user-role">AIスクール</div>
    </div>
  </div>

  <nav class="sidebar-nav">
    <!-- 1. ダッシュボード・基本 -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">1</span>
        <span class="material-icons">dashboard</span>
        ダッシュボード・基本
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="sample-3-dashboard.html" class="sidebar-item" data-page="sample-3-dashboard"><span class="sidebar-num">1-1</span>ダッシュボード</a>
        <a href="starter.html" class="sidebar-item" data-page="starter"><span class="sidebar-num">1-2</span>スターターページ</a>
        <a href="blank.html" class="sidebar-item" data-page="blank"><span class="sidebar-num">1-3</span>空白ページ</a>
        <a href="widgets.html" class="sidebar-item" data-page="widgets"><span class="sidebar-num">1-4</span>ウィジェット</a>
      </div>
    </div>

    <!-- 2. チャート -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">2</span>
        <span class="material-icons">bar_chart</span>
        チャート
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="charts.html" class="sidebar-item" data-page="charts"><span class="sidebar-num">2-1</span>概要</a>
        <a href="charts-line.html" class="sidebar-item" data-page="charts-line"><span class="sidebar-num">2-2</span>折れ線グラフ</a>
        <a href="charts-bar.html" class="sidebar-item" data-page="charts-bar"><span class="sidebar-num">2-3</span>棒グラフ</a>
        <a href="charts-pie.html" class="sidebar-item" data-page="charts-pie"><span class="sidebar-num">2-4</span>円グラフ</a>
        <a href="charts-polar.html" class="sidebar-item" data-page="charts-polar"><span class="sidebar-num">2-5</span>極座標グラフ</a>
        <a href="charts-radar.html" class="sidebar-item" data-page="charts-radar"><span class="sidebar-num">2-6</span>レーダーチャート</a>
        <a href="charts-scatter.html" class="sidebar-item" data-page="charts-scatter"><span class="sidebar-num">2-7</span>散布図</a>
      </div>
    </div>

    <!-- 3. フォーム -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">3</span>
        <span class="material-icons">edit_note</span>
        フォーム
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="forms.html" class="sidebar-item" data-page="forms"><span class="sidebar-num">3-1</span>基本フォーム</a>
        <a href="forms-advanced.html" class="sidebar-item" data-page="forms-advanced"><span class="sidebar-num">3-2</span>高度なフォーム</a>
        <a href="forms-editor.html" class="sidebar-item" data-page="forms-editor"><span class="sidebar-num">3-3</span>エディター</a>
        <a href="forms-validation.html" class="sidebar-item" data-page="forms-validation"><span class="sidebar-num">3-4</span>バリデーション</a>
      </div>
    </div>

    <!-- 4. テーブル -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">4</span>
        <span class="material-icons">table_chart</span>
        テーブル
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="tables.html" class="sidebar-item" data-page="tables"><span class="sidebar-num">4-1</span>基本テーブル</a>
        <a href="tables-datatables.html" class="sidebar-item" data-page="tables-datatables"><span class="sidebar-num">4-2</span>DataTables</a>
        <a href="tables-jsgrid.html" class="sidebar-item" data-page="tables-jsgrid"><span class="sidebar-num">4-3</span>jsGrid</a>
      </div>
    </div>

    <!-- 5. UIコンポーネント -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">5</span>
        <span class="material-icons">palette</span>
        UIコンポーネント
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="ui-general.html" class="sidebar-item" data-page="ui-general"><span class="sidebar-num">5-1</span>汎用UI</a>
        <a href="ui-buttons.html" class="sidebar-item" data-page="ui-buttons"><span class="sidebar-num">5-2</span>ボタン</a>
        <a href="ui-icons.html" class="sidebar-item" data-page="ui-icons"><span class="sidebar-num">5-3</span>アイコン</a>
        <a href="ui-modals.html" class="sidebar-item" data-page="ui-modals"><span class="sidebar-num">5-4</span>モーダル</a>
        <a href="ui-navbar-tabs.html" class="sidebar-item" data-page="ui-navbar-tabs"><span class="sidebar-num">5-5</span>ナビバー・タブ</a>
        <a href="ui-ribbons.html" class="sidebar-item" data-page="ui-ribbons"><span class="sidebar-num">5-6</span>リボン</a>
        <a href="ui-sliders.html" class="sidebar-item" data-page="ui-sliders"><span class="sidebar-num">5-7</span>スライダー</a>
        <a href="ui-timeline.html" class="sidebar-item" data-page="ui-timeline"><span class="sidebar-num">5-8</span>タイムライン</a>
      </div>
    </div>

    <!-- 6. レイアウト -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">6</span>
        <span class="material-icons">view_quilt</span>
        レイアウト
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="layout-topnav.html" class="sidebar-item" data-page="layout-topnav"><span class="sidebar-num">6-1</span>トップナビ</a>
        <a href="layout-boxed.html" class="sidebar-item" data-page="layout-boxed"><span class="sidebar-num">6-2</span>ボックスレイアウト</a>
        <a href="layout-fixed-sidebar.html" class="sidebar-item" data-page="layout-fixed-sidebar"><span class="sidebar-num">6-3</span>固定サイドバー</a>
        <a href="layout-fixed-navbar.html" class="sidebar-item" data-page="layout-fixed-navbar"><span class="sidebar-num">6-4</span>固定ナビバー</a>
        <a href="layout-fixed-footer.html" class="sidebar-item" data-page="layout-fixed-footer"><span class="sidebar-num">6-5</span>固定フッター</a>
        <a href="layout-collapsed-sidebar.html" class="sidebar-item" data-page="layout-collapsed-sidebar"><span class="sidebar-num">6-6</span>折りたたみサイドバー</a>
        <a href="sidebar.html" class="sidebar-item" data-page="sidebar"><span class="sidebar-num">6-7</span>サイドバー</a>
      </div>
    </div>

    <!-- 7. ページ -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">7</span>
        <span class="material-icons">article</span>
        ページ
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="pages-profile.html" class="sidebar-item" data-page="pages-profile"><span class="sidebar-num">7-1</span>プロフィール</a>
        <a href="pages-invoice.html" class="sidebar-item" data-page="pages-invoice"><span class="sidebar-num">7-2</span>請求書</a>
        <a href="pages-projects.html" class="sidebar-item" data-page="pages-projects"><span class="sidebar-num">7-3</span>プロジェクト</a>
        <a href="pages-contacts.html" class="sidebar-item" data-page="pages-contacts"><span class="sidebar-num">7-4</span>連絡先一覧</a>
        <a href="pages-contact.html" class="sidebar-item" data-page="pages-contact"><span class="sidebar-num">7-5</span>お問い合わせ</a>
        <a href="pages-faq.html" class="sidebar-item" data-page="pages-faq"><span class="sidebar-num">7-6</span>FAQ</a>
        <a href="pages-ecommerce.html" class="sidebar-item" data-page="pages-ecommerce"><span class="sidebar-num">7-7</span>Eコマース</a>
      </div>
    </div>

    <!-- 8. 認証 -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">8</span>
        <span class="material-icons">lock</span>
        認証
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="login.html" class="sidebar-item" data-page="login"><span class="sidebar-num">8-1</span>ログイン v1</a>
        <a href="login-v2.html" class="sidebar-item" data-page="login-v2"><span class="sidebar-num">8-2</span>ログイン v2</a>
        <a href="register.html" class="sidebar-item" data-page="register"><span class="sidebar-num">8-3</span>会員登録 v1</a>
        <a href="register-v2.html" class="sidebar-item" data-page="register-v2"><span class="sidebar-num">8-4</span>会員登録 v2</a>
        <a href="forgot-password.html" class="sidebar-item" data-page="forgot-password"><span class="sidebar-num">8-5</span>パスワード忘れ v1</a>
        <a href="forgot-password-v2.html" class="sidebar-item" data-page="forgot-password-v2"><span class="sidebar-num">8-6</span>パスワード忘れ v2</a>
        <a href="recover-password.html" class="sidebar-item" data-page="recover-password"><span class="sidebar-num">8-7</span>パスワード再設定 v1</a>
        <a href="recover-password-v2.html" class="sidebar-item" data-page="recover-password-v2"><span class="sidebar-num">8-8</span>パスワード再設定 v2</a>
        <a href="lockscreen.html" class="sidebar-item" data-page="lockscreen"><span class="sidebar-num">8-9</span>ロック画面</a>
      </div>
    </div>

    <!-- 9. ギャラリー -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">9</span>
        <span class="material-icons">photo_library</span>
        ギャラリー
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="gallery-hero.html" class="sidebar-item" data-page="gallery-hero"><span class="sidebar-num">9-1</span>ヒーローギャラリー</a>
        <a href="gallery-instagram.html" class="sidebar-item" data-page="gallery-instagram"><span class="sidebar-num">9-2</span>Instagramスタイル</a>
        <a href="gallery-banner.html" class="sidebar-item" data-page="gallery-banner"><span class="sidebar-num">9-3</span>バナーギャラリー</a>
        <a href="gallery-youtube.html" class="sidebar-item" data-page="gallery-youtube"><span class="sidebar-num">9-4</span>YouTubeスタイル</a>
      </div>
    </div>

    <!-- 10. ユーティリティ -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">10</span>
        <span class="material-icons">build</span>
        ユーティリティ
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="calendar.html" class="sidebar-item" data-page="calendar"><span class="sidebar-num">10-1</span>カレンダー</a>
        <a href="chat.html" class="sidebar-item" data-page="chat"><span class="sidebar-num">10-2</span>チャット</a>
        <a href="kanban.html" class="sidebar-item" data-page="kanban"><span class="sidebar-num">10-3</span>かんばんボード</a>
        <a href="search.html" class="sidebar-item" data-page="search"><span class="sidebar-num">10-4</span>検索</a>
        <a href="pace.html" class="sidebar-item" data-page="pace"><span class="sidebar-num">10-5</span>ローディング</a>
        <a href="language-menu.html" class="sidebar-item" data-page="language-menu"><span class="sidebar-num">10-6</span>言語メニュー</a>
        <a href="legacy-user-menu.html" class="sidebar-item" data-page="legacy-user-menu"><span class="sidebar-num">10-7</span>ユーザーメニュー</a>
      </div>
    </div>

    <!-- 11. エラーページ -->
    <div class="sidebar-menu-item">
      <button class="sidebar-menu-toggle">
        <span class="sidebar-num">11</span>
        <span class="material-icons">error</span>
        エラーページ
        <span class="material-icons menu-arrow">chevron_right</span>
      </button>
      <div class="sidebar-submenu">
        <a href="error-404.html" class="sidebar-item" data-page="error-404"><span class="sidebar-num">11-1</span>404 Not Found</a>
        <a href="error-500.html" class="sidebar-item" data-page="error-500"><span class="sidebar-num">11-2</span>500 Server Error</a>
      </div>
    </div>

    <a href="sitemap.html" class="sidebar-item" data-page="sitemap">
      <span class="material-icons">account_tree</span>
      サイトマップ
    </a>
  </nav>
</aside>
<div class="sidebar-overlay" id="sidebarOverlay"></div>
`;

// ========== Load Sidebar ==========
function loadSidebar() {
  const container = document.getElementById('sidebar-container');
  if (!container) return;

  // Insert sidebar HTML
  container.innerHTML = sidebarHTML;

  // Set active state based on current page
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  const activeItem = document.querySelector(`[data-page="${currentPage}"]`);
  if (activeItem) {
    activeItem.classList.add('active');
    // Open parent accordion if exists
    const parentMenu = activeItem.closest('.sidebar-menu-item');
    if (parentMenu) {
      parentMenu.classList.add('open');
    }
  }

  // Initialize sidebar functionality after loading
  initSidebar();
}

// ========== Initialize Sidebar ==========
function initSidebar() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  function openSidebar() {
    if (sidebar) {
      sidebar.classList.add('active');
    }
    if (sidebarOverlay) {
      sidebarOverlay.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) {
      sidebar.classList.remove('active');
    }
    if (sidebarOverlay) {
      sidebarOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (sidebar && sidebar.classList.contains('active')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on window resize (desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      closeSidebar();
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
      closeSidebar();
    }
  });

  // ========== Accordion Menu ==========
  const menuToggles = document.querySelectorAll('.sidebar-menu-toggle');
  menuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const menuItem = toggle.parentElement;
      const isNested = menuItem.classList.contains('nested');

      if (!isNested) {
        // Close all other top-level menus (not nested ones)
        document.querySelectorAll('.sidebar-menu-item.open:not(.nested)').forEach(item => {
          if (item !== menuItem) {
            item.classList.remove('open');
            // Also close nested menus inside
            item.querySelectorAll('.sidebar-menu-item.nested.open').forEach(nested => {
              nested.classList.remove('open');
            });
          }
        });
      } else {
        // For nested menus, close sibling nested menus
        const parentSubmenu = menuItem.closest('.sidebar-submenu');
        if (parentSubmenu) {
          parentSubmenu.querySelectorAll('.sidebar-menu-item.nested.open').forEach(item => {
            if (item !== menuItem) {
              item.classList.remove('open');
            }
          });
        }
      }

      // Toggle current menu
      menuItem.classList.toggle('open');
    });
  });

  // ========== Active Sidebar Item ==========
  const sidebarItems = document.querySelectorAll('.sidebar-item:not(.sidebar-submenu .sidebar-item)');
  sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
      // Only handle if it's a simple nav item (not inside accordion)
      if (!this.closest('.sidebar-submenu')) {
        sidebarItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
}

// Load sidebar on DOM ready
document.addEventListener('DOMContentLoaded', loadSidebar);

// ========== Prompt Modal ==========
// Prompt data for each page
const promptData = {};

// Initialize prompt modal functionality
function initPromptModal() {
  // Create modal HTML if not exists
  if (!document.getElementById('promptModalOverlay')) {
    const modalHTML = `
      <div class="prompt-modal-overlay" id="promptModalOverlay">
        <div class="prompt-modal">
          <div class="prompt-modal-header">
            <div class="prompt-modal-title">
              <span class="material-icons">auto_awesome</span>
              <span>生成プロンプト</span>
            </div>
            <button class="prompt-modal-close" id="promptModalClose">
              <span class="material-icons">close</span>
            </button>
          </div>
          <div class="prompt-modal-body">
            <div class="prompt-content" id="promptContent"></div>
          </div>
          <div class="prompt-modal-footer">
            <button class="prompt-modal-btn secondary" id="promptModalCancel">
              閉じる
            </button>
            <button class="prompt-modal-btn primary" id="promptCopyBtn">
              <span class="material-icons">content_copy</span>
              コピー
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Add event listeners
    const overlay = document.getElementById('promptModalOverlay');
    const closeBtn = document.getElementById('promptModalClose');
    const cancelBtn = document.getElementById('promptModalCancel');
    const copyBtn = document.getElementById('promptCopyBtn');

    closeBtn.addEventListener('click', closePromptModal);
    cancelBtn.addEventListener('click', closePromptModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePromptModal();
    });

    copyBtn.addEventListener('click', () => {
      const content = document.getElementById('promptContent').textContent;
      navigator.clipboard.writeText(content).then(() => {
        showCopySuccess();
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closePromptModal();
      }
    });
  }
}

function openPromptModal(pageId) {
  const overlay = document.getElementById('promptModalOverlay');
  const contentEl = document.getElementById('promptContent');

  // Get prompt content from data attribute or promptData
  const promptBtn = document.querySelector(`[data-prompt-id="${pageId}"]`);
  let content = promptBtn ? promptBtn.dataset.prompt : '';

  if (!content && promptData[pageId]) {
    content = promptData[pageId];
  }

  if (!content) {
    content = 'プロンプト情報がありません。';
  }

  contentEl.textContent = content;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePromptModal() {
  const overlay = document.getElementById('promptModalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function showCopySuccess() {
  // Remove existing message
  const existing = document.querySelector('.copy-success');
  if (existing) existing.remove();

  const message = document.createElement('div');
  message.className = 'copy-success';
  message.innerHTML = '<span class="material-icons">check_circle</span>コピーしました';
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', initPromptModal);

// ========== Source Modal ==========
// Current source data
let currentSourceData = {
  html: '',
  css: '',
  js: ''
};

// Initialize source modal functionality
function initSourceModal() {
  // Create modal HTML if not exists
  if (!document.getElementById('sourceModalOverlay')) {
    const modalHTML = `
      <div class="source-modal-overlay" id="sourceModalOverlay">
        <div class="source-modal">
          <div class="source-modal-header">
            <div class="source-modal-title">
              <span class="material-icons">code</span>
              <span>ソースコード</span>
            </div>
            <button class="source-modal-close" id="sourceModalClose">
              <span class="material-icons">close</span>
            </button>
          </div>
          <div class="source-tabs">
            <button class="source-tab active" data-tab="html">
              <span class="material-icons">html</span>
              HTML
            </button>
            <button class="source-tab" data-tab="css">
              <span class="material-icons">css</span>
              CSS
            </button>
            <button class="source-tab" data-tab="js">
              <span class="material-icons">javascript</span>
              JavaScript
            </button>
          </div>
          <div class="source-modal-body">
            <div class="source-panel active" id="sourcePanel-html">
              <div class="source-code">
                <div class="source-code-header">
                  <div class="source-code-label">
                    <span class="material-icons">html</span>
                    HTML
                  </div>
                  <div class="source-code-actions">
                    <button class="source-action-btn" onclick="copySourceCode('html')">
                      <span class="material-icons">content_copy</span>
                      コピー
                    </button>
                    <button class="source-action-btn" onclick="downloadSourceCode('html')">
                      <span class="material-icons">download</span>
                      ダウンロード
                    </button>
                  </div>
                </div>
                <pre id="sourceCode-html"></pre>
              </div>
            </div>
            <div class="source-panel" id="sourcePanel-css">
              <div class="source-code">
                <div class="source-code-header">
                  <div class="source-code-label">
                    <span class="material-icons">css</span>
                    CSS
                  </div>
                  <div class="source-code-actions">
                    <button class="source-action-btn" onclick="copySourceCode('css')">
                      <span class="material-icons">content_copy</span>
                      コピー
                    </button>
                    <button class="source-action-btn" onclick="downloadSourceCode('css')">
                      <span class="material-icons">download</span>
                      ダウンロード
                    </button>
                  </div>
                </div>
                <pre id="sourceCode-css"></pre>
              </div>
            </div>
            <div class="source-panel" id="sourcePanel-js">
              <div class="source-code">
                <div class="source-code-header">
                  <div class="source-code-label">
                    <span class="material-icons">javascript</span>
                    JavaScript
                  </div>
                  <div class="source-code-actions">
                    <button class="source-action-btn" onclick="copySourceCode('js')">
                      <span class="material-icons">content_copy</span>
                      コピー
                    </button>
                    <button class="source-action-btn" onclick="downloadSourceCode('js')">
                      <span class="material-icons">download</span>
                      ダウンロード
                    </button>
                  </div>
                </div>
                <pre id="sourceCode-js"></pre>
              </div>
            </div>
          </div>
          <div class="source-modal-footer">
            <button class="source-download-all" onclick="downloadAllSources()">
              <span class="material-icons">folder_zip</span>
              全てダウンロード
            </button>
            <button class="source-modal-close-btn" id="sourceModalCancel">
              閉じる
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Add event listeners
    const overlay = document.getElementById('sourceModalOverlay');
    const closeBtn = document.getElementById('sourceModalClose');
    const cancelBtn = document.getElementById('sourceModalCancel');
    const tabs = document.querySelectorAll('.source-tab');

    closeBtn.addEventListener('click', closeSourceModal);
    cancelBtn.addEventListener('click', closeSourceModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSourceModal();
    });

    // Tab switching
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        switchSourceTab(tab.dataset.tab);
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeSourceModal();
      }
    });
  }
}

function openSourceModal(sectionId) {
  const overlay = document.getElementById('sourceModalOverlay');

  // Find the source button and its parent card
  const sourceBtn = document.querySelector(`[data-source-id="${sectionId}"]`);
  if (!sourceBtn) {
    console.error('Source button not found:', sectionId);
    return;
  }

  // Find the closest card element
  const card = sourceBtn.closest('.card');
  if (!card) {
    console.error('Card element not found');
    return;
  }

  // Extract HTML - clone card and remove buttons
  const cardClone = card.cloneNode(true);
  // Remove prompt and source buttons from clone
  cardClone.querySelectorAll('.prompt-btn, .source-btn').forEach(btn => btn.remove());

  // Get card title for page title
  const cardTitle = card.querySelector('.card-title');
  const titleText = cardTitle ? cardTitle.textContent.replace(/プロンプト|ソース/g, '').trim() : 'サンプル';

  // Format card inner HTML
  let cardInnerHTML = cardClone.innerHTML;

  // Extract inline styles from the card
  let cssCode = extractRelevantCSS(card);

  // Extract JavaScript - look for script in card or data attribute
  let jsCode = '';
  const scriptEl = card.querySelector('script');
  if (scriptEl) {
    jsCode = scriptEl.textContent.trim();
  }

  // Check for Chart.js or other inline scripts
  const chartCanvas = card.querySelector('canvas');
  let hasChartJS = !!chartCanvas;
  if (chartCanvas && !jsCode) {
    // Look for script after the card
    let nextSibling = card.nextElementSibling;
    while (nextSibling && nextSibling.tagName !== 'SCRIPT') {
      nextSibling = nextSibling.nextElementSibling;
    }
    if (nextSibling && nextSibling.tagName === 'SCRIPT') {
      jsCode = nextSibling.textContent.trim();
    }
  }

  // If no JS found, check data attribute
  if (!jsCode && sourceBtn.dataset.sourceJs) {
    jsCode = sourceBtn.dataset.sourceJs;
  }

  // Generate full HTML document
  const fullHTML = generateFullHTML(titleText, cardInnerHTML, jsCode, hasChartJS);

  // Store current source data
  currentSourceData = {
    html: fullHTML,
    css: cssCode || '/* このセクションに固有のCSSはありません */\n/* 共通スタイルは common.css をご参照ください */',
    js: jsCode || '// このセクションにJavaScriptはありません'
  };

  // Display in modal
  document.getElementById('sourceCode-html').textContent = currentSourceData.html;
  document.getElementById('sourceCode-css').textContent = currentSourceData.css;
  document.getElementById('sourceCode-js').textContent = currentSourceData.js;

  // Reset to HTML tab
  switchSourceTab('html');

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function generateFullHTML(title, cardContent, jsCode, hasChartJS) {
  const chartJSScript = hasChartJS ? '\n  <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>' : '';
  const inlineScript = jsCode ? `\n  <script>\n${indentJSCode(jsCode, 4)}\n  <\/script>` : '';

  // Format card content
  const formattedCardContent = formatCardContent(cardContent);

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
  <!-- Material Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Common CSS -->
  <link rel="stylesheet" href="common.css">
</head>
<body>
  <div class="card">
${formattedCardContent}
  </div>${chartJSScript}${inlineScript}
</body>
</html>`;
}

function formatCardContent(content) {
  // Clean up content first
  content = content.replace(/\s+/g, ' ').trim();

  let formatted = '';
  let indent = 2; // Start with 2 levels of indentation (inside body > card)

  // Split by tags while preserving them
  const parts = content.split(/(<[^>]+>)/);

  parts.forEach(part => {
    part = part.trim();
    if (!part) return;

    if (part.startsWith('<')) {
      const isClosing = part.startsWith('</');
      const isSelfClosing = part.endsWith('/>') || /^<(br|hr|img|input|meta|link|area|base|col|embed|source|track|wbr|canvas)/i.test(part);

      if (isClosing) {
        indent = Math.max(2, indent - 1);
      }

      formatted += '  '.repeat(indent) + part + '\n';

      if (!isClosing && !isSelfClosing && !part.includes('</')) {
        indent++;
      }
    } else {
      // Text content
      if (part.trim()) {
        formatted += '  '.repeat(indent) + part.trim() + '\n';
      }
    }
  });

  return formatted.trimEnd();
}

function indentJSCode(code, spaces) {
  const indent = ' '.repeat(spaces);
  return code.split('\n').map(line => indent + line).join('\n');
}

function closeSourceModal() {
  const overlay = document.getElementById('sourceModalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function switchSourceTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.source-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });

  // Update panels
  document.querySelectorAll('.source-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `sourcePanel-${tabName}`);
  });
}

function copySourceCode(type) {
  const content = currentSourceData[type];
  navigator.clipboard.writeText(content).then(() => {
    showCopySuccess();
  });
}

function downloadSourceCode(type) {
  const content = currentSourceData[type];
  const filenames = { html: 'index.html', css: 'common.css', js: 'script.js' };
  const mimeTypes = { html: 'text/html', css: 'text/css', js: 'application/javascript' };

  const blob = new Blob([content], { type: mimeTypes[type] });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filenames[type];
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showDownloadSuccess();
}

function downloadAllSources() {
  // Download each file
  ['html', 'css', 'js'].forEach((type, index) => {
    setTimeout(() => {
      downloadSourceCode(type);
    }, index * 300);
  });
}

function showDownloadSuccess() {
  // Remove existing message
  const existing = document.querySelector('.download-success');
  if (existing) existing.remove();

  const message = document.createElement('div');
  message.className = 'download-success';
  message.innerHTML = '<span class="material-icons">check_circle</span>ダウンロードしました';
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
}

function formatHTML(html) {
  // Clean up whitespace and format HTML
  html = html.replace(/\s+/g, ' ').trim();

  let formatted = '';
  let indent = 0;

  // Split by tags while preserving them
  const parts = html.split(/(<[^>]+>)/);

  parts.forEach(part => {
    part = part.trim();
    if (!part) return;

    // Check if it's a tag
    if (part.startsWith('<')) {
      const isClosing = part.startsWith('</');
      const isSelfClosing = part.endsWith('/>') || /^<(br|hr|img|input|meta|link|area|base|col|embed|source|track|wbr)/i.test(part);

      if (isClosing) {
        indent = Math.max(0, indent - 1);
      }

      formatted += '  '.repeat(indent) + part + '\n';

      if (!isClosing && !isSelfClosing && !part.includes('</')) {
        indent++;
      }
    } else {
      // Text content
      if (part.trim()) {
        formatted += '  '.repeat(indent) + part.trim() + '\n';
      }
    }
  });

  return formatted.trim();
}

function extractRelevantCSS(element) {
  // Get computed styles for key properties
  const styles = window.getComputedStyle(element);
  const relevantProps = [
    'background', 'background-color', 'color', 'font-size', 'font-weight',
    'padding', 'margin', 'border', 'border-radius', 'box-shadow',
    'display', 'flex-direction', 'align-items', 'justify-content', 'gap'
  ];

  let css = '/* Card styles */\n.card {\n';
  relevantProps.forEach(prop => {
    const value = styles.getPropertyValue(prop);
    if (value && value !== 'none' && value !== 'normal' && value !== '0px') {
      css += `  ${prop}: ${value};\n`;
    }
  });
  css += '}\n';

  return css;
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', initSourceModal);
