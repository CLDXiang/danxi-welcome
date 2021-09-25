<template>
  <div>
    Support
    <about />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import About from '@/components/About';

export default defineComponent({
  name: 'Support',
  components: { About },
});
</script>
