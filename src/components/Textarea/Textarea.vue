<template>
  <textarea class="ui__textarea" v-model="string"></textarea>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Textarea',
  computed: mapState({
    string: state => state.listRow.string
  })
}
</script>

<style scoped>
.ui__textarea {
  width: 100%;
  height: 200px;
}
</style>
