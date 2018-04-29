<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12">

        <h3>
          <strong>NYwater</strong>.info
          <small class="text-muted">
            Terms of Use
          </small>
        </h3>

        <hr>

        <p class="lead">
          The data made available by NyWater.info is offered without any explicit or implied promises or guaranteees of correctness or validity.
        </p>

        <p class="lead">
          NYwater.info is in not affiliated with the State of New York in any official capacity.
        </p>

        <p class="lead">
          We currently only maintain data for schools in New York State.
        </p>

        <p class="lead">
          Any discrepancies in the data should be forwarded to the dataset owner at
          <a href="https://health.data.ny.gov/Health/Lead-Testing-in-School-Drinking-Water-Sampling-and/rkyy-fsv9" target='_blank'>health.data.ny.gov</a>.
        </p>

        <p class="lead">
          If you have any requests for additional services for NyWater.info to provide please direct that to our Github repository and we will try to work on it as soon as possible.
        </p>

        <p class="lead">
          Data provided by
          <a href="https://health.data.ny.gov/Health/Lead-Testing-in-School-Drinking-Water-Sampling-and/rkyy-fsv9" target='_blank'>health.data.ny.gov</a>
        </p>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'
export default {
  name: 'main_legal',
  metaInfo: {
    title: 'Terms of Use'
  },
  created () {
    this.hideSplash()
  },
  methods: mapActions({
    hideSplash: 'main/hideSplash'
  })
}
</script>
