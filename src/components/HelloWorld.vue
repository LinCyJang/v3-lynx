<script setup lang="ts">
import { ref } from 'vue'
import { useCursor } from 'ipad-cursor/vue';

defineProps<{ msg: string }>()

useCursor()

const count = ref(0)
</script>

<template>
  <h1 data-cursor="text">{{ msg }}</h1>

  <div class="card">
    <n-button  @click="count++" data-cursor="block">count is {{ count }}</n-button>
    <p data-cursor="text">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p data-cursor="text">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p data-cursor="text">
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p data-cursor="text" class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
