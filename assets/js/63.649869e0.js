(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{339:function(v,_,a){"use strict";a.r(_);var t=a(10),s=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"进程与线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[v._v("#")]),v._v(" 进程与线程")]),v._v(" "),_("h3",{attrs:{id:"什么是进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是进程"}},[v._v("#")]),v._v(" 什么是进程？")]),v._v(" "),_("p",[v._v("我们知道，我们编写的代码最终通过编译器解释后会变成二进制的可执行文件，当我们运行这个可执行文件时，它就会被加载到内存中，然后 CPU 就会紧接着去执行程序中的每一条指令。"),_("strong",[v._v("那么，这个正在运行中的程序，我们就叫做进程。")])]),v._v(" "),_("h3",{attrs:{id:"进程与线程的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程的区别"}},[v._v("#")]),v._v(" 进程与线程的区别")]),v._v(" "),_("p",[v._v("从 JVM 角度来看，"),_("strong",[v._v("一个进程内可以有多个线程，多个线程共享进程的堆和方法区（JDK 1.8之后的元空间）资源，但是每个线程拥有自己独立的程序计数器、Java虚拟机栈以及本地方法栈")]),v._v("。")]),v._v(" "),_("p",[v._v("从操作系统层面来看，进程是一个正在运行的程序，而线程是进程中的一部分。")]),v._v(" "),_("p",[v._v("进程是操作系统资源分配的最小单位。进程拥有自己的内存空间、环境变量等资源。进程之间互不干扰、互相独立。进程与进程之间的通信需要IPC来实现。")]),v._v(" "),_("p",[v._v("线程是程序执行的最小单位。一个进程可以包含一个或者多个线程，线程间共享进程的内存空间和系统资源。多个线程间可以并发执行，提高线程的工作效率，但是同时也会带来线程安全的问题。")]),v._v(" "),_("p",[v._v("进程与线程之间的区别和联系：")]),v._v(" "),_("ol",[_("li",[v._v("资源分配：进程拥有自己的内存空间等资源，而线程共享进程中的资源")]),v._v(" "),_("li",[v._v("独立性：进程之间相互独立，互不干扰。")]),v._v(" "),_("li",[v._v("调度：进程间调度的开销比线程大")]),v._v(" "),_("li",[v._v("并发性：多个进程之间相互独立，多个线程可以并发执行")]),v._v(" "),_("li",[v._v("同步：进程间通信需要通过IPC机制，线程间同步可以通过共享内存、信号量等机制实现")])]),v._v(" "),_("h3",{attrs:{id:"进程有哪几种状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程有哪几种状态"}},[v._v("#")]),v._v(" 进程有哪几种状态？")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230413112159401.png",alt:"image-20230413112159401"}})]),v._v(" "),_("h3",{attrs:{id:"并行和并发有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#并行和并发有什么区别"}},[v._v("#")]),v._v(" 并行和并发有什么区别？")]),v._v(" "),_("p",[v._v("并行：把每个任务交给不同的处理器独立完成，在同一个时间点内，任务一定是同时发生的")]),v._v(" "),_("p",[v._v("并发：把任务在不同的时间点交给处理器进行处理，在同一个时间点内，任务并不会同时运行")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230310145241977.png",alt:"image-20230310145241977"}})]),v._v(" "),_("h3",{attrs:{id:"进程的控制结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程的控制结构"}},[v._v("#")]),v._v(" 进程的控制结构")]),v._v(" "),_("p",[v._v("在操作系统中，是通过进程控制块（PCB）来对进程进行控制的，PCB是进程唯一的表示，如果进程消失了，那么PCB也会随之消失。")]),v._v(" "),_("h3",{attrs:{id:"pcb具体包含什么信息呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pcb具体包含什么信息呢"}},[v._v("#")]),v._v(" PCB具体包含什么信息呢？")]),v._v(" "),_("p",[v._v("进程描述信息")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("进程标识符")]),v._v("：表示各个进程，每一个进程都一个唯一的标识符；")]),v._v(" "),_("li",[_("strong",[v._v("用户标识符")]),v._v("：表示进程归属的用户，用户标识主要为共享和保护服务；")])]),v._v(" "),_("p",[v._v("进程控制管理信息")]),v._v(" "),_("ul",[_("li",[v._v("进程当前的状态：如 new、ready、running、waiting 或 blocked 等；")]),v._v(" "),_("li",[v._v("进程优先级：进程抢占 CPU 时的优先级；")])]),v._v(" "),_("p",[v._v("资源分配信息")]),v._v(" "),_("ul",[_("li",[v._v("有关进程内存地址空间或者虚拟地址空间的信息，所打开文件的列表和所使用的 I/O 设备信息；")])]),v._v(" "),_("p",[v._v("CPU信息")]),v._v(" "),_("ul",[_("li",[v._v("CPU 中各个寄存器的值，当进程被切换时，CPU 的状态信息都会被保存在相应的 PCB 中，以便进程重新执行时，能从断点处继续执行。")])]),v._v(" "),_("h3",{attrs:{id:"pcb之间是如何组织的呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pcb之间是如何组织的呢"}},[v._v("#")]),v._v(" PCB之间是如何组织的呢？")]),v._v(" "),_("p",[v._v("通常是使用 "),_("strong",[v._v("链表")]),v._v(" 的方式进行组织，将具有相同状态的进程绑在一起，形成一个进程队列，比如：")]),v._v(" "),_("ul",[_("li",[v._v("将所有处于就绪状态的进程链在一起，称为"),_("strong",[v._v("就绪队列")]),v._v("；")]),v._v(" "),_("li",[v._v("把所有因等待某事件而处于等待状态的进程链在一起就组成各种"),_("strong",[v._v("阻塞队列")]),v._v("；")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230310150714992.png",alt:"image-20230310150714992"}})]),v._v(" "),_("p",[v._v("除了链接的方式，还有索引的方式，它的工作原理就是将同一状态的进程组织在一个索引表中，索引表指向相应的PCB，不同的状态又对应着不同的索引表。")]),v._v(" "),_("p",[v._v("但是我们一般会选择链表，因为可能面临进程创建，销毁等调度导致进程状态发生变化，所以链表能够更加灵活的插入和删除。")]),v._v(" "),_("h3",{attrs:{id:"进程的上下文切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程的上下文切换"}},[v._v("#")]),v._v(" 进程的上下文切换")]),v._v(" "),_("p",[v._v("各个进程是共享CPU的资源的，在不同的时候进程之间需要进行切换，让不同的进程可以在CPU之间执行，那么一个进程切换到另一个进程，称为上下文切换。")]),v._v(" "),_("h4",{attrs:{id:"首先来理解什么是cpu上下文切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首先来理解什么是cpu上下文切换"}},[v._v("#")]),v._v(" 首先来理解什么是CPU上下文切换？")]),v._v(" "),_("p",[v._v("CPU上下文就是CPU寄存器和程序计数器，CPU寄存器就是CPU内部一个容量小，但是速度极快的内存（缓存）（这里有一个简单的例子，就是将CPU寄存器、内存、硬盘分别比喻成口袋、书包、衣柜。。细品）。程序计数器就是用来存储CPU正在执行的指令位置或者即将执行的下一条指令的位置。")]),v._v(" "),_("p",[v._v("所以CPU上下文切换就是将前一个任务的CPU上下文（CPU寄存器以及程序计数器）保存起来，然后加载新的任务的上下文到这些寄存器和程序计数器，然后再跳转到程序计数器所指的新的位置，运行新的任务。")]),v._v(" "),_("h4",{attrs:{id:"那么-什么是进程的上下文切换呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#那么-什么是进程的上下文切换呢"}},[v._v("#")]),v._v(" 那么，什么是进程的上下文切换呢？")]),v._v(" "),_("p",[v._v("进程是内核管理和调度的，所以进程之间的切换只能发生在内核态之间")]),v._v(" "),_("p",[v._v("进程的上下文切换不仅包含了虚拟内存、栈、全局变量等用户空间的资源，还包括了内核堆栈、寄存器等内核空间的资源。")]),v._v(" "),_("h3",{attrs:{id:"什么是线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是线程"}},[v._v("#")]),v._v(" 什么是线程？")]),v._v(" "),_("p",[v._v("线程是进程当中的一条执行流程，同一个进程内中的多个线程可以共享进程的代码块、数据段、打开的文件等资源，但是每个进程各自有一套独立的寄存器和栈，这样可以确保线程的控制流程是相对独立的。")]),v._v(" "),_("p",[v._v("![image-20230310150944256](D:\\Download software\\newTypora\\images\\image-20230310150944256.png)")]),v._v(" "),_("h3",{attrs:{id:"线程的上下文切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程的上下文切换"}},[v._v("#")]),v._v(" 线程的上下文切换")]),v._v(" "),_("p",[v._v("线程是调度的基本单位，进程是操作系统资源分配的基本单位")]),v._v(" "),_("p",[v._v("操作系统的任务调度，实际上调度的对象是线程，而进程只是给进程提供了虚拟内存、全局变量等资源")]),v._v(" "),_("p",[v._v("线程的上下文切换，要看需要切换的线程是否属于同一个进程：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("当两个线程不是属于同一个进程，则切换的过程就跟进程上下文切换一样；")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("当两个线程是属于同一个进程，因为虚拟内存是共享的，所以在切换时，虚拟内存这些资源就保持不动，只需要切换线程的私有数据、寄存器等不共享的数据")])])])]),v._v(" "),_("p",[v._v("所以，线程的上下文切换消耗的资源相对于进程的上下文切换，小很多")]),v._v(" "),_("h3",{attrs:{id:"线程的实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程的实现"}},[v._v("#")]),v._v(" 线程的实现")]),v._v(" "),_("p",[v._v("主要有三种线程的实现：")]),v._v(" "),_("ol",[_("li",[v._v("用户线程：在用户空间实现的线程，不是由内核管理的线程，是由用户态的线程库来完成线程的管理；")]),v._v(" "),_("li",[v._v("内核线程：在内核中实现的线程，是由内核管理的线程；")]),v._v(" "),_("li",[v._v("轻量级线程：在内核中来支持用户线程；")])]),v._v(" "),_("p",[_("strong",[v._v("用户线程的整个线程管理和调度，操作系统是不直接参与的，而是由用户及线程库函数来完成线程的管理，包括线程的创建、终止、同步和调度等。")])]),v._v(" "),_("p",[_("strong",[v._v("内核线程是由操作系统管理的，线程对应的 TCB 自然是放在操作系统里的，这样线程的创建、终止和管理都是由操作系统负责。")])]),v._v(" "),_("p",[_("strong",[v._v("轻量级进程（Light-weight process，LWP）是内核支持的用户线程，一个进程可有一个或多个 LWP，每个 LWP 是跟内核线程一对一映射的，也就是 LWP 都是由一个内核线程支持，而且 LWP 是由内核管理并像普通进程一样被调度")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"进程调度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程调度"}},[v._v("#")]),v._v(" 进程调度")]),v._v(" "),_("p",[v._v("进程都希望自己能够占用 CPU 进行工作，所以着涉及到进程的上下文切换。")]),v._v(" "),_("h3",{attrs:{id:"调度时机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#调度时机"}},[v._v("#")]),v._v(" 调度时机")]),v._v(" "),_("ul",[_("li",[v._v("就绪 》 运行")]),v._v(" "),_("li",[v._v("运行 》 阻塞")]),v._v(" "),_("li",[v._v("运行 》 结束")])]),v._v(" "),_("p",[v._v("上面这些状态的变化，操作系统都是需要考虑是否要让新的进程给 CPU 运行，或者是否让当前的进程让出 CPU 资源给下一个需要运行的进程来执行。")]),v._v(" "),_("p",[v._v("调度算法根据是否抢占，又分为两种：")]),v._v(" "),_("ul",[_("li",[v._v("非抢占式调度算法：进程会运行直到被阻塞或者进程主动退出，才会调用另外一个进程，也就是说时钟中断这个事情对其是不影响的。")]),v._v(" "),_("li",[v._v("抢占式调度算法：选一个进程，然后让该进程只运行某段时间，如果在该时段结束时，该进程仍然在运行时，则会把它挂起，接着调度程序从就绪队列挑选另外一个进程。这种抢占式调度处理，需要在时间间隔的末端发生"),_("strong",[v._v("时钟中断")]),v._v("，以便把 CPU 控制返回给调度程序进行调度，也就是常说的"),_("strong",[v._v("时间片机制")]),v._v("。")])]),v._v(" "),_("h3",{attrs:{id:"什么是进程调度算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是进程调度算法"}},[v._v("#")]),v._v(" 什么是进程调度算法？")]),v._v(" "),_("p",[v._v("进程调度算法也称 CPU 调度算法，因为进程也是 CPU 进行调度的。当 CPU 处于空闲状态时，操作系统就选择内存中的某个 [就绪状态] 的进程，然后将 CPU 对其进行分配。")]),v._v(" "),_("p",[v._v("什么时候会发生 CPU 调度呢？")]),v._v(" "),_("ol",[_("li",[v._v("运行 》 等待")]),v._v(" "),_("li",[v._v("运行 》 就绪")]),v._v(" "),_("li",[v._v("等待 》 就绪")]),v._v(" "),_("li",[v._v("运行 》 终止")])]),v._v(" "),_("p",[v._v("其中，1、4两种情况下的调度称为 非抢占式调度，2、3两种情况称为 抢占式调度。")]),v._v(" "),_("p",[v._v("非抢占式的意思就是，当进程正在运行时，它就会一直运行，直到该进程完成或发生某个事件而被阻塞时，才会把 CPU 让给其他进程；")]),v._v(" "),_("p",[v._v("抢占式调度，顾名思义就是进程正在运行的时，可以被打断，使其把 CPU 让给其他进程。那"),_("strong",[v._v("抢占的原则一般有三种，分别是时间片原则、优先权原则、短作业优先原则")]),v._v("；")]),v._v(" "),_("p",[v._v("调度算法影响的是等待的时间（进程在就绪队列中等待调度的时间总和），而不会影响进程在使用 CPU 的时间和 I/O 的时间。")]),v._v(" "),_("h3",{attrs:{id:"先来先服务算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#先来先服务算法"}},[v._v("#")]),v._v(" 先来先服务算法")]),v._v(" "),_("p",[v._v("先来先服务算法是非抢占式的算法。")]),v._v(" "),_("p",[v._v("顾名思义，先来后到，**每次从就绪队列选择最先进入队列的进程，然后一直运行，直到进程退出或被阻塞，才会继续从队列中选择第一个进程接着运行。**看似是公平的，但是当一个长作业优先运行了，那么后面的短作业等待的时间就会很长，不利于短作业。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230301215424585.png",alt:"image-20230301215424585"}})]),v._v(" "),_("h3",{attrs:{id:"最短作业优先算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最短作业优先算法"}},[v._v("#")]),v._v(" 最短作业优先算法")]),v._v(" "),_("p",[v._v("最短作业优先调度算法，顾名思义就是会优先选择运行时间最短的进程来运行，这有利于系统的吞吐量。")]),v._v(" "),_("p",[v._v("但是很显然，这对长作业是不利的。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230301215608484.png",alt:"image-20230301215608484"}})]),v._v(" "),_("h3",{attrs:{id:"高响应比优先调度算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高响应比优先调度算法"}},[v._v("#")]),v._v(" 高响应比优先调度算法")]),v._v(" "),_("p",[v._v("高相应比优先调度算法主要是权衡了短作业和长作业。每次进行进程调度的时候，会对进程的优先权进行计算，然后将优先权高的进程投入运行。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230301215821303.png",alt:"image-20230301215821303"}})]),v._v(" "),_("h3",{attrs:{id:"时间片轮转算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#时间片轮转算法"}},[v._v("#")]),v._v(" 时间片轮转算法")]),v._v(" "),_("p",[v._v("每个进程被分配一个时间段，称为时间片，即允许该进程在该时间段中运行。")]),v._v(" "),_("ul",[_("li",[v._v("如果时间片用完，进程还在运行的话，那么会把此进程从 CPU 中释放出来，并将 CPU 分配给另外一个进程")]),v._v(" "),_("li",[v._v("如果该进程在时间片用完之前结束运行或者进入阻塞状态，则 CPU 会立即切换状态。")])]),v._v(" "),_("p",[v._v("此时，时间片长短的设定成了一个很重要的问题：")]),v._v(" "),_("ul",[_("li",[v._v("时间片太短会导致过多的进程上下文切换，降低了 CPU 效率；")]),v._v(" "),_("li",[v._v("时间片太长又可能引起对短作业进程的响应时间变长")])]),v._v(" "),_("p",[v._v("通常时间片设为 "),_("code",[v._v("20ms~50ms")]),v._v(" 通常是一个比较合理的折中值。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230301220252029.png",alt:"image-20230301220252029"}})]),v._v(" "),_("h3",{attrs:{id:"最高优先级调度算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最高优先级调度算法"}},[v._v("#")]),v._v(" 最高优先级调度算法")]),v._v(" "),_("p",[v._v("多用户计算机系统希望调度程序能从就绪队列中选择最高优先级的进程进行运行，称为最高优先级调度算法。")]),v._v(" "),_("p",[v._v("进程的优先级又分为，静态优先级和动态优先级")]),v._v(" "),_("ul",[_("li",[v._v("静态优先级：创建进程时候，就已经确定了优先级了，然后整个运行时间优先级都不会变化；")]),v._v(" "),_("li",[v._v("动态优先级：根据进程的动态变化调整优先级，比如进程运行时间增加，则降低其优先级；如果进程等待时间（就绪队列的等待时间）增加，则升高其优先级，也就是"),_("strong",[v._v("随着时间的推移增加等待进程的优先级")])])]),v._v(" "),_("p",[v._v("该算法也有两种处理优先级高的方法，抢占式和非抢占式：")]),v._v(" "),_("ul",[_("li",[v._v("非抢占式：当就绪队列中出现优先级高的进程，运行完当前进程，再选择优先级高的进程。")]),v._v(" "),_("li",[v._v("抢占式：当就绪队列中出现优先级高的进程，当前进程挂起，调度优先级高的进程运行。")])]),v._v(" "),_("p",[v._v("但是仍然会导致低优先级的进程得不到运行。")]),v._v(" "),_("h3",{attrs:{id:"多级反馈队列调度算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多级反馈队列调度算法"}},[v._v("#")]),v._v(" 多级反馈队列调度算法")]),v._v(" "),_("p",[v._v("多级反馈队列调度算法是 时间片轮转算法 和 最高优先级调度算法 的综合发展。")]),v._v(" "),_("p",[v._v("顾名思义：")]),v._v(" "),_("ul",[_("li",[v._v("「多级」表示有多个队列，每个队列优先级从高到低，同时优先级越高时间片越短。")]),v._v(" "),_("li",[v._v("「反馈」表示如果有新的进程加入优先级高的队列时，立刻停止当前正在运行的进程，转而去运行优先级高的队列；")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/BXuan-Yang/blogImage/img/image-20230301220910144.png",alt:"image-20230301220910144"}})]),v._v(" "),_("ul",[_("li",[v._v("设置了多个队列，赋予每个队列不同的优先级，每个队列的优先级从高到低，优先级高的时间片就短。")]),v._v(" "),_("li",[v._v("新的进程会被放到第一级的末尾，按照 先来先服务 的算法排队等待被执行，如果在第一级规定的时间片内该进程还是没有运行完，那么转入第二级的末尾，以此类推，直至该进程执行完成。")]),v._v(" "),_("li",[v._v("当较高的优先级的队列为空的时候，才对低优先级的进程进行执行，如果在进程执行的过程中，有新的进程进入较高的优先级，那么会停止当前运行的进程并将其移到队列的末尾，让高优先级的进程先执行。")])]),v._v(" "),_("p",[v._v("相关链接")]),v._v(" "),_("p",[v._v("小林Coding：https://xiaolincoding.com/os/5_schedule/schedule.html")]),v._v(" "),_("h2",{attrs:{id:"内存页面置换算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存页面置换算法"}},[v._v("#")]),v._v(" 内存页面置换算法")]),v._v(" "),_("p",[v._v("缺页异常（缺页中断）：当 CPU 访问的页面不在物理内存时，便会产生一个缺页终端，请求操作系统将所缺页调入物理内存。它与一般中断的主要区别在于：")]),v._v(" "),_("ul",[_("li",[v._v("缺页中断在指令执行的")])]),v._v(" "),_("h2",{attrs:{id:"cpu-cache的写入问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-cache的写入问题"}},[v._v("#")]),v._v(" CPU Cache的写入问题")]),v._v(" "),_("p",[v._v("CPU Cache通常分为三级缓存，L1 Cache、L2 Cache、L3 Cache，数字越小，离CPU越近，访问的速度也会越快，但是存储的容量相对较小。")]),v._v(" "),_("p",[v._v("多核心的CPU中，每个核心都有自己的1 2 3级Cache，而L3也是所有核心共享的。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5717/CPU-Cache.png",alt:"img"}})]),v._v(" "),_("h3",{attrs:{id:"cpu-cache的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-cache的结构"}},[v._v("#")]),v._v(" CPU Cache的结构")]),v._v(" "),_("p",[v._v("CPU Cache是由很多CPU Line组成的，CPU Line是由标志位（Tag）和数据块（Data）")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5717/image-20221125094058256.png",alt:"image-20221125094058256"}})]),v._v(" "),_("h2",{attrs:{id:"如何保证cache与内存的数据一致性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何保证cache与内存的数据一致性"}},[v._v("#")]),v._v(" 如何保证Cache与内存的数据一致性")]),v._v(" "),_("h3",{attrs:{id:"写直达"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#写直达"}},[v._v("#")]),v._v(" 写直达")]),v._v(" "),_("p",[v._v("保持内存与 Cache 一致性最简单的方式是，"),_("strong",[v._v("把数据同时写入内存和 Cache 中")]),v._v("，这种方法称为"),_("strong",[v._v("写直达")])]),v._v(" "),_("h3",{attrs:{id:"写回"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#写回"}},[v._v("#")]),v._v(" 写回")]),v._v(" "),_("p",[v._v("在写回机制中，"),_("strong",[v._v("当发生写操作时，新的数据仅仅被写入 Cache Block 里，只有当修改过的 Cache Block「被替换」时才需要写到内存中")]),v._v("，减少了数据写回内存的频率，这样便可以提高系统的性能。")]),v._v(" "),_("h2",{attrs:{id:"缓存一致性的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存一致性的问题"}},[v._v("#")]),v._v(" 缓存一致性的问题")]),v._v(" "),_("p",[v._v("要解决缓存一致性的问题，首先需要做到以下两点：")]),v._v(" "),_("p",[v._v("1、写传播")]),v._v(" "),_("p",[v._v("1）写传播的原则就是当某个 CPU 核心更新了 Cache 中的数据，要把该事件广播通知到其他核心。最常见实现的方式是"),_("strong",[v._v("总线嗅探（*Bus Snooping*）")])]),v._v(" "),_("p",[v._v("2、事务的串行化")]),v._v(" "),_("p",[v._v("MESI协议")]),v._v(" "),_("ul",[_("li",[_("em",[v._v("Modified")]),v._v("，已修改")]),v._v(" "),_("li",[_("em",[v._v("Exclusive")]),v._v("，独占")]),v._v(" "),_("li",[_("em",[v._v("Shared")]),v._v("，共享")]),v._v(" "),_("li",[_("em",[v._v("Invalidated")]),v._v("，已失效")])]),v._v(" "),_("p",[v._v("MESI 协议，是已修改、独占、共享、已失效这四个状态的英文缩写的组合。整个 MSI 状态的变更，则是根据来自本地 CPU 核心的请求，或者来自其他 CPU 核心通过总线传输过来的请求，从而构成一个流动的状态机。另外，对于在「已修改」或者「独占」状态的 Cache Line，修改更新其数据不需要发送广播给其他 CPU 核心")])])}),[],!1,null,null,null);_.default=s.exports}}]);