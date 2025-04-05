<template>
  <!-- 스킬 섹션: 그라데이션 배경, 둥근 모서리, 패딩과 마진 적용 -->
  <section id="skills" class="bg-gradient-to-r from-teal-200 to-blue-200 rounded-xl p-4 mb-4">
    <!-- 섹션 제목: 반응형 폰트 크기, 굵은 글씨, 마진 적용, 호버 시 크기 변화 효과 -->
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center transform transition-transform hover:scale-105 duration-300">
      <!-- 아이콘: 우측 마진, 통통 튀는 애니메이션 적용 -->
      <span class="mr-2 sm:mr-3 text-xl sm:text-2xl animate-bounce">🔧</span> SKILLS
    </h2>
    <!-- 스킬 카드 컨테이너: 세로 배치, 반응형 간격 설정 -->
    <div class="flex flex-col gap-4 sm:gap-6">
      <!-- 각 스킬 카테고리 카드 -->
      <div
        v-for="category in skillCategories"
        :key="category.title"
        class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
      >
        <!-- 카드 제목: 반응형 폰트, 굵은 글씨, 마진 적용 -->
        <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 flex flex-wrap items-center">
          {{ category.title }}
          <!-- 태그: 작은 폰트, 배경색, 둥근 모서리 적용 -->
          <span :class="`ml-2 text-xs bg-${category.tagColor}-100 text-${category.tagColor}-600 px-2 py-1 rounded-full mt-1 sm:mt-0`">{{ category.tagText }}</span>
        </h3>
        <!-- 기술 태그 컨테이너: 플렉스 레이아웃, 간격 설정 -->
        <div class="flex flex-wrap gap-1.5 sm:gap-2">
          <!-- 각 기술 태그: 색상 배경, 둥근 모서리, 패딩, 호버 시 크기 변화 효과 -->
          <span
            v-for="skill in category.skills"
            :key="skill.name"
            :class="`px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[${skill.bgColor}] ${skill.textColor} hover:scale-105 transition-transform cursor-default`"
            >{{ skill.name }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 기술 인터페이스 정의
interface Skill {
  name: string;
  bgColor: string;
  textColor: string;
}

// 스킬 카테고리 인터페이스 정의
interface SkillCategory {
  title: string;
  tagText: string;
  tagColor: string;
  skills: Skill[];
}

// 스킬 카테고리 데이터
const skillCategories = ref<SkillCategory[]>([
  {
    title: 'Frontend',
    tagText: 'Development',
    tagColor: 'blue',
    skills: [
      { name: 'JavaScript', bgColor: '#F7DF1E', textColor: 'text-gray-800' },
      { name: 'TypeScript', bgColor: '#3178C6', textColor: 'text-white' },
      { name: 'React', bgColor: '#61DAFB', textColor: 'text-gray-800' },
      { name: 'Vue', bgColor: '#4FC08D', textColor: 'text-white' },
      { name: 'Tailwind CSS', bgColor: '#38BDF8', textColor: 'text-white' },
    ],
  },
  {
    title: 'Backend',
    tagText: 'Server',
    tagColor: 'green',
    skills: [
      { name: 'Node.js', bgColor: '#339933', textColor: 'text-white' },
      { name: 'Express', bgColor: 'black', textColor: 'text-white' },
      { name: 'MongoDB', bgColor: '#47A248', textColor: 'text-white' },
    ],
  },
  {
    title: 'DevOps',
    tagText: 'Deployment',
    tagColor: 'purple',
    skills: [
      { name: 'Git', bgColor: '#F05032', textColor: 'text-white' },
      { name: 'GitHub', bgColor: '#181717', textColor: 'text-white' },
      { name: 'Docker', bgColor: '#2496ED', textColor: 'text-white' },
      { name: 'OCI', bgColor: '#D24939', textColor: 'text-white' },
      { name: 'GitHub Actions', bgColor: '#2088FF', textColor: 'text-white' },
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

  // 모든 스킬 카드 요소에 fade-in 클래스 추가하고 옵저버로 관찰
  document.querySelectorAll('#skills > div > div').forEach((el) => {
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

/* 작은 화면에서 레이아웃 조정 */
@media (max-width: 360px) {
  /* 간격 줄이기 */
  .flex-wrap {
    gap: 0.25rem;
  }

  /* 제목과 태그 세로 정렬 */
  h3 {
    flex-direction: column;
    align-items: flex-start;
  }

  /* 태그 왼쪽 정렬 */
  h3 span {
    margin-left: 0;
    margin-top: 0.25rem;
  }
}
</style>
