<template>
  <div class="form">
    <div class="form-control">
      <div class="form__label">Spinning time</div>
      <div class="form__input-container">
        <input
          type="number"
          class="form__input-area"
          :value="spinningTime"
          name="areas"
          min="1"
          @input="$emit(`update:spinningTime`, $event.target.value)"
        />
      </div>
    </div>
    <div class="form-control">
      <div class="form__label">Number of colors</div>
      <label class="radio-label">
        <input
          type="radio"
          value="2"
          name="numberColors"
          checked="numberOfColors===2"
          @change="$emit(`update:numberOfColors`, Number($event.target.value))"
        />
        2
      </label>
      <label class="radio-label">
        <input
          type="radio"
          value="3"
          name="numberColors"
          checked="numberOfColors===3"
          @change="$emit(`update:numberOfColors`, Number($event.target.value))"
        />
        3
      </label>
      <label class="radio-label">
        <input
          type="radio"
          value="4"
          name="numberColors"
          checked="numberOfColors===4"
          @change="$emit(`update:numberOfColors`,Number($event.target.value))"
        />
        4
      </label>
    </div>
    <h3>Font-Colors</h3>
    <Row :spacing="2">
      <Col :small="6" :medium="4" v-for="(color,index) in colorsFontCurrent" v-bind:key="index">
        <div class="form-control">
          <div class="form__label">{{"Color " + (index + 1)}}</div>
          <div class="form__input-container">
            <input
              type="text"
              class="form__input-area"
              :value="color"
              @input="changeFormValue"
              name="colorsFont"
              :data-index="index"
            />
          </div>
        </div>
      </Col>
    </Row>
    <h3>Background-Colors</h3>
    <Row :spacing="2">
      <Col
        :small="6"
        :medium="4"
        v-for="(color,index) in colorsBackgroundCurrent"
        v-bind:key="index"
      >
        <div class="form-control">
          <div class="label">{{"Color " + (index + 1)}}</div>
          <div class="form__input-container">
            <input
              type="text"
              class="form__input-area"
              :value="color"
              @input="changeFormValue"
              name="colorsBackground"
              :data-index="index"
            />
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import Col from "./Col.vue";
import Row from "./Row.vue";

export default {
  name: "Form",
  components: { Col, Row },
  computed: {
    colorsFontCurrent() {
      return this.colorsFont.slice(0, this.numberOfColors);
    },
    colorsBackgroundCurrent() {
      return this.colorsBackground.slice(0, this.numberOfColors);
    },
  },
  methods: {
    changeFormValue(event) {
      let newArray = this[event.target.name];
      newArray[Number(event.target.dataset.index)] = event.target.value;
      this.$emit(`update:${event.target.name}`, newArray);
    },
  },
  props: {
    spinningTime: {
      type: Number,
      required: true,
    },
    numberOfColors: {
      type: Number,
      required: true,
    },
    colorsFont: {
      type: Array,
      required: true,
    },
    colorsBackground: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.form-control {
  display: inline-flex;
  flex-direction: column;
  margin: 8px;
}

.form__label {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 8px;
}

.radio-label {
  display: inline-flex;
  align-items: center;
}
</style>
