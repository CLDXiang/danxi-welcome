<template>
  <div>
    <page-1 />
    <page-2 />
    <about theme="dark" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Page1, Page2 } from '@/components/Home';
import About from '@/components/About';

export default defineComponent({
  name: 'Home',
  components: { About, Page1, Page2 },
});
</script>
