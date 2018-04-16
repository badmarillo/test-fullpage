<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <test-slot :items="items">
      <p slot-scope="{ any }">{{ any }}</p>
      <p slot="header">我是具名插槽</p>
      <li slot="item" slot-scope="props">{{props.text}}</li>
    </test-slot>
    <HelloWorld @hello-click="changeMsg" :msg="newHello"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TestSlot from '@/components/TestSlot.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      newHello: 'hi guy!',
      items: [
        {
          text: '111',
          name: 'yyl',
        },
        {
          text: '222',
          name: 'yyl',
        },
        {
          text: '333',
          name: 'yyl',
        },
      ],
    };
  },
  methods: {
    changeMsg() {
      this.newHello = 'xxx';
    },
  },
  components: {
    TestSlot,
    HelloWorld,
  },
};
</script>
