<template>
  <section id="archiving" class="p-4 mb-4">
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center transform transition-transform hover:scale-105 duration-300">
      <span class="mr-2 sm:mr-3 text-xl sm:text-2xl animate-bounce">📂</span> ARCHIVING
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <!-- GitHub Card -->
      <div
        class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 flex flex-col sm:flex-row gap-3 sm:gap-5 border border-gray-100"
      >
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
          <img src="/github-icon.png" alt="GitHub" class="max-w-full max-h-full transform transition-transform hover:rotate-12 duration-300" />
        </div>
        <div class="flex-grow">
          <h3 class="text-lg sm:text-xl font-semibold mb-2 text-gray-800 flex flex-wrap items-center justify-center sm:justify-start">
            GitHub
            <span class="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mt-1 sm:mt-0">Code Repository</span>
          </h3>
          <p class="text-blue-600 text-sm sm:text-base font-medium mb-3 sm:mb-4 text-center sm:text-left">
            <a href="https://github.com/yangharry" target="_blank" class="hover:underline hover:text-blue-800 transition-colors flex items-center justify-center sm:justify-start">
              github.com/yangharry
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
          <ul class="pl-4 sm:pl-5 m-0 space-y-1 sm:space-y-2">
            <li class="text-xs sm:text-sm text-gray-600 flex items-center">
              <span class="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-1 sm:mr-2"></span>
              소스 코드 저장소입니다.
            </li>
            <li class="text-xs sm:text-sm text-gray-600 flex items-center">
              <span class="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-1 sm:mr-2"></span>
              프론트엔드 &amp; 백엔드 코드
            </li>
            <li class="text-xs sm:text-sm text-gray-600 flex items-center">
              <span class="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-1 sm:mr-2"></span>
              다양한 개인 프로젝트 코드
            </li>
          </ul>
        </div>
      </div>

      <!-- Tistory Blog Card -->
      <div
        class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 flex flex-col sm:flex-row gap-3 sm:gap-5 border border-gray-100"
      >
        <div class="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
          <img src="/tistory-logo.svg" alt="티스토리 블로그" class="max-w-full max-h-full transform transition-transform hover:rotate-12 duration-300" />
        </div>
        <div class="flex-grow">
          <h3 class="text-lg sm:text-xl font-semibold mb-2 text-gray-800 flex flex-wrap items-center justify-center sm:justify-start">
            기술 블로그
            <span class="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mt-1 sm:mt-0">Tech Blog</span>
          </h3>
          <p class="text-blue-600 text-sm sm:text-base font-medium mb-3 sm:mb-4 text-center sm:text-left">
            <a
              href="https://startatage30.tistory.com/"
              target="_blank"
              class="hover:underline hover:text-blue-800 transition-colors flex items-center justify-center sm:justify-start"
            >
              startatage30.tistory.com
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
          <ul class="pl-4 sm:pl-5 m-0 space-y-1 sm:space-y-2">
            <li class="text-xs sm:text-sm text-gray-600 flex items-center">
              <span class="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mr-1 sm:mr-2"></span>
              개발 관련 경험과 지식을 공유합니다.
            </li>
            <li class="text-xs sm:text-sm text-gray-600 flex items-center">
              <span class="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mr-1 sm:mr-2"></span>
              JavaScript, React, Docker 등 다양한 기술 포스팅
            </li>
            <li class="text-xs sm:text-sm text-gray-600 flex items-center">
              <span class="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mr-1 sm:mr-2"></span>
              문제 해결 방법 정리
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
  mounted() {
    // Add intersection observer for fade-in animation
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('#archiving .grid > div').forEach((el) => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  },
};
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 360px) {
  .grid {
    gap: 0.75rem;
  }
}

/* Add smooth scrolling for the entire site */
html {
  scroll-behavior: smooth;
}
</style>
