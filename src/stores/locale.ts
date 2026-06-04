import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref<'zh' | 'en'>('en')

  const content = computed(() => {
    if (locale.value === 'zh') {
      return {
        welcome: '欢迎使用PandaLED！',
        slogan: '把心亮出来，让世界看见！',
        storeName: '谷歌应用商店',
      }
    }
    return {
      welcome: 'Welcome to PandaLED!',
      slogan: 'Shine bright, stand out.',
      storeName: 'Google Play',
    }
  })

  const seo = computed(() => {
    if (locale.value === 'zh') {
      return {
        title: 'PandaLED - 把心亮出来，让世界看见！',
        description:
          'PandaLED 把你的手机变成炫彩 LED 显示屏。适合演唱会、生日派对、聚会等场景——多台手机同步播放，打造震撼灯光秀。把心亮出来，让世界看见！',
        keywords:
          'LED显示屏App, 手机LED模拟器, 演唱会LED屏幕, 派对灯光App, 生日LED展示, 手机弹幕屏, 滚动LED字幕, 观众灯光秀, 灯牌App, PandaLED',
        ogLocale: 'zh_CN',
        htmlLang: 'zh',
      }
    }
    return {
      title: 'PandaLED - Shine bright, stand out.',
      description:
        'PandaLED turns your phone into a vibrant LED display. Perfect for concerts, birthday parties, and gatherings — sync multiple phones for a stunning synchronized light show.',
      keywords:
        'LED display app, phone LED simulator, concert LED screen, party light app, birthday LED display, mobile LED board, scrolling LED sign, crowd light show, light board app, PandaLED',
      ogLocale: 'en_US',
      htmlLang: 'en',
    }
  })

  function toggleLocale() {
    locale.value = locale.value === 'zh' ? 'en' : 'zh'
  }

  return { locale, content, seo, toggleLocale }
})
