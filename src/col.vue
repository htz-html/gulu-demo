<template>
    <div class="col" :class="[`col-${span}`, offset && `offset-${offset}`]">
      <slot></slot>
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
  }
};
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  height: 50px;
  background: rgb(69, 134, 255);
  border: 1px solid red;
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