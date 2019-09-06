<template>
	<div>
		<div id="nav">
			<router-link :to="{ query: { a: 2 } }">Home</router-link>|
			<router-link :to="{ query: { a: 1 } }">Gregg</router-link>
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'main-app',
	async created() {
		document.title = 'Look Ma!'
		window.spx = this.$spx
		spx('http://localhost:3000/')
			.get()
			.then(console.log)
	}
}
</script>

<style>
</style>
