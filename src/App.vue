<template>
  <div class="app">
    <img src="./assets/logo.png">
    <h1 class="app__title">sparql builder</h1>
    <hr />
    <ListRow/>
    <Textarea/>
    <Button
      class="app__btn-builder"
      :click="build"
      value="build"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import 'font-awesome/css/font-awesome.min.css'

import ListRow from './components/ListRow/ListRow'
import Textarea from './components/Textarea/Textarea'
import Button from './components/Ui/Button'

export default {
  name: 'App',
  components: {
    ListRow,
    Textarea,
    Button
  },
  methods: mapActions('listRow', [
    'build'
  ])
}
</script>

<style>
  .app {
    width: 900px;
    margin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .app__title {
    text-transform: uppercase;
    margin: 0;
  }
  .app__btn-builder {
    float: right;
    margin-top: 10px;
  }
</style>
