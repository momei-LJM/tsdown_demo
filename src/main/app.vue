<template>
  <span>
    <slot-a>
      <slot-b> hellow</slot-b>
    </slot-a>
  </span>
</template>

<script lang="ts" setup>
import slotA from "./slot-a.vue";
import slotB from "./slot-b.vue";

defineOptions({
  name: "App",
});

const props = defineProps<{
  msg: string;
  record: { id: number; name: string };
}>();
</script>
