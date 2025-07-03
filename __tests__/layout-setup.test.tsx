/**
 * 기본 레이아웃 및 페이지 구성 테스트
 * T001 - 루트 레이아웃, 홈 페이지, 네비게이션 테스트
 */

import { describe, it, expect } from '@jest/globals';
import fs from 'fs';

describe('T001: 기본 레이아웃 및 페이지 구성', () => {
  describe('1. 파일 구조', () => {
    it('루트 레이아웃 파일이 존재해야 함', () => {
      expect(fs.existsSync('src/app/layout.tsx')).toBe(true);
    });

    it('홈 페이지 파일이 존재해야 함', () => {
      expect(fs.existsSync('src/app/page.tsx')).toBe(true);
    });

    it('loading 파일이 존재해야 함', () => {
      expect(fs.existsSync('src/app/loading.tsx')).toBe(true);
    });

    it('error 파일이 존재해야 함', () => {
      expect(fs.existsSync('src/app/error.tsx')).toBe(true);
    });
  });

  describe('2. 컴포넌트 구조', () => {
    it('Header 컴포넌트가 존재해야 함', () => {
      expect(fs.existsSync('src/components/header.tsx')).toBe(true);
    });

    it('Navigation 컴포넌트가 존재해야 함', () => {
      expect(fs.existsSync('src/components/navigation.tsx')).toBe(true);
    });
  });

  describe('3. 타입 정의', () => {
    it('기본 타입 정의 파일이 존재해야 함', () => {
      expect(fs.existsSync('src/types/index.ts')).toBe(true);
    });
  });
});
