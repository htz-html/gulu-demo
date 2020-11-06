<template>
  <transition name="slide">
    <div class="sider" v-if="visiable">
      <slot></slot>
      <g-button @click="visiable=false">
        <g-icon name="more"></g-icon>
      </g-button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSider",
  data() {
    return {
      visiable: true,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    right: 5px;
    top: 5px;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,.slide-leave-to{
  width: 0;
}
</style>