<template>
  <footer
    :class="theme"
    class="p-1"
  >
    <div>©2021 <a href="https://github.com/DanXi-Dev">DanXi-Dev</a></div>
    <div>
      <div>友情链接</div>
      <ul class="flex justify-center items-center flex-wrap">
        <link-item href="https://www.fduhole.tk">
          FDUHole 树洞
        </link-item>
        <link-item href="https://github.com/fduhole">
          FDUHole-Dev
        </link-item>
        <link-item href="https://KYLN24.github.io/Elsewhere/">
          I'm KYLN: Elsewhere
        </link-item>
        <link-item href="https://w568w.eu.org/">
          行云小站
        </link-item>
        <link-item href="https://blog.salve.cf/">
          拾遗录
        </link-item>
        <link-item href="https://kavinzhao.github.io">
          无处
        </link-item>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import LinkItem from './components/BlankLinkItem.vue';

export default defineComponent({
  components: {
    LinkItem,
  },
  props: {
    /** 颜色
     * - `dark` 黑底白字
     * - `light` 白底黑字
     */
    theme: { type: String as PropType<'dark' | 'light'>, default: 'light' },
  },
});
</script>

<style lang="postcss" scoped>
.dark {
  @apply bg-black text-white;
}

.light {
  @apply bg-white text-black;
}
</style>
