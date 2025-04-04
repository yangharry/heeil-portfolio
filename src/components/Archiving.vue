<template>
  <!-- 아카이빙(자료 저장소) 섹션: 패딩과 마진 적용 -->
  <section id="archiving" class="p-4 mb-4">
    <!-- 섹션 제목: 반응형 폰트 크기, 굵은 글씨, 마진 적용, 호버 시 크기 변화 효과 -->
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center transform transition-transform hover:scale-105 duration-300">
      <!-- 아이콘: 우측 마진, 통통 튀는 애니메이션 적용 -->
      <span class="mr-2 sm:mr-3 text-xl sm:text-2xl animate-bounce">📂</span> ARCHIVING
    </h2>
    <!-- 카드 그리드 컨테이너: 모바일에서 단일 열, 태블릿/데스크탑에서 2열 배치 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <!-- v-for를 사용하여 아카이빙 카드 생성 -->
      <div
        v-for="(item, index) in archivingItems"
        :key="index"
        class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 flex flex-col sm:flex-row gap-3 sm:gap-5 border border-gray-100"
      >
        <!-- 아이콘 컨테이너: 너비/높이 설정, 축소 방지, 중앙 정렬 -->
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
          <!-- 아이콘 이미지: 최대 크기 설정, 호버 시 회전 효과 -->
          <img :src="item.iconSrc" :alt="item.title" class="max-w-full max-h-full transform transition-transform hover:rotate-12 duration-300" />
        </div>
        <!-- 콘텐츠 영역: 남은 공간 채우기 -->
        <div class="flex-grow">
          <!-- 카드 제목: 반응형 폰트, 굵은 글씨, 마진 적용, 중앙/왼쪽 정렬 반응형 조정 -->
          <h3 class="text-lg sm:text-xl font-semibold mb-2 text-gray-800 flex flex-wrap items-center justify-center sm:justify-start">
            {{ item.title }}
            <!-- 태그: 작은 폰트, 배경색, 둥근 모서리 적용 -->
            <span class="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mt-1 sm:mt-0">{{ item.tag }}</span>
          </h3>
          <!-- 링크: 파란색, 호버 효과, 중앙/왼쪽 정렬 반응형 조정 -->
          <p class="text-blue-600 text-sm sm:text-base font-medium mb-3 sm:mb-4 text-center sm:text-left">
            <a :href="item.url" target="_blank" class="hover:underline hover:text-blue-800 transition-colors flex items-center justify-center sm:justify-start">
              {{ item.linkText }}
              <!-- 외부 링크 아이콘 -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
          <!-- 설명 목록: 패딩, 간격 설정 -->
          <ul class="pl-4 sm:pl-5 m-0 space-y-1 sm:space-y-2">
            <!-- 각 설명 항목: 작은 폰트, 회색 텍스트, 점 앞에 원형 마커 표시 -->
            <li v-for="(description, descIndex) in item.descriptions" :key="descIndex" class="text-xs sm:text-sm text-gray-600 flex items-center">
              <span :class="['inline-block', 'w-1.5', 'h-1.5', item.markerColor, 'rounded-full', 'mr-1', 'sm:mr-2']"></span>
              {{ description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Archiving',
  data() {
    return {
      // 아카이빙 항목 데이터 배열
      archivingItems: [
        {
          iconSrc: 'github-black-icon.svg',
          title: 'GitHub',
          tag: 'Code Repository',
          url: 'https://github.com/yangharry',
          linkText: 'github.com/yangharry',
          markerColor: 'bg-blue-500',
          descriptions: ['소스 코드 저장소입니다.', '프론트엔드 & 백엔드 코드', '다양한 개인 프로젝트 코드'],
        },
        {
          iconSrc: 'tistory-logo.svg',
          title: '기술 블로그',
          tag: 'Tech Blog',
          url: 'https://startatage30.tistory.com/',
          linkText: 'startatage30.tistory.com',
          markerColor: 'bg-red-500',
          descriptions: ['개발 관련 경험과 지식을 공유합니다.', 'JavaScript, React, Docker 등 다양한 기술 포스팅', '문제 해결 방법 정리'],
        },
      ],
    };
  },
  mounted() {
    // 스크롤 시 애니메이션을 위한 인터섹션 옵저버 설정
    const observerOptions = {
      threshold: 0.1, // 요소가 10% 이상 화면에 보일 때 콜백 실행
    };

    // 인터섹션 옵저버 생성: 요소가 화면에 보일 때 fade-in-visible 클래스 추가
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible'); // 요소가 보이면 나타나는 효과 적용
          observer.unobserve(entry.target); // 한 번 애니메이션이 실행되면 관찰 중단
        }
      });
    }, observerOptions);

    // 모든 아카이빙 카드 요소에 fade-in 클래스 추가하고 옵저버로 관찰
    document.querySelectorAll('#archiving .grid > div').forEach((el) => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  },
};
</script>

<style scoped>
/* 페이드인 효과 초기 상태: 투명하고 아래에서 위로 이동하는 효과 준비 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* 페이드인 효과 완료 상태: 완전히 보이고 원래 위치로 이동 */
.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 작은 화면에서 그리드 간격 조정 */
@media (max-width: 360px) {
  .grid {
    gap: 0.75rem;
  }
}

/* 사이트 전체에 부드러운 스크롤 적용 */
html {
  scroll-behavior: smooth;
}
</style>
