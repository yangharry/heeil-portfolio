<script setup lang="ts">
// 각 섹션별 컴포넌트 가져오기
import Header from './components/Header.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Archiving from './components/Archiving.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <!-- 최대 너비 설정 및 가운데 정렬된 컨테이너 -->
  <div class="max-w-6xl mx-auto">
    <!-- 헤더 영역 -->
    <Header />
    <!-- 메인 콘텐츠 영역 -->
    <main>
      <!-- About Me 섹션 -->
      <AboutMe />
      <!-- Skills 섹션 -->
      <Skills />
      <!-- Archiving 섹션 -->
      <Archiving />
      <!-- Projects 섹션 -->
      <Projects />
    </main>
    <!-- 푸터 영역 -->
    <Footer />
  </div>
</template>

<style>
/* 부드러운 스크롤 효과 적용 */
html {
  scroll-behavior: smooth;
}

/* 모션 감소 설정을 선호하는 사용자를 위한 스크롤 동작 조정 */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
