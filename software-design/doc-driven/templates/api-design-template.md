# API設計書: {プロジェクト名}

> 作成日: {YYYY-MM-DD}
> 作成者: {担当者名}
> APIバージョン: {v1}

---

## 1. 基本情報

| 項目 | 内容 |
|------|------|
| ベースURL | `http://localhost:8080/api/v1` |
| 認証方式 | {セッション / JWT Bearer Token / なし} |
| レスポンス形式 | JSON |
| 文字コード | UTF-8 |

---

## 2. 共通仕様

### 2.1 リクエストヘッダー

| ヘッダー | 値 | 必須 | 説明 |
|---------|-----|------|------|
| Content-Type | application/json | はい | リクエストボディの形式 |
| Authorization | Bearer {token} | {認証が必要な場合} | 認証トークン |

### 2.2 共通レスポンス形式

**成功時:**
```json
{
  "status": "success",
  "data": { ... },
  "message": "操作が完了しました"
}
```

**エラー時:**
```json
{
  "status": "error",
  "error": {
    "code": "ERROR_CODE",
    "message": "エラーメッセージ"
  }
}
```

### 2.3 ページネーション

```json
{
  "status": "success",
  "data": [ ... ],
  "pagination": {
    "page": 1,
    "size": 20,
    "totalPages": 5,
    "totalElements": 100
  }
}
```

---

## 3. エンドポイント一覧

| # | メソッド | パス | 概要 | 認証 |
|---|---------|------|------|------|
| 1 | GET | /{resources} | {リソース}一覧取得 | {要/不要} |
| 2 | GET | /{resources}/{id} | {リソース}詳細取得 | {要/不要} |
| 3 | POST | /{resources} | {リソース}新規作成 | {要/不要} |
| 4 | PUT | /{resources}/{id} | {リソース}更新 | {要/不要} |
| 5 | DELETE | /{resources}/{id} | {リソース}削除 | {要/不要} |

---

## 4. エンドポイント詳細

### 4.1 GET /{resources} - {リソース}一覧取得

**リクエスト:**

| パラメータ | 型 | 必須 | 説明 | 例 |
|-----------|-----|------|------|----|
| page | Integer | いいえ | ページ番号（0始まり） | 0 |
| size | Integer | いいえ | 1ページの件数 | 20 |
| sort | String | いいえ | ソート項目 | createdAt,desc |
| {検索項目} | String | いいえ | {検索条件の説明} | {例} |

**レスポンス: 200 OK**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "{field1}": "{value1}",
      "{field2}": "{value2}",
      "createdAt": "2026-01-01T00:00:00",
      "updatedAt": "2026-01-01T00:00:00"
    }
  ],
  "pagination": {
    "page": 0,
    "size": 20,
    "totalPages": 1,
    "totalElements": 1
  }
}
```

### 4.2 GET /{resources}/{id} - {リソース}詳細取得

**パスパラメータ:**

| パラメータ | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| id | Long | はい | {リソース}ID |

**レスポンス: 200 OK**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "{field1}": "{value1}",
    "{field2}": "{value2}",
    "createdAt": "2026-01-01T00:00:00",
    "updatedAt": "2026-01-01T00:00:00"
  }
}
```

**レスポンス: 404 Not Found**
```json
{
  "status": "error",
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "{リソース}が見つかりません (id: 1)"
  }
}
```

### 4.3 POST /{resources} - {リソース}新規作成

**リクエストボディ:**
```json
{
  "{field1}": "{value1}",
  "{field2}": "{value2}"
}
```

| フィールド | 型 | 必須 | バリデーション | 説明 |
|-----------|-----|------|---------------|------|
| {field1} | String | はい | 1-100文字 | {説明} |
| {field2} | String | いいえ | 最大500文字 | {説明} |

**レスポンス: 201 Created**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "{field1}": "{value1}",
    "{field2}": "{value2}",
    "createdAt": "2026-01-01T00:00:00"
  },
  "message": "{リソース}を作成しました"
}
```

**レスポンス: 400 Bad Request**
```json
{
  "status": "error",
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "入力値が不正です",
    "details": [
      { "field": "{field1}", "message": "{field1}は必須です" }
    ]
  }
}
```

### 4.4 PUT /{resources}/{id} - {リソース}更新

**パスパラメータ:**

| パラメータ | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| id | Long | はい | {リソース}ID |

**リクエストボディ:**
```json
{
  "{field1}": "{更新後の値}",
  "{field2}": "{更新後の値}"
}
```

**レスポンス: 200 OK**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "{field1}": "{更新後の値}",
    "{field2}": "{更新後の値}",
    "updatedAt": "2026-01-02T00:00:00"
  },
  "message": "{リソース}を更新しました"
}
```

### 4.5 DELETE /{resources}/{id} - {リソース}削除

**パスパラメータ:**

| パラメータ | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| id | Long | はい | {リソース}ID |

**レスポンス: 200 OK**
```json
{
  "status": "success",
  "message": "{リソース}を削除しました"
}
```

**レスポンス: 404 Not Found**
```json
{
  "status": "error",
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "{リソース}が見つかりません (id: 1)"
  }
}
```

---

## 5. エラーコード一覧

| エラーコード | HTTPステータス | 説明 | 対処法 |
|-------------|---------------|------|--------|
| VALIDATION_ERROR | 400 | 入力値バリデーションエラー | detailsのfield/messageを確認 |
| UNAUTHORIZED | 401 | 認証エラー | ログインし直す |
| FORBIDDEN | 403 | 権限不足 | 管理者に権限を依頼 |
| RESOURCE_NOT_FOUND | 404 | リソースが存在しない | IDを確認 |
| DUPLICATE_ENTRY | 409 | 重複エラー | 一意制約の項目を確認 |
| INTERNAL_ERROR | 500 | サーバー内部エラー | サーバーログを確認 |

---

## 改訂履歴

| バージョン | 日付 | 変更内容 | 担当者 |
|------------|------|----------|--------|
| 1.0 | {YYYY-MM-DD} | 初版作成 | {担当者名} |
