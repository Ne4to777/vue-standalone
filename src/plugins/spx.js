import spx from 'spx-com'

spx().user().setDefaults({
	customWebTitle: 'AM',
	customListTitle: 'UsersAD',
	customIdColumn: 'uid',
	customLoginColumn: 'Login',
	customNameColumn: 'Title',
	customEmailColumn: 'Email',
	customQuery: 'Email IsNotNull && (deleted IsNull && (Position Neq Неактивный сотрудник && Position Neq Резерв))'
})
export default {
	install: Vue => Object.defineProperty(Vue.prototype, '$spx', { value: spx })
}
