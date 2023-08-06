(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{309:function(a,r,t){"use strict";t.r(r);var s=t(10),e=Object(s.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"spring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[a._v("#")]),a._v(" Spring")]),a._v(" "),r("h2",{attrs:{id:"spring-基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-基础"}},[a._v("#")]),a._v(" Spring 基础")]),a._v(" "),r("h3",{attrs:{id:"什么是-spring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-spring"}},[a._v("#")]),a._v(" 什么是 Spring？")]),a._v(" "),r("p",[a._v("Spring 是一款开源的轻量级 Java 开发框架，旨在提高开发人员的开发效率和系统的维护性。")]),a._v(" "),r("p",[a._v("我们一般说 Spring 框架指的都是 Spring Framework，它是很多模块的集合，使用这些模块可以很方便地协助我们进行开发。比如说 Spring 支持 IoC（Inversion of Control:控制反转） 和 AOP(Aspect-Oriented Programming:面向切面编程)、可以很方便地对数据库进行访问、可以很方便地集成第三方组件（电子邮件，任务，调度，缓存等等）、对单元测试支持比较好、支持 RESTful Java 应用程序的开发。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230314102028579.png",alt:"image-20230314102028579"}})]),a._v(" "),r("p",[a._v("Spring 最核心的思想就是不需要重复造轮子，开箱即用，提高开发的效率。")]),a._v(" "),r("h3",{attrs:{id:"spring包含哪些模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring包含哪些模块"}},[a._v("#")]),a._v(" Spring包含哪些模块？")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230314102610883.png",alt:"image-20230314102610883"}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230314102621742.png",alt:"image-20230314102621742"}})]),a._v(" "),r("p",[a._v("Spring5.x 版本中 Web 模块的 Portlet 组件已经被废弃掉，同时增加了用于异步响应式处理的 WebFlux 组件。")]),a._v(" "),r("p",[a._v("Spring 各个模块的依赖关系如下：")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230314102737972.png",alt:"image-20230314102737972"}})]),a._v(" "),r("h4",{attrs:{id:"core-container"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#core-container"}},[a._v("#")]),a._v(" Core Container")]),a._v(" "),r("h4",{attrs:{id:"aop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[a._v("#")]),a._v(" AOP")]),a._v(" "),r("h4",{attrs:{id:"data-access-integration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-access-integration"}},[a._v("#")]),a._v(" Data Access/Integration")]),a._v(" "),r("h4",{attrs:{id:"spring-web"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-web"}},[a._v("#")]),a._v(" Spring Web")]),a._v(" "),r("h4",{attrs:{id:"messaging"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#messaging"}},[a._v("#")]),a._v(" Messaging")]),a._v(" "),r("h4",{attrs:{id:"spring-test"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-test"}},[a._v("#")]),a._v(" Spring Test")]),a._v(" "),r("h3",{attrs:{id:"spring、spring-boot-和-spring-mvc-三者之间是什么关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring、spring-boot-和-spring-mvc-三者之间是什么关系"}},[a._v("#")]),a._v(" Spring、Spring Boot 和 Spring MVC 三者之间是什么关系？")]),a._v(" "),r("p",[a._v("Spring 包含了多个功能模块，其中最重要的是 Spring-Core（主要提供 IoC 依赖注入功能的支持） 模块， Spring 中的其他模块（比如 Spring MVC）的功能实现基本都需要依赖于该模块。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230314102621742.png",alt:"image-20230314102621742"}})]),a._v(" "),r("p",[a._v("Spring MVC 是 Spring 中的一个很重要的模块，主要赋予 Spring 快速构建 MVC 架构的 Web 程序的能力。MVC 是模型(Model)、视图(View)、控制器(Controller)的简写，其核心思想是通过将业务逻辑、数据、显示分离来组织代码。")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20210809181452421.png",alt:"img"}})]),a._v(" "),r("p",[a._v("使用 Spring 进行开发各种配置过于麻烦比如开启某些 Spring 特性时，需要用 XML 或 Java 进行显式配置。于是，Spring Boot 诞生了！")]),a._v(" "),r("p",[r("strong",[a._v("Spring 旨在简化 J2EE 企业应用程序开发。Spring Boot 旨在简化 Spring 开发（减少配置文件，开箱即用！）。")])]),a._v(" "),r("p",[a._v("Spring Boot 只是简化了配置，如果你需要构建 MVC 架构的 Web 程序，你还是需要使用 Spring MVC 作为 MVC 框架，只是说 Spring Boot 帮你简化了 Spring MVC 的很多配置，真正做到开箱即用。")]),a._v(" "),r("h2",{attrs:{id:"spring-ioc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc"}},[a._v("#")]),a._v(" Spring IoC")]),a._v(" "),r("h3",{attrs:{id:"谈谈你对-spring-ioc-的理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对-spring-ioc-的理解"}},[a._v("#")]),a._v(" 谈谈你对 Spring Ioc 的理解")]),a._v(" "),r("h3",{attrs:{id:"什么是-spring-bean"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-spring-bean"}},[a._v("#")]),a._v(" 什么是 Spring Bean？")]),a._v(" "),r("h3",{attrs:{id:"将一个类声明为-bean-的注解有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#将一个类声明为-bean-的注解有哪些"}},[a._v("#")]),a._v(" 将一个类声明为 Bean 的注解有哪些？")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("@Component")]),a._v(" ：通用的注解，可标注任意类为 "),r("code",[a._v("Spring")]),a._v(" 组件。如果一个 Bean 不知道属于哪个层，可以使用"),r("code",[a._v("@Component")]),a._v(" 注解标注。")]),a._v(" "),r("li",[r("code",[a._v("@Repository")]),a._v(" : 对应持久层即 Dao 层，主要用于数据库相关操作。")]),a._v(" "),r("li",[r("code",[a._v("@Service")]),a._v(" : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。")]),a._v(" "),r("li",[r("code",[a._v("@Controller")]),a._v(" : 对应 Spring MVC 控制层，主要用于接受用户请求并调用 "),r("code",[a._v("Service")]),a._v(" 层返回数据给前端页面。")])]),a._v(" "),r("h3",{attrs:{id:"compoent-和-bean-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compoent-和-bean-有什么区别"}},[a._v("#")]),a._v(" @Compoent 和 @Bean 有什么区别？")]),a._v(" "),r("h3",{attrs:{id:"注入-bean-的注解有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注入-bean-的注解有哪些"}},[a._v("#")]),a._v(" 注入 Bean 的注解有哪些？")]),a._v(" "),r("h3",{attrs:{id:"autowire-和-resource-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#autowire-和-resource-有什么区别"}},[a._v("#")]),a._v(" @Autowire 和 @Resource 有什么区别？")]),a._v(" "),r("h3",{attrs:{id:"bean-的作用域有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bean-的作用域有哪些"}},[a._v("#")]),a._v(" Bean 的作用域有哪些？")]),a._v(" "),r("h3",{attrs:{id:"单例-bean-的线程安全问题了解吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单例-bean-的线程安全问题了解吗"}},[a._v("#")]),a._v(" 单例 Bean 的线程安全问题了解吗？")]),a._v(" "),r("h3",{attrs:{id:"bean-的生命周期了解吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bean-的生命周期了解吗"}},[a._v("#")]),a._v(" Bean 的生命周期了解吗？")]),a._v(" "),r("h2",{attrs:{id:"spring-aop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop"}},[a._v("#")]),a._v(" Spring AOP")]),a._v(" "),r("h3",{attrs:{id:"谈谈对-spring-aop-的理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#谈谈对-spring-aop-的理解"}},[a._v("#")]),a._v(" 谈谈对 Spring AOP 的理解")]),a._v(" "),r("h3",{attrs:{id:"spring-aop-和-aspectj-aop-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-aop-和-aspectj-aop-有什么区别"}},[a._v("#")]),a._v(" Spring AOP 和 AspectJ AOP 有什么区别？")]),a._v(" "),r("h3",{attrs:{id:"aspectj-定义的通知类型有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aspectj-定义的通知类型有哪些"}},[a._v("#")]),a._v(" AspectJ 定义的通知类型有哪些？")]),a._v(" "),r("h3",{attrs:{id:"多个切面的执行顺序应如何控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多个切面的执行顺序应如何控制"}},[a._v("#")]),a._v(" 多个切面的执行顺序应如何控制？")]),a._v(" "),r("h2",{attrs:{id:"spring-mvc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc"}},[a._v("#")]),a._v(" Spring MVC")]),a._v(" "),r("h3",{attrs:{id:"谈谈对-spring-mvc-的理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#谈谈对-spring-mvc-的理解"}},[a._v("#")]),a._v(" 谈谈对 Spring MVC 的理解？")]),a._v(" "),r("h3",{attrs:{id:"spring-mvc-的核心组件有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-的核心组件有哪些"}},[a._v("#")]),a._v(" Spring MVC 的核心组件有哪些？")]),a._v(" "),r("h3",{attrs:{id:"spring-mvc-的工作原理了解吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc-的工作原理了解吗"}},[a._v("#")]),a._v(" Spring MVC 的工作原理了解吗？")]),a._v(" "),r("h3",{attrs:{id:"统一异常处理怎么做"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#统一异常处理怎么做"}},[a._v("#")]),a._v(" 统一异常处理怎么做？")]),a._v(" "),r("h2",{attrs:{id:"spring-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-security"}},[a._v("#")]),a._v(" Spring Security")]),a._v(" "),r("h3",{attrs:{id:"有哪些控制请求访问权限的方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有哪些控制请求访问权限的方法"}},[a._v("#")]),a._v(" 有哪些控制请求访问权限的方法？")]),a._v(" "),r("h3",{attrs:{id:"hasrole-和-hasauthority-有区别吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hasrole-和-hasauthority-有区别吗"}},[a._v("#")]),a._v(" hasRole 和 hasAuthority 有区别吗？")]),a._v(" "),r("h3",{attrs:{id:"如何对密码进行加密"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何对密码进行加密"}},[a._v("#")]),a._v(" 如何对密码进行加密？")]),a._v(" "),r("h3",{attrs:{id:"如何优雅更换系统使用的加密算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何优雅更换系统使用的加密算法"}},[a._v("#")]),a._v(" 如何优雅更换系统使用的加密算法？")])])}),[],!1,null,null,null);r.default=e.exports}}]);