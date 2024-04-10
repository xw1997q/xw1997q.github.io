import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,b as n}from"./app-ec12a113.js";const d={},i=n(`<h1 id="_1-生成公钥" tabindex="-1"><a class="header-anchor" href="#_1-生成公钥" aria-hidden="true">#</a> 1.生成公钥</h1><p>先看本地有没有生成密钥，如果有的话会对之前的有影响，使用该命令查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有话，生成本机密钥</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_2-把公钥复制到远程主机" tabindex="-1"><a class="header-anchor" href="#_2-把公钥复制到远程主机" aria-hidden="true">#</a> 2. 把公钥复制到远程主机</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-copy-id -i ~/.ssh/id_rsa.pub root@远程免密IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),r=[i];function t(c,l){return a(),s("div",null,r)}const u=e(d,[["render",t],["__file","5.免密处理.html.vue"]]);export{u as default};
