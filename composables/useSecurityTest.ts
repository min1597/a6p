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
}

export type AnswerMap = Record<string, number | null>

const questions: SecurityQuestion[] = [
  {
    id: 'pin',
    title: '휴대폰을 잃어버려도 유심을 바로 못 쓰게 막아두셨나요?',
    description: '유심 PIN 잠금은 분실 뒤 다른 폰에 유심을 꽂아 쓰는 일을 막아주는 기본 설정입니다.',
    category: 'pin',
    options: [
      { label: '네, 설정해 두었습니다', score: 0, note: '좋아요.' },
      { label: '잘 모르겠습니다', score: 2, note: '설정 여부만 확인해도 바로 보완할 수 있습니다.' },
      { label: '아니요, 아직 안했습니다', score: 4, note: '분실 상황에서 위험해질 수 있어요.' }
    ]
  },
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
    description: '엠세이퍼 같은 서비스로 내 이름으로 개통된 번호를 확인할 수 있습니다.',
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
      { label: '네, 보이면 바로 하는 편입니다', score: 0, note: '기본 보안 관리가 잘 되고 있는 편입니다.' },
      { label: '가끔 미루는 편입니다', score: 1, note: '조금만 더 빨리 챙기면 더 좋아요.' },
      { label: '아니요, 오래 미룬 적이 많습니다', score: 3, note: '이미 알려진 취약점에 노출될 수 있습니다.' }
    ]
  },
  {
    id: 'loss',
    title: '휴대폰 잠금화면은 충분히 설정해 두셨나요?',
    description: '비밀번호, 패턴, 생체인증 같은 기본 잠금이 없으면 개인정보와 계정이 더 쉽게 노출될 수 있습니다.',
    category: 'loss',
    options: [
      { label: '네, 비밀번호나 생체인증을 설정해 뒀습니다', score: 0, note: '좋아요. 기본적인 접근 차단에 도움이 됩니다.' },
      { label: '간단하게만 설정해 뒀습니다', score: 2, note: '조금 더 강한 잠금 방식을 쓰면 더 안전해요.' },
      { label: '아니요, 거의 설정하지 않았습니다', score: 3, note: '분실 시 개인정보 노출 위험이 커질 수 있어요.' }
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
    id: 'pin',
    category: 'pin',
    title: '유심 PIN 잠금 켜기',
    summary: '복잡한 것보다 먼저 챙길 만한 기본 설정입니다. 분실 뒤 유심 재사용을 바로 어렵게 만듭니다.',
    steps: [
      '설정 앱에서 보안 또는 모바일 네트워크 메뉴로 들어갑니다.',
      'SIM 카드 잠금 또는 유심 잠금 메뉴를 찾아 PIN을 활성화합니다.',
      '기본 PIN을 바꿨다면 새 번호를 안전한 곳에 보관합니다.'
    ]
  },
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
    ]
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
    title: '휴대폰 잠금 설정 점검하기',
    summary: '잠금화면은 휴대폰 분실 전에도, 평소 주변 노출을 막는 데에도 기본이 되는 보호장치입니다.',
    steps: [
      '비밀번호, 패턴, 지문 또는 얼굴 인식 중 하나 이상을 활성화합니다.',
      '너무 단순한 번호 대신 추측하기 어려운 잠금 방식을 사용합니다.',
      '잠금 없이 바로 알림 내용이 보이지 않게 화면 미리보기도 함께 점검합니다.'
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
    description: '유심 PIN, 통신사 계정 보호, 잠금화면 설정부터 먼저 손보는 것을 추천합니다.'
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
