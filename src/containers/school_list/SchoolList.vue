<template>
  <div class="row">
    <div class="col-lg-12">
      <ul class="list-group">
        <SchoolChild :model="model" v-for="model in collection" :key="model._id" v-if="collection[0]" />
        <li class="list-group-item bg-dark border-warning text-warning text-center py-4" v-if="!collection[0]">
          <i class="fa fa-frown-o fa-lg"></i>
          <br>
          No schools found
          <br>
          <a href="#" @click.stop.prevent="clearQuery">Reset search</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import SchoolChild from './SchoolChild'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'school_list',
  components: {
    SchoolChild
  },
  methods: mapActions({
    select: 'school/selectModel',
    clearQuery: 'school/clearQuery'
  }),
  computed: mapGetters({
    collection: 'school/collection'
  })
}
</script>
