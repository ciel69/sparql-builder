<template>
  <div class="list-box">
    <div class="list-box__row" :key="item.id" v-for="item in listRow">
      <InputsRow :item="item" />

      <Button
        :click="() => delRow(item.id)"
        value="delete"
      />
    </div>
    <Button
      class="list-box__new"
      :click="() => newRow()"
      value="new"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InputsRow from '../InputsRow/InputsRow'
import Button from '../Ui/Button'

export default {
  name: 'ListRow',
  components: {
    InputsRow,
    Button
  },
  computed: mapState({
    listRow: state => state.listRow.list
  }),
  methods: mapActions('listRow', [
    'newRow',
    'delRow'
  ])
}
</script>

<style scoped>
  .list-box {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .list-box__row{
    float: left;
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
  }
  .list-box__new.ui__button {
    float: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
