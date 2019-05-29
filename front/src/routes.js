import Inventaire from './views/Inventaire'
import Locaux from './views/Locaux'
import Local from './views/Local'

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
        path: '/local/{id}',
        name: 'local',
        component: Local
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
        path: '/personnel/{id}',
        name: 'personnel',
        component: Local
      }
    ]
  }
]
