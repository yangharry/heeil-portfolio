<template>
  <!-- 푸터 섹션: 패딩, 그라데이션 배경, 흰색 텍스트, 그림자, 위쪽 둥근 모서리 적용 -->
  <footer class="p-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg rounded-t-xl">
    <!-- 푸터 콘텐츠: 중앙 정렬, 전환 효과 적용 -->
    <div class="text-center transform transition-transform duration-300">
      <!-- 저작권 표시: 반응형 폰트 크기, 마진 적용 -->
      <p class="text-xs sm:text-sm mb-3">© {{ currentYear }} {{ authorName }}. All rights reserved.</p>
      <!-- 연락처 정보: 모바일에서 세로, 데스크탑에서 가로 배치 -->
      <div class="text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center">
        <!-- 이메일 표시: 아이콘과 텍스트 함께 표시, 모바일에서 마진 조정 -->
        <span class="inline-flex items-center mb-2 sm:mb-0 sm:mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {{ contactInfo.email }}
        </span>
        <!-- 전화번호 표시: 아이콘과 텍스트 함께 표시 -->
        <span class="inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {{ contactInfo.phone }}
        </span>
      </div>
      <!-- 소셜 링크: 마진 적용, 중앙 정렬, 간격 설정 -->
      <div class="mt-3 sm:mt-4 flex justify-center space-x-3 sm:space-x-4">
        <!-- GitHub 링크: 회색 색상, 호버 시 크기 변화 효과 -->
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          :target="link.external ? '_blank' : '_self'"
          class="text-gray-300 transition-colors transform hover:scale-110 duration-200"
        >
          <component :is="link.isComponent ? link.icon : 'img'" v-if="!link.isSvg" :src="link.icon" :alt="link.name" class="h-5 w-5 sm:h-6 sm:w-6 fill-current text-white" />
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
            <path :d="link.svgPath" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 소셜 링크 타입 정의
interface SocialLink {
  name: string;
  url: string;
  external: boolean;
  icon: string;
  isSvg: boolean;
  isComponent: boolean;
  svgPath?: string;
}

// 연락처 정보 타입 정의
interface ContactInfo {
  email: string;
  phone: string;
}

// 저자 이름
const authorName = ref<string>('양희일');

// 현재 연도 계산
const currentYear = computed<number>(() => new Date().getFullYear());

// 연락처 정보
const contactInfo = ref<ContactInfo>({
  email: 'myid7771@naver.com',
  phone: '010-4745-8523',
});

// 소셜 링크 정보
const socialLinks = ref<SocialLink[]>([
  {
    name: 'GitHub',
    url: '#',
    external: false,
    icon: '',
    isSvg: true,
    isComponent: false,
    svgPath:
      'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    name: '티스토리',
    url: 'https://startatage30.tistory.com/',
    external: true,
    icon: '/tistory-logo.svg',
    isSvg: false,
    isComponent: false,
  },
]);
</script>

<style scoped>
/* 작은 화면에서 패딩 조정 */
@media (max-width: 360px) {
  .text-center {
    padding: 0 0.5rem;
  }
}
</style>
