<template>
  <div class="calendar" :class="mode">
    <div class="calendar-container">
      <template v-if="mode==='days'">
        <div class="header">
          <a href="#" class="left" @click="changePeriod(-1)">&lt;</a>
          <a href="#" class="period" @click="nextMode()">
            {{ capitalizeFirstLetter(getMonthName()) }} {{ year }}
          </a>
          <a href="#" class="right" @click="changePeriod(1)">&gt;</a>
        </div>
        <div class="body">
          <div class="week">
            <template v-for="day in daysName">
              <div class="day day-header" :class="getCssWeekend(day)">{{ day.name }}</div>
            </template>
          </div>
          <template v-for="week in generateDates()">
            <div class="week">
              <template v-for="day in week">
                <div class="day" :class="getCss(day)" @click="onDateSelection(day.date)">
                  {{ day.day }}
                </div>
              </template>
            </div>
          </template>
        </div>
      </template>
      <template v-if="mode==='months'">
        <div class="header">
          <!--        <a href="#" class="left" @click="changeMonth(-1)">&lt;</a>-->
          <span></span>
          <a href="#" class="period" @click="nextMode()">
            {{ year }}
          </a>
          <!--        <a href="#" class="right" @click="changeMonth(1)">&gt;</a>-->
          <span></span>
        </div>
        <div class="body">
          <template v-for="quart in monthsName">
            <div class="quart">
              <template v-for="mon in quart">
                <div class="month" @click="onMonthSelection(mon.index)">{{ mon.name }}</div>
              </template>
            </div>
          </template>
        </div>
      </template>
      <template v-if="mode==='years'">
        <div class="header">
          <a href="#" class="left" @click="changePeriod(-9)">&lt;</a>
          <span></span>
          <a href="#" class="right" @click="changePeriod(9)">&gt;</a>
        </div>
        <div class="body">
          <template v-for="quote in yearsNum">
            <div class="quart">
              <template v-for="year in quote">
                <div class="month" @click="onYearSelection(year)">{{ year }}</div>
              </template>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "lxCalendar",
  props: {
    value: {},
    displayMode: {
      type: String,
      validator: function (value) {
        return ['days', 'months', 'years'].indexOf(value) !== -1
      },
      default: 'days'
    }
  },
  data() {
    return ({
      firstDayOfWeek: 1, // 0 - sunday, 1 - monday
      locale: 'default',
      daysName: [],
      monthsName: [],
      // yearsNum: [],
      dateValue: new Date(),
      sMode: '',
    })
  },
  created() {
    this.dateValue = this.value
    for (let i = 0; i < 7; i++) {
      this.daysName.push('')
    }
    for (let i = 1; i <= 8; i++) {
      let date = new Date(this.year, this.month, i)
      let dayOfWeek = date.getDay()
      let day = {
        dayOfWeek,
        name: date.toLocaleDateString(this.locale, {weekday: 'short'})
      }
      this.daysName[dayOfWeek] = day
    }

    this.monthsName = []
    let quart = []
    for (let i = 1; i <= 12; i++) {
      let date = new Date(this.year, i - 1, 1)
      let mon = {index: date.getMonth(), name: date.toLocaleDateString(this.locale, {month: 'short'}),}
      quart.push(mon)
      if (i % 3 === 0) {
        this.monthsName.push(quart)
        quart = []
      }
    }

    if (this.firstDayOfWeek !== 0) {
      let tmp = this.daysName.shift()
      this.daysName.push(tmp)
    }
  },
  methods: {
    getMonthName() {
      return this.dateValue.toLocaleString(this.locale, {month: 'long'});
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    daysInMonth() {
      return new Date(this.year, this.month + 1, 0).getDate()
    },
    changePeriod(val) {
      let d = this.dateValue;
      if (this.mode === 'days')
        d.setMonth(d.getMonth() + val)
      else (this.mode === 'months')
      d.setFullYear(d.getFullYear() + val)
      this.dateValue = new Date(d)
      this.$emit('input', this.dateValue)
    },
    generateDates() {
      const dates = []
      const begda = new Date(this.year, this.month, 1)
      let dayOfWeek = begda.getDay()
      let week = []

      for (let i = (dayOfWeek < this.firstDayOfWeek ? 7 : dayOfWeek); i > this.firstDayOfWeek; i--) {
        let prevMonth = new Date(this.year, this.month, -(i - 1 - this.firstDayOfWeek))

        let day = {
          day: prevMonth.getDate(),
          date: prevMonth,
          dayOfWeek: prevMonth.getDay(),
          currentMonth: false,
        }

        week.push(day)
      }

      for (let i = 1; i <= this.daysInMonth(); i++) {
        let oDate = new Date(this.year, this.month, i)
        dayOfWeek = oDate.getDay()
        if (dayOfWeek === this.firstDayOfWeek) {
          dates.push(week)
          week = []
        }
        let day = {
          day: i,
          date: oDate,
          dayOfWeek,
          currentMonth: true,
        }
        week.push(day)
      }
      if (week.length > 0) {
        const end = 7 - week.length
        for (let i = 1; i <= end; i++) {
          let nextMonth = new Date(this.year, this.month + 1, i)

          let day = {
            day: nextMonth.getDate(),
            date: nextMonth,
            dayOfWeek: nextMonth.getDay(),
            currentMonth: false,
          }

          week.push(day)
        }

        dates.push(week)
      }

      return dates
    },
    getCssWeekend(day) {
      if (day.dayOfWeek === 0 || day.dayOfWeek === 6) {
        return 'weekend'
      }
      return ''
    },
    getCss(day) {
      const css = []

      css.push(this.getCssWeekend(day))

      const today = new Date()
      if (day.date?.getFullYear() === today.getFullYear()
          && day.date?.getMonth() === today.getMonth()
          && day.date?.getDate() === today.getDate()) {
        css.push('today')
      }

      if (!day.currentMonth) {
        css.push('other-month')
      }

      if (day.date?.getFullYear() === this.value.getFullYear()
          && day.date?.getMonth() === this.value.getMonth()
          && day.date?.getDate() === this.value.getDate()) {
        css.push('selected')
      }

      return css.join(' ')
    },
    nextMode() {
      if (this.mode === 'days') {
        this.mode = 'months'
      } else if (this.mode === 'months') {
        this.mode = 'years'
      } else {
        this.mode = 'days'
      }
    },
    prevMode() {
      if (this.mode === 'days') {
        this.mode = 'years'
      } else if (this.mode === 'months') {
        this.mode = 'days'
      } else {
        this.mode = 'months'
      }
    },
    onYearSelection(year) {
      let d = this.dateValue;
      d.setFullYear(year)
      this.dateValue = new Date(d)
      this.$emit('input', this.dateValue)
      this.nextMode()
    },
    onMonthSelection(month) {
      let d = this.dateValue;
      d.setMonth(month)
      this.dateValue = new Date(d)
      this.$emit('input', this.dateValue)
      this.prevMode()
    },
    onDateSelection(date) {
      // console.log('click')
      // console.log(date)
      this.dateValue = new Date(date)
      this.$emit('input', this.dateValue)
    },
  },
  computed: {
    date: {
      get() {
        return this.dateValue ? this.dateValue : new Date()
      },
    },
    year: {
      get() {
        return this.dateValue.getFullYear()
      },
    },
    month: {
      get() {
        return this.dateValue.getMonth()
      },
    },
    mode: {
      get() {
        if (!this.sMode) {
          this.sMode = this.displayMode
        }
        return this.sMode
      },
      set(val) {
        this.sMode = val
      }
    },
    yearsNum: {
      get() {
        let year = this.year
        let years = []
        let quotes = []
        for (let i = year - 4, j = 1; i <= year + 4; i++, j++) {
          quotes.push(i)
          if (j % 3 === 0) {
            years.push(quotes)
            quotes = []
          }
        }
        return years
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>