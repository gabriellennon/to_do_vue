import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    },
    storeTodo(state, payload) {
      state.todos.push(payload)
    },
  },
  actions: {
    getTodos({ commit }) {
      return axios.get('http://localhost:3000/todos')
      .then(res => {
        commit('storeTodos', res.data)
      })
    },

    addTodo({ commit }, data) {
      return axios.post('http://localhost:3000/todos', data).then(res => {
        commit('storeTodo', res.data)
      })
    }
  },
  modules: {
  }
})
