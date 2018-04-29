
<template>
  <div class="container h-80">

    <div class="row align-items-center">
      <div class="col-lg-12 text-center">

        <br>

        <img class='welcome-logo mb-4' src="@/assets/logo.png">

        <br>

        <a class="btn btn-lg btn-outline-primary" href="https://github.com/nywater/nywater.info" target="_blank">
          <i class="fa fa-github mr-2"></i>
          Source Code on GitHub
        </a>

        <br>
        <br>

        <p class="lead mt-2">
          Built with
          <i class="fa fa-heart text-danger"></i>
          by
          <a href="https://github.com/rcos" class='text-danger' target='_blank'>RCOS</a>
          at
          <a href="https://siena.edu" target='_blank' class='text-success'>Siena College</a>
          <a href="http://hackathon.sienacs.com/saintshack/" target='_blank' class='text-warning'>SaintsHack 2018</a>
        </p>

        <!-- <p class="lead"> -->
          <!-- Team -->
        <!-- </p> -->

        <br>

        <div class="row justify-content-center">
          <div class="col-lg-4">
            Alexander Schwartzberg
            <br>
            <a href="https://github.com/aeksco" target='_blank'>@aeksco</a>
          </div>
          <div class="col-lg-4">
            Francois Rice
            <br>
            <a href="https://github.com/francoisrice" target='_blank'>@francoisrice</a>
          </div>
        </div>

        <p class="lead mt-4">
          Data provided by
          <a href="https://health.data.ny.gov/Health/Lead-Testing-in-School-Drinking-Water-Sampling-and/rkyy-fsv9" class='text-primary' target='_blank'>health.data.ny.gov</a>
        </p>



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
