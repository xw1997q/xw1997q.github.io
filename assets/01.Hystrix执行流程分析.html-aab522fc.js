const t=JSON.parse('{"key":"v-8aef7bf4","path":"/sourceCode/02.Spring/04.SpringCloud/01.Hystrix%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%88%86%E6%9E%90.html","title":"Hystrix执行流程分析","lang":"zh-CN","frontmatter":{"title":"Hystrix执行流程分析","date":"2022-11-25T00:00:00.000Z","category":["Spring Cloud"],"author":{"name":"向往","link":"https://github.com/2457081614"},"description":"执行流程 下图展示了Hystrix的执行过程图： img 流程： 1. 构造一个HystrixCommand或`HystrixObservableCommand对象，HystrixCommand用户返回单个请求，HystrixObservableCommand用户返回一个可观察的对象。 2. 执行命令 3. 如果该命令启用了请求缓存，并且请求的响应在缓...","head":[["meta",{"property":"og:url","content":"https://xw-zzz.github.io/sourceCode/02.Spring/04.SpringCloud/01.Hystrix%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"向往@"}],["meta",{"property":"og:title","content":"Hystrix执行流程分析"}],["meta",{"property":"og:description","content":"执行流程 下图展示了Hystrix的执行过程图： img 流程： 1. 构造一个HystrixCommand或`HystrixObservableCommand对象，HystrixCommand用户返回单个请求，HystrixObservableCommand用户返回一个可观察的对象。 2. 执行命令 3. 如果该命令启用了请求缓存，并且请求的响应在缓..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xw-zzz.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T10:31:29.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Hystrix执行流程分析"}],["meta",{"property":"article:author","content":"向往"}],["meta",{"property":"article:published_time","content":"2022-11-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-11T10:31:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hystrix执行流程分析\\",\\"image\\":[\\"https://xw-zzz.github.io/\\"],\\"datePublished\\":\\"2022-11-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-11T10:31:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"向往\\",\\"link\\":\\"https://github.com/2457081614\\"}]}"]]},"headers":[{"level":2,"title":"执行流程","slug":"执行流程","link":"#执行流程","children":[]},{"level":2,"title":"断路器","slug":"断路器","link":"#断路器","children":[]},{"level":2,"title":"隔离级别","slug":"隔离级别","link":"#隔离级别","children":[{"level":3,"title":"线程隔离","slug":"线程隔离","link":"#线程隔离","children":[]},{"level":3,"title":"信号量隔离","slug":"信号量隔离","link":"#信号量隔离","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1697020289000,"updatedTime":1697020289000,"contributors":[{"name":"yangliu@tiduyun.com","email":"2457081614@qq.com","commits":1}]},"readingTime":{"minutes":9.01,"words":2702},"filePathRelative":"sourceCode/02.Spring/04.SpringCloud/01.Hystrix执行流程分析.md","localizedDate":"2022年11月25日","autoDesc":true}');export{t as data};
