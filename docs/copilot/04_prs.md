# 04_prs — PR / ブランチ / コミット規約とチェックリスト

ブランチとコミット
- ブランチ名: feat/<short-desc>, fix/<short-desc>, chore/<short-desc>
- コミットメッセージ例:
  - feat(pack): add X
  - fix(pack): correct Y
  - chore(deps): update Z
- TDD を守る場合のコミット例:
  1) chore(<pkg>): add failing test
  2) feat(<pkg>): implement minimal code to satisfy test
  3) refactor(<pkg>): cleanup / types / docs

PR の説明に含めるべき情報
- 変更の要約
- 影響範囲（パッケージ、API、DB）
- テスト手順（ローカルでの再現コマンド）
- Prisma 変更がある場合は migrate / generate の手順
- 互換性に関する注意点

PR 前チェックリスト（必須）
- [ ] pnpm -r build が通る
- [ ] pnpm -r test が通る
- [ ] pnpm -r lint が通る
- [ ] 型チェック / format を実行済み
- [ ] Prisma の変更がある場合は migration / generate の手順を PR に記載
- [ ] シークレットを含めていない

PR の運用
- 1 PR = 1 主題（可能ならパッケージ単位）
- 複数パッケージに跨る変更は影響範囲を明記し、可能なら分割する案を提示する
- 自動マージを行わない（人のレビューと CI を必須にする）
