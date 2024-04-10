import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-ec12a113.js";const t="/assets/image-20230211162330883-17bd2d1d.png",p={},c=e('<h1 id="异常结构及分类" tabindex="-1"><a class="header-anchor" href="#异常结构及分类" aria-hidden="true">#</a> 异常结构及分类</h1><p>类继承关系如下图所示：</p><p><img src="'+t+`" alt="image-20230211162330883" loading="lazy"></p><p>异常主要分为以下三种类型：</p><ul><li>检查时异常，由Java编译器检查</li><li>未检查异常，也叫运行时异常，未检查的异常是Java编译器不需要开发人员处理的异常。</li><li>错误，严重且通常且不可恢复</li></ul><h1 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h1><h2 id="throws" tabindex="-1"><a class="header-anchor" href="#throws" aria-hidden="true">#</a> throws</h2><p>throws用于向外抛出异常，示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPlayerScore</span><span class="token punctuation">(</span><span class="token class-name">String</span> playerFile<span class="token punctuation">)</span>
  <span class="token keyword">throws</span> <span class="token class-name">FileNotFoundException</span> <span class="token punctuation">{</span>
 
    <span class="token class-name">Scanner</span> contents <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>playerFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>contents<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-catch" tabindex="-1"><a class="header-anchor" href="#try-catch" aria-hidden="true">#</a> try-catch</h2><p>如果想尝试自己处理异常，可以使用try-catch块。可以通过重新抛出异常来处理它。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPlayerScore</span><span class="token punctuation">(</span><span class="token class-name">String</span> playerFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> contents <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>playerFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>contents<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> noFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;File not found&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="finally" tabindex="-1"><a class="header-anchor" href="#finally" aria-hidden="true">#</a> finally</h2><p>有些时候，无论是否发生异常，我们都需要执行代码，这时就需要使用finally关键字。示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public int getPlayerScore(String playerFile)
  throws FileNotFoundException {
    Scanner contents = null;
    try {
        contents = new Scanner(new File(playerFile));
        return Integer.parseInt(contents.nextLine());
    } finally {
        if (contents != null) {
            contents.close();
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-with-resources" tabindex="-1"><a class="header-anchor" href="#try-with-resources" aria-hidden="true">#</a> try-with-resources</h2><p>当在try声明中放置继承AutoClosable引用时，不需要自己关闭资源。示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPlayerScore</span><span class="token punctuation">(</span><span class="token class-name">String</span> playerFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Scanner</span> contents <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>playerFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>contents<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;File not found, resetting score.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[c];function o(i,u){return s(),a("div",null,l)}const k=n(p,[["render",o],["__file","01.Java异常.html.vue"]]);export{k as default};
