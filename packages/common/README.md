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

## 既存パッケージからの移行

既存のパッケージで独自のPrismaClientを使用している場合、以下の手順で共通パッケージに移行できます：

### 1. 依存関係の追加

`package.json` に `@asobiba/common` を追加します：

```json
{
  "dependencies": {
    "@asobiba/common": "workspace:*"
  }
}
```

### 2. インポートの変更

既存のコードを以下のように変更します：

**変更前:**
```typescript
import { PrismaClient } from '../../../generated/client';

const prisma = new PrismaClient();
```

**変更後:**
```typescript
import { db } from '@asobiba/common';
import type { PrismaClient } from '@asobiba/common';

// dbを直接使用
const users = await db.account.findMany();
```

### 3. クラスでの使用例

**変更前:**
```typescript
export class HandsGetHandler {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }
}
```

**変更後:**
```typescript
import { db } from '@asobiba/common';

export class HandsGetHandler {
  constructor() {
    // dbを直接使用するか、依存性注入で渡す
  }

  async execute() {
    const hands = await db.hand.findMany();
    return hands;
  }
}
```

### 4. 既存のPrismaスキーマとクライアントの削除

移行が完了したら、以下を削除できます：

- `prisma/schema.prisma` (個別パッケージの)
- `src/generated/client/` (生成されたクライアント)
- `package.json` から `@prisma/client` と `prisma` の依存関係
- `prisma:generate`, `prisma:migrate` などのスクリプト

### 注意事項

- 共通パッケージのPrisma Clientを使用する前に、`pnpm prisma:generate` を実行してください
- データベース接続は、環境変数 `DATABASE_URL` で設定します
- シングルトンパターンにより、アプリケーション全体で1つのPrismaClientインスタンスが共有されます

共通のHono設定と型定義を提供するパッケージ

## 概要

このパッケージは、asobiBaモノレポ内の各APIパッケージで共有される共通の機能を提供します。

## 含まれるもの

- Honoの共通設定
- 共通型定義
- 共通ミドルウェア
- ユーティリティ関数
