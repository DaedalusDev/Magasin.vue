<template>
  <q-page class="flex flex-center content-start q-pa-xs">
    <TableInventaire :inventaire="inventaire"
                     @exporter="exporter"/>
  </q-page>
</template>

<script>
import TableInventaire from '@/views/TableInventaire'

export default {
  name: 'Inventaire',
  components: { TableInventaire },
  data () {
    return {}
  },
  computed: {
    inventaire () {
      return [
        {
          id: 1,
          code: '25',
          label: 'Clair',
          family: 5,
          qt: 25,
          repart: 2,
          dist: 1
        },
        {
          id: 2,
          code: '26',
          label: 'Clair',
          family: 5
        },
        {
          id: 2,
          code: '27',
          label: 'Clair',
          family: 5
        },
        {
          id: 2,
          code: '28',
          label: 'Clair',
          family: 5
        },
        {
          id: 2,
          code: '29',
          label: 'Clair',
          family: 5
        },
        {
          id: 2,
          code: '30',
          label: 'Clair',
          family: 5
        },
        {
          id: 2,
          code: '31',
          label: 'Clair',
          family: 5
        },
        {
          id: 2,
          code: '32',
          label: 'Clair',
          family: 5
        },
        {
          id: 2,
          code: '33',
          label: 'Clair',
          family: 6
        },
        {
          id: 2,
          code: '34',
          label: 'Clair',
          family: 7
        },
        {
          id: 2,
          code: '35',
          label: 'Clair',
          family: 6
        },
        {
          id: 2,
          code: '37',
          label: 'Clair',
          family: 6
        },
        {
          id: 2,
          code: '38',
          label: 'Clair',
          family: 6
        },
        {
          id: 2,
          code: '39',
          label: 'Clair',
          family: 6
        },
        {
          id: 2,
          code: '40',
          label: 'Clair',
          family: 6
        },
        {
          id: 2,
          code: '41',
          label: 'Clair',
          family: 6
        },
        {
          id: 2,
          code: '42',
          label: 'Clair',
          family: 6
        }
      ].sort((a, b) => {
        if (a.family === b.family) {
          return a.code < b.code ? -1 : 1
        }
        return a.family - b.family
      })
    }
  },
  methods: {
    exporter () {

    }
  }
}
</script>
