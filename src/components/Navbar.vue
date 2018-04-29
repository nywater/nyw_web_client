<template>
  <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">

    <b-navbar-brand href="#/">
      <img class='logo' src="@/assets/logo.png">
      <strong>NY</strong>water.info
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <!-- Left Nav -->
      <b-navbar-nav class="mr-auto">
        <b-nav-item href="#/schools">
          <i class="fa fa-fw fa-search"></i>
          Explore
        </b-nav-item>

        <b-nav-item disabled>|</b-nav-item>

        <b-nav-item href="#/info">
          <i class="fa fa-fw fa-university"></i>
          Learn
        </b-nav-item>

      </b-navbar-nav>

      <!-- Right Nav -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#/about">
          <i class="fa fa-fw fa-question-circle"></i>
          About
        </b-nav-item>

        <b-nav-item disabled>|</b-nav-item>

        <b-nav-item href="#/terms">
          <i class="fa fa-fw fa-info-circle"></i>
          Terms of Use
        </b-nav-item>

        <b-nav-item disabled>|</b-nav-item>

        <b-nav-item target="_blank" href="http://nywater.info/docs/">
          <i class="fa fa-fw fa-database"></i>
          API
        </b-nav-item>

        <b-nav-item disabled>|</b-nav-item>

        <b-nav-item target="_blank" href="https://github.com/NyWater">
          <i class="fa fa-fw fa-lg fa-github"></i>
          GitHub
        </b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<!-- // // // //  -->

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="sass">
@import '../sass/vendor'

nav.navbar.navbar-dark.fixed-top
  background: rgba($primary, 0.8) !important
  // background: rgba(#69dbf9, 0.8) !important

  a.navbar-brand
    img.logo
      width: 2rem
      height: 2rem
    letter-spacing: 0.15rem
    strong
      font-weight: 600
</style>
