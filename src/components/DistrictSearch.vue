<template>
  <div class="row">
    <div class="col-lg-12">
      <form class="form-inline pb-3">
        <v-select @input="onInput" :options="districts" :value="district" placeholder="Select a NY school district" />
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
  name: 'DistrictSearch',
  props: ['dispatch'],
  components: {
    vSelect
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'district/fetchCollection',
      setDistrict: 'school/setDistrict'
    }),
    ...mapMutations({
      updateDistrict: 'school/district'
    }),
    onInput (district) {
      if (district === '') return
      if (this.dispatch) {
        this.setDistrict(district)
      } else {
        this.updateDistrict(district)
        router.push('/schools')
      }
    }
  },
  computed: mapGetters({
    district: 'school/district',
    districts: 'district/collection',
    fetching: 'district/fetching'
  })
}
</script>

<style lang="sass">
  .v-select
    width: 100%

    .dropdown-toggle
      border-color: #f3f3f3 !important
      background: #f3f3f3 !important

    ul.dropdown-menu
      color: #333333 !important
      background: #f3f3f3 !important
</style>
