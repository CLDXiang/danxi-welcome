import { Plugin } from 'vue';

function handleScrollOrResize(el: HTMLElement) {
  const elBottom = el.offsetTop + el.clientHeight;
  const windowBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;
  if (windowBottom >= elBottom) {
    el.classList.add('fade-up-animate');
  } else {
    el.classList.remove('fade-up-animate');
  }
}

export default {
  install: (app) => {
    app.directive('fade-up', {
      mounted(el: HTMLElement) {
        el.classList.add('fade-up-init');
        handleScrollOrResize(el);
        document.addEventListener('scroll', () => handleScrollOrResize(el));
        window.addEventListener('resize', () => handleScrollOrResize(el));
      },
      beforeUnmount(el: HTMLElement) {
        document.removeEventListener('scroll', () => handleScrollOrResize(el));
        window.removeEventListener('resize', () => handleScrollOrResize(el));
      },
    });
  },
} as Plugin;
