import {db} from '../db';

/**
 * テスト用のデータベースヘルパー
 * テストの前後でデータベースをクリーンアップする
 */

/**
 * すべてのテーブルのデータを削除する
 */
export async function cleanupDatabase(): Promise<void> {
  try {
    // 外部キー制約があるため、順序を考慮して削除
    await db.$transaction([
      db.photoTag.deleteMany(),
      db.photo.deleteMany(),
      db.tag.deleteMany(),
      db.account.deleteMany(),
      db.answer.deleteMany(),
      db.hand.deleteMany(),
    ]);
  } catch (error) {
    // テスト用クリーンアップ失敗時はログを出力して再スロー
    console.error('Failed to cleanup test database:', error);
    throw error;
  }
}

/**
 * データベース接続を切断する
 */
export async function disconnectDatabase(): Promise<void> {
  await db.$disconnect();
}
