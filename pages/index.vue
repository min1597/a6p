<script setup lang="ts">
const { questions, guideCards, createEmptyAnswers } = useSecurityTest()

const storedAnswers = useState('security-test-answers', createEmptyAnswers)
const answers = storedAnswers.value

const heroStats = [
  { label: '걸리는 시간', value: '2분' },
  { label: '체크 항목', value: `${questions.length}개` },
  { label: '가이드 흐름', value: '문제-점검-실천' }
]

const focusItems = ['통신사 계정 보호', '명의도용 여부 확인', '보안 업데이트 점검', '잠금화면 설정', '민감한 화면 정리']

const awarenessCards = [
  {
    eyebrow: '문제 정의',
    title: '유심 정보 유출은 통신 해킹 자체보다도, 그 뒤에 이어지는 2차 피해가 더 큽니다.',
    body: '명의도용, 계정 접근, 본인확인 악용처럼 생활 속 피해로 이어질 수 있어서 미리 점검하는 습관이 중요합니다.'
  },
  {
    eyebrow: '설문조사 및 방향성',
    title: '어려운 기술 설명보다, 지금 놓치고 있는 행동 습관을 먼저 확인하도록 구성했습니다.',
    body: '학생 사용자가 바로 답할 수 있는 질문으로 보안 인식 수준과 실천 가능성을 함께 점검합니다.'
  },
  {
    eyebrow: '목표 및 해결책 개요',
    title: '진단 결과 뒤에는 바로 적용할 수 있는 보안 가이드와 확인 링크를 이어서 제공합니다.',
    body: '특히 명의도용방지시스템, 통신사 계정 보호, 업데이트, 잠금화면처럼 즉시 실천 가능한 항목에 집중했습니다.'
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

const libraryItems = [
  {
    title: '유심 보안 한눈에 보기',
    text: '통신사 계정 보호, 명의도용 확인, 업데이트, 잠금화면 설정처럼 지금 바로 적용할 수 있는 것부터 챙기세요.'
  },
  {
    title: '분실 직후 우선순위',
    text: '1) 통신사 분실 신고 2) 유심 정지 3) 주요 계정 비밀번호 변경 4) 명의도용 여부 확인 순으로 대응하세요.'
  },
  {
    title: '잠금화면과 기본 설정',
    text: '휴대폰 잠금, 업데이트, 알림 미리보기 차단처럼 작은 기본 설정만으로도 노출 위험을 줄일 수 있습니다.'
  },
  {
    title: '정기 점검 주기',
    text: '3개월에 한 번 정도 회선 조회, 비밀번호 점검, 업데이트 확인만 해도 위험을 낮출 수 있습니다.'
  }
]

const externalServices = [
  {
    title: '엠세이퍼 명의도용방지서비스',
    description: '내 명의로 개통된 휴대폰 회선이 있는지 확인해볼 수 있는 대표적인 명의도용 점검 서비스입니다.',
    href: 'https://www.msafer.or.kr',
    label: '엠세이퍼 바로가기',
    accent: '#1d63d8',
    tint: '#eef5ff'
  },
  {
    title: '털린 내 정보 찾기 서비스',
    description: '아이디, 이메일, 비밀번호가 다크웹 등에 유출되었는지 조회해볼 수 있는 서비스입니다.',
    href: 'https://kidc.eprivacy.go.kr/',
    label: '유출 여부 조회하기',
    accent: '#0f8a68',
    tint: '#edf9f5'
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
        <span class="brand-kicker">SIM SECURITY CHECK</span>
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
          <h1>내 유심, 지금<br />상태로 괜찮을까?</h1>
          <p class="hero-body">
            몇 가지 질문에 답하면 내가 놓치고 있는 유심 보안 습관이 있는지 빠르게 확인할 수
            있습니다.
          </p>
          <div class="hero-actions">
            <a class="primary-button" href="#test">테스트 시작하기</a>
            <a class="ghost-button" href="#guide">가이드 먼저 보기</a>
          </div>
        </div>

        <div class="hero-summary">
          <div class="summary-panel">
            <p class="summary-label">핵심 점검 항목</p>
            <div class="summary-stats">
              <div v-for="stat in heroStats" :key="stat.label">
                <strong>{{ stat.value }}</strong>
                <span>{{ stat.label }}</span>
              </div>
            </div>
            <ul class="summary-focus-list">
              <li v-for="item in focusItems" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="purpose" class="content-section">
        <div class="section-heading">
          <p class="eyebrow">1 문제 정의</p>
          <h2>거창한 제도 설명보다, 먼저 생활 속에서 바로 점검할 수 있는 유심 보안 가이드를 목표로 했습니다.</h2>
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
          <p class="eyebrow">2 기대 효과 및 기대 변화</p>
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
          <p class="eyebrow">3 설문조사 진행 및 방향성 도출</p>
          <h2>가장 가까운 답을 눌러 현재 보안 습관을 점검해 보세요.</h2>
          <p>{{ answeredCount }} / {{ questions.length }} 문항 완료</p>
        </div>

        <div class="progress-meter" aria-hidden="true">
          <div class="progress-meter-fill" :style="{ width: `${(answeredCount / questions.length) * 100}%` }"></div>
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
          <p class="test-helper">
            {{ isComplete ? '모든 문항 응답이 완료되었습니다. 결과 페이지로 이동해 맞춤 가이드를 확인해 보세요.' : '모든 문항에 답하면 결과 페이지에서 보안 수준과 맞춤 가이드를 확인할 수 있습니다.' }}
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
          <p class="eyebrow">4 가이드라인 웹사이트 소개</p>
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

        <div class="service-box">
          <div class="service-box-head">
            <p class="eyebrow">이런 서비스도 있어요!</p>
            <h3>바로 확인 가능한 외부 서비스</h3>
          </div>
          <div class="service-grid">
            <article v-for="service in externalServices" :key="service.href" class="service-card">
              <span class="service-badge" :style="{ color: service.accent, backgroundColor: service.tint }">
                바로 확인 가능
              </span>
              <strong>{{ service.title }}</strong>
              <p>{{ service.description }}</p>
              <a
                class="guide-link service-link"
                :style="{ color: service.accent, borderColor: service.accent, backgroundColor: service.tint }"
                :href="service.href"
                target="_blank"
                rel="noreferrer"
              >
                {{ service.label }}
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="library" class="content-section">
        <div class="section-heading">
          <p class="eyebrow">5 해결방안의 특징 및 차별성</p>
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
        <p>아주대학교 아주상상프로젝트 아육대</p>
      </div>
      <div>
        <strong>정책 링크</strong>
        <p><NuxtLink to="/privacy">개인정보 처리방침</NuxtLink></p>
      </div>
    </footer>
  </div>
</template>
