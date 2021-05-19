<template>
  <div
    :class="['wheel__segment', over50 ? 'wheel__segment--over50' : '']"
    v-bind:style="containerStyle"
  >
    <div class="wheel__segment-inner" v-bind:style="innerStyle"></div>
  </div>
  <div class="wheel__label" v-bind:style="labelStyle">{{name}}</div>
</template>

<script>
export default {
  name: "segment",
  props: {
    color: String,
    colorBg: String,
    offset: Number,
    value: Number,
    over50: Boolean,
    name: String,
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate(100%, 0) rotate(${(this.offset / 100) * 360}deg)`,
        "--bgColor": this.colorBg,
      };
    },
    innerStyle() {
      return {
        transform: `rotate(-180deg) rotate(${(this.value / 100) * 360}deg)`,
        backgroundColor: this.colorBg,
      };
    },
    labelStyle() {
      return {
        transform: `translate(20px, -50%) rotate(${
          ((this.offset + this.value / 2) / 100) * 360 - 90
        }deg) `,
        color: this.color,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wheel__segment {
  padding-bottom: 100%;
  width: 50%;
  position: absolute;
  transform-origin: 0 50%;
  overflow: hidden;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    background-color: var(--bgColor);
  }
}
.wheel__segment--over50 {
  overflow: visible;

  &:after {
    opacity: 1;
  }
}

.wheel__segment-inner {
  content: "rerer";
  padding-bottom: 200%;
  width: 100%;
  transform-origin: 0 50%;
  position: absolute;
}

.wheel__label {
  position: absolute;
  top: 50%;
  width: 50%;
  text-align: center;
  left: 50%;
  transform-origin: -20px 50%;
}
</style>
