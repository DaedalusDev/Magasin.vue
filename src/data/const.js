export const CONST = {
  API_URL: process.env.NODE_ENV === 'production' ? '/rest' : 'http://zs.emagasin.local.gendarmerie.fr/app_dev.php/rest'
}

const ApplicationConst = {
  install (Vue) {
    Vue.prototype.CONST = CONST
  }
}

export default ApplicationConst
