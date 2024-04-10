const t=JSON.parse('{"key":"v-2cb4c6a3","path":"/db/2.Redis/4.Redis%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.html","title":"Redis开发规范","lang":"zh-CN","frontmatter":{"title":"Redis开发规范","date":"2022-09-21T00:00:00.000Z","category":["数据库","Redis"],"author":{"name":"xw","link":"https://github.com/2457081614"},"description":"开发规范\\r以业务名(或数据库名)为前缀(防止key冲突)，用冒号分隔，比如业务名:表名:id；保证语义的前提下，控制key的长度，当key较多时也会占用过多内存。; \\r拒绝bigkey(防止网卡流量、慢查询)，string类型控制在10KB以内，hash、list、set、zset元素个数不要超过5000。参考官网给出的资料，string类型的数据大小...","head":[["meta",{"property":"og:url","content":"https://xw-zzz.github.io/db/2.Redis/4.Redis%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"向往@"}],["meta",{"property":"og:title","content":"Redis开发规范"}],["meta",{"property":"og:description","content":"开发规范\\r以业务名(或数据库名)为前缀(防止key冲突)，用冒号分隔，比如业务名:表名:id；保证语义的前提下，控制key的长度，当key较多时也会占用过多内存。; \\r拒绝bigkey(防止网卡流量、慢查询)，string类型控制在10KB以内，hash、list、set、zset元素个数不要超过5000。参考官网给出的资料，string类型的数据大小..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xw-zzz.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T06:12:08.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis开发规范"}],["meta",{"property":"article:author","content":"xw"}],["meta",{"property":"article:published_time","content":"2022-09-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T06:12:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis开发规范\\",\\"image\\":[\\"https://xw-zzz.github.io/\\"],\\"datePublished\\":\\"2022-09-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-21T06:12:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xw\\",\\"link\\":\\"https://github.com/2457081614\\"}]}"]]},"headers":[{"level":2,"title":"开发规范","slug":"开发规范","link":"#开发规范","children":[]}],"git":{"createdTime":1695694844000,"updatedTime":1711001528000,"contributors":[{"name":"yangliu@tiduyun.com","email":"2457081614@qq.com","commits":2}]},"readingTime":{"minutes":1.58,"words":475},"filePathRelative":"db/2.Redis/4.Redis开发规范.md","localizedDate":"2022年9月21日","autoDesc":true}');export{t as data};
