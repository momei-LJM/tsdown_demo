<template>
  <input
    v-model="internalValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  modelValue: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const internalValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    internalValue.value = newVal;
  }
);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  internalValue.value = target.value;
  emit("update:modelValue", target.value);
};
</script>
