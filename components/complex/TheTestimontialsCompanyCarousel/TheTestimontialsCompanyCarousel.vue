<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";

import { DATA__TESTIMONTIALS_COMPANY_CAROUSEL } from "./DataTestimontialsCompanyCarousel";

import "~~/assets/css/carouselOffert.css";

const carouselSettingsTestimontialsCompany = {
  snapAlign: "start",
  itemsToShow: 1,
  autoplay: 3000,
  wrapAround: true,
};

const carouselBreakpointsTestimontialsCompany = {
  640: {
    itemsToShow: 2,
  },
  768: {
    itemsToShow: 3,
  },
  1024: {
    itemsToShow: 4,
  },
};
</script>

<template>
  <div class="container mx-auto mb-32 flex flex-col gap-y-8 px-4">
    <div class="text-medium mb-12 flex w-full flex-col items-center justify-center gap-y-4 font-light tracking-wide sm:mb-24">
      <span class="text-one header text-xl font-bold">Poznaj opinie naszych klientów</span>
      <span class="font-second subheader pt-2 text-center text-4xl font-extrabold text-black md:text-5xl">
        Zaufali
        <span class="text-one">nam</span>
      </span>
    </div>
    <carousel :settings="carouselSettingsTestimontialsCompany" :breakpoints="carouselBreakpointsTestimontialsCompany">
      <slide v-for="card in DATA__TESTIMONTIALS_COMPANY_CAROUSEL" :key="card.img">
        <div class="flex h-[90px]">
          <img :src="card.img" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<style scoped>
.carousel__slide {
  scroll-snap-stop: auto;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /* Fix iOS scrolling #22 */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
</style>
