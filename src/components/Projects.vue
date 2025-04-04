<template>
  <section id="projects" class="p-4 mb-4">
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center transform transition-transform hover:scale-105 duration-300">
      <span class="mr-2 sm:mr-3 text-xl sm:text-2xl animate-bounce">💻</span> PROJECTS
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <div
        class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 flex flex-col min-h-[380px]"
      >
        <div class="mb-3 sm:mb-4">
          <span class="inline-block bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium py-1 px-3 rounded-full mb-2">개인 프로젝트</span>
          <h3 class="text-lg sm:text-xl font-bold text-gray-800 mt-2 mb-2 sm:mb-3 flex flex-wrap items-center">
            원알엠(ONERM)
            <span class="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mt-1 sm:mt-0">PWA App</span>
          </h3>
        </div>

        <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">Vue.js</span>
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">Express.js</span>
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">MongoDB</span>
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">OCI</span>
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">Docker</span>
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">GitHub Actions</span>
        </div>

        <ul class="pl-4 sm:pl-5 mb-4 sm:mb-5 space-y-1 sm:space-y-2">
          <li class="text-xs sm:text-sm text-gray-600 flex items-center">
            <span class="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-1 sm:mr-2"></span>
            운동기록 웹앱
          </li>
          <li class="text-xs sm:text-sm text-gray-600 flex items-center">
            <span class="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-1 sm:mr-2"></span>
            주요기능: 운동기록, 수행시간, 쉬는시간, 예상 1RM 제공
          </li>
        </ul>

        <div class="mt-auto pt-4 sm:pt-6 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
          <a
            href="https://github.com/AngryStock/onerm"
            target="_blank"
            class="inline-flex items-center bg-gray-800 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded text-xs sm:text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            프론트엔드
          </a>
          <a
            href="https://github.com/yangharry/onerm"
            target="_blank"
            class="inline-flex items-center bg-blue-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            백엔드
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=kr.onerm.twa&hl=ko"
            target="_blank"
            class="inline-flex items-center bg-teal-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded text-xs sm:text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            <img src="/public/android-white-log.png" alt="Android" class="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            안드로이드
          </a>
          <a
            href="https://onerm.kr"
            target="_blank"
            class="inline-flex items-center bg-green-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            웹
          </a>
        </div>
      </div>

      <div
        class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 flex flex-col h-full min-h-[380px]"
      >
        <div class="mb-3 sm:mb-4">
          <span class="inline-block bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-medium py-1 px-3 rounded-full mb-2">개인 프로젝트</span>
          <h3 class="text-lg sm:text-xl font-bold text-gray-800 mt-2 mb-2 sm:mb-3 flex flex-wrap items-center">
            포트폴리오 웹사이트
            <span class="ml-2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full mt-1 sm:mt-0">Web</span>
          </h3>
        </div>

        <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">Vue.js</span>
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">TypeScript</span>
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">Tailwind CSS</span>
          <span class="bg-gray-100 text-gray-600 text-xs py-1 px-2 sm:px-3 rounded-full hover:bg-gray-200 transition-colors">Vite</span>
        </div>

        <ul class="pl-4 sm:pl-5 mb-4 sm:mb-5 space-y-1 sm:space-y-2">
          <li class="text-xs sm:text-sm text-gray-600 flex items-center">
            <span class="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mr-1 sm:mr-2"></span>
            개인 포트폴리오 웹사이트
          </li>
        </ul>

        <div class="mt-auto pt-4 sm:pt-6 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
          <a
            href="#"
            target="_blank"
            class="inline-flex items-center bg-gray-800 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded text-xs sm:text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
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

    document.querySelectorAll('#projects .grid > div').forEach((el) => {
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
  .flex-wrap {
    gap: 0.5rem;
  }

  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}
</style>
