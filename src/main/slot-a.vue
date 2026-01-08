<template>
  <div>
    slot-a
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

defineOptions({
  name: "SlotA",
});
defineProps({
  msg: {
    type: String,
    required: false,
  },
  record: {
    type: Object as PropType<{ id: number; name: string }>,
    required: false,
  },
});
</script>
