export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: ['c675-61-84-11-31.ngrok-free.app']
    }
  },
  app: {
    head: {
      title: '내 유심은 안전할까?',
      meta: [
        {
          name: 'description',
          content:
            '몇 가지 질문으로 나의 유심 보안 상태를 점검하고, 결과에 맞는 보안 가이드를 확인하는 모바일 중심 자가진단 서비스'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-05-15'
})
