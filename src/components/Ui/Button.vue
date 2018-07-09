<template>
    <button
      :class="`ui__button ${classComponent}`"
      @click="click"
    >{{value}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: String,
    classComponent: String,
    click: {
      default: e => e,
      type: Function
    }
  }
}
</script>

<style scoped>
  .ui__button {
    background: #41b883;
    border: 0;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    color: #35495e;
    outline: none;
    margin: auto;
  }
</style>
