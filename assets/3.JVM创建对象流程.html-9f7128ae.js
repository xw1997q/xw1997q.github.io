import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as _,c as r,f as t,a,e as s,b as i}from"./app-ec12a113.js";const o="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2_size_16_color_FFFFFF_t_70-ca08addf.png",l="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2_size_16_color_FFFFFF_t_70-1663224494006-25-5c07424e.png",n="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2_size_16_color_FFFFFF_t_70-1663224505231-28-a740f6e6.png",p="/assets/20220906142132-9168d91f.png",c="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2_size_16_color_FFFFFF_t_70-1663224532077-33-d27db4a3.png",d="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2_size_16_color_FFFFFF_t_70-1663224543361-36-b307f97a.png",m={},F=a("h3",{id:"new的时候发生了什么",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#new的时候发生了什么","aria-hidden":"true"},"#"),s(" new的时候发生了什么")],-1),h=i('<p>直接上图：<br><img src="'+o+'" alt="在这里插入图片描述" loading="lazy"></p><ul><li><p>虚拟机遇到⼀条new指令时，⾸先检查这个对应的类能否在常量池中定位到⼀个类的符号引⽤。</p></li><li><p>检查这个符号引用代表的类是否已被加载、解析和初始化过。如果没有，那必须先执行相应的类加载过程</p></li><li><p>为这个新⽣对象在Java堆中分配内存空间，其中Java堆分配内存空间的⽅式主要有以下两种：<br><img src="'+l+'" alt="在这里插入图片描述" loading="lazy"><br> 1、指针碰撞<br> 分配内存空间包括开辟⼀块内存和移动指针两个步骤。<br> ⾮原⼦步骤可能出现并发问题，Java虚拟机采⽤CAS配上失败重试的⽅式保证更新。<br> 2、空闲列表<br> 分配内存空间包括开辟⼀块内存和修改空闲列表两个步骤。<br> ⾮原⼦步骤可能出现并发问题，Java虚拟机采⽤CAS配上失败重试的⽅式保证更新。</p></li><li><p>将分配到的内存空间都初始化为零值</p></li><li><p>设置对象头相关数据，主要包括元数据信息、GC分代年龄、对象hash</p></li><li><p>执⾏对象⽅法,初始化赋值。</p></li></ul><h3 id="对象结构" tabindex="-1"><a class="header-anchor" href="#对象结构" aria-hidden="true">#</a> 对象结构</h3><p><img src="'+n+'" alt="在这里插入图片描述" loading="lazy"></p><ul><li><p>HotSpot虚拟机的对象头包括两部分信息，第一部分用于存储对象自身的运行时数据，如哈希码（HashCode）、GC分代年龄、锁状态标志、线程持有的锁、偏向线程ID、偏向时间戳等，官方称它为“Mark Word”。对象头的另外一部分是类型指针，即对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是哪个类的实例。</p><p>Mark Word标志位如下：</p><p><img src="'+p+'" alt="" loading="lazy"></p></li></ul><h3 id="对象的访问方式" tabindex="-1"><a class="header-anchor" href="#对象的访问方式" aria-hidden="true">#</a> 对象的访问方式</h3><p>当我们在堆上创建⼀个对象实例后，就要通过虚拟机栈中的reference类型数据来操作堆上的对象。现在主流的访问⽅式有两种（HotSpot虚拟机采⽤的是第⼆种）：</p><ul><li>使⽤句柄访问对象。即reference中存储的是对象句柄的地址，⽽句柄中包含了对象实例数据与类型数据的具体地址信息，相当于⼆级指针。</li><li>直接指针访问对象。即reference中存储的就是对象地址，相当于⼀级指针。<br><img src="'+c+'" alt="在这里插入图片描述" loading="lazy"><img src="'+d+'" alt="在这里插入图片描述" loading="lazy"><br> 两种方式对比：</li><li>垃圾回收分析：句柄⽅式当垃圾回收移动对象时，reference中存储的地址是稳定的地址，不需<br> 要修改，仅需要修改对象句柄的地址；指针方式需要修改reference中存储的地址。</li><li>访问效率分析：指针方式比句柄方式快。</li></ul>',8);function b(z,u){return _(),r("div",null,[F,t("more"),h])}const G=e(m,[["render",b],["__file","3.JVM创建对象流程.html.vue"]]);export{G as default};
