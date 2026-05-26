<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const locale = ref<'zh' | 'en'>('en')

const content = computed(() => {
  if (locale.value === 'zh') {
    return {
      welcome: '欢迎使用 PandaLED!',
      slogan: '把心亮出来，让世界看见',
    }
  }
  return {
    welcome: 'Welcome to PandaLED!',
    slogan: 'Shine bright, stand out.',
  }
})

function toggleLocale() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}

function goToPrivacy() {
  router.push(`/privacy-policy/${locale.value}`)
}
</script>

<template>
  <div class="home">
    <button class="lang-switcher" @click="toggleLocale">
      {{ locale === 'zh' ? 'EN' : '中文' }}
    </button>

    <button class="privacy-btn" @click="goToPrivacy">
      {{ locale === 'zh' ? '隐私政策' : 'Privacy Policy' }}
    </button>

    <div class="hero">
      <div class="logo-container">
        <img src="/logo.png" alt="PandaLED Logo" class="logo" />
        <div class="logo-glow"></div>
      </div>
      <h1 class="title" :key="locale + '-title'">{{ content.welcome }}</h1>
      <p class="slogan" :key="locale + '-slogan'">{{ content.slogan }}</p>
      <div class="decorative-line"></div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%);
  position: relative;
  overflow: hidden;
}

/* Animated background particles */
.home::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background:
    radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.15), transparent),
    radial-gradient(2px 2px at 40% 70%, rgba(255, 255, 255, 0.1), transparent),
    radial-gradient(1px 1px at 60% 20%, rgba(255, 255, 255, 0.12), transparent),
    radial-gradient(1px 1px at 80% 60%, rgba(255, 255, 255, 0.08), transparent),
    radial-gradient(2px 2px at 10% 80%, rgba(255, 255, 255, 0.1), transparent),
    radial-gradient(1px 1px at 70% 90%, rgba(255, 255, 255, 0.12), transparent),
    radial-gradient(1px 1px at 90% 40%, rgba(255, 255, 255, 0.08), transparent),
    radial-gradient(2px 2px at 50% 10%, rgba(255, 255, 255, 0.1), transparent);
  animation: drift 60s linear infinite;
  pointer-events: none;
}

@keyframes drift {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-25%, -25%);
  }
}

/* Language switcher */
.lang-switcher {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 10;
  width: 72px;
  height: 34px;
  padding: 0.5rem 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lang-switcher:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.lang-switcher:active {
  transform: scale(0.95);
}

.privacy-btn {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 0.5rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.privacy-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateX(-50%) scale(1.05);
}

.privacy-btn:active {
  transform: translateX(-50%) scale(0.95);
}

.hero {
  text-align: center;
  z-index: 1;
  padding: 2rem;
}

.logo-container {
  position: relative;
  display: inline-block;
  margin-bottom: 2.5rem;
}

.logo {
  width: 180px;
  height: auto;
  position: relative;
  z-index: 1;
  border-radius: 24px;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.35));
  transition:
    transform 0.3s ease,
    filter 0.3s ease,
    border-radius 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.65));
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1rem;
  letter-spacing: 2px;
  text-shadow: 0 0 40px rgba(255, 107, 53, 0.3);
  animation: fade-in-up 0.8s ease-out;
}

.slogan {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 2rem;
  letter-spacing: 3px;
  font-weight: 300;
  animation: fade-in-up 0.8s ease-out 0.2s both;
}

.decorative-line {
  width: 60px;
  height: 3px;
  margin: 0 auto;
  background: linear-gradient(90deg, transparent, #ffffff, transparent);
  border-radius: 2px;
  animation: fade-in-up 0.8s ease-out 0.4s both;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
