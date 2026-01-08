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
</script>
