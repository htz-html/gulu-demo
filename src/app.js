import Vue from 'vue'
import Button from './Button.vue'
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

import {expect} from 'chai'
//单元测试
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData:{
      icon:'setting'
    }
  });
  vm.$mount()
  // vm.$mount('#test')  //mount:挂载, 将xxx挂载到#test上
  //理论上vm能看到setting，所以我们要去测试
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData:{
      icon:'setting',
      loading: true
    }
  });
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement("div")
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData:{
      icon:'setting',
    }
  });
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg)
  console.log({order})  
  expect(order).to.eq("1")
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement("div")
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData:{
      icon:'setting',
      iconPosition: 'right'
    }
  });
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg)
  console.log({order})  
  expect(order).to.eq("2")
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData:{
      icon:'setting',
    }
  });
  vm.$mount()
  vm.$on('click',function(){
    expect(1).to.eq(1)
  })
  vm.$el.remove()
  vm.$destroy()
}