import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './input.vue'
import Col from './col.vue'
import Row from './row.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)

new Vue({
  el: "#app",
  data(){
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: '双向绑定'
    }
  },
  methods:{
    inputChange(e){
      console.log(e.target.value)
    }
  }
});

