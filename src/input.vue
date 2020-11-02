<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled = disabled :readonly="readonly">
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
  export default {
    components:{Icon},
    name:'GuluInput',
    props:{
      value:{
        type:String,
      },
      disabled:{
        type: Boolean,
        default: false
      },
      readonly:{
        type: Boolean,
        default: false
      },
      error:{
        type:String
      }
    }
  }
</script>

<style lang="scss" scoped>
$height:32px;
$border-color:#999;
$border-hover-color:#666;
$border-error-color:rgb(255, 105, 86);
$border-radius:4px;
$font-size:14px;
$box-shadow-color:rgba(0,0,0,0.5);
$red:#f1453d;
.wrapper{
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child){
    margin-right: 0.5em;
  }
  > input{
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding:0 8px;
    &:hover{
      border-color: $border-hover-color;
    }
    &:focus {
      box-shadow: 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled], &[readonly]{
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
  &.error{
    > input{
      border-color: $border-error-color;
    }
  }
  .icon-error {
    fill:$red;
  }
  .errorMessage{
    color: $red;
  }
}
</style>