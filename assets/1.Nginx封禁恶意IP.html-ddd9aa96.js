const t=JSON.parse('{"key":"v-115283ca","path":"/framework/5.Nginx/1.Nginx%E5%B0%81%E7%A6%81%E6%81%B6%E6%84%8FIP.html","title":"Nginx封禁恶意IP","lang":"zh-CN","frontmatter":{"title":"Nginx封禁恶意IP","date":"2022-03-08T00:00:00.000Z","img":"https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220808224553.png","category":["Nginx"],"author":{"name":"xw","link":"https://github.com/2457081614"},"tag":["Nginx"],"description":"所有网站屏蔽，把include xxx; 放到http {}语句块。; \\r单独网站屏蔽，把include xxx; 放到网址对应的在server{}语句块; ``` http{ # .... include blacklist.conf; } location / { proxy_pass http://lbs; proxy_redirect defa...","head":[["meta",{"property":"og:url","content":"https://xw-zzz.github.io/framework/5.Nginx/1.Nginx%E5%B0%81%E7%A6%81%E6%81%B6%E6%84%8FIP.html"}],["meta",{"property":"og:site_name","content":"向往@"}],["meta",{"property":"og:title","content":"Nginx封禁恶意IP"}],["meta",{"property":"og:description","content":"所有网站屏蔽，把include xxx; 放到http {}语句块。; \\r单独网站屏蔽，把include xxx; 放到网址对应的在server{}语句块; ``` http{ # .... include blacklist.conf; } location / { proxy_pass http://lbs; proxy_redirect defa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xw-zzz.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-26T02:20:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Nginx封禁恶意IP"}],["meta",{"property":"article:author","content":"xw"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:published_time","content":"2022-03-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-26T02:20:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx封禁恶意IP\\",\\"image\\":[\\"https://xw-zzz.github.io/\\"],\\"datePublished\\":\\"2022-03-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-26T02:20:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xw\\",\\"link\\":\\"https://github.com/2457081614\\"}]}"]]},"headers":[{"level":2,"title":"自动封禁","slug":"自动封禁","link":"#自动封禁","children":[]}],"git":{"createdTime":1695694844000,"updatedTime":1695694844000,"contributors":[{"name":"yangliu@tiduyun.com","email":"2457081614@qq.com","commits":1}]},"readingTime":{"minutes":0.43,"words":129},"filePathRelative":"framework/5.Nginx/1.Nginx封禁恶意IP.md","localizedDate":"2022年3月8日","autoDesc":true}');export{t as data};
