<template>
  <div class="container">
    <div class="wheel-wrapper">
      <div class="wheel-container" v-bind:style="wheelContainerStyle">
        <Segment v-bind="segment" v-for="segment in segmentList" :key="segment.key" />
      </div>
      <div class="arrow"></div>
    </div>
    <button class="btn btn--spin" @click="spin" :disabled="isSpinning">Spin</button>
  </div>
</template>

<script>
import Segment from "./Segment.vue";

export default {
  name: "HelloWorld",
  components: {
    Segment,
  },
  data() {
    return { isSpinning: false, rotation: 0 };
  },
  methods: {
    spin() {
      const rotationNew =
        this.rotation + this.spinningTime * 720 + Math.random() * 360;
      this.rotation = rotationNew;
      this.isSpinning = true;
      setTimeout(() => {
        this.isSpinning = false;
      }, this.spinningTime * 1000);
    },
  },
  props: {
    areas: {
      type: Array,
      validator: (prop) => prop.every((e) => typeof e === "string"),
    },
    spinningTime: Number,
    numberOfColors: Number,
    colorsBackground: {
      type: Array,
      validator: (prop) => prop.every((e) => typeof e === "string"),
    },
    colorsFont: {
      type: Array,
      validator: (prop) => prop.every((e) => typeof e === "string"),
    },
    weights: {
      type: Array,
      validator: (prop) => prop.every((e) => typeof e === "number"),
    },
  },
  computed: {
    wheelContainerStyle() {
      return {
        transform: `rotate(${this.rotation}deg)`,
        transition: `transform ${this.spinningTime}s cubic-bezier(0.1, 0.7, 0.1, 1)`,
      };
    },
    segmentList() {
      const WEIGHTS_SUM = this.weights.reduce(
        (sum, weight) => sum + Number(weight),
        0
      );
      let offset = 0;
      let segments = [];

      for (let i = 0; i < this.areas.length; i++) {
        segments.push({
          key: i,
          name: this.areas[i],
          offset: (offset * 100) / WEIGHTS_SUM,
          over50: (this.weights[i] * 100) / WEIGHTS_SUM > 50,
          value: (this.weights[i] * 100) / WEIGHTS_SUM,
          color: this.colorsFont[i % this.numberOfColors],
          colorBg: this.colorsBackground[i % this.numberOfColors],
        });

        offset += this.weights[i];
      }

      return segments;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.wheel-wrapper {
  max-width: 400px;
  height: 100%;
  flex-grow: 1;
  position: relative;
  margin-right: 20px;
}

.wheel-container {
  border-radius: 100%;
  overflow: hidden;
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  background-color: black;
  transition: rotate;
  &:nth-child(odd) {
    background-color: green;
  }
}

.arrow {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 20px solid black;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(75%, -50%);
}

.btn--spin {
  padding: 16px;
  font-size: 1.4rem;
  background-color: rgb(255, 204, 102);
  color: black;
}
</style>
