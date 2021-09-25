<template>
  <div>
    <article>
      <h1>旦夕隐私政策</h1>
      <p>
        旦夕 App 是一个面向复旦大学学生的第三方集成式校园服务平台，由旦夕 App 前端、复旦大学
        UIS、FDU Hole 树洞平台构成。旦夕隐私政策由这三个部分的隐私政策构成。
      </p>
      <h2>旦夕 App 前端</h2>
      <p>
        旦夕 App 前端将您的数据存储在本地，不会上传至任何服务器。
        在任何情况下，您通过UIS账号查询到的信息（例如您的校园卡消费和成绩信息）都不会离开您的设备，开发团队和第三方均不可能获得这些信息。
        <br>
        如果您打开了“支持我们”选项（默认关闭），您的部分非敏感数据（如手机型号，当前时区等）将会被发送给第三方用于向您展示广告。
        此功能完全自愿开启，开启后不会为您带来任何功能上的好处，但您可以通过此方式支持我们的开发工作。
      </p>
      <h2>复旦大学 UIS</h2>
      <p>
        您的隐私数据由复旦大学采集，旦夕 App 仅在经过您的允许后读取有限数据。相关政策请访问
        <a href="https://www.fudan.edu.cn">复旦大学官网</a>
        了解。本 App 系第三方作品，与复旦大学无关。
      </p>
      <h2>FDU Hole 树洞平台</h2>
      <p>
        旦夕提供对于匿名论坛 FDU Hole 的访问。您的隐私数据由 FDU Hole 按照
        <a href="https://www.fduhole.tk/#/licence">FDU Hole 隐私政策</a>
        采集并使用。如果您不使用 FDU Hole 服务，则旦夕不会采集您的隐私数据。
      </p>
    </article>
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
