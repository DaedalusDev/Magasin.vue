import Vue from 'vue'
import './styles/quasar.styl'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import lang from 'quasar/lang/fr.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QPageSticky,
  QFooter,
  QInput,
  QFab,
  QFabAction,
  QCard,
  QCardSection,
  QDialog,
  QPopupProxy,
  QColor,
  QTooltip,
  QTable,
  QTh,
  QTr,
  QTd,
  QTabs,
  QTabPanels,
  QTabPanel,
  QRouteTab,
  QSeparator,
  QExpansionItem,
  // Plugins
  Dialog,
  Notify
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QPageSticky,
    QFooter,
    QInput,
    QFab,
    QFabAction,
    QCard,
    QCardSection,
    QDialog,
    QPopupProxy,
    QColor,
    QTooltip,
    QTable,
    QTh,
    QTr,
    QTd,
    QTabs,
    QRouteTab,
    QTabPanels,
    QTabPanel,
    QSeparator,
    QExpansionItem
  },
  directives: {},
  plugins: {
    Dialog,
    Notify
  },
  lang: lang,
  iconSet: iconSet
})
