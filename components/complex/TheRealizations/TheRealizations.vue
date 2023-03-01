<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const { pending, data: serverData } =  useLazyAsyncData('realizations', () => $fetch('/api/getRealizationsWithLimit?limit=0'));


const cardRef = ref([]);
onMounted(() => {
  cardRef.value.forEach((el) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      })
      .from(el, { opacity: 0, y: -10, ease: "back" });
  });
});

</script>

<template>
  
  <div class="container mx-auto mt-48 mb-32 flex max-w-5xl flex-col px-4 lg:mt-60">
 
    <span class="font-second mb-24 w-full text-6xl font-extrabold">Realizacje</span>

    <div v-if="pending">Loading...</div>
    <div v-else class="flex w-full flex-wrap gap-12 lg:justify-between">
      <div
        v-for="item in serverData"
        ref="cardRef"
        :key="item.id"
        class="flex w-full flex-col gap-y-4 overflow-hidden rounded-md bg-white shadow-md sm:w-[calc((100%-3rem)*1/2)]"
      >
        <img :src="item.imageUrl" class="rounded-t-md" />
        <div class="flex w-full items-start gap-x-3 px-4 pt-4">
          <Icon :name="useCategoryToIcon(item.category)" class="h-[24px] w-[24px]" />
          <div class="flex w-full text-lg font-bold">{{ item.title }}</div>
        </div>
        <div class="font-second flex w-full pl-12 pr-4 pb-4 leading-relaxed text-gray-600">{{ item.description }}</div>
        <div class="flex w-full px-12 pb-4">
          <NuxtLink :to="'realizations/' + item.id" class="text-two cursor-pointer font-bold underline-offset-8 transition-all hover:underline">
            Zobacz zdjęcia
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
