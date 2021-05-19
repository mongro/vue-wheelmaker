<template>
  <div class="row" :style="cssVariable">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    spacing: Number,
  },
  computed: {
    cssVariable() {
      return `--spacing:${this.spacing};`;
    },
  },
};
</script>

<style  lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + var(--spacing) * 2px);
  margin: calc(var(--spacing) * (-1px));

  .col {
    padding: calc(var(--spacing) * 1px);
  }
}
</style>