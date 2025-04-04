<template>
  <!-- About Me 섹션: 패딩과 마진 적용 -->
  <section id="about" class="p-4 mb-4">
    <!-- 섹션 제목: 반응형 폰트 크기, 굵은 글씨, 마진 적용, 호버 시 크기 변화 효과 -->
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center transform transition-transform hover:scale-105 duration-300">
      <!-- 이모지 아이콘: 우측 마진, 통통 튀는 애니메이션 적용 -->
      <span class="mr-2 sm:mr-3 text-xl sm:text-2xl animate-bounce">🧑</span> ABOUT ME
    </h2>
    <!-- 콘텐츠 영역: 전체 너비 적용 -->
    <div class="w-full">
      <!-- 그리드 레이아웃: 반응형 열 배치, 간격 설정 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <!-- v-for로 카드 반복 생성: 각 개인 정보 항목마다 카드 생성 -->
        <div
          v-for="(item, index) in profileItems"
          :key="index"
          class="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
        >
          <!-- 아이콘 컨테이너: 원형, 배경, 중앙 정렬, 호버 시 회전 효과 -->
          <div
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex justify-center items-center mr-3 sm:mr-4 flex-shrink-0 transform transition-transform hover:rotate-12 duration-300"
          >
            <span class="text-xl sm:text-2xl">{{ item.icon }}</span>
          </div>
          <!-- 텍스트 영역: 남은 공간 채우기, 최소 너비 설정 -->
          <div class="flex-grow min-w-0">
            <!-- 라벨: 작은 폰트, 중간 굵기, 회색, 마진 설정 -->
            <h3 class="text-xs sm:text-sm font-medium text-gray-400 m-0 mb-1">{{ item.label }}</h3>
            <!-- 값: 반응형 폰트, 굵은 글씨, 어두운 색상, 넘침 처리 -->
            <p class="text-sm sm:text-base font-semibold text-gray-800 m-0 truncate">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      // 프로필 정보 배열: 각 항목별 아이콘, 라벨, 값 정의
      profileItems: [
        { icon: '🧑', label: '이름', value: '양희일' },
        { icon: '🎂', label: '생년월일', value: '93.05.21' },
        { icon: '📍', label: '주소', value: '서울시 강동구' },
        { icon: '📞', label: '연락처', value: '010-4745-8523' },
        { icon: '✉️', label: '이메일', value: 'myid7771@naver.com' },
        { icon: '🎓', label: '학력', value: '세종대학교(기계공학과)' },
      ],
    };
  },
  mounted() {
    // 스크롤 시 애니메이션을 위한 인터섹션 옵저버 설정
    const observerOptions = {
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

    // 모든 AboutMe 카드 요소에 fade-in 클래스 추가하고 옵저버로 관찰
    document.querySelectorAll('#about .grid > div').forEach((el) => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  },
};
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

/* 작은 화면에서 그리드 간격 조정 */
@media (max-width: 360px) {
  .grid {
    gap: 0.75rem;
  }
}
</style>
