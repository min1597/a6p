<script setup lang="ts">
useSeoMeta({
  title: '개인정보 처리방침 | 내 유심은 안전할까?',
  description: '유심 보안 점수 테스트 서비스의 개인정보 처리방침 예시 페이지'
})
</script>

<template>
  <div class="legal-page">
    <NuxtLink class="back-link" to="/">← 메인으로 돌아가기</NuxtLink>
    <div class="legal-card">
      <p class="eyebrow">개인정보 처리방침</p>
      <h1>자가진단 결과는 이용자 기기에서만 확인하도록 설계할 수 있습니다.</h1>
      <p>
        현재 예시 프로젝트는 서버 저장 없이 설문 응답을 화면에서만 계산하는 구조를 전제로 합니다.
        실제 배포 시 분석 도구, 문의 폼, 로그인 기능을 추가한다면 수집 항목과 보관 기간을 별도로 고지해야 합니다.
      </p>

      <section class="legal-section">
        <h2>1. 수집 목적</h2>
        <p>유심 보안 자가진단 결과 제공, 보안 인식 개선, 서비스 품질 점검</p>
      </section>

      <section class="legal-section">
        <h2>2. 수집 항목</h2>
        <p>기본 예시 버전에서는 설문 응답을 서버에 저장하지 않습니다. 단, 실제 운영 시 로그나 문의 접수가 있다면 별도 안내가 필요합니다.</p>
      </section>

      <section class="legal-section">
        <h2>3. 보관 기간</h2>
        <p>저장 데이터가 없다면 별도 보관도 없습니다. 운영 기능 추가 시 목적 달성 후 지체 없이 파기하는 정책을 권장합니다.</p>
      </section>

      <section class="legal-section">
        <h2>4. 이용자 안내</h2>
        <p>본 페이지는 프로젝트 제출용 예시 문안입니다. 실제 기관, 학교, 팀명과 담당자 연락처를 반영해 수정해 주세요.</p>
      </section>
    </div>
  </div>
</template>
