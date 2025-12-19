# 03_validation — ローカル検証コマンドと Prisma 注意点

ローカル検証の基本コマンド
- インストール: pnpm install
- ルート全体ビルド: pnpm -r build
- ルート全体テスト: pnpm -r test
- Lint: pnpm -r lint
- Lint 自動修正: pnpm -r lint:fix
- Format: pnpm -r format

パッケージ単位の検証（例）
- pnpm --filter @asobiba/mahjong-api dev
- pnpm --filter @asobiba/mahjong-api build
- pnpm --filter @asobiba/mahjong-api test
- pnpm --filter @asobiba/common prisma:generate
- pnpm --filter @asobiba/common prisma:migrate

テスト実行時の注意
- DB や GCS 等の外部依存がある場合は、モックまたはローカルのテスト DB（docker-compose 等）を利用する。テストが外部サービスに依存しないように設計すること。
- 一部テストは jest を使うパッケージがあるため、package.json を確認してフレームワークに合わせること。

Prisma に関する注意事項
- 生成済みクライアント（src/generated 等）は直接編集しない。
- schema.prisma を変更する場合の手順（必ず提示すること）:
  1) schema.prisma を編集
  2) pnpm --filter @asobiba/common prisma:migrate dev --name <desc>（必要なら）
  3) pnpm --filter @asobiba/common prisma:generate
  4) 生成物の差分を確認して PR に記載
- マイグレーションによる DB 互換性リスクと影響範囲（どのパッケージが参照しているか）を必ず説明すること。

CI / E2E 検証について
- ルートでの pnpm -r build && pnpm -r test を CI の必須チェックとすること。
- E2E テストが必要な場合は、実行に必要な環境変数・起動手順（例: Docker Compose）を PR に明記すること。

ローカル検証の例（チェック手順）
1) pnpm install
2) pnpm --filter @asobiba/common prisma:generate
3) pnpm -r build
4) pnpm -r test

検証に失敗した場合の診断項目
- 型エラー: 各パッケージの tsconfig と export/import の不整合を確認
- prisma エラー: schema の差分と generated client のバージョン不整合を確認
- ネイティブモジュールビルド失敗: sharp 等のビルドログと CI ランナー OS を比較
