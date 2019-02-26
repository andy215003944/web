<template>
	<div id="home">

		<vHead></vHead>

		<router-view></router-view>
		<vFoot></vFoot>

	</div>
</template>

<script>
	import vHead from './common/head'
	import vIndex from './home/index'
	import vFoot from './common/foot'


	export default {
		name: 'home',
		components: {
			vHead,
			vFoot
		}
	}
</script>

<style>

</style>