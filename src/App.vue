<script setup lang="ts">
import Header from './components/Header.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Archiving from './components/Archiving.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <Header />
    <main>
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
    </main>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

/* Override scrolling for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
