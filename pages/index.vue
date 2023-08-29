<template>
  <div>
    <cursor-fx color-hover="f00"></cursor-fx>
    <swiper-logo />
    <v-row>
      <v-col cols="12">
        <h1 class="top-title">WEBエンジニアのロードマップ</h1>
      </v-col>
    </v-row>
    <br>
    <roadmap @getIndex="changeArea" />
    <detail-area :activeIndex="activeIndex" :isActives="isActives" />
    <!-- <v-row v-resize="onResize" :style="style">
      <v-col xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="top-card">{{ roadmap.web }}</v-card>
      </v-col>
      <v-col xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="top-card">{{ roadmap.front }}</v-card>
      </v-col>
      <v-col xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="top-card">{{ roadmap.design }}</v-card>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import SwiperLogo from '../components/molecules/SwiperLogo.vue';
import Roadmap from '../components/molecules/Roadmap.vue';
import DetailArea from '../components/organisms/DetailArea.vue';

export default {
  components: {
    CursorFx,
    SwiperLogo,
    Roadmap,
    DetailArea
  },
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0
      },
      activeIndex: 0,
      isActives: [true, false, false, false, false]
    }
  },
  mounted() {
    this.onResize()
  },
  computed: {
    style() {
      const heightSize = this.windowSize.y * 0.8; 
      return `height: ${heightSize}px;`
    }
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      console.log(window.innerWidth)
    },
    changeArea(index) {
      if (this.activeIndex === index) return;
      this.activeIndex = index;
      this.isActives = this.isActives.map(isActive => false);
      setTimeout(() => {
        this.isActives[index] = true;
        this.isActives.splice();
      }, 900);
    }
  }
}
</script>
