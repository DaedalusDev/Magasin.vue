<template>
  <q-page padding class="flex content-start">
    <div style="max-width: 200px;">
      <div>
        <q-tabs vertical inline-label>
          <q-route-tab :to="{name: 'local', params: {id: 'new'}}"
                       icon="fas fa-plus"
                       label="Nouveau local"/>
          <q-route-tab :to="{name: 'localExport'}"
                       icon="fas fa-file-export"
                       label="Exporter"/>
        </q-tabs>
      </div>
      <q-input dense debounce="300" v-model="filter" placeholder="Filtrer" class="q-my-sm">
        <template #append>
          <q-icon name="fas fa-search"/>
        </template>
      </q-input>
      <expensible-tabs :tree="locaux"/>
    </div>
    <q-separator vertical/>
    <router-view class="col"/>
    <!--<q-tab-panels v-model="panel">-->
    <!--<q-tab-panel></q-tab-panel>-->
    <!---->
    <!--</q-tab-panels>-->
  </q-page>
</template>

<script>
export default {
  name: 'Locaux',
  data () {
    return {
      splitterModel: 20,
      panel: null,
      filter: ''
    }
  },
  computed: {
    locaux () {
      return [
        {
          id: 12,
          label: 'local2'
        },
        {
          id: 13,
          label: 'local2'
        },
        {
          id: 12,
          icon: 'fa fa-city',
          label: 'Level 1',
          value: true,
          group: true,
          children: [
            {
              id: 1,
              label: 'local1'
            },
            {
              id: 2,
              label: 'local2'
            },
            {
              label: 'Level 2',
              group: true,
              value: false,
              icon: 'far fa-building',
              lvl: 0.2,
              children: [
                {
                  id: 3,
                  label: 'local2'
                },
                {
                  id: 4,
                  label: 'local2'
                },
                {
                  id: 5,
                  label: 'local2'
                },
                {
                  id: 6,
                  label: 'local2'
                },
                {
                  id: 7,
                  label: 'local2'
                },
                {
                  id: 8,
                  label: 'local2'
                },
                {
                  id: 9,
                  label: 'local2'
                },
                {
                  id: 10,
                  label: 'local2'
                },
                {
                  id: 11,
                  label: 'local2'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
