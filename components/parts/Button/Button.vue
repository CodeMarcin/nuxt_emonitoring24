<script setup lang="ts">
import { computed } from "vue";
export type TButtonColor = "one" | "two" | "three" | "four" | "five";
export type TButtonSize = "small" | "medium" | "large" | "full";
export type TButtonText = "small" | "medium" | "large";
export interface IButton {
  label: string;
  color?: TButtonColor;
  size?: TButtonSize;
  rounded?: boolean;
  outline?: boolean;
  text?: TButtonText;
}

const { label, color, size, rounded, outline, text } = withDefaults(defineProps<IButton>(), {
  size: "medium",
  rounded: true,
  outline: false,
  text: "medium",
});

const buttonClass = computed(() => {
  let buttonClass;
  if (!outline) {
    if (color === "one") buttonClass = "bg-one ";
    else if (color === "two") buttonClass = "bg-two ";
    else if (color === "three") buttonClass = "bg-three ";
    else if (color === "four") buttonClass = "bg-four ";
    else buttonClass = "bg-five ";
    
  } else {
    buttonClass = "border-2 ";
    if (color === "one") buttonClass += "border-one ";
    else if (color === "two") buttonClass += "border-two ";
    else if (color === "three") buttonClass += "border-three ";
    else if (color === "four") buttonClass += "border-four ";
    else buttonClass += "border-five ";
  }


  if (color !== "three") buttonClass += "text-white ";
  else buttonClass += "text-black ";

  if(outline) buttonClass += 'text-black '

  if (size === "small") buttonClass += "p-2 ";
  else if (size === "medium") buttonClass += "px-4 py-2 ";
  else if (size === "large") buttonClass += "px-6 py-2 ";
  else if (size == "full") buttonClass += "w-full py-2 ";

  if (text === "small") buttonClass += "text-sm ";
  else if (text === "medium") buttonClass += "text-base ";
  else buttonClass += "text-lg ";

  if (rounded) buttonClass += "rounded-full ";

  return buttonClass;
});
</script>

<template>
  <button type="button" :class="[buttonClass, 'flex items-center justify-center font-second font-normal']">{{ label }}</button>
</template>
