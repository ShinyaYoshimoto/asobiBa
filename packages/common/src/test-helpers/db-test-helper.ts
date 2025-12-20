import { db } from '../db';

/**
 * テスト用のデータベースヘルパー
 * テストの前後でデータベースをクリーンアップする
 */
export class DbTestHelper {
  /**
   * すべてのテーブルのデータを削除する
   */
  static async cleanup(): Promise<void> {
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
  static async disconnect(): Promise<void> {
    await db.$disconnect();
  }
}
