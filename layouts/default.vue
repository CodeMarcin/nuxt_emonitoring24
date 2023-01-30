<script setup lang="ts">
import TheSiteMenuVue from '~~/components/complex/TheSiteMenu/TheSiteMenu.vue';
</script>

<template>
  <div class="flex flex-col">
    <TheSiteMenuVue />
    <slot />
  </div>
</template>

<style scoped></style>
