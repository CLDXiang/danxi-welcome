<template>
  <div>
    <page-1 />
    <about theme="dark" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePageScroll } from '@/composables';
import { Page1 } from '@/components/Home';
import About from '@/components/About';

export default defineComponent({
  name: 'Home',
  components: { About, Page1 },
  setup() {
    const page1Ref = ref<HTMLElement | null>(null);
    usePageScroll(page1Ref);

    return {
      page1Ref,
    };
  },
});
</script>
