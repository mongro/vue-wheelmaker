<template>
  <Container>
    <h1>Create your wheel</h1>
    <Wheel v-bind="wheelProps" />
    <Accordion title="Add options" v-model:isExpanded="isExpanded[0]">
      <Form v-model:areas="wheelProps.areas" v-model:weights="wheelProps.weights" />
    </Accordion>
    <Accordion title="Customize Wheel" v-model:isExpanded="isExpanded[1]">
      <Form2
        v-model:spinningTime="wheelProps.spinningTime"
        v-model:colorsFont="wheelProps.colorsFont"
        v-model:colorsBackground="wheelProps.colorsBackground"
        v-model:numberOfColors="wheelProps.numberOfColors"
      />
    </Accordion>
  </Container>
</template>

<script>
import Wheel from "./components/Wheel.vue";
import Form from "./components/Form.vue";
import Form2 from "./components/Form2.vue";
import Container from "./components/Container.vue";
import Accordion from "./components/Accordion.vue";

export default {
  name: "App",
  components: {
    Wheel,
    Form,
    Form2,
    Container,
    Accordion,
  },
  methods: {
    onChange(event) {
      this.wheelProps[event.target.name] = event.target.value;
    },
  },
  data() {
    return {
      isExpanded: [true, false],
      wheelProps: {
        areas: ["A", "B", "C", "D"],
        colorsBackground: ["green", "red", "blue", "yellow"],
        numberOfColors: 4,
        colorsFont: ["white", "black", "white", "black"],
        numberColors: 4,
        spinningTime: 15,
        weights: [1, 1, 1, 3],
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  cursor: pointer;
  outline: 0;
  border: 0;
  border-radius: 5px;
  font-weight: 500;
  z-index: 10;

  &:hover {
    background-color: rgb(0, 0, 0, 0.2);
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
