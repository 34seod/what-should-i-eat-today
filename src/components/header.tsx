/**
 * Header 컴포넌트
 * 애플리케이션의 상단 헤더
 */

import Link from 'next/link';
import { Navigation } from './navigation';

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center'>
        <div className='mr-4 hidden md:flex'>
          <Link className='mr-6 flex items-center space-x-2' href='/'>
            <span className='hidden font-bold sm:inline-block'>
              냉장고 관리
            </span>
          </Link>
          <Navigation />
        </div>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            {/* 검색 기능은 나중에 추가 */}
          </div>
        </div>
      </div>
    </header>
  );
}
