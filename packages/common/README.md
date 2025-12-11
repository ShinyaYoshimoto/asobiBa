# @asobiba/common

共通パッケージ - Prismaのデータベース接続とスキーマ定義を一元管理します。

## 概要

このパッケージは、全パッケージから利用可能なPrismaClientのシングルトンインスタンスを提供します。

## 使用方法

### パッケージのインストール

```bash
pnpm install @asobiba/common
```

### データベース接続の使用

```typescript
import { db } from '@asobiba/common';

// データベースクエリの実行
const users = await db.account.findMany();
```

### 型定義の使用

```typescript
import type { PrismaClient } from '@asobiba/common';

// PrismaClientの型を使用
class MyService {
  constructor(private prisma: PrismaClient) {}
}
```

## スクリプト

### Prisma Client の生成

```bash
pnpm prisma:generate
```

### マイグレーションの実行

```bash
pnpm prisma:migrate
```

### Prisma Studio の起動

```bash
pnpm prisma:studio
```

## ルートからの実行

ルートディレクトリから以下のコマンドで実行できます：

```bash
# Prisma Client の生成
pnpm prisma:generate

# マイグレーションの実行
pnpm prisma:migrate

# Prisma Studio の起動
pnpm prisma:studio
```

## 実装の詳細

### シングルトンパターン

`db.ts` では、開発時のホットリロード対策を考慮したシングルトン実装を採用しています：

- 開発環境では、グローバルオブジェクトにPrismaClientインスタンスを保存
- 本番環境では、通常のシングルトンとして動作

### スキーマ定義

`prisma/schema.prisma` には、以下のモデルが定義されています：

- Answer: 麻雀のスコア計算の回答
- Hand: 役と翻数の管理
- Account: ユーザーアカウント
- Photo: 写真データ
- Tag: タグ情報
- PhotoTag: 写真とタグの関連付け

## 設定

### 環境変数

以下の環境変数が必要です：

- `DATABASE_URL`: PostgreSQLの接続URL

### Prisma Client の出力先

Prisma Client は `src/generated/client` に生成されます。
