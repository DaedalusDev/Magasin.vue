import Inventaire from './views/Inventaire'
import Locaux from './views/Locaux'
import Local from './views/Locaux/Local'
import Export from '@/views/Locaux/Export'

export default [
  {
    path: '',
    name: 'inventaire',
    component: Inventaire,
    meta: {
      label: 'Inventaire',
      icon: 'fas fa-cubes'
    }
  },
  {
    path: '/locaux',
    name: 'locaux',
    component: Locaux,
    meta: {
      label: 'Locaux',
      icon: 'fas fa-home'
    },
    children: [
      {
        path: '/local/:id',
        name: 'local',
        component: Local,
        props: true
      },
      {
        path: '/local/export',
        name: 'localExport',
        component: Export,
        props: true
      }
    ]
  },
  {
    path: '/personnels',
    name: 'personnels',
    component: Locaux,
    meta: {
      label: 'Personnels',
      icon: 'fas fa-user'
    },
    children: [
      {
        path: '/personnel/:id',
        name: 'personnel',
        component: Local,
        props: true
      },
      {
        path: '/personnel/export',
        name: 'personnelExport',
        component: Export,
        props: true
      }
    ]
  }
]
