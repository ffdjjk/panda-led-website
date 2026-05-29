import { watch, type Ref } from 'vue'

interface SeoData {
  title: string
  description: string
  keywords: string
  ogLocale: string
  htmlLang: string
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let el = document.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value)
  }
}

export function useSeoMeta(localeRef: Ref<'zh' | 'en'>, getSeo: (locale: 'zh' | 'en') => SeoData) {
  watch(
    localeRef,
    (locale) => {
      const seo = getSeo(locale)

      // Document title
      document.title = seo.title

      // HTML lang
      document.documentElement.lang = seo.htmlLang

      // Standard meta
      upsertMeta('meta[name="description"]', {
        name: 'description',
        content: seo.description,
      })
      upsertMeta('meta[name="keywords"]', {
        name: 'keywords',
        content: seo.keywords,
      })

      // Open Graph
      upsertMeta('meta[property="og:title"]', {
        property: 'og:title',
        content: seo.title,
      })
      upsertMeta('meta[property="og:description"]', {
        property: 'og:description',
        content: seo.description,
      })
      upsertMeta('meta[property="og:locale"]', {
        property: 'og:locale',
        content: seo.ogLocale,
      })

      // Twitter
      upsertMeta('meta[name="twitter:title"]', {
        name: 'twitter:title',
        content: seo.title,
      })
      upsertMeta('meta[name="twitter:description"]', {
        name: 'twitter:description',
        content: seo.description,
      })
    },
    { immediate: true },
  )
}
