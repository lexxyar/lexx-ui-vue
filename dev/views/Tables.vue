<template>
  <div>
    <lx-table :fields="fields" :items="items" @changeSort="changeSort"
              :sort-by="sortBy" :sort-desc="sortDesc">
      <template v-slot:name1="{ field, item }">
        *
<!--        <fa-icon v-if="item.sex === 'F'" icon="venus"/>-->
<!--        <fa-icon v-else-if="item.sex === 'M'" icon="mars"/>-->
<!--        <fa-icon v-else icon="genderless"/>-->
        <a :href="'#mailto:'+item.email">
          {{ getItemValue(field, item) }}
        </a>
      </template>
    </lx-table>
  </div>
</template>

<script>
import {lxTable} from '@/entry'
export default {
  name: "Tables",
  components: {lxTable},
  data() {
    return ({
      sortBy: 'name1',
      sortDesc: false,
      fields: [
        {
          key: 'name1',
          label: 'ФИО',
          sortable: true,
          formatter: (item) => this.fullName(item),
          filterable: true,
          filter: '',
          fnFilter: this.makeFilter
        },
        {key: 'phone', label: 'Телефон'},
        {
          key: 'company',
          label: 'Компания',
          sortable: true,
          fnSort: this.makeSort,
          formatter: (item) => item.company?.name
        },
        {
          key: 'jobtitle',
          label: 'Должность',
          sortable: true,
          fnSort: this.makeSort,
          formatter: (item) => item.jobtitle?.name
        }
      ],
      items: [
        {
          "id": 19,
          "email": "danila.drozdova@example.net",
          "email_verified_at": "2020-11-25T20:31:58.000000Z",
          "name1": "\u0410\u043d\u0434\u0440\u0435\u0435\u0432",
          "name2": "\u042e\u043b\u0438\u0430\u043d",
          "name3": "\u041c\u0430\u043a\u0441\u0438\u043c\u043e\u0432\u0438\u0447",
          "company_id": 3,
          "jobtitle_id": 7,
          "phone": "(495) 993-5360",
          "sex": "M",
          "isboss": 0,
          "created_at": "2020-11-25T20:31:58.000000Z",
          "updated_at": "2020-11-25T20:31:58.000000Z",
          "company": {
            "id": 3,
            "name": "\u041f\u0410\u041e \u0412\u0435\u043a\u0442\u043e\u0440",
            "phone": "(495) 584-9292",
            "address": "288155, \u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u0433\u043e\u0440\u043e\u0434 \u041c\u043e\u0441\u043a\u0432\u0430, \u0448\u043e\u0441\u0441\u0435 \u0421\u0442\u0430\u043b\u0438\u043d\u0430, 82",
            "site": "http:\/\/filippova.com\/voluptas-aperiam-doloribus-doloribus-voluptas-laborum-ut-exercitationem.html",
            "created_at": "2020-11-25T20:31:56.000000Z",
            "updated_at": "2020-11-25T20:31:56.000000Z"
          },
          "jobtitle": {
            "id": 7,
            "name": "\u041a\u0440\u0443\u043f\u044c\u0435",
            "company_id": 1,
            "created_at": "2020-11-25T20:31:56.000000Z",
            "updated_at": "2020-11-25T20:31:56.000000Z"
          }
        },
        {
          "id": 3,
          "email": "ysarova@example.net",
          "email_verified_at": "2020-11-25T20:31:57.000000Z",
          "name1": "\u0410\u043d\u0438\u0441\u0438\u043c\u043e\u0432",
          "name2": "\u0412\u0438\u043b\u044c",
          "name3": "\u0420\u043e\u043c\u0430\u043d\u043e\u0432\u0438\u0447",
          "company_id": 3,
          "jobtitle_id": 8,
          "phone": "8-800-026-6788",
          "sex": "M",
          "isboss": 0,
          "created_at": "2020-11-25T20:31:58.000000Z",
          "updated_at": "2020-11-25T20:31:58.000000Z",
          "company": {
            "id": 3,
            "name": "\u041f\u0410\u041e \u0412\u0435\u043a\u0442\u043e\u0440",
            "phone": "(495) 584-9292",
            "address": "288155, \u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u0433\u043e\u0440\u043e\u0434 \u041c\u043e\u0441\u043a\u0432\u0430, \u0448\u043e\u0441\u0441\u0435 \u0421\u0442\u0430\u043b\u0438\u043d\u0430, 82",
            "site": "http:\/\/filippova.com\/voluptas-aperiam-doloribus-doloribus-voluptas-laborum-ut-exercitationem.html",
            "created_at": "2020-11-25T20:31:56.000000Z",
            "updated_at": "2020-11-25T20:31:56.000000Z"
          },
          "jobtitle": {
            "id": 8,
            "name": "\u041f\u0438\u0430\u043d\u0438\u0441\u0442",
            "company_id": 2,
            "created_at": "2020-11-25T20:31:56.000000Z",
            "updated_at": "2020-11-25T20:31:56.000000Z"
          }
        },
        {
          "id": 7,
          "email": "danilov.aleksandr@example.org",
          "email_verified_at": "2020-11-25T20:31:57.000000Z",
          "name1": "\u0411\u0435\u043b\u043e\u0432\u0430",
          "name2": "\u041a\u0441\u0435\u043d\u0438\u044f",
          "name3": "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u043d\u0430",
          "company_id": 1,
          "jobtitle_id": 10,
          "phone": "(812) 639-68-82",
          "sex": "F",
          "isboss": 0,
          "created_at": "2020-11-25T20:31:58.000000Z",
          "updated_at": "2020-11-25T20:31:58.000000Z",
          "company": {
            "id": 1,
            "name": "\u041e\u0410\u041e \u0411\u0443\u0445",
            "phone": "(495) 526-1582",
            "address": "840694, \u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u0433\u043e\u0440\u043e\u0434 \u041f\u0443\u0448\u043a\u0438\u043d\u043e, \u043f\u0440\u043e\u0435\u0437\u0434 1905 \u0433\u043e\u0434\u0430, 11",
            "site": "http:\/\/www.birykov.net\/ipsum-delectus-dolore-ea-dolores-omnis-eos",
            "created_at": "2020-11-25T20:31:56.000000Z",
            "updated_at": "2020-11-25T20:31:56.000000Z"
          },
          "jobtitle": {
            "id": 10,
            "name": "\u0413\u0435\u0439\u043c\u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440",
            "company_id": 1,
            "created_at": "2020-11-25T20:31:56.000000Z",
            "updated_at": "2020-11-25T20:31:56.000000Z"
          }
        },
        {
          "id": 17,
          "email": "grigorii84@example.net",
          "email_verified_at": "2020-11-25T20:31:58.000000Z",
          "name1": "\u0411\u0438\u0440\u044e\u043a\u043e\u0432",
          "name2": "\u0410\u0440\u0442\u0451\u043c",
          "name3": "\u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447",
          "company_id": 3,
          "jobtitle_id": 10,
          "phone": "(495) 252-5045",
          "sex": "M",
          "isboss": 0,
          "created_at": "2020-11-25T20:31:58.000000Z",
          "updated_at": "2020-11-25T20:31:58.000000Z",
          "company": {
            "id": 3,
            "name": "\u041f\u0410\u041e \u0412\u0435\u043a\u0442\u043e\u0440",
            "phone": "(495) 584-9292",
            "address": "288155, \u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u0433\u043e\u0440\u043e\u0434 \u041c\u043e\u0441\u043a\u0432\u0430, \u0448\u043e\u0441\u0441\u0435 \u0421\u0442\u0430\u043b\u0438\u043d\u0430, 82",
            "site": "http:\/\/filippova.com\/voluptas-aperiam-doloribus-doloribus-voluptas-laborum-ut-exercitationem.html",
            "created_at": "2020-11-25T20:31:56.000000Z",
            "updated_at": "2020-11-25T20:31:56.000000Z"
          },
          "jobtitle": {
            "id": 10,
            "name": "\u0413\u0435\u0439\u043c\u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440",
            "company_id": 1,
            "created_at": "2020-11-25T20:31:56.000000Z",
            "updated_at": "2020-11-25T20:31:56.000000Z"
          }
        },
      ],
    })
  },
  methods: {
    getItemValue: (field, item) => {
      if ('formatter' in field) {
        return field.formatter.call(this, item)
      } else {
        return item[field.key]
      }
    },
    fullName: function (user) {
      return `${user.name1} ${user.name2} ${user.name3}`
    },
    changeSort: function (field) {
      // console.log(field)
      let order = ''
      let sortDesc = this.sortDesc
      if (this.sortBy === field.key) {
        sortDesc = !sortDesc
      } else {
        this.sortBy = field.key
        sortDesc = false
      }
      switch (field.key) {
        case 'name1':
          if (sortDesc) {
            order = 'name1 desc,name2 desc,name3 desc'
          } else {
            order = 'name1,name2,name3'
          }
          break
        default:
          order = field.key
          break
      }

      console.log(order)

      this.sortBy = field.key
      this.sortDesc = sortDesc

    },
  }
}
</script>

<style scoped>

</style>