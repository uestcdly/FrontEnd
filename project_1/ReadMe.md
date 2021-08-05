    
    1. demo1.html:第一个VUE代码【过渡，非正式vue】
    
    浏览器端测试：
      1.1 双向绑定
       vm.message
       "hello,dly"
       vm.message="hello,mmm"
       "hello,mmm"
    2. demo2.html: VUE 基本语法
        v-bind: 用来绑定【元素属性】
    3.demo3.html: 
        v-if:判断
    4. demo4.html：
        v-for:循环
    5. demo5.html:
        v-on:绑定【事件】
    6. demo6.html:
        表单展示双向绑定功能
    7. demo7.html:
        Vue 组件
    8. demo8.html:
        Axios异步通信测试
    9. demo9.html:
        计算属性实验
        调用方法时，每次都需要进行计算，既然有计算过程则
        必定产生系统开销，那如果这个结果是不经常变化的呢？
        此时就可以考虑将这个结果缓存起来，采用计算属性可
        以很方便的做到这一点，计算属性的主要特性就是为了
        将不经常变化的计算结果进行缓存，以节约我们的系统开销。
    10. demo10.html:
        内容分发
        在Vue.js中我们使用元素作为承载分发内容的出口，
        或称其为插槽，可以应用在组合组件的场景中；
        