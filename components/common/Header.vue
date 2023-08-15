<script setup lang="ts">
  import VueFeather from 'vue-feather'

  const navigations = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
  ]
  console.log('1')
</script>

<template>
  <header class="flex justify-between px-8 pt-10 text-gray-200">
    <ul class="flex gap-4">
      <li v-for="navigation in navigations" :key="navigation.name" class="flex items-center justify-center h-10 p-2 cursor-pointer">
        {{ navigation.name }}
      </li>
    </ul>

    <button>
      <VueFeather type="menu" ></VueFeather>
    </button>
  </header>
</template>