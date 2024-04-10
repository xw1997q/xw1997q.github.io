import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as p,a as n,e as s,d as o,b as i}from"./app-ec12a113.js";const l="/assets/image-20220920150242971-bc02d99a.png",u={},d=i(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>持久化可以提高RabbitMQ的可靠性，RabbitMQ的持久化可以分为三个部分：交换机持久化、队列持久化、消息持久化。高可用通过集群来实现，分为普通集群和镜像集群。</p><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2><h3 id="交换机持久化" tabindex="-1"><a class="header-anchor" href="#交换机持久化" aria-hidden="true">#</a> 交换机持久化</h3><p>通过设置<code>durable</code>参数为true即可实现交换机持久化。<code>directExchange1</code>是持久化的，<code>durableExchange2</code>没有做持久化。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Exchange</span> <span class="token function">directExchange1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ExchangeBuilder</span><span class="token punctuation">.</span><span class="token function">directExchange</span><span class="token punctuation">(</span><span class="token string">&quot;durableExchange1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">durable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Exchange</span> <span class="token function">directExchange2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ExchangeBuilder</span><span class="token punctuation">.</span><span class="token function">directExchange</span><span class="token punctuation">(</span><span class="token string">&quot;durableExchange2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">durable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="image-20220920150242971" loading="lazy"></p><h3 id="队列持久化" tabindex="-1"><a class="header-anchor" href="#队列持久化" aria-hidden="true">#</a> 队列持久化</h3><p>通过设置<code>durable</code>参数为true即可实现交换机持久化。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 队列持久化
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token class-name">AMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">QueueBuilder</span><span class="token punctuation">.</span><span class="token function">durable</span><span class="token punctuation">(</span><span class="token string">&quot;direct.a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 队列没有做持久化
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token class-name">BMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">QueueBuilder</span><span class="token punctuation">.</span><span class="token function">nonDurable</span><span class="token punctuation">(</span><span class="token string">&quot;direct.b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消息持久化" tabindex="-1"><a class="header-anchor" href="#消息持久化" aria-hidden="true">#</a> 消息持久化</h3><p>通过<code>MessagePostProcessor</code>可将消息持久化，代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token class-name">MessagePostProcessor</span> messagePostProcessor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessagePostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">Message</span> <span class="token function">postProcessMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">AmqpException</span> <span class="token punctuation">{</span>
                <span class="token comment">// 设置消息持久化</span>
                message<span class="token punctuation">.</span><span class="token function">getMessageProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDeliveryMode</span><span class="token punctuation">(</span><span class="token class-name">MessageDeliveryMode</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> message<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意</p><p>可以将所有的消息都设置为持久化，但是这样会严重影响RabbitMQ的性能（随机）。写入磁盘的速度比写入内存的速度慢得不只一点点。对于可靠性不是那么高的消息可以不采用持久化处理以提高整体的吞吐量。在选择是否要将消息持久化时，需要在可靠性和吐吞量之间做一个权衡</p></div><h2 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用" aria-hidden="true">#</a> 高可用</h2><p>将交换器、队列、消息都设置了持久化之后并不能百分之百保证数据不丢失，从消费者来说，如果在订阅消费队列时将 <code>autoAck</code>参数设置为true ，那么当消费者接收到相关消息之后，还没来得及处理就看机了，这样也算数据丢失。这种情况很好解决，将autoAck 参数设置为false并进行手动确认。</p><p>在持久化的消息正确存入 RabbitMQ 之后，还需要有一段时间(虽然很短，但是不可忽视〉才能存入磁盘之中。 RabbitMQ 并不会为每条消息都进行同步存盘(调用内核的fsync方法)的处理，可能仅仅保存到操作系统缓存之中而不是物理磁盘之中。如果在这段时间内RabbitMQ 服务节点发生了岩机、重启等异常情况，消息保存还没来得及落盘，那么这些消息将丢失。因这个问题需要通过RabbitMQ镜像集群解决。</p><h3 id="集群分类" tabindex="-1"><a class="header-anchor" href="#集群分类" aria-hidden="true">#</a> 集群分类</h3><ul><li>标准集群：是一种分布式集群，将队列分散到集群的各个节点，从而提高整个集群的并发能力，消息数据不会在各节点之间同步，某节点挂了后对应的数据将会丢失，一般很少适用。</li><li>镜像集群：是一种主从集群，标准集群的基础上，添加了主从备份功能(非强一致性)，提高集群的数据可用性。</li><li>仲裁队列：是3.8版本以后才有的新功能，用来替代镜像集群，也是一种主从集群，主从同步基于Raft协议，强一致。</li></ul>`,19),r={href:"https://www.cnblogs.com/zhouganqing/p/14814362.html",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"一般生产环境使用镜像集群和仲裁队列更多。",-1);function v(m,b){const a=t("ExternalLinkIcon");return c(),p("div",null,[d,n("p",null,[s("部署可参考："),n("a",r,[s("https://www.cnblogs.com/zhouganqing/p/14814362.html"),o(a)])]),k])}const f=e(u,[["render",v],["__file","4.RabbitMq持久化与高可用.html.vue"]]);export{f as default};
