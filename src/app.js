import Vue from 'vue'
import Button from './button.vue'
import Icon from './Icon.vue'
import buttonGroup from './buttonGroup.vue'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)

new Vue({
  el: "#app",
  data(){
    return {
      loading1: false,
      loading2: true,
      loading3: false
    }
  }
});

console.log('app:我是App.js')
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies);
// //单元测试
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData:{
//       icon:'setting'
//     }
//   });
//   vm.$mount()
//   // vm.$mount('#test')  //mount:挂载, 将xxx挂载到#test上
//   //理论上vm能看到setting，所以我们要去测试
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.equal('#i-setting')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData:{
//       icon:'setting',
//       loading: true
//     }
//   });
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.equal('#i-loading')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const div = document.createElement("div")
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData:{
//       icon:'setting',
//     }
//   });
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg');
//   let {order} = window.getComputedStyle(svg)
//   console.log({order})  
//   expect(order).to.eq("1")
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const div = document.createElement("div")
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData:{
//       icon:'setting',
//       iconPosition: 'right'
//     }
//   });
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg');
//   let {order} = window.getComputedStyle(svg)
//   console.log({order})  
//   expect(order).to.eq("2")
//   vm.$el.remove()
//   vm.$destroy()
// }
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData:{
//       icon:'setting',
//     }
//   });
//   vm.$mount()
//   let spy = chai.spy(function(){})
//   vm.$on('click',spy) //触发spy
//   //希望这个函数被执行
//   let button = vm.$el;
//   button.click()
//   //期望button.click()的时候，期望我们的间谍（spy间谍的意思）被执行了
//   expect(spy).to.have.been.called();
// }