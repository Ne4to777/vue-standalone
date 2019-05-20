import spx from 'spx-com';
export default {
  install: Vue => Object.defineProperty(Vue.prototype, '$spx', { value: spx })
}