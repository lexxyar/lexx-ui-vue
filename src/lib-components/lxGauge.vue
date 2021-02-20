<template>
    <div class="gauge">
      <div class="bar">
        <div class="gauge-bar" :class="getGaugeBarClass()"
             :data-value="`${value}%`" data-max="150"></div>
        <div class="gauge-bar-extra bg-danger"
             :class="getGaugeExtraBarClass()"
             :data-value="value"></div>
      </div>

      <ul class="ruller">
        <li :class="`h-${getRullerValuePerc(maxValue, topLimit)} v-${getRullerValuePerc(maxValue)}`">
          <div>{{ maxValue }}%</div>
        </li>
        <li :class="`h-${getRullerValuePerc(topLimit, normalValue)} v-${getRullerValuePerc(topLimit)}`">
          <div>{{ topLimit }}%</div>
        </li>
        <li :class="`h-${getRullerValuePerc(normalValue, bottomLimit)} v-${getRullerValuePerc(normalValue)}`">
          <div>{{ normalValue }}%</div>
        </li>
        <li :class="`h-${getRullerValuePerc(bottomLimit)} v-${getRullerValuePerc(bottomLimit)}`">
          <div>{{ bottomLimit }}%</div>
        </li>
      </ul>

    </div>
</template>

<script>
import TitleComponent from "../../dev/components/TitleComponent";

export default {
  name: "lxGauge",
  components: {TitleComponent},
  props: {
    value: {type: Number, default: 0},
  },
  data() {
    return ({
      maxValue: 150,
      topLimit: 120,
      normalValue: 100,
      bottomLimit: 80,
    })
  },
  methods: {
    getGaugeBarClass: function () {
      let aCss = []
      let nGreenVal = this.value - this.topLimit
      if (nGreenVal < 0) {
        nGreenVal = this.value
      } else {
        nGreenVal = this.topLimit
      }

      let nGreenPerc = Math.round(nGreenVal * 100 / this.maxValue)

      aCss.push(`h-${nGreenPerc}`)

      let sColor = "bg-success"
      if (this.value < 80) {
        sColor = "bg-danger"
      } else if (this.value >= 80 && this.value < 100) {
        sColor = "bg-warning"
      } else if (this.value >= 100) {
        sColor = "bg-success"
      }
      aCss.push(sColor)

      return aCss.join(" ")
    },

    getGaugeExtraBarClass: function () {
      let aCss = []

      let nExtraSize = this.value - this.topLimit
      if (nExtraSize < 0) {
        nExtraSize = 0
      }
      if (nExtraSize > this.maxValue - this.topLimit) {
        nExtraSize = this.maxValue - this.topLimit
      }
      aCss.push(`s-${nExtraSize}`)

      let nPerc = Math.round(this.value * 100 / this.topLimit) - 100
      aCss.push(`h-${nPerc}`);

      return aCss.join(" ");
    },

    getRullerValuePerc: function (nValue, nSubstruct = 0) {
      let res = Math.round(nValue * 100 / this.maxValue)
      if (nSubstruct > 0) {
        const nSub = this.getRullerValuePerc(nSubstruct)
        res -= nSub
      }
      return res
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>