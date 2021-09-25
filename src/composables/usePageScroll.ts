import {
  onBeforeUnmount, onMounted, ref, Ref,
} from 'vue';

/** 传入元素 ref，返回当前元素在页面中的滚动进度 */
export function usePageScroll(eleRef: Ref<HTMLElement | null>) {
  const scrollProgress = ref(0);

  const calcScroll = () => {
    if (!eleRef.value) return;
    const { scrollTop } = document.documentElement;
    const top = eleRef.value.offsetTop;
    const bottom = eleRef.value.offsetTop + eleRef.value.clientHeight;
    if (scrollTop <= top) {
      // 未到达上边界
      scrollProgress.value = 0;
      return;
    }
    if (scrollTop >= bottom) {
      // 超出下边界
      scrollProgress.value = 1;
      return;
    }
    scrollProgress.value = (scrollTop - top) / (bottom - top);
  };

  // watch(scrollProgress, (val) => {
  //   console.log(val);
  // });

  onMounted(() => {
    calcScroll();
    document.addEventListener('scroll', calcScroll);
    window.addEventListener('resize', calcScroll);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('scroll', calcScroll);
    window.removeEventListener('resize', calcScroll);
  });

  return {
    scrollProgress,
  };
}
