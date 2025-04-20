<template>
  <!-- 헤더 섹션: 전체 너비, 상대 위치 지정, 패딩과 마진 적용 -->
  <header class="w-full relative p-4 mb-4">
    <!-- 네비게이션 바: 모바일에서는 세로, 태블릿/데스크탑에서는 가로 배치 -->
    <nav class="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-5">
      <!-- 로고 영역: 모바일에서 아래 마진 적용, 태블릿/데스크탑에서는 제거 -->
      <div class="logo mb-3 sm:mb-0">
        <h1 class="m-0 text-xl sm:text-2xl font-semibold text-gray-800">HEEIL Portfolio</h1>
      </div>
      <!-- 메뉴 항목: 중앙 정렬, 리스트 스타일 제거 -->
      <ul class="flex list-none m-0 p-0 flex-wrap justify-center">
        <!-- 각 메뉴 항목: 마진 적용, 호버 시 색상 변경 효과 -->
        <li v-for="item in menuItems" :key="item.id" class="mx-2 sm:ml-6 my-1">
          <a :href="item.href" class="no-underline text-gray-700 font-medium text-sm hover:text-indigo-500 transition-colors">{{ item.text }}</a>
        </li>
      </ul>
    </nav>

    <!-- 배너 영역: 최소 높이 설정, 중앙 정렬, 상대적 위치 설정 -->
    <div
      class="min-h-[320px] sm:min-h-[400px] flex justify-center items-center text-center text-white py-10 sm:py-16 px-3 sm:px-5 rounded-xl mt-3 sm:mt-5 relative overflow-hidden"
    >
      <!-- 배경 이미지: 절대 위치, 객체 맞춤 설정, z-index를 콘텐츠보다 낮게 설정 -->
      <img src="/banner_background.webp" alt="Banner Background" class="absolute inset-0 w-full h-full object-cover z-0 rounded-xl" />

      <!-- 배경 오버레이: 텍스트 가독성을 높이기 위한 반투명 검은색 레이어 -->
      <div class="absolute inset-0 bg-black opacity-50 rounded-xl z-10"></div>

      <!-- 콘텐츠 영역: 최대 너비 설정, z-index로 오버레이 위에 배치 -->
      <div class="max-w-[600px] relative z-20">
        <!-- 제목: 반응형 폰트 크기, 굵은 글씨, 텍스트 그림자 적용 -->
        <h1 class="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 text-shadow">{{ bannerTitle }}</h1>
        <!-- 소개 텍스트: 반응형 폰트 크기, 줄 간격 조정, 텍스트 그림자 적용 -->
        <p class="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-shadow">
          {{ bannerText }}
        </p>
        <!-- 버튼: 인라인 플렉스 레이아웃, 배경색, 패딩, 둥근 모서리, 호버 효과 -->
        <a
          :href="bannerButton.href"
          class="inline-flex bg-teal-500 text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full no-underline text-sm sm:font-medium hover:bg-teal-600 transition-colors items-center justify-center"
          >{{ bannerButton.text }} <span class="ml-2">↓</span></a
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 메뉴 아이템 인터페이스 정의
interface MenuItem {
  id: number;
  text: string;
  href: string;
}

// 버튼 인터페이스 정의
interface Button {
  text: string;
  href: string;
}

// 메뉴 아이템 데이터
const menuItems = ref<MenuItem[]>([
  { id: 1, text: 'ABOUT', href: '#about' },
  { id: 2, text: 'SKILLS', href: '#skills' },
  { id: 3, text: 'ARCHIVING', href: '#archiving' },
  { id: 4, text: 'PROJECTS', href: '#projects' },
]);

// 배너 제목
const bannerTitle = ref<string>('개발자 포트폴리오');

// 배너 텍스트
const bannerText = ref<string>('안녕하세요\n풀스택 개발자 양희일입니다\n포트폴리오에 방문해 주셔서 감사합니다');

// 배너 버튼
const bannerButton = ref<Button>({
  text: 'ABOUT ME',
  href: '#about',
});
</script>

<style scoped>
/* 텍스트 그림자: 텍스트 가독성을 높이기 위한 그림자 효과 적용 */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
