<template>
  <div class="form">
    <Row :spacing="5">
      <Col :small="12" :medium="6" v-for="(area, index) in areas" v-bind:key="index">
        <div class="form__input-container">
          <input
            class="form__input-area"
            type="text"
            :value="area"
            name="areas"
            @input="changeFormValue"
            :data-index="index"
          />
          <span class="label">weight</span>
          <input
            class="form__input-weight"
            type="number"
            min="1"
            name="weights"
            :data-index="index"
            :value="this.weights[index]"
            @input="changeFormValue"
          />
          <button class="btn form__button--remove" @click="() =>removeArea(index)">X</button>
        </div>
      </Col>
      <Col :small="6">
        <div class="button-container">
          <button @click="addArea" class="btn form__button form__button--add">Add</button>
          <button @click="clearAreas" class="btn form__button form__button--clear">Clear</button>
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
  props: {
    areas: {
      type: Array,

      required: true,
    },
    weights: {
      type: Array,

      required: true,
    },
  },
  methods: {
    changeFormValue(event) {
      let newArray = this[event.target.name];
      let value = event.target.value;
      if (event.target.type === "number") {
        value = Number(event.target.value);
      }
      newArray[Number(event.target.dataset.index)] = value;
      this.$emit(`update:${event.target.name}`, newArray);
    },
    addArea() {
      let newAreas = [...this.areas];
      let newWeigths = [...this.weights];
      newAreas.push("New Option");
      newWeigths.push(1);
      this.$emit(`update:areas`, newAreas);
      this.$emit(`update:weights`, newWeigths);
    },
    removeArea(index) {
      let newAreas = [...this.areas];
      let newWeigths = [...this.weights];
      newAreas.splice(index, 1);
      newWeigths.splice(index, 1);
      this.$emit(`update:areas`, newAreas);
      this.$emit(`update:weights`, newWeigths);
    },
    clearAreas() {
      this.$emit(`update:areas`, []);
      this.$emit(`update:weights`, []);
    },
  },
};
</script>

<style lang="scss">
.form {
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 2px solid black;
}

.form__input-container {
  display: inline-flex;
  border: 2px solid black;
  align-items: center;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;

  &:focus-within {
    outline: 0;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
}

.form__input-area {
  padding: 10px;
  flex-grow: 1;
  outline: 0;
  border: 0;
  width: 100%;
}

.form__input-weight {
  width: 50px;
}

.label {
  font-weight: 500;
  font-size: 16px;
  margin-right: 5px;
}

.button-container {
  & > button {
    margin-right: 10px;
  }
}

.form__button {
  padding: 8px;
  font-size: 1rem;
  min-width: 75px;
  color: white;
}

.form__button--remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  padding: 10px;
  color: black;
}

.form__button--clear {
  background-color: rgb(220, 0, 78);
}

.form__button--add {
  background-color: #1976d2;
}
</style>
