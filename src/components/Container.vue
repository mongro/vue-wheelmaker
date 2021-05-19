<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style scoped lang="scss">
.container {
  margin-left: auto;
  margin-right: auto;

  padding-left: 10px;
  padding-right: 10px;

  @media only screen and (min-width: 900px) {
    max-width: 700px;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 800px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>