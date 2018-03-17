import Vue from 'vue';

new Vue({
    el: '#app1',
    //模板直接使用html语法，覆盖#app1内容
    template: '<p>替换网页的内容</p>'
});

new Vue({
    el: '#app2',
    //模板使用自定义的组件，覆盖#app1内容
    template: '<helloworld></helloworld>',
    components: {
        'helloworld': {
            template: '<p>自定义组件</p>'
        }
    }
});

new Vue({
    el: '#app3',
    //没有template属性，使用#app3的内容
    components: {
        //局部组件，些helloworld不是上面的helloworld
        'helloworld': {
            template: '<p>自定义组件2</p>'
        }
    }
});