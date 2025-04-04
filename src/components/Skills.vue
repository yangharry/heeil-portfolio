<template>
  <section id="skills" class="bg-gradient-to-r from-teal-200 to-blue-200 rounded-xl p-4 mb-4">
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center transform transition-transform hover:scale-105 duration-300">
      <span class="mr-2 sm:mr-3 text-xl sm:text-2xl animate-bounce">🔧</span> SKILLS
    </h2>
    <div class="flex flex-col gap-4 sm:gap-6">
      <div class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 flex flex-wrap items-center">
          Frontend
          <span class="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mt-1 sm:mt-0">Development</span>
        </h3>
        <div class="flex flex-wrap gap-1.5 sm:gap-2">
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#F7DF1E] text-gray-800 hover:scale-105 transition-transform cursor-default"
            >JavaScript</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#3178C6] text-white hover:scale-105 transition-transform cursor-default"
            >TypeScript</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#61DAFB] text-gray-800 hover:scale-105 transition-transform cursor-default"
            >React</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#4FC08D] text-white hover:scale-105 transition-transform cursor-default"
            >Vue</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#38BDF8] text-white hover:scale-105 transition-transform cursor-default"
            >Tailwind CSS</span
          >
        </div>
      </div>

      <div class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 flex flex-wrap items-center">
          Backend
          <span class="ml-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full mt-1 sm:mt-0">Server</span>
        </h3>
        <div class="flex flex-wrap gap-1.5 sm:gap-2">
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#339933] text-white hover:scale-105 transition-transform cursor-default"
            >Node.js</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-black text-white hover:scale-105 transition-transform cursor-default"
            >Express</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#47A248] text-white hover:scale-105 transition-transform cursor-default"
            >MongoDB</span
          >
        </div>
      </div>

      <div class="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 flex flex-wrap items-center">
          DevOps
          <span class="ml-2 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full mt-1 sm:mt-0">Deployment</span>
        </h3>
        <div class="flex flex-wrap gap-1.5 sm:gap-2">
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#F05032] text-white hover:scale-105 transition-transform cursor-default"
            >Git</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#181717] text-white hover:scale-105 transition-transform cursor-default"
            >GitHub</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#2496ED] text-white hover:scale-105 transition-transform cursor-default"
            >Docker</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#D24939] text-white hover:scale-105 transition-transform cursor-default"
            >OCI</span
          >
          <span class="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#2088FF] text-white hover:scale-105 transition-transform cursor-default"
            >GitHub Actions</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
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

    document.querySelectorAll('#skills > div > div').forEach((el) => {
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
    gap: 0.25rem;
  }

  h3 {
    flex-direction: column;
    align-items: flex-start;
  }

  h3 span {
    margin-left: 0;
    margin-top: 0.25rem;
  }
}
</style>
