<template>
    <div class="col" :class="colClass" :style="colStyle">
      <!-- 下面整个div是多余的，为了好看，暂时加上 -->
      <div style="height:40px;background:#dce8f1;border-radius:5px;">
        <slot></slot>
      </div>
    </div>
</template> 
<script>
export default {
  name:"GuluCol",
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    }
  },
  data(){
    return{
      gutter:0
    }
  },
  computed:{
    colStyle(){
      return {
        paddingLeft: this.gutter/2 +'px', 
        paddingRight: this.gutter/2 + 'px'
      }
    },
    colClass(){
      let {span, offset} = this
      return [
        `col-${span}`, 
        offset && `offset-${offset}`
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }
}
</style>