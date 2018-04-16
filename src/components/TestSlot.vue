<template>
  <div class="hello">
    <h1>我是嘻嘻嘻嘻</h1>
    <slot>只有在没有要分发的内容时才显示</slot>
    <slot any="我是作用域插槽"></slot>
    <header>
      <slot name="header"></slot>
    </header>
    <ul>
      <slot name="item" v-for="item in items" :text="item.text">
      <!-- 备用信息 -->
      嘎嘎嘎啊嘎嘎
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TestSlot',
  props: ['items'],
  // data() {
  //   return {
  //     items: [
  //       {
  //         text: '111',
  //         name: 'yyl',
  //       },
  //       {
  //         text: '222',
  //         name: 'yyl',
  //       },
  //       {
  //         text: '333',
  //         name: 'yyl',
  //       },
  //     ],
  //   };
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
