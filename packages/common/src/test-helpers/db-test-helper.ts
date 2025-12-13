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
    // 外部キー制約があるため、順序を考慮して削除
    await db.photoTag.deleteMany();
    await db.photo.deleteMany();
    await db.tag.deleteMany();
    await db.account.deleteMany();
    await db.answer.deleteMany();
    await db.hand.deleteMany();
  }

  /**
   * データベース接続を切断する
   */
  static async disconnect(): Promise<void> {
    await db.$disconnect();
  }
}
