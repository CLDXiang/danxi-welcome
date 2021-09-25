<template>
  <li class="px-1 hover:opacity-80 transition-opacity duration-300">
    <a
      :href="href"
      target="_blank"
    > # <slot /> </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    href: { type: String, required: true },
  },
});
</script>
