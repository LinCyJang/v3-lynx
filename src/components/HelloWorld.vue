<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <h1 v-cursor-text>{{ msg }}</h1>

  <div class="card">
    <n-button  @click="count++" v-cursor-block>count is {{ count }}</n-button>
    <p v-cursor-text>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p v-cursor-text>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p v-cursor-text>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p v-cursor-text class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
