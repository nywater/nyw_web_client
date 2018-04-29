<template>
  <div class="row">
    <div class="col-lg-12">
      <form class="form-inline pb-3">
        <v-select @input="onInput" :options="cities" :value="city" placeholder="Select a NY school district" />
      </form>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import vSelect from 'vue-select'
import router from '@/routers'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'city_search',
  props: ['dispatch'],
  components: {
    vSelect
  },
  created () {
    this.fetchCities()
  },
  methods: {
    ...mapActions({
      fetchCities: 'city/fetchCollection',
      setCity: 'school/setCity'
    }),
    ...mapMutations({
      updateCity: 'school/city'
    }),
    onInput (city) {
      if (city === '') return
      if (this.dispatch) {
        this.setCity(city)
      } else {
        this.updateCity(city)
        router.push('/schools')
      }
    }
  },
  computed: mapGetters({
    city: 'school/city',
    cities: 'city/collection',
    fetching: 'city/fetching'
  })
}
</script>

<style lang="sass">
  .v-select
    width: 100%

    .dropdown-toggle
      border-color: #f3f3f3
      background: #f3f3f3

    ul.dropdown-menu
      color: #333333 !important
</style>
