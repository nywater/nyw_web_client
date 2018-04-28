
<template>
  <div class="container h-80">

    <div class="row align-items-center">
      <div class="col-lg-12 text-center">
        <h2 class="display-2 lead">TODO - add about page</h2>
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
