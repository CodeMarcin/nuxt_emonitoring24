<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";

export interface IMenuItems {
  label: string;
  link?: string;
  subItems?: IMenuItems[];
}
const MENU_ITEMS: IMenuItems[] = [
  {
    label: "Strona główna",
    link: "/",
  },
  {
    label: "News",
    link: "/news",
  },
  {
    label: "Oferta",
    link: "/offert",
  },
  {
    label: "Realizacje",
    link: "/relizations",
  },
];

const linksRef = ref([]);

onMounted(() => {
  gsap.from(linksRef.value, { y: -10, opacity: 0, stagger: 0.1 });
});
</script>
<template>
  <div class="flex h-16 border-b-2 shadow-sm">
    <div class="container flex mx-auto w-full h-full items-center justify-end">
      <ul class="flex justify-between w-2/4">
        <li class="text-gray-500 font-semibold  test" ref="linksRef" v-for="item in MENU_ITEMS" :key="item.label">
          <!-- <NuxtLink  :to="item.link">{{ item.label }}</NuxtLink> -->
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.test {
    font-family: 'Montserrat';
}
</style>
