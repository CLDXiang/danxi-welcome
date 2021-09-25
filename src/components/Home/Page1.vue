<template>
  <div
    id="page-1"
    ref="pageRef"
    class="bg-black"
    :style="{
      '--tw-bg-opacity': scrollProgress * 3.34 - 0.67,
    }"
  >
    <div
      class="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-stretch"
      :class="{
        invisible: scrollProgress > 0.5, // 0.5 后隐藏交互
      }"
    >
      <div
        class="m-1 transform flex justify-center"
        :style="{
          '--tw-scale-x': scrollProgress * 10 + 1,
          '--tw-scale-y': scrollProgress * 10 + 1,
          opacity: 1.67 - scrollProgress * 3.34,
        }"
      >
        <img
          class="w-52 h-52 md:w-72 md:h-72"
          src="@/assets/image/egg-cat.png"
          alt="logo"
        >
      </div>
      <div
        :class="{
          invisible: scrollProgress > 0.2, // 0.2 后隐藏交互
        }"
        :style="{
          opacity: 1 - 5 * scrollProgress,
        }"
      >
        <div class="text-5xl md:text-7xl m-1">
          旦夕
        </div>
        <div class="text-md md:text-2xl m-1">
          可能是复旦学生最好的第三方校园服务APP
        </div>
        <div class="flex justify-center items-center flex-wrap">
          <a
            class="h-12 m-1"
            href="https://apps.apple.com/cn/app/旦夕/id1568629997"
            target="_blank"
          >
            <img
              class="h-12"
              src="@/assets/image/appstore.svg"
              alt="从 AppStore 下载旦夕"
            >
          </a>
          <a
            class="h-12 m-1"
            href="https://www.pgyer.com/danxi"
            target="_blank"
          >
            <div
              class="h-12 rounded-lg bg-black p-2 flex"
              :style="{
                width: '130px',
                border: '1px solid #a6a6a6',
              }"
            >
              <div class="cb-icon" />
              <div class="text-white ml-2 flex flex-col items-start">
                <div
                  class="text-base"
                  :style="{
                    lineHeight: '1.2rem',
                  }"
                >
                  蒲公英
                </div>
                <div
                  class="text-xs"
                  :style="{
                    zoom: '0.76',
                  }"
                >
                  下 载
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-8 text-sm text-gray-500">
          <ul>
            <li>iOS / watchOS / iPadOS / macOS 用户请前往 App Store 下载</li>
            <li>
              如果可以科学上网使用 Google Play，安卓用户请前往
              <a
                class="text-sky-700 underline"
                href="https://play.google.com/store/apps/details?id=io.github.w568w.dan_xi"
              >Google Play</a>
              下载
            </li>
            <li>
              其他安卓用户与 Windows 用户请前往
              <a
                class="text-sky-700 underline"
                href="https://hub.fastgit.org/DanXi-Dev/DanXi/releases/latest"
                target="_blank"
              >GitHub Release</a>
              或蒲公英下载
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePageScroll } from '@/composables';

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
#page-1 {
  height: calc(200vh - 50px);
}

.cb-icon {
  background-image: url(https://assets.pgyer.com/static-20210717/images/newHome/header/pgyer@2x.png);
  @apply bg-no-repeat bg-contain w-8 h-8 flex-shrink-0;
}
</style>
