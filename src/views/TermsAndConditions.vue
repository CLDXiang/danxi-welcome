<template>
  <div>
    <article>
      <h1>旦夕开发团队编译的旦夕副本使用协议</h1>
      <p>使用旦夕开发团队编译的旦夕副本意味着您同意本使用协议。</p>
      <p>
        旦夕依据 GPL-3.0 协议在 GitHub 开源，您可以从
        <a href="https://github.com/DanXi-Dev/DanXi">项目首页</a>
        获得旦夕的源代码。
      </p>
      <p>此外，使用旦夕开发团队编译的旦夕副本，您还需要同意：</p>
      <ol>
        <li><a href="https://danxi-dev.github.io/privacy">旦夕隐私政策</a>；</li>
        <li>
          旦夕开发团队编译的旦夕副本仅供学习交流使用，您对于您使用旦夕开发团队编译的旦夕副本的一切行为承担一切责任；
        </li>
        <li>旦夕开发团队可以随时修改旦夕开发团队编译的旦夕副本使用协议而恕不另行通知。</li>
      </ol>
    </article>
    <about />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import About from '@/components/About';

export default defineComponent({
  name: 'TermsAndConditions',
  components: { About },
});
</script>
