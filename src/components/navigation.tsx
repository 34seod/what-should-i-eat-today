/**
 * Navigation 컴포넌트
 * 메인 네비게이션 메뉴
 */

import Link from 'next/link';
import type { NavigationItem } from '@/types';

const navigationItems: NavigationItem[] = [
  {
    label: '홈',
    href: '/',
  },
  {
    label: '냉장고 관리',
    href: '/fridge',
  },
  {
    label: '레시피',
    href: '/recipes',
  },
  {
    label: '커뮤니티',
    href: '/community',
  },
];

export function Navigation() {
  return (
    <nav className='flex items-center space-x-6 text-sm font-medium'>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className='transition-colors hover:text-foreground/80 text-foreground/60'
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
