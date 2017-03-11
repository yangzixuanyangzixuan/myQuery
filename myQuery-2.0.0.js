// TODO 利用自调函数优化全局域命名空间
(function(global){
    /*
        TODO 工厂函数 $()
        TODO * 返回值 - jQuery对象
        TODO * 作用
        TODO   * 使用选择器 - 定位HTML页面元素
        TODO   * 将DOM对象转换成jQuery对象
        TODO   * 创建HTML页面中的元素 - <ul></ul>
     */
    var jQuery = function(selector){
        // TODO selector 为 string 类型

        // TODO 创建jQuery对象
        var _jquery = new JQUERY();

        // TODO 创建HTML页面元素
        if(selector.charAt( 0 ) === "<" &&
            selector.charAt( selector.length - 1 ) === ">" &&
            selector.length >= 3 ){
            // TODO 实现创建HTML页面元素的逻辑代码
        }

        /*
            TODO 封装选择器的用法
            TODO * #id - '#username'
            TODO * .class - '.mini'
         */
        // TODO 判断当前是不是 id选择器
        if(selector.substring(0,1) == '#'){
            var elemId = selector.substring(1);
            // TODO 返回一定DOM对象
            var element = document.getElementById(elemId);
            _jquery.push(element);
        }else if(selector.substring(0,1) == '.'){
            var className = selector.substring(1);
            // TODO 返回可能是DOM对象或数组
            var elements = document.getElementsByClassName(className);

            for(var i=0;i<elements.length;i++){
                _jquery.push(elements[i]);
            }
        }else{
            // TODO 元素选择器
        }
        return _jquery;

    }
    // TODO 创建jQuery对象的构造函数
    function JQUERY(){}
    JQUERY.prototype = new Array();
    // TODO 封装 get(index) 方法
    JQUERY.prototype.get = function(index){
        return this[index];
    }
    // TODO jQuery的链式操作

//对text进行封装
JQUERY.prototype.text=function(){
   //对text值进行获取和设置的判断
    if(text){
        //对text的设置
        // IE兼容性  innerHTML
        if(window.navigator.userAgent.toLocaleLowerCase().indexOf('IE')){

        }else{

        }


    }else{
        //对text的获取
        if(window.navigator.userAgent.toLocaleLowerCase().indexOf('firfox')>=0){//-1 表示不包含
        //对所有的字符串进行遍历
            for (var i = 0; i < this.length; i++) {
                this[i]= this[0].innerText;


            }
            //this 是相当于全局的jquery对象
            return this[0].innerText;

        }else{
            for (var i = 0; i < this.length; i++) {
                this[i]= this[0].textContent;

            }
            return this[0].textContent;

        }

    }



}
//对.html进行封装
    JQUERY.prototype.html=function(){
        if(html){//设置


        }else{//获取

        }
    }

    //对css进行封装
    JUQERY.prototype.css=function(name,value){
        if(value){
            return  this[0].style[name]=value;

        }else{
            // DOM根据css属性名称获取对象的值
          return  this[0].style[name];

        }
    }


    //对css进行封装
    JUQERY.prototype.css=function(object){


        }

    //对each()方法进行封装
    JQUERY.prototype.each=function(fn){
        //来遍历jquery对象即使遍历this对象--设置到回调函数
        for (var i = 0; i < this.length; i++) {
            fn(i,this[0]);


        }
    }
    //对inArray进行封装

    JQUERY.prototype.inArray=function(value){

        for (var i = 0; i < this.length; i++) {
          //遍历的值是否和找到的值相等
            if(this[i]==value){
                return i;

            }


        }
    }


    //封装makeArray()方法--将当前的jquery对象转换为一个数组
    JQUERY.prototype.makeArray=function(object){

        var arr=new Array();

        for (var i = 0; i < this.length; i++) {

            //遍历的值是否和找到的值相等
            //把this[i]对象塞到一个数组中
                arr[i]=this[i];
        }

        return arr;

    }

    //将onclick事件封装成click()方法
    JQUERY.prototype.click=function(fn){
        //进行遍历
        for (var i = 0; i < this.length; i++) {
            //怎样得到DOMElement
            this[0].onclick=fn;

        }
        return this;



    }

    //将ondblclick事件进行封装--的通用函数bind（）
    JQUERY.prototype.bind=function(type,fn){
        //type 是指函数类型，fn--回调函数 this --是指新创建的对象
        //对每一个函数进行遍历
        for (var i = 0; i < this.length; i++) {
     //为每个事件绑定一个监听事件
            this[i].addEventListener(type,fn);
        }
        return this;


    }


    //将局部对象提升到全局作用域--即把相似代码优化
    // 作用--专门处理for问题
    JQUERY.prototype.tool=function(code){
        //code 参数是内容为js代码的string类型
        for (var i = 0; i < this.length; i++) {
            //如何将包含的代码String类型  转换成真正的代码
            //使用eval()--查w3School
            eval(code);
        }
    }

    //for(i in obj)//枚举所遍历的对象

        // TODO 将局部对象提升到全局作用域
    global.$ = global.jQuery = jQuery;




})(window);