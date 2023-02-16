<script setup lang="ts">
export interface ICard {
  header?: string;
  description?: string;
  image?: string;
  link?: string;
}

const clicked = ref(false);

const { image, header, description, link } = defineProps<ICard>();

const toggleClick = () => {
  clicked.value = !clicked.value;
};

const cursorClass = computed(() => {
  return clicked.value ? "cursor-grabbing" : "cursor-grab";
});
</script>

<template>
  <div
    :class="[cursorClass, 'border-one m-5 flex h-full w-full flex-col  justify-between gap-y-5 rounded-md border-t-2 bg-white px-8 py-10 shadow-md ']"
    @mousedown="toggleClick"
    @mouseup="toggleClick"
  >
    <div class="flex items-center gap-x-2">
      <Icon :name="image!" class="text-one h-[36px] w-[36px]" />
      <span class="font-second font-semibold">
        {{ header }}
      </span>
    </div>

    <div class="font-second flex pl-10 font-medium leading-8 text-gray-500">
      {{ description }}
    </div>

      <NuxtLink :to="link" class="text-two flex w-full cursor-pointer pl-10 font-bold underline-offset-8 transition-all hover:underline">Dowiedz się więcej</NuxtLink>

  </div>
</template>

<style scoped></style>
