<template>
    <div>
      <InputBox :data="item" :name="'input1'"/>
      <InputBox :data="item" :name="'input2'"/>
      <InputBox :data="item" :name="'input3'"/>
    </div>
</template>

<script>
import InputBox from '../InputBox/InputBox'

export default {
  name: 'InputsRow',
  components: {
    InputBox
  },
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>
