<template>
  <header class="w-full relative p-4 mb-4">
    <nav class="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-5">
      <div class="logo mb-3 sm:mb-0">
        <h1 class="m-0 text-xl sm:text-2xl font-semibold text-gray-800">HEEIL Portfolio</h1>
      </div>
      <ul class="flex list-none m-0 p-0 flex-wrap justify-center">
        <li class="mx-2 sm:ml-6 my-1"><a href="#about" class="no-underline text-gray-700 font-medium text-sm hover:text-indigo-500 transition-colors">ABOUT</a></li>
        <li class="mx-2 sm:ml-6 my-1"><a href="#skills" class="no-underline text-gray-700 font-medium text-sm hover:text-indigo-500 transition-colors">SKILLS</a></li>
        <li class="mx-2 sm:ml-6 my-1"><a href="#archiving" class="no-underline text-gray-700 font-medium text-sm hover:text-indigo-500 transition-colors">ARCHIVING</a></li>
        <li class="mx-2 sm:ml-6 my-1"><a href="#projects" class="no-underline text-gray-700 font-medium text-sm hover:text-indigo-500 transition-colors">PROJECTS</a></li>
      </ul>
    </nav>

    <div
      class="min-h-[320px] sm:min-h-[400px] flex justify-center items-center text-center text-white py-10 sm:py-16 px-3 sm:px-5 rounded-xl mt-3 sm:mt-5 bg-cover bg-center relative"
      style="background-image: url('banner_background.jpg')"
    >
      <div class="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

      <div class="max-w-[600px] relative z-10">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 text-shadow">개발자 포트폴리오</h1>
        <p class="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-shadow">
          안녕하세요<br />
          풀스택 개발자 양희일입니다<br />
          포트폴리오에 방문해 주셔서 감사합니다
        </p>
        <a
          href="#about"
          class="inline-flex bg-teal-500 text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full no-underline text-sm sm:font-medium hover:bg-teal-600 transition-colors items-center justify-center"
          >ABOUT ME <span class="ml-2">↓</span></a
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
