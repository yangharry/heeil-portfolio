<template>
  <!-- 프로젝트 섹션: 패딩과 마진 적용 -->
  <section id="projects" class="p-4 mb-4">
    <!-- 섹션 제목: 반응형 폰트 크기, 굵은 글씨, 마진 적용, 호버 시 크기 변화 효과 -->
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center transform transition-transform hover:scale-105 duration-300">
      <!-- 아이콘: 우측 마진, 통통 튀는 애니메이션 적용 -->
      <span class="mr-2 sm:mr-3 text-xl sm:text-2xl animate-bounce">💻</span> PROJECTS
    </h2>
    <!-- 프로젝트 카드 그리드: 모바일에서 단일 열, 데스크탑에서 2열 배치 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <!-- v-for를 사용하여 프로젝트 카드 생성 -->
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 flex flex-col min-h-[380px]"
      >
        <!-- 상단 정보 영역: 프로젝트 유형 및 제목 -->
        <div class="mb-3 sm:mb-4">
          <!-- 프로젝트 유형 태그: 그라데이션 배경, 둥근 모서리 -->
          <span class="inline-block bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium py-1 px-3 rounded-full mb-2">{{ project.type }}</span>
          <!-- 프로젝트 제목: 반응형 폰트, 굵은 글씨, 마진 적용 -->
          <h3 class="text-lg sm:text-xl font-bold text-gray-800 mt-2 mb-2 sm:mb-3 flex flex-wrap items-center">
            {{ project.title }}
            <!-- 프로젝트 종류 태그: 작은 폰트, 배경색, 둥근 모서리 -->
            <span class="ml-2 text-xs" :class="project.categoryClass">{{ project.category }}</span>
          </h3>
        </div>

        <!-- 기술 스택 영역: 플렉스 레이아웃, 간격 설정 -->
        <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <!-- 각 기술 태그: 회색 배경, 둥근 모서리, 호버 효과 -->
          <span
            v-for="(tech, techIndex) in project.technologies"
            :key="techIndex"
            class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            {{ tech }}
          </span>
        </div>

        <!-- 프로젝트 설명 목록: 패딩, 간격 설정 -->
        <ul class="pl-4 sm:pl-5 mb-4 sm:mb-5 space-y-1 sm:space-y-2">
          <!-- 각 설명 항목: 작은 폰트, 회색 텍스트, 파란색 원형 마커 -->
          <li v-for="(desc, descIndex) in project.descriptions" :key="descIndex" class="text-xs sm:text-sm text-gray-600 flex items-center">
            <span :class="['inline-block', 'w-1.5', 'h-1.5', project.markerColor, 'rounded-full', 'mr-1', 'sm:mr-2']"></span>
            {{ desc }}
          </li>
        </ul>

        <!-- 링크 버튼 영역: 자동 마진으로 하단 배치, 간격 설정, 중앙/왼쪽 정렬 반응형 조정 -->
        <div class="mt-auto pt-4 sm:pt-6 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
          <!-- 동적으로 링크 버튼 생성 -->
          <a
            v-for="(link, linkIndex) in project.links"
            :key="linkIndex"
            :href="link.url"
            target="_blank"
            :class="[
              'inline-flex',
              'items-center',
              'text-white',
              'py-1.5',
              'sm:py-2',
              'px-3',
              'sm:px-4',
              'rounded',
              'text-xs',
              'sm:text-sm',
              'font-medium',
              'hover:bg-opacity-90',
              'transition-colors',
              link.bgClass,
            ]"
          >
            <img :src="link.iconSrc" :alt="link.text" class="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 프로젝트 링크 인터페이스 정의
interface ProjectLink {
  url: string;
  text: string;
  bgClass: string;
  iconSrc: string;
}

// 프로젝트 인터페이스 정의
interface Project {
  type: string;
  title: string;
  category: string;
  categoryClass: string;
  technologies: string[];
  markerColor: string;
  descriptions: string[];
  links: ProjectLink[];
}

// 프로젝트 데이터 배열
const projects = ref<Project[]>([
  {
    type: '개인 프로젝트',
    title: '원알엠(ONERM)',
    category: 'PWA App',
    categoryClass: 'bg-blue-100 text-blue-600 px-2 py-1 rounded-full mt-1 sm:mt-0',
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'OCI', 'Docker', 'GitHub Actions'],
    markerColor: 'bg-blue-500',
    descriptions: ['운동기록 웹앱', '주요기능: 운동기록, 수행시간, 쉬는시간, 예상 1RM 제공'],
    links: [
      {
        url: 'https://github.com/AngryStock/onerm',
        text: '프론트엔드',
        bgClass: 'bg-gray-800 hover:bg-gray-700',
        iconSrc: `github-white-icon.svg`,
      },
      {
        url: 'https://github.com/yangharry/onerm',
        text: '백엔드',
        bgClass: 'bg-blue-600 hover:bg-blue-700',
        iconSrc: `github-white-icon.svg`,
      },
      {
        url: 'https://play.google.com/store/apps/details?id=kr.onerm.twa&hl=ko',
        text: '안드로이드',
        bgClass: 'bg-teal-600 hover:bg-teal-700',
        iconSrc: 'android-white-log.png',
      },
      {
        url: 'https://onerm.kr',
        text: '웹',
        bgClass: 'bg-green-600 hover:bg-green-700',
        iconSrc: `web-icon.svg`,
      },
    ],
  },
  {
    type: '개인 프로젝트',
    title: '포트폴리오 웹사이트',
    category: 'Web',
    categoryClass: 'bg-purple-100 text-purple-600 px-2 py-1 rounded-full mt-1 sm:mt-0',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    markerColor: 'bg-purple-500',
    descriptions: ['개인 포트폴리오 웹사이트'],
    links: [
      {
        url: 'https://github.com/yangharry/heeil-portfolio',
        text: 'GitHub',
        bgClass: 'bg-gray-800 hover:bg-gray-700',
        iconSrc: `github-white-icon.svg`,
      },
      {
        url: 'https://yangharry.github.io/heeil-portfolio/',
        text: '웹',
        bgClass: 'bg-green-600 hover:bg-green-700',
        iconSrc: `web-icon.svg`,
      },
    ],
  },
  {
    type: '개인 프로젝트',
    title: 'ResSync',
    category: 'Android App',
    categoryClass: 'bg-amber-100 text-amber-600 px-2 py-1 rounded-full mt-1 sm:mt-0',
    technologies: ['React Native', 'Express.js', 'MongoDB', 'OCI', 'Docker', 'GitHub Actions', 'Firebase'],
    markerColor: 'bg-amber-500',
    descriptions: ['달력 앱', '고객이 제공한 예약테이터를 달력으로 제공'],
    links: [
      {
        url: 'https://play.google.com/store/apps/details?id=com.ressync_app&hl=ko',
        text: '안드로이드',
        bgClass: 'bg-teal-600 hover:bg-teal-700',
        iconSrc: 'android-white-log.png',
      },
    ],
  },
]);

onMounted(() => {
  // 스크롤 시 애니메이션을 위한 인터섹션 옵저버 설정
  const observerOptions: IntersectionObserverInit = {
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

  // 모든 프로젝트 카드 요소에 fade-in 클래스 추가하고 옵저버로 관찰
  document.querySelectorAll('#projects .grid > div').forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
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

/* 작은 화면에서 간격 및 레이아웃 조정 */
@media (max-width: 360px) {
  .flex-wrap {
    gap: 0.5rem;
  }

  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}
</style>
