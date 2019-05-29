<template>
  <q-page class="flex flex-center q-pa-xs">
    <q-table class="full-width full-height-table"
        title="Inventaire" row-key="id"
             :data="inventaire" :columns="$options.columns">

    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'Inventaire',
  columns: [
    {
      name: 'code',
      field: 'code',
      label: 'Code',
      align: 'left',
      sortable: true
    },
    {
      name: 'label',
      field: 'label',
      label: 'Clair complet',
      align: 'left',
      sortable: true
    },
    {
      name: 'qt',
      field: 'qt',
      required: true,
      label: 'Quantité',
      align: 'center',
      sortable: true
    },
    {
      name: 'repart',
      field: 'repart',
      required: true,
      label: 'Réparti',
      align: 'center',
      sortable: true
    },
    {
      name: 'dist',
      field: 'dist',
      required: true,
      label: 'Distribué',
      align: 'center',
      sortable: true
    }
  ],
  data () {
    return {
      inventaire: [
        {
          id: 1,
          code: '25',
          label: 'Clair',
          qt: 25,
          repart: 2,
          dist: 1
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        },
        {
          id: 2,
          code: '25',
          label: 'Clair'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
