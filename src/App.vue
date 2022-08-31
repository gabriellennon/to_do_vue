<template>
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
          <TodoSpinner v-if="loading"/>

          <template v-else>
            <TodoFormAdd />

            <TodoItems />

            <TodoEmpty />
          </template>
        </div>
    </div>
</template>

<script>
import TodoSpinner from '@/components/TodoSpinner.vue';
import TodoFormAdd from '@/components/TodoFormAdd.vue';
import TodoItems from '@/components/TodoItems.vue';
import TodoEmpty from '@/components/TodoEmpty.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoItems,
    TodoEmpty
  },
  data() {
    return {
      // opcao 1
      // todos: [],
      loading: false
    }
  },
  created() {
    this.loading = true;
    axios.get('http://localhost:3000/todos')
      .then(res => {
        this.$store.commit('storeTodos', res.data)
        // opcao 1
        // this.todos = res.data
      })
      .finally(() => {
        this.loading = false;
      })
  }
}
</script>

<style>

</style>
