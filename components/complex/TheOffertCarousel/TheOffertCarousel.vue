<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import Card from "~~/components/parts/Card/Card.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { DATA__CARDS } from "./DataOffertCarousel";

import "~~/assets/css/carouselOffert.css";

gsap.registerPlugin(ScrollTrigger);

const carouselSettings = {
  snapAlign: "center",
  itemsToShow: 1,
  wrapAround: true,
};

const carouselBreakpoints = {
  768: {
    itemsToShow: 2,
      snapAlign: "start",
  },
  1024: {
    itemsToShow: 3,
  },
};

onMounted(() => {
  let offerCarouselTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".offert__header",
      start: "top 85%",
    },
  });

  offerCarouselTimeLine
    .from(".offert__header", { opacity: 0, ease: "back", y: -10 })
    .from(".offert__subheader", { opacity: 0, ease: "back", y: 10 })
    .from(
      ".carousel__slide",
      {
        opacity: 0,
        xPercent: -30,
        stagger: 0.1,
        ease: "back",
      },
      "<"
    )
    .from(".carousel__pagination-item", { opacity: 0, ease: "back", stagger: 0.1, xPercent: -100 }, '<0.5');
});
</script>

<template>
  <div class="container mx-auto mb-32 flex flex-col gap-y-8 px-4">
    <div class="text-medium mb-12 flex w-full flex-col items-center justify-center gap-y-4 font-light tracking-wide sm:mb-24">
      <span class="text-one offert__header text-xl font-bold">Czym się zajmujemy</span>
      <span class="font-second offert__subheader pt-2 text-center text-4xl font-extrabold text-black md:text-5xl">
        Zobacz co możemy
        <span class="text-one">Ci</span>
        zaoferować
      </span>
    </div>
    <carousel :settings="carouselSettings" :breakpoints="carouselBreakpoints">
      <slide v-for="card in DATA__CARDS" :key="card.header!">
        <Card v-bind="card" />
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped></style>
