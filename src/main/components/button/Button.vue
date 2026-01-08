<template>
  <button @click="handleClick" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const props = defineProps<Props>();

const handleClick = () => {
  if (props.onClick) {
    props.onClick();
  }
};
</script>
