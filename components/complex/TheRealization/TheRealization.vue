<script setup lang="ts">
const route = useRoute();

const { pending, data: serverData } = useLazyAsyncData("realization", () => $fetch(`/api/getRealizationById?id=${route.params.id}&getAllImages=true`), {
  pick: ["title", "description", "category", "imagesList"],
});
</script>

<template>
  <div v-if="!pending" class="mt-48 mb-32 flex w-full flex-col gap-y-12">
    <div class="flex w-full bg-black py-16 text-white shadow-md">
      <div class="mx-auto flex w-fit items-top justify-center gap-x-4 ">
        <Icon :name="useCategoryToIcon(serverData!.category)" class="h-[32px] w-[32px]" />
        <span class="font-second mx-auto flex w-fit justify-center text-2xl font-extrabold">
          {{ serverData!.title }} Lorem ipsum dolor sit amet
        </span>
      </div>
    </div>
    <div class="flex container mx-auto max-w-7xl flex-wrap gap-4">
      <img
        v-for="image in serverData!.imagesList"
        :src="`/images/realizations/${route.params.id}/${image}`"
        class="h-[370px] w-full sm:w-[calc((100%-3rem)*1/3)] "
      />
    </div>
  </div>
  <div v-if="!pending" class="container mx-auto flex-col sm:px-4 lg:mt-60"></div>
</template>
