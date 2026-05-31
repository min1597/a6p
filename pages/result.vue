<script setup lang="ts">
const {
  questions,
  createEmptyAnswers,
  levelMap,
  getLevel,
  getTotalScore,
  getWeakestCategories,
  getRecommendedGuides
} = useSecurityTest()

const answers = useState('security-test-answers', createEmptyAnswers)

const isComplete = computed(() =>
  questions.every(question => answers.value[question.id] !== null)
)

if (import.meta.client && !isComplete.value) {
  await navigateTo('/#test')
}

const totalScore = computed(() => getTotalScore(answers.value))
const level = computed(() => getLevel(totalScore.value))
const resultTone = computed(() => levelMap[level.value])
const weakestCategories = computed(() => getWeakestCategories(answers.value))
const recommendedGuides = computed(() => getRecommendedGuides(answers.value))

useSeoMeta({
  title: '테스트 결과 | 내 유심은 안전할까?',
  description: '유심 보안 점수 테스트 결과와 맞춤 보안 가이드'
})
</script>

<template>
  <div class="page-shell">
    <header class="topbar">
      <div class="brand-lockup">
        <span class="brand-chip brand-chip-solid">SIM SECURITY CHECK</span>
        <strong>내 유심은 안전할까?</strong>
      </div>
      <nav class="topnav" aria-label="주요 메뉴">
        <NuxtLink to="/#test">보안 점수 테스트</NuxtLink>
        <NuxtLink to="/#guide">보안 가이드</NuxtLink>
        <NuxtLink to="/#library">자료실</NuxtLink>
      </nav>
    </header>

    <main>
      <section class="hero-panel result-hero">
        <div class="hero-copy">
          <p class="eyebrow">테스트 결과</p>
          <h1>지금 내 유심 보안 상태는 {{ resultTone.label }} 단계예요.</h1>
          <p class="hero-body">{{ resultTone.description }}</p>
          <div class="hero-actions">
            <NuxtLink class="ghost-button" to="/#test">답변 다시 보기</NuxtLink>
            <a class="primary-button" href="#result-guide">가이드 바로 보기</a>
          </div>
        </div>

        <div class="hero-summary">
          <div class="summary-panel">
            <p class="summary-label">결과 요약</p>
            <div class="summary-stats">
              <div>
                <strong>{{ totalScore }}점</strong>
                <span>총점</span>
              </div>
              <div>
                <strong>{{ weakestCategories.length }}개</strong>
                <span>우선 점검 항목</span>
              </div>
              <div>
                <strong>{{ resultTone.label }}</strong>
                <span>현재 단계</span>
              </div>
            </div>
            <ul class="summary-list">
              <li v-for="category in weakestCategories" :key="category">
                우선 확인: {{ category }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-heading">
          <p class="eyebrow">왜 이렇게 나왔을까</p>
          <h2>{{ resultTone.headline }}</h2>
          <p>답변한 내용 중 점수가 높았던 항목을 기준으로 먼저 챙기면 좋은 순서를 골랐습니다.</p>
        </div>
      </section>

      <section id="result-guide" class="content-section">
        <div class="section-heading">
          <p class="eyebrow">맞춤 가이드</p>
          <h2>지금 바로 해볼 수 있는 것부터 정리했습니다.</h2>
        </div>
        <div class="guide-grid">
          <article v-for="guide in recommendedGuides" :key="guide.id" class="guide-card">
            <h3>{{ guide.title }}</h3>
            <p>{{ guide.summary }}</p>
            <ol>
              <li v-for="step in guide.steps" :key="step">{{ step }}</li>
            </ol>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>
