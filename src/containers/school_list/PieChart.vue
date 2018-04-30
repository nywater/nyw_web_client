<script>
import { Doughnut } from 'vue-chartjs'
import { mapGetters } from 'vuex'

export default {
  name: 'PieChart',
  extends: Doughnut,
  computed: {
    ...mapGetters({
      model: 'school/model'
    })
  },
  mounted () {
    this.renderChart({
      labels: ['Compliant', 'Non-Compliant'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: ['#69dbf9', '#f87979'],
          data: [
            this.model.stats.pct_compliant,
            this.model.stats.pct_non_compliant
          ]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
</script>

<style lang="sass">
</style>
