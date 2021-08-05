    
    1. 第一个VUE代码【过渡，非正式vue】: demo1.html
        浏览器端测试：
          1.1 双向绑定
           vm.message
           "hello,dly"
           vm.message="hello,mmm"
           "hello,mmm"
           
    2. v-bind: 用来绑定【元素属性】 VUE 基本语法:   demo2.html
        
    3. v-if  判断: demo3.html 
        
    4. v-for 循环:  demo4.html
    
    5. v-on:绑定【事件】 demo5.html
    
    6. 表单展示双向绑定功能: demo6.html
    
    7. Vue 组件: demo7.html
    
    8. Axios异步通信测试: demo8.html
    
    9. 计算属性实验: demo9.html
        调用方法时，每次都需要进行计算，既然有计算过程则
        必定产生系统开销，那如果这个结果是不经常变化的呢？
        此时就可以考虑将这个结果缓存起来，采用计算属性可
        以很方便的做到这一点，计算属性的主要特性就是为了
        将不经常变化的计算结果进行缓存，以节约我们的系统开销。
    10. 内容分发: demo10.html
        在Vue.js中我们使用元素作为承载分发内容的出口，
        或称其为插槽，可以应用在组合组件的场景中；
        