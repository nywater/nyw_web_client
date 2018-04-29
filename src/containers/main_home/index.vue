<template>
  <div class="container h-100">

    <span class='splash-credit text-light'>
      Photo credit:
      <a href="https://google.com" target="_blank">foo@bar</a>
    </span>

    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-lg-12">

        <div class="row mb-2 pb-2">
          <div class="col-lg-12 text-center">
          </div>
          <div class="col-lg-12 text-center text-light">
            <h1>
              <strong>NyWater.</strong>info
            </h1>

            <gh-btns-star slug="aeksco/blazeplate" show-count></gh-btns-star>

            <p class="lead mb-0">
              <a href="#/schools">Explore</a> and <a href="#/about">understand</a> lead concentrations in New York State public school drinking water
            </p>

          </div>
        </div>

        <div class="row py-3">
          <div class="col-sm-12 v-select-lg">
            <CitySearch />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'
import CitySearch from '@/components/CitySearch'
export default {
  name: 'main_home',
  metaInfo: {
    title: 'Home'
  },
  components: {
    CitySearch
  },
  mounted () {
    this.showSplash()
  },
  methods: mapActions({
    showSplash: 'main/showSplash'
  })
}
</script>

<style lang="sass">
  .v-select-lg
    .row
      .col-lg-12
        .form-inline.pb-3
          .v-select
            .dropdown-toggle
              border-color: #f3f3f3
              background: #f3f3f3
              padding: .5rem 0
              align-items: center
              font-size: 120%

  span.splash-credit
    position: absolute
    left: 0
    top: 0
    margin-top: 4.5rem
    margin-left: 1rem

  .gh-button-container
    float: none !important
</style>
