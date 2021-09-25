<template>
  <div
    id="page-2"
    ref="pageRef"
    class="bg-black min-h-screen flex flex-col items-center"
  >
    <div
      v-fade-up
      class="font-semibold my-24"
    >
      <h2 class="text-gray-500 text-3xl md:text-5xl">
        体积不大，功能很强大
      </h2>
      <p class="text-white text-lg md:text-2xl m-2">
        查询饭卡余额、空教室、食堂拥堵情况... 更多特性还在活跃更新中
      </p>
    </div>
    <div
      id="iphone"
      class="bg-contain flex justify-center"
    >
      <div class="w-5/6 flex flex-col items-stretch">
        <img
          src="@/assets/image/top-iphone12-ui.png"
          class="mt-16"
          alt="iphone-stats"
        >
        <ul>
          <li>
            <img
              v-fade-up
              src="@/assets/image/1-iphone12-ui.png"
            >
          </li>
          <li>
            <img
              v-fade-up
              src="@/assets/image/2-iphone12-ui.png"
            >
          </li>
          <li>
            <img
              v-fade-up
              src="@/assets/image/3-iphone12-ui.png"
            >
          </li>
          <li>
            <img
              v-fade-up
              src="@/assets/image/4-iphone12-ui.png"
            >
          </li>
          <li>
            <img
              v-fade-up
              src="@/assets/image/5-iphone12-ui.png"
            >
          </li>
          <li>
            <img
              v-fade-up
              src="@/assets/image/6-iphone12-ui.png"
            >
          </li>
          <li>
            <img
              v-fade-up
              src="@/assets/image/7-iphone12-ui.png"
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="h-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePageScroll } from '@/composables';

// TODO: 若需要，将 UI 从 fade-up 换为 scrollProgress
export default defineComponent({
  setup() {
    const pageRef = ref<HTMLElement | null>(null);
    const { scrollProgress } = usePageScroll(pageRef);
    return {
      pageRef,
      scrollProgress,
    };
  },
});
</script>

<style lang="postcss" scoped>
#page-2 {
  --device-width: min(95vw, 770px);
  --device-height: calc(var(--device-width) * 1336 / 770);
}

#iphone {
  width: var(--device-width);
  height: var(--device-height);
  background-image: url(@/assets/image/iphone12-case.png);
}
</style>
