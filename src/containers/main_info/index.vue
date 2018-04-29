
<template>
  <div class="container h-80">

    <div class="row align-items-center">
      <div class="col-lg-12 mt-4 text-center">

        <h2>How are lead concentrations measured?</h2>

        <hr class="border-light">

        <p>Lead in water is measured in terms of <a href="https://en.wikipedia.org/wiki/Parts-per_notation">parts per billion</a> (ppb). If a test comes back with lead levels higher than 15 ppb, the EPA recommends that homeowners and municipalities take steps to reduce that level, like updating pipes and putting anti-corrosive elements in the water when appropriate.</p>

        Sources: <a href="https://www.cdc.gov/nceh/lead/tips/water.htm" target="_blank">
          CDC.gov
        </a>, <a href="https://www.washingtonpost.com/news/wonk/wp/2016/01/15/this-is-how-toxic-flints-water-really-is/?noredirect=on&utm_term=.730909658835" target="_blank">
          Washington Post
        </a>


        <br>

        <img class='welcome-logo mt-4' src="@/assets/logo.png">

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  name: 'main_about',
  metaInfo: {
    title: 'About'
  },
  created () {
    this.hideSplash()
  },
  methods: mapActions({
    hideSplash: 'main/hideSplash'
  })
}
</script>

<style lang="sass">

  img.welcome-logo
    height: 10rem
    width: 10rem

</style>
