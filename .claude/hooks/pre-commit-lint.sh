#!/bin/bash
# Pre-commit HTML Lint Hook
# git commit コマンド実行時にステージされたHTMLファイルを検証する

# stdin から tool input を読み取り
INPUT=$(cat)

# git commit コマンド以外はスキップ
if ! echo "$INPUT" | grep -q '"command".*git commit'; then
  exit 0
fi

ERRORS=0
ERROR_MSG=""

# ステージされたHTMLファイルを取得
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM 2>/dev/null | grep '\.html$')

if [ -z "$STAGED_FILES" ]; then
  exit 0
fi

for FILE in $STAGED_FILES; do
  if [ ! -f "$FILE" ]; then
    continue
  fi

  # 1. </html> 閉じタグの確認
  if ! grep -q '</html>' "$FILE"; then
    ERROR_MSG="$ERROR_MSG\n  - $FILE: </html> 閉じタグがありません"
    ERRORS=$((ERRORS + 1))
  fi

  # 2. charset meta の確認
  if ! grep -q 'charset="UTF-8"\|charset=UTF-8' "$FILE"; then
    ERROR_MSG="$ERROR_MSG\n  - $FILE: <meta charset=\"UTF-8\"> がありません"
    ERRORS=$((ERRORS + 1))
  fi

  # 3. Material Icons CSS の確認（index.html以外の章ファイル）
  BASENAME=$(basename "$FILE")
  if [ "$BASENAME" != "index.html" ] && echo "$FILE" | grep -qv 'shared/'; then
    if ! grep -q 'Material+Icons\|material-icons' "$FILE"; then
      ERROR_MSG="$ERROR_MSG\n  - $FILE: Material Icons CSS が読み込まれていません"
      ERRORS=$((ERRORS + 1))
    fi
  fi
done

if [ $ERRORS -gt 0 ]; then
  echo "[HTML Lint] $ERRORS 件の問題が検出されました:$ERROR_MSG"
  exit 1
fi

exit 0
