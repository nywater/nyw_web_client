<template>
  <div class="row">

    <div class="col-sm-12 col-md-6" v-if="model && model.beds_code">
      <p class="lead font-weight-bold mb-0">
        {{ model.name }}
        <small class="text-muted">{{ model.district }}</small>
      </p>
    </div>
    <div class="col-sm-12 col-md-6 text-right" v-if="model && model.beds_code">
      <span class="badge badge-primary px-1 py-2">{{ model.sector }}</span>
      <!-- <a :href="mapUrl" target='_blank' v-b-tooltip.hover.bottom title="Open in Google Maps"> -->
        <!-- {{ address }} -->
      <!-- </a> -->
    </div>

    <div class="col-lg-12">
      <hr>
    </div>

    <div class="col-lg-12">
      <span class="badge badge-lg badge-primary">Lead Free: {{ model.lead_free }}</span>
      <span class="badge badge-lg badge-primary">Total Outlets: {{ model.outlets }}</span>
      <span class="badge badge-lg badge-primary">Outlets Sampled: {{ model.outlets_sampled_pre_2016 }}</span>
      <span class="badge badge-lg badge-primary">Outlets LEQ 15 PPB: {{ model.outlets_leq_15ppb }}</span>
      <span class="badge badge-lg badge-primary">Outlets GT 15 PPB: {{ model.outlets_gt_15ppb }}</span>

      <span class="badge badge-lg badge-primary">
        <i class="fa fa-calendar-o"></i>
        {{ model.sampling_update_date }}
      </span>
    </div>

    <div class="col-lg-12">
      <pre class='bg-dark text-light'>{{ model }}</pre>
      <!-- <ul class="list-group"> -->
        <!-- <InspectionChild :inspection="inspection" v-for="inspection in inspections" :key="inspection.date" /> -->
      <!-- </ul> -->
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
</style>
