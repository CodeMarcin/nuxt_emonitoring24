<script setup lang="ts">
import MapSVG from "~~/assets/svg/Map.svg";
import MapMarkerSVG from "~~/assets/svg/MapMarker.svg";
import Button from "~~/components/parts/Button/Button.vue";

import { DATA__CITIES } from "./DataWhereWork";

import MapMarkSVG from "~~/assets/svg/MapMark.svg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

const headerRef = ref();
const citiesRef = ref([]);
const mapBgRef = ref();
const whereText = ref();
const whereMapLeftRef = ref();
const whereMapRightRef = ref();

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const whereWorkTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: headerRef.value,
      start: "top 80%",
    },
  });

  whereWorkTimeLine
    .from(headerRef.value, {
      opacity: 0,
      yPercent: -100,
      ease: "back",
    })
    .from(citiesRef.value, {
      opacity: 0,
      yPercent: -100,
      stagger: 0.1,
      ease: "back",
    })
    .from(mapBgRef.value, { opacity: 0, scale: 0, ease: "back" }, "<")
    .from(whereText.value, { opacity: 0, yPercent: -100, ease: "back" }, "<")
    .from(whereMapRightRef.value, { opacity: 0, xPercent: 100, display: 'none', ease: "back" }, "<")
    .from(whereMapLeftRef.value, { scale: 0, ease: "back" }, "<");
});
</script>

<template>
  <div class="bg-one mb-32 flex py-32">
    <div class="container relative mx-auto flex flex-col gap-y-20 px-4">
      <div class="absolute right-10 top-1/2 -translate-y-1/2">
        <MapSVG ref="mapBgRef" class="scale-10 h-full w-full fill-white stroke-white opacity-10 sm:scale-150" />
      </div>
      <div ref="headerRef" class="border-three font-second mx-auto flex justify-center border-b-2 pb-5 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
        <span>Gdzie </span><span class="text-three pl-2"> pracujemy</span>
      </div>
      <div class="flex w-full flex-col items-center justify-between gap-y-16 gap-x-10">
        <div class="flex w-full">
          <div class="flex w-full flex-col flex-wrap justify-between gap-y-2 md:flex-row">
            <div v-for="city in DATA__CITIES" :key="city" ref="citiesRef" class="border-two flex items-center gap-x-2 border-b border-dashed py-2">
              <MapMarkerSVG class="h-6 w-auto stroke-white" />
              <span class="font-second text-2xl font-bold uppercase text-white">{{ city }}</span>
            </div>
          </div>
        </div>
        <div ref="whereText" class="where__text flex w-full px-7 text-lg text-violet-200 lg:px-10">
          Firma świadczy fachowe usługi montażu kamer, alarmów, bram przesuwnych, instalacji elektrycznych i teletechnicznych na terenie Ostrołęki, Myszynieca i Łomży.
          Nasza wykwalifikowana kadra zapewnia klientom profesjonalną i rzetelną obsługę. W skład naszej oferty wchodzi również montaż instalacji w takich miejscowościach
          jak Ostrołęka, Ciechanowiec, Łyse, Złotki, Myszyniec, Chotcza, Radzanów, Stare Juchy, Łomża i inne. Staramy się zapewnić naszym klientom najlepsze rozwiązania,
          przy jednoczesnej oferowaniu konkurencyjnych cen. Jesteśmy przekonani, że nasze usługi spełnią oczekiwania nawet najbardziej wymagających klientów.
        </div>
      </div>

      <div class="container mx-auto flex w-full flex-col items-center gap-x-20 gap-y-10 px-4 md:flex-row">
        <div ref="whereMapLeftRef" class="flex w-full items-center justify-center md:w-2/3"><MapMarkSVG /></div>

        <div ref="whereMapRightRef" class="flex h-full w-full flex-col justify-evenly gap-y-5">
          <span class="font-second text-3xl font-semibold text-white"> Chcesz skorzystać z naszych usług, ale mieszkasz poza podanymi regionami?</span>
          <span class="font-bold text-white"> Zadzwoń, a ustalimy szczegóły dojazdu.</span>
          <span class="font-bold text-white"> <Button label="+48 502 252 323" color="four" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
