<template>
  <q-table class="full-width full-height-table"
           :pagination.sync="pagination"
           :data="inventaire" :columns="$options.columns"
           :filter="filter"
           hide-bottom>
    <template #top-right>
      <q-btn v-for="act in actions" :key="act.name" round
             :color="act.color" :icon="act.icon" class="q-mr-sm"
             @click="$emit(act.name)"/>
      <q-input dense debounce="300" v-model="filter" placeholder="Filtrer">
        <template #append>
          <q-icon name="fas fa-search"/>
        </template>
      </q-input>
    </template>
    <template #body="item">
      <QTr v-if="
          ['code', null].indexOf(pagination.sortBy) !== -1 &&
          (!inventaire[item.row.__index -1] ||
          inventaire[item.row.__index -1].family !== item.row.family)">
        <td colspan="5" class="bg-blue-8 text-white">{{ item.row.family }}</td>
      </QTr>
      <QTr>
        <QTd v-for="column in item.cols" :key="column.field"
             :class="{'text-center': column.align === 'middle'}">
          {{ item.row[column.field] }}
        </QTd>
      </QTr>
    </template>
  </q-table>
</template>

<script>
export default {
  name: 'TableInventaire',
  actions: [
    {
      name: 'exporter',
      color: 'purple',
      icon: 'fa fa-file-export'
    },
    {
      name: 'add',
      color: 'green',
      icon: 'fa fa-plus'
    },
    {
      name: 'edit',
      color: 'orange',
      icon: 'fa fa-edit'
    }
  ],
  columns: [
    {
      name: 'code',
      field: 'code',
      label: 'Code',
      align: 'left',
      sortable: true,
      sort: (a, b, rA, rB) => {
        if (rA.family === rB.family) {
          return a < b ? -1 : 1
        }
        return rA.family - rB.family
      }
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
      align: 'middle',
      sortable: true,
      style: 'width: 25px'
    },
    {
      name: 'repart',
      field: 'repart',
      required: true,
      label: 'Réparti',
      align: 'middle',
      sortable: true,
      style: 'width: 25px'
    },
    {
      name: 'dist',
      field: 'dist',
      required: true,
      label: 'Distribué',
      align: 'middle',
      sortable: true,
      style: 'width: 25px'
    }
  ],
  props: {
    inventaire: {
      type: Array
    }
  },
  data () {
    return {
      filter: '',
      pagination: {
        page: 1,
        rowsPerPage: 0,
        sortBy: 'code'
      }
    }
  },
  computed: {
    actions () {
      return this.$options.actions
        .filter((v) => this.$listeners[v.name])
    }
  }
}
</script>
