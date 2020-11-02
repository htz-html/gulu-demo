import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './input.vue'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
  el: "#app",
  data(){
    return {
      loading1: false,
      loading2: true,
      loading3: false
    }
  },
  methods:{
    inputChange(e){
      console.log(e.target.value)
    }
  }
});

