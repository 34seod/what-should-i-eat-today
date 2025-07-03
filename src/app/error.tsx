'use client';

/**
 * Error 페이지
 * 전역 에러 UI
 */

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className='flex h-[50vh] flex-col items-center justify-center space-y-4'>
      <h2 className='text-xl font-semibold'>문제가 발생했습니다!</h2>
      <p className='text-sm text-muted-foreground'>
        예상치 못한 오류가 발생했습니다. 다시 시도해주세요.
      </p>
      <button
        onClick={reset}
        className='rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90'
      >
        다시 시도
      </button>
    </div>
  );
}
