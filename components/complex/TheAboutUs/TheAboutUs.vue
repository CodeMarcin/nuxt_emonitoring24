<script setup lang="ts">
import AboutUsSVG from "~~/assets/svg/AboutUs.svg";
import video from "~~/assets/svg/test4.mp4";
import gsap from "gsap";

import { DATA__COUNTERS } from "./DataAboutUs";

const aboutUsRef = ref();
const whyWeRef = ref();

const counterRef = ref([]);

const startCounter = () => {
  counterRef.value.forEach((el) => el.start());
};

onMounted(() => {
  const aboutUsTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: aboutUsRef.value,
      start: "top 60%",
    },
  });

  const whyWeTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: whyWeRef.value,
      start: "top 60%",
    },
  });

  aboutUsTimeLine.from(aboutUsRef.value, { opacity: 0, y: -100, ease: "back" });
  whyWeTimeLine.from(whyWeRef.value, {
    opacity: 0,
    y: -100,
    ease: "back",
    onStart: () => {
      startCounter();
    },
  });
});
</script>
<template>
  <div ref="aboutUsRef" class="container m-32 mx-auto flex w-full flex-col px-4">
    <span class="font-second mb-4 text-4xl font-extrabold"> O <span class="text-one">nas</span></span>
    <div class="flex w-full flex-col gap-5 xl:flex-row">
      <div class="flex flex-col gap-y-4 text-lg font-medium leading-8 text-gray-500 xl:w-2/3">
        <p>
          Jesteśmy prężnie działającą firmą w takich obszarach jak <b>instalacje elektryczne</b>, <b>monitoring wizyjny</b>, <b>alarmy</b>, <b>domofony</b>,
          <b>automatyka do bram</b>, <b>kontrola dostępu</b> czy <b>systemy przeciwpożarowe</b>.
        </p>
        <p>
          Posiadamy wieloletnie doświadczenie, co sprawia, że wykonane przez nas prace są na wysokim poziomie i gwarantują długie bezawaryjne działanie. Podchodzimy
          indywidualnie do każdego zlecenia i uwzględniamy preferencje klienta.
        </p>
        <p>
          Podczas montażu wykorzystujemy produkty wysokiej jakości, co sprawia, że ich niezawodność stoi na bardzo wysokim poziomie. Staramy się zapewnić naszym klientom
          najlepsze rozwiązania, przy jednoczesnym oferowaniu <b>konkurencyjnych cen</b>.
        </p>
        <p>
          Swoim zasięgiem obejmujemy takie miasta jak: <b>Ostrołęka</b>, <b>Myszyniec</b>, <b>Olsztyn</b>, <b>Łomża</b>, <b>Warszawa</b> oraz
          <b>wszystkie pobliskie</b>
          mniejsze miejscowości.
        </p>
        <p>
          Jako jedni z nielicznych w kraju jesteśmy <b>autoaryzowanymi przedstawicielami</b> firmy <b>FAAC</b> zajmującą się produkcją wysokiej jakości automatyki do
          bram.
        </p>
      </div>
      <div class="bg-one flex flex-col gap-y-10 rounded-xl p-10 shadow-2xl md:flex-row md:justify-between xl:w-1/3 xl:flex-col">
        <div v-for="counter in DATA__COUNTERS" :key="counter.label" class="flex items-center gap-x-4 border-b-2 border-violet-500 pb-4">
          <Icon :name="counter.icon" class="h-[64px] w-[64px] text-white" />
          <div class="font-second flex flex-col text-white md:text-center lg:text-left">
            <span class="text-3xl font-bold">
              <vue3-autocounter ref="counterRef" :startAmount="counter.start" :endAmount="counter.end" :duration="counter.duration" :autoinit="false" /><sup>+</sup>
            </span>
            <span class="text-sm font-semibold">{{ counter.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
