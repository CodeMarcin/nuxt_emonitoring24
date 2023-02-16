<script setup lang="ts">
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const { pending, data: serverData } = useLazyAsyncData("realizations", () => $fetch("/api/getRealizationsWithLimit?limit=4"));

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const timeLineLastWork = gsap.timeline({
    scrollTrigger: {
      trigger: ".last-work__header",
      start: "top 85%",
    },
  });

  timeLineLastWork
    .from(".last-work__header", {
      opacity: 0,
      ease: "back",
      y: -10,
      duration: 0.4,
    })
    .from(".last-work__subheader", { opacity: 0, y: -10, ease: "back" })
    .from(".last-work__image", {
      opacity: 0,
      xPercent: -30,
      stagger: 0.1,
    });
});
</script>
<template>
  <div class="container mx-auto mb-16 flex w-full flex-col items-center justify-center gap-y-9 px-4">
    <span class="font-second di last-work__header pt-2 text-center text-4xl font-extrabold text-black md:text-5xl">
      Ostatnie
      <span class="text-one"> realizacje </span>
    </span>

    <NuxtLink to="/realizations" class="text-two last-work__subheader font-bold underline underline-offset-8">Zobacz wszystkie</NuxtLink>
  </div>
  <div class="flex flex-col flex-nowrap md:flex-row md:flex-wrap">
    <div v-show="!pending" v-for="lastWork in serverData" class="last-work__image group relative flex h-[400px] w-full overflow-hidden md:w-1/2 lg:w-1/4">
      <img :src="lastWork.imageUrl" class="w-full object-cover transition-all duration-500 group-hover:scale-125 group-hover:brightness-50" />
      <div class="absolute flex h-full w-full flex-col items-center justify-center gap-y-4 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div class="font-second flex text-sm font-medium">{{ useCategoryToText(lastWork.category) }}</div>
        <div class="font-second flex text-xl font-semibold">{{ lastWork.title }}</div>
        <NuxtLink :to="`/realizations/${lastWork.id}`" class="text-three last-work__subheader font-bold underline underline-offset-8">Zobacz zdjęcia</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
