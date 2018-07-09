<template>
  <div class="input-box">
    <input class="ui__input" type="text" :name="name" @input="e => changeInput({id: data.id, name: e.target.name, value: e.target.value })" :value="data[name].value"/>
    <input class="ui__input" type="checkbox" @change="changeTarget({id: data.id, name })" :value="`${name}:${data.id}`" :checked="data[name].target"/>
    <Button
      :click="() => newRow(data[name].value)"
      value="plus"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Button from '../Ui/Button'

export default {
  name: 'InputBox',
  components: {
    Button
  },
  methods: mapActions('listRow', [
    'newRow',
    'changeTarget',
    'changeInput'
  ]),
  props: {
    value: String,
    name: String,
    data: Object
  }
}
</script>

<style scoped>
  .input-box {
    float: left;
    margin: 0;
    margin-right: 5px;
  }
  .ui__input {
    line-height: 25px;
    background: #dddddd;
    color: #35495e;
    border: 0;
    margin: 0;
    outline: none;
    padding-left: 5px;
  }
</style>
