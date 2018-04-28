<template>
  <div class="row">

    <div class="col-lg-12" v-if="model && model.beds_code">
      <p class="lead font-weight-bold mb-0">
        {{ model.name }}
        <small class="text-muted">{{ model.district }}</small>
      </p>

      <!-- <a :href="mapUrl" target='_blank' v-b-tooltip.hover.bottom title="Open in Google Maps"> -->
        <!-- {{ address }} -->
      <!-- </a> -->
    </div>

    <div class="col-lg-12">
      <hr>
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
