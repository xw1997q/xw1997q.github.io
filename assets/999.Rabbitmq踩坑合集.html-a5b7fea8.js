import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,b as i}from"./app-ec12a113.js";const n={},s=i(`<h1 id="问题列表" tabindex="-1"><a class="header-anchor" href="#问题列表" aria-hidden="true">#</a> 问题列表</h1><h2 id="加了-bean配置交换机和queue-启动项目却没自动化创建队列" tabindex="-1"><a class="header-anchor" href="#加了-bean配置交换机和queue-启动项目却没自动化创建队列" aria-hidden="true">#</a> 加了@bean配置交换机和queue，启动项目却没自动化创建队列</h2><p>这是因为RabbitMq使用懒加载模式，RabbitMQ懒加载模式， 代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@RabbitListener(queues = &quot;xxx&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另外一种方式，若Mq中无相应名称的队列,会自动创建Queue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@RabbitListener(queuesToDeclare = { @Queue(&quot;xxxxx&quot;) })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),d=[s];function r(u,c){return a(),t("div",null,d)}const b=e(n,[["render",r],["__file","999.Rabbitmq踩坑合集.html.vue"]]);export{b as default};
