<script setup lang="ts">
  import PreviewCard from './PreviewCard.vue'

  const router = useRouter();

  const previewCards = [
    {
      id: 1,
      title: 'mock',
      description: 'mock mock',
      src: 'dummy_1.jpeg'
    },
    {
      id: 2,
      title: 'mock',
      description: 'mock mock',
      src: 'dummy_2.jpeg'
    },
    {
      id: 3,
      title: 'mock',
      description: 'mock mock',
      src: 'dummy_3.jpeg'
    },
    {
      id: 4,
      title: 'mock',
      description: 'mock mock',
      src: 'dummy_4.jpeg'
    }
  ]

  const handleCardClick = (cardId: number) => {
    router.push(`/gallery/${cardId}`)
  }
</script>

<template>
  <main class="flex justify-center">
    <ul class="flex gap-2 w-full max-w-7xl h-preview">
      <PreviewCard v-for="previewCard in previewCards" :key="previewCard.id" :card="previewCard" @click="() => handleCardClick(previewCard.id)" />
    </ul>
  </main>
</template>

<style scope>
  .h-preview {
    height: calc(100vh - 25rem);
  }
</style>