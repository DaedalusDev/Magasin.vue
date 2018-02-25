export const CONST = {
  constante: 'lol'
}

const ApplicationConst = {
  install (Vue) {
    Vue.prototype.CONST = CONST
  }
}

export default ApplicationConst
