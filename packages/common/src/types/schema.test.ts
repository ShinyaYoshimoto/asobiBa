import {describe, expect, it} from 'vitest';
import {errorResponseSchema} from './schema';

describe('schema', () => {
  describe('errorResponseSchema', () => {
    it('正常系: エラーレスポンスのスキーマを検証できる', () => {
      // Arrange
      const validData = {
        message: 'エラーが発生しました',
      };

      // Act
      const result = errorResponseSchema.safeParse(validData);

      // Assert
      expect(result.success).toBe(true);
    });

    it('異常系: messageが無い場合はエラーになる', () => {
      // Arrange
      const invalidData = {};

      // Act
      const result = errorResponseSchema.safeParse(invalidData);

      // Assert
      expect(result.success).toBe(false);
    });

    it('異常系: messageが文字列でない場合はエラーになる', () => {
      // Arrange
      const invalidData = {
        message: 123,
      };

      // Act
      const result = errorResponseSchema.safeParse(invalidData);

      // Assert
      expect(result.success).toBe(false);
    });
  });
});
