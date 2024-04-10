import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as r,a as s,e as n,d as e,b as i}from"./app-ec12a113.js";const c="/assets/20220806220901-0c3a74d3.png",_="/assets/20220804095314-9ddada71.png",k="/assets/20220806221018-516677f4.png",u="/assets/20220806221215-203f5f7c.png",d={},p=i('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Apache Flink是一个<strong>框架和分布式处理引擎</strong>，用于在无界和有界数据流上进行有状态计算。Flink被设计成可以在所有常见的集群环境中运行。</p><ul><li>有界流：有定义流的开始，也有定义流的结束。有界流可以在摄取所有数据后再进行计算。有界流所有数据可以被排序，所以并不需要有序摄取。有界流处理通常被称为批处理</li><li>无界流：有定义流的开始，但没有定义流的结束。它们会无休止地产生数据。无界流的数据必须持续处理，即数据被摄取后需要立刻处理。我们不能等到所有数据都到达再处理，因为输入是无限的，在任何时候输入都不会完成。处理无界数据通常要求以特定顺序摄取事件，例如事件发生的顺序，以便能够推断结果的完整性。</li></ul><h2 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h2><p><img src="'+c+'" alt="" loading="lazy"></p><p>Flink由一个<strong>JobManager</strong>和一个或多个<strong>TaskManager</strong>组成。</p>',6),g=s("p",null,"JobManager",-1),h=s("p",null,[s("strong",null,"ResourceManager")],-1),m=s("em",null,"ResourceManager",-1),f=s("strong",null,"task slots",-1),M={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/flink-architecture/#taskmanagers",target:"_blank",rel:"noopener noreferrer"},b=s("li",null,[s("p",null,[s("strong",null,"Dispatcher")]),s("p",null,[s("em",null,"Dispatcher"),n(" 提供了一个 REST 接口，用来提交 Flink 应用程序执行，并为每个提交的作业启动一个新的 JobMaster。它还运行 Flink WebUI 用来提供作业执行信息。")])],-1),T=s("p",null,[s("strong",null,"JobMaster")],-1),F=s("em",null,"JobMaster",-1),x={href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/concepts/glossary/#logical-graph",target:"_blank",rel:"noopener noreferrer"},J=s("li",null,[s("p",null,[s("em",null,"TaskManager"),n("（也称为 "),s("em",null,"worker"),n("）执行作业流的 task，并且缓存和交换数据流。在 TaskManager 中资源调度的最小单位是 task "),s("em",null,"slot"),n("。TaskManager 中 task slot 的数量表示并发处理 task 的数量。请注意一个 task slot 中可以执行多个算子。算子包括source、transformation、sink。数据来源、数据聚合转换、数据结果输出每个过程都可以认为是一个算子。")])],-1),S=s("p",null,[s("img",{src:_,alt:"",loading:"lazy"})],-1),z=s("p",null,[s("img",{src:k,alt:"",loading:"lazy"})],-1),R=s("p",null,[n("对于分布式执行，Flink 将算子的 subtasks "),s("em",null,"链接"),n("成 "),s("em",null,"tasks"),n("，每个 task 由一个线程执行，中source和map算子组成一个算子链，作为一个task运行在一个线程上，将算子链接成 task 是个有用的优化：它减少线程间切换、缓冲的开销，并且减少延迟的同时增加整体吞吐量。")],-1),y=s("p",null,[s("img",{src:u,alt:"",loading:"lazy"})],-1),N=s("p",null,"Task Slots 任务槽，每个worker（TaskManager）是一个JVM 进程，可以有一个或多Solt，Task Slot是Flink中的任务执行器,每个Task Slot可以运行多个subtask ，所有Task Slot平均分配TaskManger的内存, TaskSolt 没有 CPU 隔离每个subtask会以单独的线程来运行，task solt数量建议是cpu的核数，独占内存，共享CPU。",-1);function V(E,v){const a=t("ExternalLinkIcon");return o(),r("div",null,[p,s("ul",null,[s("li",null,[g,s("ul",null,[s("li",null,[h,s("p",null,[m,n(" 负责 Flink 集群中的资源提供、回收、分配 - 它管理 "),f,n("，这是 Flink 集群中资源调度的单位（请参考"),s("a",M,[n("TaskManagers"),e(a)]),n("）。Flink 为不同的环境和资源提供者（例如 YARN、Kubernetes 和 standalone 部署）实现了对应的 ResourceManager。在 standalone 设置中，ResourceManager 只能分配可用 TaskManager 的 slots，而不能自行启动新的 TaskManager。")])]),b,s("li",null,[T,s("p",null,[F,n(" 负责管理单个"),s("a",x,[n("JobGraph"),e(a)]),n("的执行。Flink 集群中可以同时运行多个作业，每个作业都有自己的 JobMaster。")])])])]),J]),S,z,R,y,N])}const I=l(d,[["render",V],["__file","0.Flink架构.html.vue"]]);export{I as default};
