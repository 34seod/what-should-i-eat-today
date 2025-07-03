/**
 * UI 라이브러리 설정 테스트
 * T001 - shadcn/ui, Tailwind CSS 설정 테스트
 */

import { describe, it, expect } from '@jest/globals';
import fs from 'fs';

describe('T001: UI 라이브러리 설정', () => {
  describe('1. Tailwind CSS 설정', () => {
    it('tailwind.config.ts 파일이 존재해야 함', () => {
      expect(fs.existsSync('tailwind.config.ts')).toBe(true);
    });

    it('globals.css 파일이 존재해야 함', () => {
      expect(fs.existsSync('src/app/globals.css')).toBe(true);
    });

    it('package.json에 Tailwind CSS가 설치되어 있어야 함', () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      expect(packageJson.devDependencies?.tailwindcss).toBeDefined();
    });
  });

  describe('2. shadcn/ui 설정', () => {
    it('components.json 파일이 존재해야 함', () => {
      expect(fs.existsSync('components.json')).toBe(true);
    });

    it('src/lib/utils.ts 파일이 존재해야 함', () => {
      expect(fs.existsSync('src/lib/utils.ts')).toBe(true);
    });

    it('src/components/ui 디렉토리가 존재해야 함', () => {
      expect(fs.existsSync('src/components/ui')).toBe(true);
    });
  });

  describe('3. 의존성 설정', () => {
    it('필요한 UI 라이브러리 의존성이 설치되어 있어야 함', () => {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
      expect(
        packageJson.dependencies?.['class-variance-authority']
      ).toBeDefined();
      expect(packageJson.dependencies?.clsx).toBeDefined();
      expect(packageJson.dependencies?.['tailwind-merge']).toBeDefined();
    });
  });
});
