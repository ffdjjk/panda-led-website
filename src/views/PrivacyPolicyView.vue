<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const htmlContent = ref('')
const locale = (route.params.locale as string) || 'en'

onMounted(async () => {
  const response = await fetch(`/privacy-policy-${locale}.html`)
  htmlContent.value = await response.text()
})

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="privacy-policy-container">
    <button class="back-btn" @click="goBack">← Back</button>
    <div v-html="htmlContent"></div>
  </div>
</template>

<style scoped>
.privacy-policy-container {
  max-width: 860px;
  margin: 0 auto;
  padding: 20px;
}

.back-btn {
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #f8f8f8;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.back-btn:hover {
  background: #e8e8e8;
}
</style>
