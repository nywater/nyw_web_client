<template>
  <a :class="className" @click="select(model._id)">
    {{ model.name }}
  </a>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  name: 'school_child',
  props: ['model'],
  methods: mapActions({
    select: 'school/selectModel'
  }),
  computed: {
    className () {
      let css = ['list-group-item', 'list-group-item-action', 'bg-dark', 'text-light']
      if (this.$store.getters['school/selected_model_id'] === this.model._id) {
        css.push('active')
      }
      return css.join(' ')
    }
  }
}
</script>
