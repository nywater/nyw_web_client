<template>
  <div class="row justify-content-center">

    <div class="col-sm-12 col-md-8" v-if="model && model.beds_code">
      <p class="lead font-weight-bold mb-0">
        {{ model.name }}
        <small class="text-muted">{{ model.district }}</small>
      </p>
    </div>
    <div class="col-sm-12 col-md-4 text-right" v-if="model && model.beds_code">
      <span class="badge badge-primary px-1 py-2">{{ model.sector }}</span>
    </div>

    <div class="col-lg-12">
      <hr>
    </div>

    <div class="col-lg-6">

      <span class="badge badge-lg mb-2 badge-light" v-b-tooltip.hover.right title="Sampling Date">
        <i class="fa fa-calendar-o"></i>
        {{ model.sampling_update_date }}
      </span>

      <br>

      <span class="badge badge-lg mb-2 badge-light" v-b-tooltip.hover.right title="Total number of faucets on premises">
        <i class="fa fa-hashtag"></i>
        Total Outlets: {{ model.outlets }}
      </span>

      <br>

      <span class="badge badge-lg mb-2 badge-light" v-b-tooltip.hover.right title="Total number of sampled faucets on premises">
        <i class="fa fa-hashtag"></i>
        Outlets Sampled: {{ model.outlets_sampled_pre_2016 }}
      </span>

      <br>

      <span class="badge badge-lg mb-2 badge-light" v-b-tooltip.hover.right title="Whether or not the building(s) are lead-free">
        <i class="fa fa-tint"></i>
        Lead Free: {{ model.lead_free }}
      </span>

      <br>

      <span class="badge badge-lg mb-2 badge-success" v-b-tooltip.hover.right title="Faucets within CDC reccommended lead concentration">
        <i class="fa fa-warning"></i>
        < 15 PPB: {{ model.outlets_leq_15ppb }}
      </span>

      <br>

      <span class="badge badge-lg mb-2 badge-danger" v-b-tooltip.hover.right title="Faucets exceeding CDC reccommended lead concentration">
        <i class="fa fa-warning"></i>
        > 15 PPB: {{ model.outlets_gt_15ppb }}
      </span>

    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
// import _ from 'lodash'
// import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'school_detail',
  computed: {
    ...mapGetters({
      model: 'school/model'
    }),
    address () {
      let address = this.model.address
      return `${address.street}, ${address.city}, ${address.state} ${address.zipcode}`
    },
    mapUrl () {
      const searchUrl = 'https://maps.google.com/'
      return [searchUrl, '?q=', encodeURIComponent(this.address)].join('')
    }
  }
}
</script>

<style lang="sass">
  span.badge-lg
    font-size: 1rem
    width: 100%
</style>
