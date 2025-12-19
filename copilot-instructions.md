# GitHub Copilot 用指示（asobiBa リポジトリ向け）

このファイルはリポジトリ全体の Copilot 向けガイダンス（索引）です。

## リポジトリ全体のガイダンス

詳細なガイダンスは以下のファイルを参照してください：

- [docs/copilot/01_overview.md](./docs/copilot/01_overview.md) — 目的・対象・技術スタック
- [docs/copilot/02_rules.md](./docs/copilot/02_rules.md) — 高レベル振る舞いルール（破壊的変更禁止等）
- [docs/copilot/03_validation.md](./docs/copilot/03_validation.md) — ローカル検証コマンド、Prisma 注意点
- [docs/copilot/04_prs.md](./docs/copilot/04_prs.md) — PR/ブランチ/コミット規約、チェックリスト
- [docs/copilot/05_security.md](./docs/copilot/05_security.md) — セキュリティ／プライバシー指針およびコーディング規約
- [docs/copilot/06_tdd_issue_workflow.md](./docs/copilot/06_tdd_issue_workflow.md) — Issue からの実装と TDD に関するルール

## パッケージ固有のガイダンス

各パッケージには専用の Copilot 指示ファイルがあります：

- [packages/mahjong-api/copilot-instructions.md](./packages/mahjong-api/copilot-instructions.md) — 麻雀スコア管理 API
- [packages/share-photo-api/copilot-instructions.md](./packages/share-photo-api/copilot-instructions.md) — 写真共有 API
- [packages/gsc-trigger/copilot-instructions.md](./packages/gsc-trigger/copilot-instructions.md) — Google Cloud Storage トリガー
- [packages/common/copilot-instructions.md](./packages/common/copilot-instructions.md) — 共通パッケージ

---

この索引ファイルは分割・整理のために作成されました。各ドキュメントの編集は該当ファイルを直接更新してください。
