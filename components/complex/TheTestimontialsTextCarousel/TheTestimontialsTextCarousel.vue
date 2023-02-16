<script setup lang="ts">
import { computed } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { DATA__TESTIMONTIALS_TEXT_CAROUSEL } from "./DataTestimontialsTextCarousel";

import "~~/assets/css/carouselOffert.css";

const carouselSettingsTestimontialsText = {
  snapAlign: "start",
  itemsToShow: 1,
  wrapAround: true,
};

const carouselBreakpointsTestimontialsText = {
  640: {
    itemsToShow: 2,
  },

  1024: {
    itemsToShow: 3,
  },
};
</script>

<template>
  <div class="container mx-auto mb-32 flex w-full flex-col justify-center gap-y-8 px-4">
    <carousel :settings="carouselSettingsTestimontialsText" :breakpoints="carouselBreakpointsTestimontialsText">
      <slide v-for="card in DATA__TESTIMONTIALS_TEXT_CAROUSEL" :key="card.text">
        <div class="mb-12 flex w-full flex-col items-center gap-y-6 p-4 sm:items-start">
          <div class="flex w-full items-center justify-center gap-x-5 sm:justify-start">
            <Icon name="teenyicons:user-circle-outline" class="h-[42px] w-[42px] text-violet-300" />
            <div class="flex flex-col items-start justify-center gap-y-1 min-h-[52px] h-full">
              <span class="flex justify-centert ext-second font-bold h-full">{{ card.author }}</span>
              <span v-if="card.company" class="text-neutral-400">{{ card.company }}</span>
            </div>
          </div>
          <div class="font-second flex w-full justify-center font-medium leading-8 text-gray-500 sm:justify-start sm:text-left">
            {{ card.text }}
          </div>
        </div>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped></style>
