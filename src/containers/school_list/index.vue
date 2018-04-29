<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <DistrictSearch :dispatch="true" />
        <Search module="school" placeholder="Filter Schools" />
        <Pagination module="school" />
        <SchoolList v-if="!fetching" />
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12">
        <Loading :loading="fetchingModel">
          <SchoolDetail v-if="!fetchingModel" />
        </Loading>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import Search from '@/components/Search'
import Loading from '@/components/Loading'
import DistrictSearch from '@/components/DistrictSearch'
import Pagination from '@/components/Pagination'
import SchoolList from './SchoolList'
import SchoolDetail from './SchoolDetail'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'school_list',
  metaInfo: {
    title: 'Schools'
  },
  components: {
    Search,
    Loading,
    DistrictSearch,
    Pagination,
    SchoolList,
    SchoolDetail
  },
  created () {
    this.hideSplash()
    if (this.$route.query.district) {
      this.$store.dispatch('school/setDistrict', this.$route.query.district)
    } else {
      this.fetch()
    }
  },
  destroyed () {
    this.$store.commit('school/district', '')
  },
  methods: mapActions({
    fetch: 'school/fetchCollection',
    hideSplash: 'main/hideSplash'
  }),
  computed: mapGetters({
    fetching: 'school/fetching',
    fetchingModel: 'school/fetching_model'
  })
}
</script>
