<script setup lang="ts">
const { questions, guideCards, createEmptyAnswers } = useSecurityTest()

const storedAnswers = useState('security-test-answers', createEmptyAnswers)
const answers = storedAnswers.value

const heroStats = [
  { label: '걸리는 시간', value: '2분' },
  { label: '체크 항목', value: `${questions.length}개` },
  { label: '결과 방식', value: '안전도 3단계' }
]

const trustItems = ['PIN 잠금', '통신사 앱', '명의도용 확인', '업데이트', '잠금화면']

const awarenessCards = [
  {
    eyebrow: '생각보다 자주 놓치는 것',
    title: '유심 보안은 전문가용 설정이 아니라, 평소 습관에 더 가깝습니다.',
    body: 'PIN 잠금, 통신사 계정 정리, 잠금화면 설정처럼 바로 손댈 수 있는 것들이 많아요.'
  },
  {
    eyebrow: '이 테스트의 역할',
    title: '어디가 비어 있는지 먼저 찾고, 꼭 필요한 것만 추려서 보여줍니다.',
    body: '너무 많은 보안 정보를 한꺼번에 주기보다, 지금 바로 필요한 조치부터 확인하게 합니다.'
  },
  {
    eyebrow: '모바일에서 바로',
    title: '스크롤하면서 짧게 답하고, 결과를 바로 보는 흐름으로 구성했습니다.',
    body: '휴대폰으로 보는 상황을 기준으로 문장 길이와 버튼 크기를 정리했습니다.'
  }
]

const quantitativeOutcomes = [
  '개인정보 유출에 대한 경험과 그에 대한 생각 설문조사 데이터 수집',
  '사생활 침해 문제 빈도수 감소',
  'USIM 보호 서비스 활용에 대한 높은 이해도 지닌 사용자 증가',
  '피해 발생 후 2차 피해 빈도 감소',
  '가이드라인 웹 사이트 방문자 수 증가'
]

const qualitativeOutcomes = [
  '현실적 문제 해결 경험: 기술, 제도, 사용자 행동을 통합적으로 고려하는 문제 해결 능력 강화',
  '사회적 책임 의식 강화: 기업과 개인의 역할을 균형 있게 이해하고 디지털 시민으로서의 태도 확립',
  '실생활 적용 가능성: 팀원 및 주변 사람들이 실제로 적용 가능한 보안 습관 형성'
]

const introPoints = [
  '보안 지식이 많지 않아도 답할 수 있는 질문만 담았습니다.',
  '결과는 안전, 경고, 위험 세 단계로 단순하게 보여줍니다.',
  '진단이 끝나면 바로 실천할 수 있는 가이드를 이어서 확인할 수 있습니다.'
]

const libraryItems = [
  {
    title: '유심 보안 한눈에 보기',
    text: 'PIN 잠금, 통신사 계정 보호, 피싱 회피, 분실 대응 4가지만 기억해도 기본 방어선이 생깁니다.'
  },
  {
    title: '분실 직후 우선순위',
    text: '1) 통신사 분실 신고 2) 유심 정지 3) 주요 계정 비밀번호 변경 4) 명의도용 여부 확인 순으로 대응하세요.'
  },
  {
    title: '잠금화면과 기본 설정',
    text: '휴대폰 잠금, 유심 PIN, 업데이트처럼 바로 적용할 수 있는 기본 설정부터 챙기는 것이 좋습니다.'
  },
  {
    title: '정기 점검 주기',
    text: '3개월에 한 번 정도 회선 조회, 비밀번호 점검, 업데이트 확인만 해도 위험을 낮출 수 있습니다.'
  }
]

const answeredCount = computed(() =>
  questions.filter(question => answers[question.id] !== null).length
)

const isComplete = computed(() => answeredCount.value === questions.length)

const goToResult = async () => {
  if (!isComplete.value) {
    return
  }

  await navigateTo('/result')
}

useSeoMeta({
  title: '내 유심은 안전할까? | 유심 보안 점수 테스트',
  description:
    '간단한 자가진단으로 유심 보안 수준을 확인하고, 결과에 맞는 보안 가이드를 바로 확인하세요.'
})
</script>

<template>
  <div class="page-shell">
    <header class="topbar">
      <div class="brand-lockup">
        <span class="brand-chip">SIM SECURITY CHECK</span>
        <strong>내 유심은 안전할까?</strong>
      </div>
      <nav class="topnav" aria-label="주요 메뉴">
        <a href="#test">보안 점수 테스트</a>
        <a href="#guide">보안 가이드</a>
        <a href="#library">자료실</a>
      </nav>
    </header>

    <main>
      <section class="hero-panel">
        <div class="hero-copy">
          <p class="eyebrow">유심 보안 자가진단</p>
          <h1>내 유심, 지금 상태로 괜찮을까?</h1>
          <p class="hero-body">
            몇 가지 질문에 답하면 내가 놓치고 있는 유심 보안 습관이 있는지 빠르게 확인할 수
            있습니다.
          </p>
          <div class="hero-actions">
            <a class="primary-button" href="#test">테스트 시작하기</a>
            <a class="ghost-button" href="#guide">가이드 먼저 보기</a>
          </div>

          <div class="trust-strip" aria-label="주요 점검 항목">
            <span v-for="item in trustItems" :key="item">{{ item }}</span>
          </div>
        </div>

        <div class="hero-summary">
          <div class="summary-panel">
            <p class="summary-label">이 테스트에서 보는 것</p>
            <div class="summary-stats">
              <div v-for="stat in heroStats" :key="stat.label">
                <strong>{{ stat.value }}</strong>
                <span>{{ stat.label }}</span>
              </div>
            </div>
            <ul class="summary-list">
              <li v-for="point in introPoints" :key="point">{{ point }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="purpose" class="content-section">
        <div class="section-heading">
          <p class="eyebrow">프로젝트 취지</p>
          <h2>거창한 보안 서비스보다, 먼저 확인할 생활 습관을 알려주는 페이지를 목표로 했습니다.</h2>
          <p class="purpose-quote">
            I think our website can be a starting point to make students pay attention to
            protecting their personal information.
          </p>
        </div>
        <div class="awareness-grid">
          <article v-for="card in awarenessCards" :key="card.title" class="info-card">
            <span class="info-eyebrow">{{ card.eyebrow }}</span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.body }}</p>
          </article>
        </div>
      </section>

      <section class="content-section">
        <div class="section-heading">
          <p class="eyebrow">기대 성과</p>
          <h2>이 프로젝트를 통해 기대하는 변화</h2>
        </div>

        <div class="outcome-grid">
          <article class="outcome-card">
            <span class="outcome-label">정량적 성과</span>
            <ul class="outcome-list">
              <li v-for="item in quantitativeOutcomes" :key="item">{{ item }}</li>
            </ul>
          </article>

          <article class="outcome-card">
            <span class="outcome-label">정성적 성과</span>
            <ul class="outcome-list">
              <li v-for="item in qualitativeOutcomes" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="test" class="content-section">
        <div class="section-heading compact">
          <p class="eyebrow">보안 점수 테스트</p>
          <h2>가장 가까운 답을 눌러 주세요.</h2>
          <p>{{ answeredCount }} / {{ questions.length }} 문항 완료</p>
        </div>

        <div class="question-stack">
          <article v-for="(question, index) in questions" :key="question.id" class="question-card">
            <div class="question-meta">
              <span>Q{{ index + 1 }}</span>
              <h3>{{ question.title }}</h3>
              <p>{{ question.description }}</p>
            </div>

            <div class="answer-grid">
              <button
                v-for="option in question.options"
                :key="option.label"
                type="button"
                class="answer-button"
                :class="{ selected: answers[question.id] === option.score }"
                @click="answers[question.id] = option.score"
              >
                <strong>{{ option.label }}</strong>
                <span>{{ option.note }}</span>
              </button>
            </div>
          </article>
        </div>

        <div class="test-actions">
          <p class="test-helper" v-if="!isComplete">
            모든 문항에 답하면 결과 페이지에서 보안 수준과 맞춤 가이드를 확인할 수 있습니다.
          </p>
          <button
            type="button"
            class="primary-button result-button"
            :disabled="!isComplete"
            @click="goToResult"
          >
            결과 확인하기
          </button>
        </div>
      </section>

      <section id="guide" class="content-section">
        <div class="section-heading">
          <p class="eyebrow">실천 가이드</p>
          <h2>결과를 보고 바로 해볼 수 있는 것들만 먼저 모았습니다.</h2>
        </div>
        <div class="guide-grid">
          <article v-for="guide in guideCards.slice(0, 4)" :key="guide.id" class="guide-card">
            <h3>{{ guide.title }}</h3>
            <p>{{ guide.summary }}</p>
            <ol>
              <li v-for="step in guide.steps" :key="step">{{ step }}</li>
            </ol>
          </article>
        </div>
      </section>

      <section id="library" class="content-section">
        <div class="section-heading">
          <p class="eyebrow">자료실</p>
          <h2>짧게 훑어보는 유심 보안 요약</h2>
        </div>

        <div class="library-panel">
          <article v-for="item in libraryItems" :key="item.title" class="library-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <strong>프로젝트 제작 목적</strong>
        <p>이 사이트는 일반 이용자가 유심 보안 위험을 쉽게 이해하고 바로 실천할 수 있도록 돕기 위한 교육용 프로젝트입니다.</p>
      </div>
      <div>
        <strong>제작자 정보</strong>
        <p>소속 팀 또는 제작자 이름, 문의 채널은 배포 환경에 맞게 추가해 사용할 수 있습니다.</p>
      </div>
      <div>
        <strong>정책 링크</strong>
        <p><NuxtLink to="/privacy">개인정보 처리방침</NuxtLink></p>
      </div>
    </footer>
  </div>
</template>
