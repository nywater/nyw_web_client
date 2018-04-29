
<template>
  <div id="app" :class="className">
    <Navbar/>
    <div class="wrapper">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },
  metaInfo: {
    title: 'Loading...', // set a title
    titleTemplate: 'NyWater.info - %s', // title is now "NyWater.info - Loading..."
    htmlAttrs: {
      lang: 'en'
    }
  },
  computed: {
    ...mapGetters({
      showBgImage: 'main/splash'
    }),
    className () {
      if (this.showBgImage) return 'splash'
      return ''
    }
  }
}
</script>

<style lang="sass">
  @import "./sass/vendor.sass"

  html
    height: 100%

  body
    height: 100%

  #app
    height: 100%
    width: 100%
    overflow: hidden

    &.splash
      background-image: url('https://farm9.staticflickr.com/8648/15726596829_e2fb399ebd_k_d.jpg')
      background-repeat: no-repeat
      background-size: cover

    .wrapper
      overflow-y: scroll
      height: 100%
      width: 100%

      .container, .container-fluid
        padding-top: 4.5rem

</style>
