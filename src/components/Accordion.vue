<template>
  <button
    :class="[isExpanded ? 'isExpanded' : '','summary']"
    @click="$emit(`update:isExpanded`, !isExpanded)"
  >
    <div class="accordion-title">{{title}}</div>
    <unicon name="angle-up" class="chevron-icon" height="40" width="40"></unicon>
  </button>
  <div :class="[isExpanded ? 'isExpanded' : '','content']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    isExpanded: Boolean,
    title: String,
  },
};
</script>

<style  lang="scss">
.summary {
  display: flex;
  align-items: center;
  padding: 30px 30px;
  cursor: pointer;
  width: 100%;
  color: white;
  position: relative;
  font-size: 20px;
  background: #1569a8;
  margin-bottom: -1px;
  border-bottom: 1px solid #0e4671;
  text-align: left;
  outline: 0;
  border: 0;
}

.content {
  overflow: hidden;
  transition: max-height 0.3s;
  max-height: 0;
}

.isExpanded {
  &.content {
    max-height: 1000px;
  }

  .chevron-icon {
    transform: rotate(180deg);
  }
}

.accordion-title {
  flex-grow: 1;
}

.chevron-icon {
  font-size: 40px;
  transition: transform 200ms;
  transform: rotate(0deg);
}
</style>