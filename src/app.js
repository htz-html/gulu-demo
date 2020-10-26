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

