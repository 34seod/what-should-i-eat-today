/**
 * 프로젝트 초기 설정 테스트
 * T001 - 프로젝트 셋업 및 초기 구성 테스트
 */

import { describe, it, expect } from '@jest/globals';
import fs from 'fs';

describe('T001: 프로젝트 셋업 및 초기 구성', () => {
  describe('1. 프로젝트 초기화', () => {
    it('package.json이 존재해야 함', () => {
      expect(fs.existsSync('package.json')).toBe(true);
    });

    it('package.json에 Next.js 15가 설정되어 있어야 함', () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      expect(packageJson.dependencies?.next).toBeDefined();
      expect(packageJson.dependencies.next).toMatch(/^15\./);
    });

    it('TypeScript가 개발 의존성으로 설치되어 있어야 함', () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      expect(packageJson.devDependencies?.typescript).toBeDefined();
    });
  });

  describe('2. TypeScript 설정', () => {
    it('tsconfig.json이 존재해야 함', () => {
      expect(fs.existsSync('tsconfig.json')).toBe(true);
    });

    it('tsconfig.json에 엄격 모드가 설정되어 있어야 함', () => {
      const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf-8'));
      expect(tsconfig.compilerOptions?.strict).toBe(true);
    });

    it('절대 경로 임포트(@/*)가 설정되어 있어야 함', () => {
      const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf-8'));
      expect(tsconfig.compilerOptions?.baseUrl).toBeDefined();
      expect(tsconfig.compilerOptions?.paths?.['@/*']).toBeDefined();
    });
  });

  describe('3. 프로젝트 구조', () => {
    it('src 디렉토리가 존재해야 함', () => {
      expect(fs.existsSync('src')).toBe(true);
    });

    it('app 디렉토리가 src 내부에 존재해야 함', () => {
      expect(fs.existsSync('src/app')).toBe(true);
    });

    it('components 디렉토리가 src 내부에 존재해야 함', () => {
      expect(fs.existsSync('src/components')).toBe(true);
    });

    it('lib 디렉토리가 src 내부에 존재해야 함', () => {
      expect(fs.existsSync('src/lib')).toBe(true);
    });

    it('types 디렉토리가 src 내부에 존재해야 함', () => {
      expect(fs.existsSync('src/types')).toBe(true);
    });
  });

  describe('4. 환경 설정', () => {
    it('.env.local.example 파일이 존재해야 함', () => {
      expect(fs.existsSync('.env.local.example')).toBe(true);
    });

    it('next.config.ts 파일이 존재해야 함', () => {
      expect(fs.existsSync('next.config.ts')).toBe(true);
    });
  });
});
