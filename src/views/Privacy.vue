<template>
  <div>
    Privacy
    <about />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import About from '@/components/About';

export default defineComponent({
  name: 'Privacy',
  components: { About },
});
</script>
