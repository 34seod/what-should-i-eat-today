/**
 * 코드 품질 도구 설정 테스트
 * T001 - ESLint, Prettier, Husky 설정 테스트
 */

import { describe, it, expect } from '@jest/globals';
import fs from 'fs';

describe('T001: 코드 품질 도구 설정', () => {
  describe('1. ESLint 설정', () => {
    it('eslint.config.mjs 파일이 존재해야 함', () => {
      expect(fs.existsSync('eslint.config.mjs')).toBe(true);
    });

    it('package.json에 ESLint 관련 의존성이 설치되어 있어야 함', () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      expect(packageJson.devDependencies?.eslint).toBeDefined();
      expect(packageJson.devDependencies?.['eslint-config-next']).toBeDefined();
    });
  });

  describe('2. Prettier 설정', () => {
    it('.prettierrc 파일이 존재해야 함', () => {
      expect(fs.existsSync('.prettierrc')).toBe(true);
    });

    it('.prettierignore 파일이 존재해야 함', () => {
      expect(fs.existsSync('.prettierignore')).toBe(true);
    });

    it('package.json에 Prettier 관련 의존성이 설치되어 있어야 함', () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      expect(packageJson.devDependencies?.prettier).toBeDefined();
    });
  });

  describe('3. Husky 설정', () => {
    it('package.json에 Husky가 설치되어 있어야 함', () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      expect(packageJson.devDependencies?.husky).toBeDefined();
    });

    it('.husky 디렉토리가 존재해야 함', () => {
      expect(fs.existsSync('.husky')).toBe(true);
    });

    it('pre-commit 훅이 설정되어 있어야 함', () => {
      expect(fs.existsSync('.husky/pre-commit')).toBe(true);
    });
  });

  describe('4. 스크립트 설정', () => {
    it('package.json에 필요한 스크립트가 설정되어 있어야 함', () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      expect(packageJson.scripts?.lint).toBeDefined();
      expect(packageJson.scripts?.['lint:fix']).toBeDefined();
      expect(packageJson.scripts?.format).toBeDefined();
      expect(packageJson.scripts?.['format:check']).toBeDefined();
    });
  });
});
