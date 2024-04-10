const t=JSON.parse('{"key":"v-15b34644","path":"/framework/2.Flink/4.Flink%E7%AA%97%E5%8F%A3.html","title":"Flink窗口及增量聚合","lang":"zh-CN","frontmatter":{"title":"Flink窗口及增量聚合","date":"2021-08-08T00:00:00.000Z","img":"https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220806223821.png","category":["大数据","JAVA"],"author":{"name":"xw","link":"https://github.com/2457081614"},"tag":["Flink"],"description":"概述 数据流处理离不开状态管理，比如窗口聚合统计、去重、排序等，状态是指一个Operator的运行的状态/历史值,是维护在内存中。一个算子的子任务接收输入流，获取对应的状态，计算新的结果，然后把结果更新到状态里面。 窗口 数据流是一直源源不断产生，业务需要聚合统计使用，比如每10秒统计过去5分钟的点击量、成交额等，Windows 就可以将无限的数据流拆...","head":[["meta",{"property":"og:url","content":"https://xw-zzz.github.io/framework/2.Flink/4.Flink%E7%AA%97%E5%8F%A3.html"}],["meta",{"property":"og:site_name","content":"向往@"}],["meta",{"property":"og:title","content":"Flink窗口及增量聚合"}],["meta",{"property":"og:description","content":"概述 数据流处理离不开状态管理，比如窗口聚合统计、去重、排序等，状态是指一个Operator的运行的状态/历史值,是维护在内存中。一个算子的子任务接收输入流，获取对应的状态，计算新的结果，然后把结果更新到状态里面。 窗口 数据流是一直源源不断产生，业务需要聚合统计使用，比如每10秒统计过去5分钟的点击量、成交额等，Windows 就可以将无限的数据流拆..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xw-zzz.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-26T02:20:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Flink窗口及增量聚合"}],["meta",{"property":"article:author","content":"xw"}],["meta",{"property":"article:tag","content":"Flink"}],["meta",{"property":"article:published_time","content":"2021-08-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-26T02:20:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flink窗口及增量聚合\\",\\"image\\":[\\"https://xw-zzz.github.io/\\"],\\"datePublished\\":\\"2021-08-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-26T02:20:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xw\\",\\"link\\":\\"https://github.com/2457081614\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"窗口","slug":"窗口","link":"#窗口","children":[{"level":3,"title":"分类","slug":"分类","link":"#分类","children":[]},{"level":3,"title":"增量聚合和全窗口函数","slug":"增量聚合和全窗口函数","link":"#增量聚合和全窗口函数","children":[]}]}],"git":{"createdTime":1695694844000,"updatedTime":1695694844000,"contributors":[{"name":"yangliu@tiduyun.com","email":"2457081614@qq.com","commits":1}]},"readingTime":{"minutes":4,"words":1200},"filePathRelative":"framework/2.Flink/4.Flink窗口.md","localizedDate":"2021年8月8日","autoDesc":true}');export{t as data};
