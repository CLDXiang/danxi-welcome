<template>
  <nav
    id="nav"
    class="
      z-50
      h-12
      w-full
      fixed
      top-0
      flex
      justify-center
      items-center
      bg-white bg-opacity-80
      backdrop-filter
      blur-lg
      saturate-200
    "
  >
    <router-link to="/">
      首页
    </router-link>
    <router-link to="/privacy">
      隐私政策
    </router-link>
    <router-link to="/terms-and-conditions">
      使用条款
    </router-link>
    <router-link to="/support">
      支持
    </router-link>
  </nav>
  <main class="pt-12">
    <router-view />
  </main>
</template>

<style lang="postcss">
html {
  @apply w-full h-full overflow-y-auto;
  font-family: 'SF Pro SC', 'HanHei SC', 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
    'PingFang SC', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-center;
}

#nav > a {
  @apply text-xl text-gray-500 p-2.5;
}

#nav > a.router-link-exact-active {
  @apply text-gray-900;
}

article {
  @apply text-left p-8;
}

article h1 {
  @apply text-3xl font-bold my-2;
}

article h2 {
  @apply text-2xl font-bold border-l-4 border-sky-700 pl-3 my-2;
}

article a {
  @apply text-sky-700;
}

article ul {
  @apply list-outside list-disc;
}

article ol {
  @apply list-inside list-decimal;
}
</style>
