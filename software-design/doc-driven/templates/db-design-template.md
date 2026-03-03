# DB設計書: {プロジェクト名}

> 作成日: {YYYY-MM-DD}
> 作成者: {担当者名}
> 対象DB: {MySQL 8.0 / PostgreSQL 15 / H2 Database}

---

## 1. データベース基本情報

| 項目 | 内容 |
|------|------|
| データベース名 | {db_name} |
| 文字コード | UTF-8 (utf8mb4) |
| 照合順序 | {utf8mb4_general_ci} |
| スキーマ | {public / デフォルト} |

---

## 2. テーブル一覧

| # | テーブル名 | 論理名 | 概要 | 備考 |
|---|-----------|--------|------|------|
| 1 | {table_name_1} | {テーブル論理名} | {概要} | {備考} |
| 2 | {table_name_2} | {テーブル論理名} | {概要} | {備考} |
| 3 | {table_name_3} | {テーブル論理名} | {概要} | {備考} |

---

## 3. テーブル定義

### 3.1 {table_name_1}テーブル（{テーブル論理名}）

| # | カラム名 | 論理名 | 型 | 長さ | NULL | デフォルト | PK | 備考 |
|---|---------|--------|-----|------|------|-----------|-----|------|
| 1 | id | ID | BIGINT | - | NO | AUTO_INCREMENT | YES | 主キー |
| 2 | {column_name} | {論理名} | VARCHAR | {N} | {YES/NO} | {デフォルト値} | - | {備考} |
| 3 | {column_name} | {論理名} | TEXT | - | {YES/NO} | NULL | - | {備考} |
| 4 | {column_name} | {論理名} | BOOLEAN | - | NO | false | - | {備考} |
| 5 | {column_name} | {論理名} | DATE | - | {YES/NO} | NULL | - | {備考} |
| 6 | created_at | 作成日時 | DATETIME | - | NO | CURRENT_TIMESTAMP | - | レコード作成日時 |
| 7 | updated_at | 更新日時 | DATETIME | - | NO | CURRENT_TIMESTAMP | - | レコード更新日時 |

**制約:**
- PRIMARY KEY: `id`
- UNIQUE: `{カラム名}`（{制約の説明}）
- CHECK: `{カラム名} {条件}`（{制約の説明}）

### 3.2 {table_name_2}テーブル（{テーブル論理名}）

| # | カラム名 | 論理名 | 型 | 長さ | NULL | デフォルト | PK | FK | 備考 |
|---|---------|--------|-----|------|------|-----------|-----|-----|------|
| 1 | id | ID | BIGINT | - | NO | AUTO_INCREMENT | YES | - | 主キー |
| 2 | {fk_column} | {論理名} | BIGINT | - | NO | - | - | {参照テーブル}.id | 外部キー |
| 3 | {column_name} | {論理名} | VARCHAR | {N} | {YES/NO} | {デフォルト値} | - | - | {備考} |
| 4 | created_at | 作成日時 | DATETIME | - | NO | CURRENT_TIMESTAMP | - | - | レコード作成日時 |
| 5 | updated_at | 更新日時 | DATETIME | - | NO | CURRENT_TIMESTAMP | - | - | レコード更新日時 |

**制約:**
- PRIMARY KEY: `id`
- FOREIGN KEY: `{fk_column}` REFERENCES `{table_name_1}`(`id`) ON DELETE {CASCADE/SET NULL/RESTRICT}

---

## 4. ER図

```
+-------------------+        +-------------------+
| {table_name_1}    |        | {table_name_2}    |
+-------------------+        +-------------------+
| PK id             |<----+  | PK id             |
|    {column1}      |     +--| FK {fk_column}    |
|    {column2}      |        |    {column1}       |
|    created_at     |        |    created_at      |
|    updated_at     |        |    updated_at      |
+-------------------+        +-------------------+
        1                            N
```

### リレーション一覧

| # | 親テーブル | 子テーブル | 関係 | 外部キー | 削除時 |
|---|-----------|-----------|------|---------|--------|
| 1 | {table_1} | {table_2} | 1:N | {fk_column} | {CASCADE/RESTRICT} |
| 2 | {table_2} | {table_3} | 1:N | {fk_column} | {CASCADE/RESTRICT} |

---

## 5. インデックス定義

| # | テーブル名 | インデックス名 | カラム | 種別 | 用途 |
|---|-----------|---------------|--------|------|------|
| 1 | {table_name} | idx_{table}_{column} | {column} | BTREE | {検索高速化の目的} |
| 2 | {table_name} | uq_{table}_{column} | {column} | UNIQUE | {一意制約} |

---

## 6. ENUM / 定数定義

### 6.1 {ENUM名}

| 値 | 表示名 | 説明 |
|-----|--------|------|
| {VALUE_1} | {表示名} | {説明} |
| {VALUE_2} | {表示名} | {説明} |
| {VALUE_3} | {表示名} | {説明} |

---

## 7. 初期データ（シードデータ）

### 7.1 {table_name_1}

```sql
INSERT INTO {table_name_1} ({column1}, {column2}, created_at, updated_at) VALUES
('{value1}', '{value2}', NOW(), NOW()),
('{value1}', '{value2}', NOW(), NOW()),
('{value1}', '{value2}', NOW(), NOW());
```

---

## 8. マイグレーション方針

| 項目 | 内容 |
|------|------|
| マイグレーションツール | {Flyway / Liquibase / Spring DDL Auto} |
| DDL自動生成 | {spring.jpa.hibernate.ddl-auto = update / validate / none} |
| 初期データ投入 | {data.sql / import.sql / プログラム投入} |

---

## 改訂履歴

| バージョン | 日付 | 変更内容 | 担当者 |
|------------|------|----------|--------|
| 1.0 | {YYYY-MM-DD} | 初版作成 | {担当者名} |
