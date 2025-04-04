<template>
  <header class="w-full relative p-4 mb-4">
    <nav class="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-5">
      <div class="logo mb-3 sm:mb-0">
        <h1 class="m-0 text-xl sm:text-2xl font-semibold text-gray-800">HEEIL's Portfolio</h1>
      </div>
      <ul class="flex list-none m-0 p-0 flex-wrap justify-center">
        <li class="mx-2 sm:ml-6 my-1"><a href="#about" class="no-underline text-gray-700 font-medium text-sm hover:text-red-400 transition-colors">ABOUT</a></li>
        <li class="mx-2 sm:ml-6 my-1"><a href="#skills" class="no-underline text-gray-700 font-medium text-sm hover:text-red-400 transition-colors">SKILLS</a></li>
        <li class="mx-2 sm:ml-6 my-1"><a href="#archiving" class="no-underline text-gray-700 font-medium text-sm hover:text-red-400 transition-colors">ARCHIVING</a></li>
        <li class="mx-2 sm:ml-6 my-1"><a href="#projects" class="no-underline text-gray-700 font-medium text-sm hover:text-red-400 transition-colors">PROJECTS</a></li>
      </ul>
    </nav>

    <div
      class="min-h-[320px] sm:min-h-[400px] flex justify-center items-center text-center bg-gray-800 text-white py-10 sm:py-16 px-3 sm:px-5 rounded-xl mt-3 sm:mt-5 bg-cover bg-center"
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero-bg.jpg')"
    >
      <div class="max-w-[600px]">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5">포트폴리오</h1>
        <p class="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
          안녕하세요<br />
          풀스택 개발자 양희일입니다<br />
          포트폴리오에 방문해 주셔서 감사합니다
        </p>
        <a
          href="#about"
          class="inline-block bg-red-400 text-white py-1.5 sm:py-2 px-4 sm:px-6 rounded-full no-underline text-sm sm:font-medium hover:bg-red-500 transition-colors flex items-center justify-center"
          >ABOUT ME <span class="ml-2">↓</span></a
        >
      </div>
    </div>
  </header>
</template>
