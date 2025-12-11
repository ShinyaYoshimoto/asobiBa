import {describe, expect, it} from 'vitest';
import {basicLogger, type loggerInterface} from '../utils/logger';

describe('logger', () => {
  describe('basicLogger', () => {
    it('basicLoggerのインスタンスを作成できる', () => {
      // Arrange & Act
      const logger = new basicLogger();

      // Assert
      expect(logger).toBeInstanceOf(basicLogger);
      expect(logger).toHaveProperty('debug');
      expect(logger).toHaveProperty('info');
      expect(logger).toHaveProperty('warn');
      expect(logger).toHaveProperty('error');
      expect(logger).toHaveProperty('alert');
    });

    it('loggerInterfaceを実装している', () => {
      // Arrange & Act
      const logger: loggerInterface = new basicLogger();

      // Assert
      expect(typeof logger.debug).toBe('function');
      expect(typeof logger.info).toBe('function');
      expect(typeof logger.warn).toBe('function');
      expect(typeof logger.error).toBe('function');
      expect(typeof logger.alert).toBe('function');
    });
  });
});
