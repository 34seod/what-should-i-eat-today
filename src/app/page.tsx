/**
 * 홈 페이지
 * 메인 대시보드 및 개요
 */

export default function Home() {
  return (
    <div className='space-y-8'>
      {/* 메인 헤더 */}
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold tracking-tight'>
          스마트 냉장고 관리
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
          냉장고 속 식재료를 효율적으로 관리하고, 맞춤형 레시피를 추천받아
          음식물 낭비를 줄여보세요.
        </p>
      </div>

      {/* 주요 기능 카드 */}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <div className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
          <h3 className='text-lg font-semibold mb-2'>냉장고 관리</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            식재료 재고를 실시간으로 관리하고 유통기한을 추적하세요.
          </p>
          <a
            href='/fridge'
            className='inline-flex items-center text-sm font-medium text-primary hover:underline'
          >
            관리하기 →
          </a>
        </div>

        <div className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
          <h3 className='text-lg font-semibold mb-2'>레시피 추천</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            보유한 식재료로 만들 수 있는 맞춤형 레시피를 찾아보세요.
          </p>
          <a
            href='/recipes'
            className='inline-flex items-center text-sm font-medium text-primary hover:underline'
          >
            둘러보기 →
          </a>
        </div>

        <div className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
          <h3 className='text-lg font-semibold mb-2'>커뮤니티</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            다른 사용자들과 레시피와 팁을 공유하고 소통하세요.
          </p>
          <a
            href='/community'
            className='inline-flex items-center text-sm font-medium text-primary hover:underline'
          >
            참여하기 →
          </a>
        </div>
      </div>

      {/* 최근 활동 */}
      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>최근 활동</h2>
        <div className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
          <p className='text-muted-foreground'>
            아직 활동 내역이 없습니다. 냉장고 관리를 시작해보세요!
          </p>
        </div>
      </div>
    </div>
  );
}
