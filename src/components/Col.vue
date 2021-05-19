<template>
  <div :class="cssClasses" :style="cssVariable">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Col",
  props: {
    small: Number,
    medium: Number,
    big: Number,
  },
  computed: {
    cssClasses() {
      let classes = "col ";
      classes += this.medium ? "colMd " : "";
      classes += this.big ? "colBig " : "";

      return classes;
    },
    cssVariable() {
      let style = "";
      style += this.small ? `--smallWidth:${(this.small / 12) * 100}%;` : "";
      style += this.medium ? `--mediumWidth:${(this.medium / 12) * 100}%;` : "";
      return style;
    },
  },
};
</script>

<style scoped lang="scss">
.col {
  flex-grow: 0;
  margin: 0;
  box-sizing: border-box;

  max-width: var(--smallWidth);
  flex-basis: var(--smallWidth);

  @media only screen and (min-width: 600px) {
    &.colMd {
      flex-grow: 0;
      max-width: var(--mediumWidth);
      flex-basis: var(--mediumWidth);
    }
  }
  @media only screen and (min-width: 900px) {
    &.colBig {
      flex-grow: 0;
      max-width: var(--bigWidth);
      flex-basis: var(--bigWidth);
    }
  }
}
</style>