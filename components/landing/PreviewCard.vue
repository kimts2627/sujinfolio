<script setup lang="ts">
  import type {Card} from '~/types'

  const props = defineProps<{
    card: Card
  }>()

</script>

<template>
  <li class="flex-1 h-full overflow-hidden hover-animation cursor-pointer">
    <nuxt-img :src="props.card.src" :alt="`${props.card.title} preview`" :class="`w-full h-full object-cover object-position-${props.card.id}`" />
  </li>
</template>

<style scope>
  .hover-animation {
    filter: brightness(0.7);
  }

  .hover-animation:hover {
    transform: scale(1.05);
    transition: transform 0.2s linear;
    transform: height 100px;
    filter: brightness(1);
  }

</style>