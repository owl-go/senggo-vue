<template>
  <div>
    <div id="bottom_layer" class="s-bottom-layer s-isindex-wrap">
      <div class="s-bottom-layer-content">
        <p class="lh">
          <a class="text-color" href="https://beian.miit.gov.cn" target="_blank"
            >粤ICP备2021093122号</a
          >
        </p>
        <p class="lh">
          <span class="text-color">©2021&nbsp;senggo.com&nbsp;</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
#bottom_layer {
  width: 100%;
  position: fixed;
  z-index: 302;
  bottom: 0;
  left: 0;
  height: 39px;
  padding-top: 1px;
  overflow: hidden;
  zoom: 1;
  margin: 0;
  line-height: 39px;
  background: #fff;
}
#bottom_layer .lh {
  display: inline;
  margin-right: 20px;
}
#bottom_layer .s-bottom-layer-content {
  text-align: center;
}

#bottom_layer .text-color {
  color: #bbb;
}
</style>