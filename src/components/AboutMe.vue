<template>
  <section id="about" class="p-4 mb-4">
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center transform transition-transform hover:scale-105 duration-300">
      <span class="mr-2 sm:mr-3 text-xl sm:text-2xl animate-bounce">🧑</span> ABOUT ME
    </h2>
    <div class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div class="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex justify-center items-center mr-3 sm:mr-4 flex-shrink-0 transform transition-transform hover:rotate-12 duration-300"
          >
            <span class="text-xl sm:text-2xl">🧑</span>
          </div>
          <div class="flex-grow min-w-0">
            <h3 class="text-xs sm:text-sm font-medium text-gray-400 m-0 mb-1">이름</h3>
            <p class="text-sm sm:text-base font-semibold text-gray-800 m-0 truncate">양희일</p>
          </div>
        </div>

        <div class="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex justify-center items-center mr-3 sm:mr-4 flex-shrink-0 transform transition-transform hover:rotate-12 duration-300"
          >
            <span class="text-xl sm:text-2xl">🎂</span>
          </div>
          <div class="flex-grow min-w-0">
            <h3 class="text-xs sm:text-sm font-medium text-gray-400 m-0 mb-1">생년월일</h3>
            <p class="text-sm sm:text-base font-semibold text-gray-800 m-0 truncate">93.05.21</p>
          </div>
        </div>

        <div class="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex justify-center items-center mr-3 sm:mr-4 flex-shrink-0 transform transition-transform hover:rotate-12 duration-300"
          >
            <span class="text-xl sm:text-2xl">📍</span>
          </div>
          <div class="flex-grow min-w-0">
            <h3 class="text-xs sm:text-sm font-medium text-gray-400 m-0 mb-1">주소</h3>
            <p class="text-sm sm:text-base font-semibold text-gray-800 m-0 truncate">서울시 강동구</p>
          </div>
        </div>

        <div class="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex justify-center items-center mr-3 sm:mr-4 flex-shrink-0 transform transition-transform hover:rotate-12 duration-300"
          >
            <span class="text-xl sm:text-2xl">📞</span>
          </div>
          <div class="flex-grow min-w-0">
            <h3 class="text-xs sm:text-sm font-medium text-gray-400 m-0 mb-1">연락처</h3>
            <p class="text-sm sm:text-base font-semibold text-gray-800 m-0 truncate">010-4745-8523</p>
          </div>
        </div>

        <div class="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex justify-center items-center mr-3 sm:mr-4 flex-shrink-0 transform transition-transform hover:rotate-12 duration-300"
          >
            <span class="text-xl sm:text-2xl">✉️</span>
          </div>
          <div class="flex-grow min-w-0">
            <h3 class="text-xs sm:text-sm font-medium text-gray-400 m-0 mb-1">이메일</h3>
            <p class="text-sm sm:text-base font-semibold text-gray-800 m-0 truncate">myid7771@naver.com</p>
          </div>
        </div>

        <div class="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex justify-center items-center mr-3 sm:mr-4 flex-shrink-0 transform transition-transform hover:rotate-12 duration-300"
          >
            <span class="text-xl sm:text-2xl">🎓</span>
          </div>
          <div class="flex-grow min-w-0">
            <h3 class="text-xs sm:text-sm font-medium text-gray-400 m-0 mb-1">학력</h3>
            <p class="text-sm sm:text-base font-semibold text-gray-800 m-0 truncate">세종대학교(기계공학과)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
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

    document.querySelectorAll('#about .grid > div').forEach((el) => {
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
</style>
