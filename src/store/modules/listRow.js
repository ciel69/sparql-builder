const state = {
  string: '',
  list: [
    {
      id: 1,
      input1: {
        value: '125',
        target: true
      },
      input2: {
        value: '',
        target: false
      },
      input3: {
        value: '',
        target: false
      }
    }
  ]
}

const actions = {
  changeInput ({ commit }, data) {
    commit('changeInput', data)
  },
  changeTarget ({ commit }, data) {
    commit('changeTarget', data)
  },
  newRow ({ commit }, value = '') {
    commit('newRow', value)
  },
  delRow ({ commit }, id) {
    commit('delRow', id)
  },
  build ({ commit }) {
    commit('build')
  }
}

const mutations = {
  changeInput (state, data) {
    state.list = state.list.map(value => {
      if (value.id === data.id) {
        value[data.name].value = data.value
      }
      return value
    })
  },
  changeTarget (state, data) {
    state.list = state.list.map(value => {
      if (value.id === data.id) {
        value[data.name].target = !value[data.name].target
      }
      return value
    })
  },
  newRow (state, value) {
    state.list.push({
      id: Date.now(),
      input1: {
        value: value,
        target: false
      },
      input2: {
        value: '',
        target: false
      },
      input3: {
        value: '',
        target: false
      }
    })
  },
  delRow (state, id) {
    state.list = state.list.filter(data => data.id !== id)
  },
  build (state) {
    const where = state.list.map(item => `${item.input1.value} ${item.input2.value} ${item.input3.value}`.trim()).filter(item => item.length > 0)
    const select = state.list.map(item => `${item.input1.target ? item.input1.value : ''} ${item.input2.target ? item.input2.value : ''} ${item.input3.target ? item.input3.value : ''}`.trim()).join(' ')
    state.string = `SELECT ${select || '*'} WHERE {
${where.map(item => `  ${item}`).join(',\n')}
}`
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
