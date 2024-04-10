const t=JSON.parse('{"key":"v-17ac6413","path":"/maintenance/4.linux/1.Linux%E7%B3%BB%E7%BB%9F%E4%B8%ADCPU%E5%8D%A0%E7%94%A8%E7%8E%87%E8%BE%83%E9%AB%98%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5.html","title":"Linux性能问题排查","lang":"zh-CN","frontmatter":{"title":"Linux性能问题排查","date":"2022-05-24T00:00:00.000Z","category":["Linux"],"author":{"name":"xw","link":"https://github.com/2457081614"},"tag":["Linux"],"description":"使用top命令，然后按shift+p按照cpu排序; \\r使用top -H -p [进程id]，找到进程中消耗资源最高的线程的id; \\r将线程id转为16进制， printf \\"%x\\\\n\\" [线程id]; \\r执行 jstack [进程id] |grep -A 10 [线程id的16进制]; 目标：分析Linux相关性能指标，找出CPU平均负载升高的进程和...","head":[["meta",{"property":"og:url","content":"https://xw-zzz.github.io/maintenance/4.linux/1.Linux%E7%B3%BB%E7%BB%9F%E4%B8%ADCPU%E5%8D%A0%E7%94%A8%E7%8E%87%E8%BE%83%E9%AB%98%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5.html"}],["meta",{"property":"og:site_name","content":"向往@"}],["meta",{"property":"og:title","content":"Linux性能问题排查"}],["meta",{"property":"og:description","content":"使用top命令，然后按shift+p按照cpu排序; \\r使用top -H -p [进程id]，找到进程中消耗资源最高的线程的id; \\r将线程id转为16进制， printf \\"%x\\\\n\\" [线程id]; \\r执行 jstack [进程id] |grep -A 10 [线程id的16进制]; 目标：分析Linux相关性能指标，找出CPU平均负载升高的进程和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xw-zzz.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T06:12:08.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Linux性能问题排查"}],["meta",{"property":"article:author","content":"xw"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2022-05-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T06:12:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux性能问题排查\\",\\"image\\":[\\"https://xw-zzz.github.io/\\"],\\"datePublished\\":\\"2022-05-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-21T06:12:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xw\\",\\"link\\":\\"https://github.com/2457081614\\"}]}"]]},"headers":[],"git":{"createdTime":1695694844000,"updatedTime":1711001528000,"contributors":[{"name":"yangliu@tiduyun.com","email":"2457081614@qq.com","commits":2}]},"readingTime":{"minutes":7.79,"words":2337},"filePathRelative":"maintenance/4.linux/1.Linux系统中CPU占用率较高问题排查.md","localizedDate":"2022年5月24日","autoDesc":true}');export{t as data};
