const e=JSON.parse('{"key":"v-c4a78caa","path":"/sourceCode/01.XXL-JOB%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/03.XXL-JOB%E4%BB%BB%E5%8A%A1%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%88%86%E6%9E%90.html","title":"XXL-JOB任务执行流程分析","lang":"zh-CN","frontmatter":{"title":"XXL-JOB任务执行流程分析","date":"2022-11-21T00:00:00.000Z","category":["《XXL-JOB》源码分析"],"author":{"name":"向往","link":"https://github.com/2457081614"},"description":"概览 一次任务调度流程的过程如下图所示： image-20221121142847580 源码分析 调度中心流程 任务的调度执行是从调用com.xxl.job.admin.core.thread.JobTriggerPoolHelper#trigger接口开始，该方法如下所示： ```java public void addTrigger(final ...","head":[["meta",{"property":"og:url","content":"https://xw-zzz.github.io/sourceCode/01.XXL-JOB%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/03.XXL-JOB%E4%BB%BB%E5%8A%A1%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%88%86%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"向往@"}],["meta",{"property":"og:title","content":"XXL-JOB任务执行流程分析"}],["meta",{"property":"og:description","content":"概览 一次任务调度流程的过程如下图所示： image-20221121142847580 源码分析 调度中心流程 任务的调度执行是从调用com.xxl.job.admin.core.thread.JobTriggerPoolHelper#trigger接口开始，该方法如下所示： ```java public void addTrigger(final ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xw-zzz.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-26T02:20:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"XXL-JOB任务执行流程分析"}],["meta",{"property":"article:author","content":"向往"}],["meta",{"property":"article:published_time","content":"2022-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-26T02:20:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"XXL-JOB任务执行流程分析\\",\\"image\\":[\\"https://xw-zzz.github.io/\\"],\\"datePublished\\":\\"2022-11-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-26T02:20:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"向往\\",\\"link\\":\\"https://github.com/2457081614\\"}]}"]]},"headers":[{"level":2,"title":"概览","slug":"概览","link":"#概览","children":[]},{"level":2,"title":"源码分析","slug":"源码分析","link":"#源码分析","children":[{"level":3,"title":"调度中心流程","slug":"调度中心流程","link":"#调度中心流程","children":[]},{"level":3,"title":"执行器流程","slug":"执行器流程","link":"#执行器流程","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1695694844000,"updatedTime":1695694844000,"contributors":[{"name":"yangliu@tiduyun.com","email":"2457081614@qq.com","commits":1}]},"readingTime":{"minutes":5.47,"words":1642},"filePathRelative":"sourceCode/01.XXL-JOB源码分析/03.XXL-JOB任务执行流程分析.md","localizedDate":"2022年11月21日","autoDesc":true}');export{e as data};
