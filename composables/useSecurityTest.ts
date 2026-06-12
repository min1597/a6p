export type Level = 'safe' | 'warning' | 'danger'

export type QuestionOption = {
  label: string
  score: number
  note: string
}

export type SecurityQuestion = {
  id: string
  title: string
  description: string
  category: string
  options: QuestionOption[]
}

export type GuideCard = {
  id: string
  category: string
  title: string
  summary: string
  steps: string[]
  linkHref?: string
  linkLabel?: string
}

export type AnswerMap = Record<string, number | null>

const questions: SecurityQuestion[] = [
  {
    id: 'carrier',
    title: '통신사 앱 비밀번호는 다른 사이트랑 겹치지 않고, 잠금도 충분한가요?',
    description: '통신사 계정이 느슨하면 재발급, 부가서비스 변경 같은 절차가 악용될 수 있습니다.',
    category: 'carrier',
    options: [
      { label: '네, 강한 비밀번호와 추가 잠금을 씁니다', score: 0, note: '좋아요, 계정 탈취 위험을 줄일 수 있어요.' },
      { label: '비밀번호만 설정해 뒀습니다', score: 2, note: '생체인증이나 추가 보안을 붙이면 더 좋아요.' },
      { label: '아니요, 겹치는게 있습니다', score: 4, note: '겹치는게 있으면 실제 사고 때 취약할 수 있어요.' }
    ]
  },
  {
    id: 'msafer',
    title: '내 명의가 떠돌아 다니고 있는지 확인해본적이 있나요?',
    description: '엠세이퍼 같은 명의도용방지시스템으로 내 이름으로 개통된 번호를 바로 확인할 수 있습니다.',
    category: 'msafer',
    options: [
      { label: '네, 최근에도 확인해 봤습니다', score: 0, note: '좋아요, 이상 징후를 빨리 알아차릴 수 있겠네요.' },
      { label: '예전에만 해봤습니다', score: 2, note: '가끔씩만 다시봐도 도움이 됩니다.' },
      { label: '아니요, 한번도 안 해봤습니다', score: 3, note: '혹시 모르니 확인해 두는것이 좋아요.' }
    ]
  },
  {
    id: 'update',
    title: '휴대폰 업데이트를 계속 미루는 편인가요?',
    description: '보안 업데이트는 귀찮아 보여도 이미 알려진 취약점을 막는 가장 쉬운 방법입니다.',
    category: 'update',
    options: [
      { label: '아니요, 보이면 바로 하는 편입니다', score: 0, note: '기본 보안 관리가 잘 되고 있는 편입니다.' },
      { label: '가끔 미루는 편입니다', score: 1, note: '조금만 더 빨리 챙기면 더 좋아요.' },
      { label: '네, 오래 미룬 적이 많습니다', score: 3, note: '이미 알려진 취약점에 노출될 수 있습니다.' }
    ]
  },
  {
    id: 'loss',
    title: '통신사나 금융기관처럼 보이는 문자 링크를 바로 누르는 편인가요?',
    description: '개인정보 유출 뒤에는 보상 신청, 본인확인, 요금 미납 같은 문구로 스미싱을 유도하는 문자가 올 수 있습니다.',
    category: 'loss',
    options: [
      { label: '아니요, 링크 대신 공식 앱이나 고객센터로 확인합니다', score: 0, note: '좋아요. 스미싱 피해를 줄이는 데 큰 도움이 됩니다.' },
      { label: '가끔은 눌러본 적이 있습니다', score: 2, note: '비슷한 문구가 와도 링크 대신 공식 경로로 확인하는 습관이 필요합니다.' },
      { label: '네, 급하면 바로 누르는 편입니다', score: 3, note: '악성 앱 설치나 개인정보 입력 페이지로 이어질 수 있어 주의가 필요해요.' }
    ]
  },
  {
    id: 'network',
    title: '인증번호 문자나 개인정보가 담긴 화면을 그대로 오래 두는 편인가요?',
    description: '인증번호, 신분증 사진, 계정 정보가 담긴 화면이나 문자를 그대로 두면 다른 사람이 볼 수 있습니다.',
    category: 'network',
    options: [
      { label: '아니요, 바로 지우거나 정리합니다', score: 0, note: '좋아요. 개인정보 노출을 줄이는 데 도움이 됩니다.' },
      { label: '가끔은 그대로 둡니다', score: 2, note: '민감한 정보는 바로 정리하는 습관이 필요합니다.' },
      { label: '네, 자주 그대로 둡니다', score: 3, note: '주변 노출이나 2차 피해 위험이 커질 수 있어요.' }
    ]
  }
]

const guideCards: GuideCard[] = [
  {
    id: 'carrier',
    category: 'carrier',
    title: '통신사 계정 보호 강화',
    summary: '통신사 계정은 생각보다 중요합니다. 비밀번호를 정리해 두는 것만으로도 위험을 크게 줄일 수 있습니다.',
    steps: [
      '통신사 앱 비밀번호를 다른 사이트와 겹치지 않게 변경합니다.',
      '생체 인증이나 추가 본인확인 절차가 있다면 함께 활성화합니다.',
      '최근 로그인 기록이나 개통 이력 알림 기능이 있으면 켭니다.'
    ]
  },
  {
    id: 'msafer',
    category: 'msafer',
    title: '엠세이퍼 등 명의도용 방지 서비스 점검',
    summary: '내 이름으로 모르는 번호가 개통된 건 없는지 가끔 확인하는 습관이 필요합니다.',
    steps: [
      '엠세이퍼 또는 통신사 본인확인 메뉴에서 회선 현황을 조회합니다.',
      '모르는 회선이나 서비스가 있으면 즉시 통신사 고객센터에 문의합니다.',
      '분기마다 한 번 확인하는 일정을 만들어 둡니다.'
    ],
    linkHref: 'https://www.msafer.or.kr',
    linkLabel: '엠세이퍼 바로가기'
  },
  {
    id: 'update',
    category: 'update',
    title: '보안 업데이트 자동화',
    summary: '업데이트를 너무 오래 미루지 않는 것만으로도 기본 위험을 많이 줄일 수 있습니다.',
    steps: [
      'OS 업데이트 자동 다운로드와 설치 옵션을 켭니다.',
      '통신사 인증, 금융, 백신 앱도 함께 최신 버전으로 유지합니다.',
      '오래된 기기라면 지원 종료 여부를 확인하고 교체 시점을 검토합니다.'
    ]
  },
  {
    id: 'loss',
    category: 'loss',
    title: '수상한 문자와 링크 주의하기',
    summary: '개인정보 유출 이후에는 공격자가 통신사나 금융기관처럼 보이는 문자로 링크 클릭을 유도할 수 있습니다. 이런 문자는 스미싱으로 이어질 수 있어 주의가 필요합니다.',
    steps: [
      '"개인정보 유출 보상 신청", "유심 보호 서비스 만료", "휴대전화 인증 오류" 같은 문구는 특히 한 번 더 확인합니다.',
      '"통신사 보안 점검 필요", "요금 미납 안내", "택배 주소 오류", "금융계좌 정지 예정", "본인확인 필요" 같은 문자도 바로 누르지 않습니다.',
      '문자 안의 링크를 누르지 말고, 직접 통신사 공식 앱이나 공식 고객센터를 통해 사실 여부를 확인합니다.'
    ]
  },
  {
    id: 'network',
    category: 'network',
    title: '인증번호와 개인정보 화면 바로 정리하기',
    summary: '작아 보이는 습관이지만, 인증번호 문자나 민감한 화면을 오래 두지 않는 것이 2차 노출을 줄여줍니다.',
    steps: [
      '인증번호 문자나 본인확인 화면은 사용 후 바로 닫거나 삭제합니다.',
      '신분증 사진, 계정 정보 캡처 화면은 갤러리에 오래 남겨두지 않습니다.',
      '다른 사람이 볼 수 있는 장소에서는 민감한 화면을 오래 켜두지 않습니다.'
    ]
  }
]

const levelMap: Record<Level, { label: string; headline: string; description: string }> = {
  safe: {
    label: '안전',
    headline: '기본 습관이 꽤 잘 잡혀 있어요.',
    description: '지금처럼만 관리해도 큰 위험을 많이 줄일 수 있습니다. 가끔 점검만 해 주세요.'
  },
  warning: {
    label: '경고',
    headline: '몇 군데는 바로 보완하면 좋아요.',
    description: '어려운 설정을 다 할 필요는 없고, 우선순위 높은 것부터 2~3개만 챙겨도 충분합니다.'
  },
  danger: {
    label: '위험',
    headline: '지금 상태라면 실제 사고에 조금 취약할 수 있어요.',
    description: '통신사 계정 보호, 명의도용 점검, 수상한 문자와 링크 주의부터 먼저 손보는 것을 추천합니다.'
  }
}

export const useSecurityTest = () => {
  const createEmptyAnswers = (): AnswerMap =>
    Object.fromEntries(questions.map(question => [question.id, null]))

  const getLevel = (score: number): Level => {
    if (score <= 5) {
      return 'safe'
    }

    if (score <= 13) {
      return 'warning'
    }

    return 'danger'
  }

  const getTotalScore = (answers: AnswerMap) =>
    questions.reduce((sum, question) => sum + (answers[question.id] ?? 0), 0)

  const getWeakestCategories = (answers: AnswerMap) =>
    questions
      .map(question => ({
        category: question.category,
        score: answers[question.id] ?? 0
      }))
      .sort((left, right) => right.score - left.score)
      .filter(item => item.score > 0)
      .slice(0, 3)
      .map(item => item.category)

  const getRecommendedGuides = (answers: AnswerMap) => {
    const weakestCategories = getWeakestCategories(answers)
    const personalized = guideCards.filter(card =>
      weakestCategories.includes(card.category)
    )

    if (personalized.length >= 3) {
      return personalized
    }

    const fallback = guideCards.filter(card => !personalized.includes(card))
    return [...personalized, ...fallback].slice(0, 4)
  }

  return {
    createEmptyAnswers,
    questions,
    guideCards,
    levelMap,
    getLevel,
    getTotalScore,
    getWeakestCategories,
    getRecommendedGuides
  }
}
