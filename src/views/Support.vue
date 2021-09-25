<template>
  <div>
    <article>
      <h1>支持</h1>
      <h2 id="faq">
        FAQ
      </h2>
      <ul class="pl-4">
        <li>
          <p>Q：旦夕安全吗？</p>
          <p>
            A：旦夕基于
            <a href="https://github.com/DanXi-Dev/DanXi/blob/main/LICENSE">GPL-3.0 License</a>
            协议在
            <a href="https://github.com/DanXi-Dev/DanXi">GitHub</a>
            开源，项目的所有代码都可以查看。这意味着，旦夕可以接受所有人的审查，不会包含任何恶意代码。
          </p>
        </li>
        <li>
          <p>Q：我的 UIS 账号安全吗？</p>
          <p>A：你的学号和密码只会保存在本地，不会上传至旦夕的服务器。</p>
        </li>
        <li>
          <p>Q：我的个人数据安全吗？</p>
          <p>
            A：你的个人数据是通过你保存的 UIS
            账号直接从复旦大学服务器获取并在旦夕里显示的。你的任何个人数据都不会被上传至旦夕的服务器。
          </p>
        </li>
        <li>
          <p>Q：遇到了 BUG 怎么办？</p>
          <p>
            A：请给我们
            <a href="mailto:danxi_dev@protonmail.com">发送邮件</a>，或直接前往
            <a href="https://github.com/DanXi-Dev/DanXi/issues">GitHub</a>
            提交 Issue。请注意，你的反馈中应该包含
          </p>
          <blockquote>
            <ol>
              <li>设备系统版本</li>
              <li>设备型号</li>
              <li>旦夕 App 版本号</li>
              <li>问题及复现手段</li>
              <li>其他补充描述</li>
            </ol>
            <p>如：</p>
            <ol>
              <li>iOS 14.5.1</li>
              <li>iPhone 12</li>
              <li>0.3.4</li>
              <li>打开就崩溃</li>
            </ol>
          </blockquote>
        </li>
        <li>
          <p>Q：想要提前获取新功能！可以让我提前获取早期发布的版本吗？</p>
          <p>A：感谢支持！请通过<a href="danxi_dev@protonmail.com">邮件</a>联系我们。</p>
        </li>
        <li>
          <p>Q：你们好可爱，想给你们打钱。</p>
          <p>A：来吧！<a href="https://afdian.net/@danxi-dev">旦夕 App | 爱发电 (afdian.net)</a></p>
        </li>
      </ul>
      <p>&nbsp;</p>
      <h2 id="联系我们">
        联系我们
      </h2>
      <p>
        DanXi-Dev GitHub 首页：<a
          href="https://github.com/DanXi-Dev"
          target="_blank"
          class="url"
        >https://github.com/DanXi-Dev</a>
      </p>
      <p>
        DanXi-Dev 邮箱：<a
          href="mailto:danxi_dev@protonmail.com"
          target="_blank"
          class="url"
        >danxi_dev@protonmail.com</a>
      </p>
      <p>
        DanXi App 开源仓库 Issue：<a
          href="https://github.com/DanXi-Dev/DanXi/issues"
          target="_blank"
          class="url"
        >https://github.com/DanXi-Dev/DanXi/issues</a>
      </p>
      <p>&nbsp;</p>
    </article>
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
