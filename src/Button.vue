<template>
  <button class="g-button fank2" :class="{[`icon-${iconPosition}`]:true}"
  @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading" style="fill:#888"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon'
export default {
  // props: ["icon", "iconPosition"], //left,right
  //props的第二种写法
  name: 'GuluButton',
  components:{
    'g-icon' : Icon
  },
  props:{
    icon:{},
    loading:{
      type:Boolean,
      default:false
    },
    iconPosition:{
      type:String,
      default:'left',
      // 属性检查器validator
      validator(value){
        return !(value !== 'left' && value !== 'right')
      }
    }
  }
};
</script>
<style lang="scss">
@keyframes spin {
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  vertical-align: middle;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
    > .content {
      order: 1;
    }
  }
  .loading{
    animation: spin 1s infinite linear;
    color: #888;
  }
}
</style>