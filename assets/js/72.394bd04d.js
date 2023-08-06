(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{352:function(_,v,t){"use strict";t.r(v);var s=t(10),r=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"如何设计一个优秀的高并发系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何设计一个优秀的高并发系统"}},[_._v("#")]),_._v(" 如何设计一个优秀的高并发系统")]),_._v(" "),v("p",[_._v("所谓设计"),v("strong",[_._v("高并发")]),_._v("系统，就是设计一个系统，保证它"),v("strong",[_._v("整体可用")]),_._v("的同时，能够"),v("strong",[_._v("处理很高的并发用户请求")]),_._v("，能够承受"),v("strong",[_._v("很大的流量冲击")]),_._v("。")]),_._v(" "),v("p",[_._v("我们要设计高并发的系统，那就需要处理好一些常见的系统瓶颈问题，如"),v("strong",[_._v("内存不足、磁盘空间不足，连接数不够，网络宽带不够")]),_._v("等等，以应对突发的流量洪峰。")]),_._v(" "),v("h2",{attrs:{id:"_1-分而治之-横向扩展"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-分而治之-横向扩展"}},[_._v("#")]),_._v(" 1. 分而治之，横向扩展")]),_._v(" "),v("p",[_._v("如果你"),v("strong",[_._v("只部署一个应用，只部署一台服务器")]),_._v("，那抗住的流量请求是非常有限的。并且，单体的应用，有单点的风险，如果它挂了，那服务就不可用了。")]),_._v(" "),v("p",[_._v("因此，设计一个高并发系统，我们可以"),v("strong",[_._v("分而治之，横向扩展")]),_._v("。也就是说，采用分布式部署的方式，部署多台服务器，把流量分流开，让每个服务器都承担一部分的并发和流量，提升"),v("strong",[_._v("整体系统的并发能力")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"_2-微服务拆分-系统拆分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-微服务拆分-系统拆分"}},[_._v("#")]),_._v(" 2. 微服务拆分（系统拆分）")]),_._v(" "),v("p",[_._v("要提高系统的吞吐，提高系统的处理并发请求的能力。除了采用"),v("strong",[_._v("分布式部署的方式")]),_._v("外，还可以做"),v("strong",[_._v("微服务拆分")]),_._v("，这样就可以达到分摊请求流量的目的，提高了并发能力。")]),_._v(" "),v("p",[_._v("所谓的"),v("strong",[_._v("微服务拆分")]),_._v("，其实就是把一个单体的应用，按功能单一性，拆分为多个服务模块。"),v("strong",[_._v("比如一个电商系统，拆分为用户系统、订单系统、商品系统等等")]),_._v("。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230402003202650.png",alt:"image-20230402003202650"}})]),_._v(" "),v("h2",{attrs:{id:"_3-分库分表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-分库分表"}},[_._v("#")]),_._v(" 3. 分库分表")]),_._v(" "),v("p",[_._v("当业务量暴增的话，MySQL单机"),v("strong",[_._v("磁盘容量会撑爆")]),_._v("。并且，我们知道数据库连接数是有限的。"),v("strong",[_._v("在高并发的场景下")]),_._v("，大量请求访问数据库，"),v("code",[_._v("MySQL")]),_._v("单机是扛不住的！高并发场景下，会出现"),v("code",[_._v("too many connections")]),_._v("报错。")]),_._v(" "),v("p",[_._v("所以高并发的系统，"),v("strong",[_._v("需要考虑拆分为多个数据库，来抗住高并发的毒打")]),_._v("。而假如你的单表数据量非常大，存储和查询的性能就会遇到瓶颈了，如果你做了很多优化之后还是无法提升效率的时候，就需要考虑做"),v("strong",[_._v("分表")]),_._v("了。一般千万级别数据量，就需要"),v("strong",[_._v("分表")]),_._v("，每个表的数据量少一点，提升SQL查询性能。")]),_._v(" "),v("p",[_._v("当面试官问要求你设计一个高并发系统的时候，一般都要说到"),v("strong",[_._v("分库分表")]),_._v("这个点。")]),_._v(" "),v("h2",{attrs:{id:"_4-池化技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-池化技术"}},[_._v("#")]),_._v(" 4. 池化技术")]),_._v(" "),v("p",[_._v("在高并发的场景下，"),v("strong",[_._v("数据库连接数")]),_._v("可能成为瓶颈，因为连接数是有限的。")]),_._v(" "),v("p",[_._v("我们的请求调用数据库时，都会先获取数据库的连接，然后依靠这个连接来查询数据，搞完收工，最后关闭连接，释放资源。如果我们不用数据库连接池的话，每次执行"),v("code",[_._v("SQL")]),_._v("，都要创建连接和销毁连接，这就会导致每个查询请求都变得更慢了，相应的，系统处理用户请求的能力就降低了。")]),_._v(" "),v("p",[_._v("因此，需要使用池化技术，即"),v("strong",[_._v("数据库连接池、HTTP 连接池、Redis 连接池")]),_._v("等等。使用数据库连接池，可以避免每次查询都新建连接，减少不必要的资源开销，通过复用连接池，"),v("strong",[_._v("提高系统处理高并发请求的能力")]),_._v("。")]),_._v(" "),v("p",[_._v("同理，我们使用线程池，也能"),v("strong",[_._v("让任务并行处理，更高效地完成任务")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"_5-主从分离"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-主从分离"}},[_._v("#")]),_._v(" 5. 主从分离")]),_._v(" "),v("p",[_._v("通常来说，一台单机的MySQL服务器，可以支持"),v("code",[_._v("500")]),_._v("左右的"),v("code",[_._v("TPS")]),_._v("和"),v("code",[_._v("10000")]),_._v("左右的"),v("code",[_._v("QPS")]),_._v("，即单机支撑的"),v("strong",[_._v("请求访问是有限")]),_._v("的。因此你做了分布式部署，部署了多台机器，部署了主数据库、从数据库。")]),_._v(" "),v("p",[_._v("但是，如果双十一搞活动，流量肯定会猛增的。如果所有的查询请求，都走主库的话，主库肯定扛不住，因为查询请求量是非常非常大的。因此一般都要求做"),v("strong",[_._v("主从分离")]),_._v("，然后实时性要求不高的读请求，都去读从库，"),v("strong",[_._v("写的请求或者实时性要求高的请求，才走主库")]),_._v("。这样就很好保护了主库，也提高了系统的吞吐。")]),_._v(" "),v("p",[_._v("当然，如果回答了主从分离，面试官可能扩展开问你"),v("strong",[_._v("主从复制原理，问你主从延迟问题")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"_6-使用缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-使用缓存"}},[_._v("#")]),_._v(" 6. 使用缓存")]),_._v(" "),v("p",[_._v("无论是操作系统，浏览器，还是一些复杂的中间件，你都可以看到缓存的影子。我们使用缓存，主要是提升系统接口的性能，这样高并发场景，你的系统就可以支持更多的用户同时访问。")]),_._v(" "),v("p",[_._v("常用的缓存包括："),v("code",[_._v("Redis")]),_._v("缓存，"),v("code",[_._v("JVM")]),_._v("本地缓存，"),v("code",[_._v("memcached")]),_._v("等等。就拿"),v("code",[_._v("Redis")]),_._v("来说，它单机就能轻轻松松应对几万的并发，你读场景的业务，可以用缓存来抗高并发。")]),_._v(" "),v("p",[_._v("缓存虽然用得爽，但是要"),v("strong",[_._v("注意缓存使用的一些问题")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("缓存与数据库的一致性问题")]),_._v(" "),v("li",[_._v("缓存雪崩")]),_._v(" "),v("li",[_._v("缓存穿透")]),_._v(" "),v("li",[_._v("缓存击穿")])]),_._v(" "),v("h2",{attrs:{id:"_7-cdn-加速静态资源访问"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-cdn-加速静态资源访问"}},[_._v("#")]),_._v(" 7. CDN，加速静态资源访问")]),_._v(" "),v("p",[_._v("商品图片，"),v("code",[_._v("icon")]),_._v("等等静态资源，可以对页面做"),v("strong",[_._v("静态化处理，减少访问服务端的请求")]),_._v("。如果用户分布在全国各地，有的在上海，有的在深圳，地域相差很远，网速也各不相同。为了让用户最快访问到页面，可以使用"),v("code",[_._v("CDN")]),_._v("。"),v("code",[_._v("CDN")]),_._v("可以让用户就近获取所需内容。")]),_._v(" "),v("p",[_._v("什么是CDN？")]),_._v(" "),v("blockquote",[v("p",[_._v("Content Delivery Network/Content Distribution Network,翻译过来就是内容分发网络，它表示将静态资源分发到位于多个地理位置机房的服务器，可以做到数据就近访问，加速了静态资源的访问速度，因此让系统更好处理正常别的动态请求。")])]),_._v(" "),v("h2",{attrs:{id:"_8-消息队列-削锋"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-消息队列-削锋"}},[_._v("#")]),_._v(" 8. 消息队列，削锋")]),_._v(" "),v("p",[_._v("我们搞一些双十一、双十二等运营活动时，需要"),v("strong",[_._v("避免流量暴涨，打垮应用系统的风险")]),_._v("。因此一般会引入消息队列，来应对"),v("strong",[_._v("高并发的场景")]),_._v("。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230402112816067.png",alt:"image-20230402112816067"}})]),_._v(" "),v("p",[_._v("假设你的应用系统每秒最多可以处理"),v("code",[_._v("2k")]),_._v("个请求，每秒却有"),v("code",[_._v("5k")]),_._v("的请求过来，可以引入消息队列，应用系统每秒从消息队列拉"),v("code",[_._v("2k")]),_._v("请求处理得了。")]),_._v(" "),v("p",[_._v("有些伙伴担心这样可能会出现"),v("strong",[_._v("消息积压")]),_._v("的问题：")]),_._v(" "),v("ul",[v("li",[_._v("首先，搞一些运营活动，不会每时每刻都那么多请求过来你的系统（"),v("strong",[_._v("除非有人恶意攻击")]),_._v("），高峰期过去后，积压的请求可以慢慢处理；")]),_._v(" "),v("li",[_._v("其次，如果消息队列长度超过最大数量，可以直接抛弃用户请求或跳转到错误页面；")])]),_._v(" "),v("h2",{attrs:{id:"_9-elasticsearch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-elasticsearch"}},[_._v("#")]),_._v(" 9. ElasticSearch")]),_._v(" "),v("p",[v("code",[_._v("Elasticsearch")]),_._v("，大家都使用得比较多了吧，"),v("strong",[_._v("一般搜索功能都会用到它")]),_._v("。它是一个分布式、高扩展、高实时的搜索与数据分析引擎，简称为"),v("code",[_._v("ES")]),_._v("。")]),_._v(" "),v("p",[_._v("我们在聊高并发，为啥聊到"),v("code",[_._v("ES")]),_._v("呢？ 因为"),v("code",[_._v("ES")]),_._v("可以扩容方便，天然支撑高并发。"),v("strong",[_._v("当数据量大的时候，不用动不动就加机器扩容，分库等等")]),_._v("，可以考虑用"),v("code",[_._v("ES")]),_._v("来支持简单的查询搜索、统计类的操作。")]),_._v(" "),v("h2",{attrs:{id:"_10-降级熔断"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-降级熔断"}},[_._v("#")]),_._v(" 10. 降级熔断")]),_._v(" "),v("p",[v("strong",[_._v("熔断降级")]),_._v("是保护系统的一种手段。当前互联网系统一般都是分布式部署的。而分布式系统中偶尔会出现某个基础服务不可用，最终导致整个系统不可用的情况, 这种现象被称为"),v("strong",[_._v("服务雪崩效应")]),_._v("。")]),_._v(" "),v("p",[_._v("比如分布式调用链路"),v("code",[_._v("A->B->C....")]),_._v("，下图所示：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230402112726066.png",alt:"image-20230402112726066"}})]),_._v(" "),v("blockquote",[v("p",[_._v("如果服务"),v("code",[_._v("C")]),_._v("出现问题，比如是因为慢"),v("code",[_._v("SQL")]),_._v("导致调用缓慢，那将导致"),v("code",[_._v("B")]),_._v("也会延迟，从而"),v("code",[_._v("A")]),_._v("也会延迟。堵住的"),v("code",[_._v("A")]),_._v("请求会消耗占用系统的线程、IO、CPU等资源。当请求"),v("code",[_._v("A")]),_._v("的服务越来越多，占用计算机的资源也越来越多，最终会导致系统瓶颈出现，造成其他的请求同样不可用，最后导致业务系统崩溃。")])]),_._v(" "),v("p",[_._v("为了应对服务雪崩, 常见的做法是"),v("strong",[_._v("熔断和降级")]),_._v("。最简单是加开关控制，当下游系统出问题时，开关打开降级，不再调用下游系统。还可以选用开源组件"),v("code",[_._v("Hystrix")]),_._v("来支持。")]),_._v(" "),v("p",[_._v("你要保证设计的系统能应对"),v("strong",[_._v("高并发场景")]),_._v("，那肯定要考虑"),v("strong",[_._v("熔断降级")]),_._v("逻辑进来。")]),_._v(" "),v("h2",{attrs:{id:"_11-限流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-限流"}},[_._v("#")]),_._v(" 11. 限流")]),_._v(" "),v("p",[_._v("限流也是我们应对高并发的一种方案。我们当然希望，在高并发大流量过来时，系统能全部请求都正常处理。但是有时候没办法，系统的CPU、网络带宽、内存、线程等资源都是有限的。因此，我们要考虑限流。")]),_._v(" "),v("p",[_._v("如果你的系统每秒扛住的请求是一千，"),v("strong",[_._v("如果一秒钟来了十万请求呢")]),_._v("？换个角度就是说，高并发的时候，流量洪峰来了，超过系统的承载能力，怎么办呢？")]),_._v(" "),v("p",[_._v("这时候，我们可以采取限流方案。就是为了保护系统，多余的请求，直接丢弃。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("什么是限流")]),_._v("：在计算机网络中，限流就是控制网络接口发送或接收请求的速率，它可防止DoS攻击和限制Web爬虫。限流，也称流量控制。是指系统在面临高并发，或者大流量请求的情况下，限制新的请求对系统的访问，从而保证系统的稳定性。")])]),_._v(" "),v("p",[_._v("可以使用"),v("code",[_._v("Guava")]),_._v("的"),v("code",[_._v("RateLimiter")]),_._v("单机版限流，也可以使用"),v("code",[_._v("Redis")]),_._v("分布式限流，还可以使用阿里开源组件"),v("code",[_._v("sentinel")]),_._v("限流。")]),_._v(" "),v("h2",{attrs:{id:"_12-异步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-异步"}},[_._v("#")]),_._v(" 12. 异步")]),_._v(" "),v("blockquote",[v("p",[_._v("回忆一下什么是同步，什么是异步呢？以"),v("strong",[_._v("方法调用")]),_._v("为例，它代表"),v("strong",[_._v("调用方要阻塞等待被调用方法中的逻辑执行完成")]),_._v("。这种方式下，当被调用方法响应时间较长时，会造成调用方长久的阻塞，在高并发下会造成整体系统性能下降甚至发生雪崩。异步调用恰恰相反，调用方不需要等待方法逻辑执行完成就可以返回执行其他的逻辑，在被调用方法执行完毕后再通过回调、事件通知等方式将结果反馈给调用方。")])]),_._v(" "),v("p",[_._v("因此，设计一个高并发的系统，"),v("strong",[_._v("需要在恰当的场景使用异步")]),_._v("。如何使用异步呢？后端可以借用消息队列实现。比如在海量秒杀请求过来时，先放到消息队列中，快速相应用户，告诉用户请求正在处理中，这样就可以释放资源来处理更多的请求。秒杀请求处理完后，通知用户秒杀抢购成功或者失败。")]),_._v(" "),v("h2",{attrs:{id:"_13-常规的优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-常规的优化"}},[_._v("#")]),_._v(" 13. 常规的优化")]),_._v(" "),v("p",[_._v("设计一个高并发的系统，需要设计接口的性能足够好，这样系统在相同时间，就可以处理更多的请求。")]),_._v(" "),v("h2",{attrs:{id:"_14-压力测试确定系统瓶颈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-压力测试确定系统瓶颈"}},[_._v("#")]),_._v(" 14. 压力测试确定系统瓶颈")]),_._v(" "),v("p",[_._v("设计高并发系统，离不开最重要的一环，"),v("strong",[_._v("就是压力测试")]),_._v("。就是在系统上线前，需要对系统进行压力测试，测清楚你的系统支撑的最大并发是多少，确定系统的瓶颈点，让自己心里有底，最好预防措施。")]),_._v(" "),v("p",[_._v("压测完要分析整个调用链路，性能可能出现问题是网络层（如带宽）、Nginx层、服务层、还是数据路缓存等中间件等等。")]),_._v(" "),v("p",[v("code",[_._v("loadrunner")]),_._v("是一款不错的压力测试工具，"),v("code",[_._v("jmeter")]),_._v("则是接口性能测试工具，都可以来做下压测。")]),_._v(" "),v("h2",{attrs:{id:"_15-应对突发流量峰值-扩容-切流量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_15-应对突发流量峰值-扩容-切流量"}},[_._v("#")]),_._v(" 15. 应对突发流量峰值：扩容+切流量")]),_._v(" "),v("p",[_._v("如果是突发的流量高峰，除了降级、限流保证系统不跨，我们可以采用这两种方案，保证系统尽可能服务用户：")]),_._v(" "),v("ul",[v("li",[_._v("扩容："),v("strong",[_._v("比如增加从库、提升配置的方式")]),_._v("，提升系统/组件的流量承载能力。比如增加"),v("code",[_._v("MySQL、Redis")]),_._v("从库来处理查询请求。")]),_._v(" "),v("li",[_._v("切流量："),v("strong",[_._v("服务多机房部署")]),_._v("，如果高并发流量来了，把流量从一个机房切换到另一个机房。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);