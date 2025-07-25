/**
 * Loading 페이지
 * 전역 로딩 UI
 */

export default function Loading() {
  return (
    <div className='flex h-[50vh] items-center justify-center'>
      <div className='flex items-center space-x-2'>
        <div className='h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent'></div>
        <span className='text-sm text-muted-foreground'>로딩 중...</span>
      </div>
    </div>
  );
}
