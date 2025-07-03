/**
 * 기본 타입 정의
 */

// 공통 타입
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// 네비게이션 관련 타입
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

// 레이아웃 관련 타입
export interface LayoutProps {
  children: React.ReactNode;
}

// 페이지 관련 타입
export interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}
