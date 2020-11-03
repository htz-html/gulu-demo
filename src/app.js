import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './input.vue'
import Col from './col.vue'
import Row from './row.vue'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)

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

