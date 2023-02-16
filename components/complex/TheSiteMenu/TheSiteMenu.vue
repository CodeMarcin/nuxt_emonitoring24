<script setup lang="ts">
import gsap from "gsap";
import { DATA__MENU_ITEMS } from "./DataSiteMenu";

const debounceReference = ref();
const barRef = ref();
const subMenuRef = ref();
const barClass = ref();
const showSubMenu = ref(false);
const mobileMenuRef = ref();
const showMobileMenu = ref(false);
const showMainMenu = ref(false);
const showSubMenuMobile = ref(false);
const activeItemSubMenuMobile = ref<number>(0);
const subMenuMobileRef = ref();
const showScrollArrow = ref(true);
const scrollArrowRef = ref();

const isSiteTop = () => {
  const isTop = window.scrollY === 0 ? true : false;
  barClass.value = isTop ? "h-24 lg:h-32 " : " h-20 lg:h-24 shadow-md ";

  if (!isTop && showScrollArrow.value === false) {
    showScrollArrow.value = true;
    gsap.fromTo(scrollArrowRef.value, { opacity: 0, yPercent: 100 }, { opacity: 0.8, yPercent: 0 });
  } else if (isTop && showScrollArrow.value === true) {
    gsap.fromTo(
      scrollArrowRef.value,
      { opacity: 0.8, yPercent: 0 },
      {
        opacity: 0,
        yPercent: -100,

        onComplete: () => {
          showScrollArrow.value = false;
        },
      }
    );
  }
};

const mobileMenuIcon = computed(() => {
  return showMobileMenu.value ? "material-symbols:close-rounded" : "quill:hamburger";
});

const slideToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleSubMenu = () => {
  if (showSubMenu.value) {
    closeSubMenu();
  } else if (!showSubMenu.value) {
    showSubMenu.value = true;
    gsap.fromTo(subMenuRef.value, { opacity: 0 }, { opacity: 1 });
  }
};

const closeSubMenu = () => {
  gsap.to(subMenuRef.value, {
    opacity: 0,
    onComplete: () => {
      showSubMenu.value = false;
    },
  });
};

const toggleMobileMenu = () => {
  if (showMobileMenu.value) {
    gsap.to(mobileMenuRef.value, {
      opacity: 0,
      xPercent: 100,
      onComplete: () => {
        showMobileMenu.value = false;
      },
    });
    gsap.to(subMenuMobileRef.value, {
      opacity: 0,
      xPercent: 100,
      onComplete: () => {
        showSubMenuMobile.value = false;
      },
    });
  } else if (!showMobileMenu.value) {
    showMobileMenu.value = true;
    showMainMenu.value = true;
    gsap.fromTo(mobileMenuRef.value, { opacity: 0, xPercent: -100 }, { opacity: 1, display: "flex", xPercent: 0 });
  }
};

const toggleMobileSubMenu = (index: number) => {
  if (showSubMenuMobile.value) {
    gsap
      .timeline({})
      .to(subMenuMobileRef.value, {
        opacity: 0,
        xPercent: -100,
        onComplete: () => {
          activeItemSubMenuMobile.value = 0;
          showSubMenuMobile.value = false;
          showMainMenu.value = true;
        },
      })
      .fromTo(mobileMenuRef.value, { opacity: 0, xPercent: 100 }, { opacity: 1, xPercent: 0, display: "flex" });
  } else if (!showSubMenuMobile.value) {
    gsap
      .timeline({})
      .to(mobileMenuRef.value, {
        opacity: 0,
        display: "none",
        xPercent: 100,
        onComplete: () => {
          activeItemSubMenuMobile.value = index;
          showSubMenuMobile.value = true;
        },
      })
      .fromTo(subMenuMobileRef.value, { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0 });
  }
};

onMounted(() => {
  debounceReference.value = useDebounce(() => isSiteTop(), 10);
  window.addEventListener("scroll", debounceReference.value);
  isSiteTop();
});

onUnmounted(() => {
  window.removeEventListener("scroll", debounceReference.value);
});
</script>
<template>
  <div
    ref="barRef"
    :class="[barClass, 'fixed z-50 flex w-full bg-white transition-all duration-700']"
    style="-webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); background: rgba(255, 255, 255, 0.9)"
  >
    <div class="container mx-auto flex h-full w-full items-center justify-start px-4 py-6">
      <div class="flex w-full items-center lg:w-fit">
        <NuxtLink to="/" class="flex items-center gap-x-4 whitespace-nowrap">
          <img src="~~/assets/images/tarcza1.png" class="mb-2 h-[40px] lg:mb-4 lg:h-[80px]" />
          <span class="text-xl font-extrabold lg:text-2xl">E-MONITORING-24</span>
        </NuxtLink>
        <div class="flex w-full justify-end lg:hidden">
          <Icon :name="mobileMenuIcon" class="h-[32px] w-[32px]" @click="toggleMobileMenu" />
        </div>
      </div>

      <ul class="ml-[220px] hidden w-2/3 gap-x-10 lg:flex">
        <li v-for="item in DATA__MENU_ITEMS" :key="item.label" class="hover:text-three cursor-pointer text-base font-bold text-black transition-all">
          <NuxtLink v-if="item.link" :to="item.link">{{ item.label }}</NuxtLink>
          <div v-else-if="item.subItems" class="relative cursor-pointer" @mouseenter="toggleSubMenu" @mouseleave="closeSubMenu">
            {{ item.label }}
            <div
              v-show="showSubMenu"
              ref="subMenuRef"
              class="absolute top-full left-1/2 flex -translate-x-1/2 cursor-default flex-col gap-y-4 rounded-md bg-black py-6 pl-4 pr-24 shadow-2xl"
            >
              <NuxtLink
                v-for="subItem in item.subItems"
                :to="subItem.link"
                class="hover:text-three flex items-center gap-x-2 whitespace-nowrap text-white transition-all hover:translate-x-2"
                @click="closeSubMenu"
              >
                <span><Icon :name="subItem.image" class="h-[22px] w-[22px]" /></span>
                {{ subItem.label }}
              </NuxtLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div v-show="showMobileMenu" class="fixed z-50 flex h-screen w-screen flex-col items-center bg-white px-4 lg:hidden">
    <div class="mb-10 flex w-full justify-end pt-6">
      <div class="flex w-1/2 justify-start">
        <Icon v-show="showSubMenuMobile" name="ph:arrow-left-bold" class="h-[32px] w-[32px]" @click="toggleMobileSubMenu(activeItemSubMenuMobile)" />
      </div>
      <div class="flex w-1/2 justify-end"><Icon :name="mobileMenuIcon" class="h-[32px] w-[32px]" @click="toggleMobileMenu" /></div>
    </div>
    <div v-show="showMainMenu" ref="mobileMenuRef" class="flex w-5/6 flex-col items-center">
      <ul class="flex w-full flex-col">
        <li v-for="(item, index) in DATA__MENU_ITEMS" :key="item.label" class="mb-6 flex w-full justify-center border-b-[1px] border-gray-200 pb-6 font-bold">
          <NuxtLink v-if="item.link" :to="item.link" class="flex w-full" @click="toggleMobileMenu">{{ item.label }}</NuxtLink>
          <div v-else-if="item.subItems" class="relative flex w-full items-center" @click="toggleMobileSubMenu(index)">
            <span class="flex w-1/2 justify-start">{{ item.label }}</span>
            <span class="flex w-1/2 justify-end"><Icon name="material-symbols:keyboard-double-arrow-right-rounded" class="h-[22px] w-[22px]" /></span>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="showSubMenuMobile" ref="subMenuMobileRef" class="flex w-5/6 flex-col">
      <ul class="flex w-full flex-col">
        <li
          v-for="subItem in DATA__MENU_ITEMS[activeItemSubMenuMobile].subItems"
          :key="subItem!.label"
          class="mb-6 flex w-full border-b-[1px] border-gray-200 pb-6 font-bold"
          @click="toggleMobileMenu"
        >
          <NuxtLink :to="subItem.link">
            <div class="flex items-center gap-x-4">
              <span><Icon :name="subItem!.image" class="h-[22px] w-[22px]" /></span>
              <span> {{ subItem.label }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>

  <div
    v-show="showScrollArrow"
    ref="scrollArrowRef"
    class="bg-one fixed left-1/2 bottom-2 z-40 flex -translate-x-1/2 cursor-pointer rounded-full p-2 opacity-50 shadow-2xl"
    @click="slideToTop"
  >
    <Icon name="material-symbols:keyboard-double-arrow-up" class="h-[24px] w-[24px] text-white" />
  </div>
</template>

<style scoped></style>
