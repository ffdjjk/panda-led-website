<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const locale = ref<'zh' | 'en'>('en')

const content = computed(() => {
  if (locale.value === 'zh') {
    return {
      welcome: '欢迎使用PandaLED！',
      slogan: '把心亮出来，让世界看见！',
      androidBadgeLabel: '即将在',
      androidDescription: 'Android 版本正在审核中，敬请期待！',
    }
  }
  return {
      welcome: 'Welcome to PandaLED!',
      slogan: 'Shine bright, stand out.',
      androidBadgeLabel: 'Get it on',
      androidDescription: 'Android app is under review. Stay tuned!',
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
    <a
      href="https://discord.gg/KFDhTS4Pnt"
      target="_blank"
      rel="noopener noreferrer"
      class="discord-btn"
      title="Discord"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    </a>

    <button class="lang-switcher" @click="toggleLocale">
      {{ locale === 'zh' ? 'EN' : '中文' }}
    </button>

    <button class="privacy-btn" @click="goToPrivacy">
      {{ locale === 'zh' ? '隐私政策' : 'Privacy Policy' }}
    </button>

    <div class="hero">
      <div class="logo-container">
        <video
          src="/logo.mp4"
          autoplay
          muted
          loop
          playsinline
          class="logo"
        ></video>
        <div class="logo-glow"></div>
      </div>
      <h1 class="title" :key="locale + '-title'">{{ content.welcome }}</h1>
      <p class="slogan" :key="locale + '-slogan'">{{ content.slogan }}</p>

      <div class="android-section">
      <a
        href="#"
        class="google-play-badge"
        :title="content.androidDescription"
        @click.prevent
      >
        <div class="badge-inner">
          <div class="badge-icon">
            <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="currentColor"/>
            </svg>
          </div>
          <div class="badge-text">
            <span class="badge-label">{{ content.androidBadgeLabel }}</span>
            <span class="badge-store">Google Play</span>
          </div>
        </div>
      </a>
      <p class="android-description">{{ content.androidDescription }}</p>
      </div>
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

/* Discord button */
.discord-btn {
  position: fixed;
  top: 1.5rem;
  right: 6.5rem;
  z-index: 10;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  background: rgba(88, 101, 242, 0.15);
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.discord-btn svg {
  width: 20px;
  height: 20px;
}

.discord-btn:hover {
  background: rgba(88, 101, 242, 0.3);
  border-color: rgba(136, 145, 255, 0.6);
  color: #ffffff;
  transform: scale(1.1);
}

.discord-btn:active {
  transform: scale(0.95);
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
  margin: 0 0 0;
  letter-spacing: 3px;
  font-weight: 300;
  animation: fade-in-up 0.8s ease-out 0.2s both;
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

/* Android Coming Soon Section */
.android-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2.5rem;
  animation: fade-in-up 0.8s ease-out 0.6s both;
}

.google-play-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: default;
  transition: transform 0.3s ease;
}

.google-play-badge:hover {
  transform: translateY(-2px);
}

.badge-inner {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.6rem 1.4rem;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition:
    border-color 0.3s ease,
    background 0.3s ease;
}

.google-play-badge:hover .badge-inner {
  border-color: rgba(255, 255, 255, 0.55);
  background: rgba(0, 0, 0, 0.85);
}

.badge-icon {
  width: 28px;
  height: 28px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-icon svg {
  width: 100%;
  height: 100%;
}

.badge-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.15;
}

.badge-label {
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

.badge-store {
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.android-description {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
  letter-spacing: 1px;
  font-weight: 300;
}

@media (max-width: 600px) {
  .discord-btn {
    top: 1rem;
    right: 5.5rem;
    width: 32px;
    height: 32px;
  }

  .discord-btn svg {
    width: 17px;
    height: 17px;
  }

  .lang-switcher {
    top: 1rem;
    right: 1rem;
    width: 64px;
    height: 30px;
    font-size: 0.75rem;
  }

  .privacy-btn {
    bottom: 1rem;
    padding: 0.4rem 1rem;
    font-size: 0.75rem;
  }

  .hero {
    padding: 1.25rem;
  }

  .logo-container {
    margin-bottom: 1.5rem;
  }

  .logo {
    width: 130px;
    border-radius: 18px;
  }

  .title {
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin: 0 0 0.75rem;
  }

  .slogan {
    font-size: 1rem;
    letter-spacing: 1.5px;
    margin: 0 0 0;
  }

  .android-section {
    margin-top: 1.5rem;
    gap: 0.6rem;
  }

  .badge-inner {
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    border-radius: 8px;
  }

  .badge-icon {
    width: 22px;
    height: 22px;
  }

  .badge-label {
    font-size: 0.55rem;
  }

  .badge-store {
    font-size: 0.9rem;
  }

  .android-description {
    font-size: 0.7rem;
  }
}
</style>
