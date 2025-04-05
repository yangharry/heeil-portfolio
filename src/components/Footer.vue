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
        <!-- 소셜 링크: 각 링크 순회 -->
        <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" class="text-gray-300 transition-colors transform hover:scale-110 duration-200">
          <!-- 이미지가 있는 경우 -->
          <img :src="link.iconSrc" :alt="link.name" class="h-5 w-5 sm:h-6 sm:w-6 fill-current text-white" />
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
  iconSrc: string;
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
    url: 'https://github.com/yangharry',
    iconSrc: 'github-white-icon.svg',
  },
  {
    name: '티스토리',
    url: 'https://startatage30.tistory.com/',
    iconSrc: 'tistory-logo.svg',
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
