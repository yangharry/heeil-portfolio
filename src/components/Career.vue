<template>
  <section id="career" class="career-section">
    <h2 class="section-title"><span class="icon">🏢</span> CAREER</h2>
    <div class="career-content">
      <div class="company">
        <div class="company-logo">
          <img src="/kakao-logo.png" alt="카카오" />
        </div>
        <div class="company-info">
          <h3>(주) 카카오</h3>
          <p class="company-period">2022.08 - 현재</p>
          <div class="job-description">
            <h4>프론트엔드 개발자</h4>
            <ul>
              <li>카카오 서비스의 웹 프론트엔드 개발</li>
              <li>React, TypeScript를 활용한 신규 서비스 개발</li>
              <li>레거시 코드 리팩토링 및 성능 최적화</li>
              <li>UI/UX 개선 작업</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="company">
        <div class="company-logo">
          <img src="/opengallery-logo.png" alt="오픈갤러리" />
        </div>
        <div class="company-info">
          <h3>(주) 오픈갤러리</h3>
          <p class="company-period">2021.03 - 2022.07</p>
          <div class="job-description">
            <h4>웹 프론트엔드 개발자</h4>
            <ul>
              <li>Vue.js를 활용한 아트 커머스 플랫폼 개발</li>
              <li>반응형 웹 디자인 구현</li>
              <li>RESTful API를 활용한 백엔드 연동</li>
              <li>웹 성능 최적화 및 사용자 경험 개선</li>
              <li>사내 디자인 시스템 구축 참여</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-section {
  padding: 60px 0;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #333;
  display: flex;
  align-items: center;
}

.section-title .icon {
  margin-right: 10px;
  font-size: 28px;
}

.career-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.company {
  display: flex;
  gap: 30px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.company-logo {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.company-logo img {
  max-width: 80%;
  max-height: 80%;
}

.company-info {
  flex-grow: 1;
}

.company-info h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 5px 0;
  color: #333;
}

.company-period {
  color: #666;
  font-size: 16px;
  margin: 0 0 20px 0;
}

.job-description h4 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: #ff6b6b;
}

.job-description ul {
  margin: 0;
  padding-left: 20px;
}

.job-description li {
  margin-bottom: 10px;
  font-size: 16px;
  color: #666;
}

@media (max-width: 768px) {
  .company {
    flex-direction: column;
    align-items: flex-start;
  }

  .company-logo {
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
  }
}
</style>
