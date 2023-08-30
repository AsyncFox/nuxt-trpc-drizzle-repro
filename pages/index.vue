<script lang="ts" setup>
useHead({
  title: 'Hello',
  bodyAttrs: {
    class: 'm-0 min-w-screen flex items-center justify-center bg-base',
  },
})
const { $client } = useNuxtApp()
const content = ref('')
async function handleThis() {
  content.value = await $client.hello.query()
}
setTimeout(handleThis, 2000)
</script>

<template>
  <div class="text-2xl font-bold w-full h-80vh flex items-center justify-center">
    <span>
      {{ content }}
    </span>
  </div>
</template>

<style scoped>
</style>
