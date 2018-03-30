<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts">
      <div class="page-1 page">
        <p class="part-1">111</p>
      </div>
      <div class="page-2 page">
        <p class="part-2">222</p>
      </div>
      <div class="page-3 page">
        <p class="part-3">333</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'try-fullpage',
  data() {
    return {
      opts: {
        start: 0,
        dir: 'h',
        loop: true,
        duration: 300,
        beforeChange: (prev, next) => {
          console.log('before', prev, next);
        },
        afterChange: (prev, next) => {
          console.log('after', prev, next);
        },
      },
    };
  },
};
</script>

<style lang="scss">
.fullpage-container {
  // width: 100%;
  // height: 450px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .page {
    display: block;
    text-align: center;
    font-size: 26px;
    color: #eee;
  }
  .page-1 {
    padding-top: 100px;
    background: #1bbc9b;
  }
  .page-2 {
    padding-top: 100px;
    background: #000000;
  }
  .page-3 {
    padding-top: 50px;
    background: #aabbcc;
  }
}
</style>
