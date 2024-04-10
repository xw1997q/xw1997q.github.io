import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,b as e}from"./app-ec12a113.js";const t={},p=e(`<p>[TOC]</p><h2 id="switch表达式增强" tabindex="-1"><a class="header-anchor" href="#switch表达式增强" aria-hidden="true">#</a> switch表达式增强</h2><p>添加yield关键词，可以有效地从switch表达式返回值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;preview&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">whenSwitchingOnOperationSquareMe_thenWillReturnSquare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> me <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> operation <span class="token operator">=</span> <span class="token string">&quot;squareMe&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>operation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;doubleMe&quot;</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">yield</span> me <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token string">&quot;squareMe&quot;</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">yield</span> me <span class="token operator">*</span> me<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">default</span> <span class="token operator">-&gt;</span> me<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本块" tabindex="-1"><a class="header-anchor" href="#文本块" aria-hidden="true">#</a> 文本块</h2><p>支持多行文本块，格式如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token constant">TEXT_BLOCK_JSON</span> <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
{
    &quot;name&quot; : &quot;xiangwang&quot;,
    &quot;website&quot; : &quot;https://blog.xiangwang.tech/&quot;
}
&quot;&quot;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态cds归档" tabindex="-1"><a class="header-anchor" href="#动态cds归档" aria-hidden="true">#</a> 动态CDS归档</h2><p>类数据共享(CDS)已经成为Java HotSpot VM的一个突出特性。允许在程序退出时动态归档类。它允许跨不同的jvm共享类元数据，以减少启动时间和内存占用。JDK 10通过添加apppcds扩展了这一功能，使开发人员能够在共享归档中包含应用程序类。JDK 12进一步增强了该特性，在默认情况下包括CDS存档。</p><p>创建存档：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -XX:ArchiveClassesAtExit=&lt;archive filename&gt; -cp &lt;app jar&gt; AppName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用存档：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -XX:ArchiveClassesAtExit=&lt;archive filename&gt; -cp &lt;app jar&gt; AppName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="zgc优化-增强-zgc-释放未使用内存" tabindex="-1"><a class="header-anchor" href="#zgc优化-增强-zgc-释放未使用内存" aria-hidden="true">#</a> ZGC优化（增强 ZGC 释放未使用内存）</h2><p>ZGC是在Java 11中引入的，作为一种低延迟的垃圾收集机制，GC暂停时间从不超过10毫秒。与其他HotSpot VM gc(如G1和Shenandoah)不同的是，它没有将未使用的堆内存返回给操作系统。Java 13将此功能添加到ZGC中。我们现在得到了减少的内存占用和性能改进。</p><p>从Java 13开始，ZGC在默认情况下将未提交的内存返回给操作系统，直到达到指定的最小堆大小。如果不想使用此特性，可以通过以下方式</p><ul><li>使用选项-XX:-ZUncommit</li><li>设置相等的最小堆大小(-Xms)和最大堆大小(-Xmx)</li></ul><h2 id="socket-api-重构" tabindex="-1"><a class="header-anchor" href="#socket-api-重构" aria-hidden="true">#</a> Socket API 重构</h2><p>在 Java 13 之前，通过使用 PlainSocketImpl 作为 SocketImpl 的具体实现。</p><p>Java 13 中的新底层实现，引入 NioSocketImpl 的实现用以替换 SocketImpl 的 PlainSocketImpl 实现，此实现与 NIO（新 I/O）实现共享相同的内部基础结构，并且与现有的缓冲区高速缓存机制集成在一起，因此不需要使用线程堆栈。除了这些更改之外，还有其他一些更便利的更改，如使用 java.lang.ref.Cleaner 机制来关闭套接字（如果 SocketImpl 实现在尚未关闭的套接字上被进行了垃圾收集），以及在轮询时套接字处于非阻塞模式时处理超时操作等方面。</p>`,20),i=[p];function o(c,l){return n(),s("div",null,i)}const d=a(t,[["render",o],["__file","08.JDK13新特性.html.vue"]]);export{d as default};
