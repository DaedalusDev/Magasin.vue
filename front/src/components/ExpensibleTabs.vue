<template>
  <q-tabs vertical>
    <template v-for="el in tree">
      <q-expansion-item v-if="el.group" :key="'exp-' + el.id"
                        v-model="el.value"
                        :header-inset-level="el.lvl"
                        :label="el.label" :expand-icon="el.icon">
        <div>
          <expensible-tabs :tree="el.children"/>
        </div>
      </q-expansion-item>
      <div v-else :key="'tabs-' + el.id">
        <q-route-tab :to="{name: 'local', params: {id: el.id}}"
                     :label="el.label"/>
      </div>
    </template>
  </q-tabs>
</template>

<script>
export default {
  name: 'ExpensibleTabs',
  props: {
    tree: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
