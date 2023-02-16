<script setup lang="ts">
import TheSiteMenuVue from '~~/components/complex/TheSiteMenu/TheSiteMenu.vue';
import TheFooter from '~~/components/complex/TheFooter/TheFooter.vue';
</script>

<template>
  <div class="flex flex-col">
    <TheSiteMenuVue/>
    <slot />
    <TheFooter />
  </div>
</template>

<style scoped></style>
