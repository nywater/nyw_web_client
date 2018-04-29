<template>
  <footer class="footer">
    <div class="container-fluid text-light">
      <div class="row">

        <div class="col-sm-6">
          Built with
          <i class="fa fa-heart text-danger"></i>
          by
          <a href="https://github.com/rcos" class='text-danger' target='_blank'>RCOS</a>
          at
          <a href="https://siena.edu" target='_blank' class='text-success'>Siena College</a>
          <a href="http://hackathon.sienacs.com/saintshack/" target='_blank' class='text-warning'>SaintsHack 2018</a>
        </div>

        <div class="col-sm-6 text-right ">
          Data provided by
          <a href="https://health.data.ny.gov/Health/Lead-Testing-in-School-Drinking-Water-Sampling-and/rkyy-fsv9" class='text-primary' target='_blank'>health.data.ny.gov</a>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="sass">
footer.footer
  z-index: 1000
  position: fixed
  width: 100%
  bottom: 0
  line-height: 3rem
  .container-fluid
    background: rgba(#333333, 0.8)
</style>
