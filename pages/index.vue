<script lang="ts" setup>
useHead({
  title: 'Hello',
  bodyAttrs: {
    class: 'm-0 min-w-screen flex items-center justify-center bg-base',
  },
})
const { $client } = useNuxtApp()
const content = await $client.hello.query()
const { data } = await $client.getReviewedGuide.useQuery({ category: 'tips' })
</script>

<template>
  <div class="text-2xl font-bold w-full h-80vh flex items-center justify-center">
    <span>
      {{ content }}
    </span>
    <span>
      {{ data }}
    </span>
  </div>
</template>

<style scoped>
</style>
