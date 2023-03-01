<script setup lang="ts">
import TopBannerSVG from "~~/assets/svg/TopBanner.svg";
import { gsap } from "gsap";

const topBannerRef = ref();

onMounted(() => {
  gsap.from(topBannerRef.value, { yoyo: true, repeat: -1, duration: 1, scale: 0.98, ease: "sine.inOut" });
});
</script>

<template>
  <div class="relative w-full">
    <div class="container relative mx-auto mt-32 mb-12 flex w-full flex-col items-center gap-y-10 gap-x-6 px-4 lg:mb-32 lg:mt-64 lg:flex-row">
      <div class="flex h-fit flex-col items-center justify-center gap-y-10 rounded-md bg-white p-10 lg:w-1/2 lg:p-10">
        <div class="font-second flex w-full bg-white text-4xl font-extrabold lg:text-5xl">
          <span class="leading-tight">Lorem ipsum <span class="text-one">dolor</span> sit amet, consectetur adipiscing elit</span>
        </div>
        <div class="flex bg-white font-semibold leading-8 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div class="flex bg-white font-semibold text-gray-500">Jakiś button 1</div>
      </div>
      <div class="flex justify-center lg:w-1/2 lg:justify-end" ref="topBannerRef"><TopBannerSVG class="w-full" /></div>
    </div>
  </div>
</template>

<style scoped></style>
