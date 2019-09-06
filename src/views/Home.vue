<template>
	<div>
		<test />
		<div v-for="item in items" :key="item.ID">{{ item.ID }} - {{ item.Title }}</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Test from '@/components/Test.vue'

export default {
	name: 'home',
	components: {
		Test
	},
	data() {
		return {
			time: '',
			user: '',
			items: ''
		}
	},
	computed: {
		query() {
			return this.$route.query.a
		}
	},
	async created() {}
}
</script>

<style lang="stylus" scoped>
body
  font 12px Helvetica, Arial, sans-serif

a.button
  -webkit-border-radius 5px
  -moz-border-radius 5px
  border-radius 5px
</style>
