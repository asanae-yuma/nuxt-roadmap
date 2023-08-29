<template>
  <div>
    <h1>ロードマップ</h1>
    <v-row v-resize="onResize" :style="style">
      <v-col xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="top-card">{{ roadmap.web }}</v-card>
      </v-col>
      <v-col xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="top-card">{{ roadmap.front }}</v-card>
      </v-col>
      <v-col xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="top-card">{{ roadmap.design }}</v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roadmap: {
        web: "WEBエンジニア",
        front: "フロント特化",
        design: "設計特化"
      },
      windowSize: {
        x: 0,
        y: 0
      }
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
    }
  }
}
</script>
