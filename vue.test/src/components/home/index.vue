<template>
	<div id="homeIndex">
		<ul>
			<li v-for="site in tags">
				<a href="#">{{site.name}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	export default {
		name: 'homeIndex0',
		data() {
			return {
				sites: [{
						name: '关注'
					},
					{
						name: '推荐'
					},
					{
						name: '郑州'
					},
					{
						name: '视频'
					},
				]
			}
		},
		computed:{
			...mapState({
				tags:state=>state.headStore.headTagsIndex
			})
		},
		beforeCreate: function() {
			//console.log(this);
			//showData('创建vue实例前', this);
		},
		created: function() {
			//showData('创建vue实例后', this);
		},
		beforeMount: function() {
			//showData('挂载到dom前', this);
			
		},
		mounted: function() {
			//showData('挂载到dom后', this);
			setTimeout(()=>{
				this.getSites("/getLink");
				//this.getLink("static/head.json");
			},1000);
			
		},
		beforeUpdate: function() {
			//showData('数据变化更新前', this);
		},
		updated: function() {
			//showData('数据变化更新后', this);
		},
		beforeDestroy: function() {
			//vm.test = "3333";
			//showData('vue实例销毁前', this);
		},
		destroyed: function() {
			//showData('vue实例销毁后', this);
		},
		methods: {
			...mapActions([
				'getSites'
			]),
			showData(str,obj){
				
			}
		}
	}

	/*axios.post('url', data)
	.then(function (response) {
	    console.log(response);
	})
	.catch(function (error) {
	    console.log(error);
	});*/
</script>

<style scoped="scoped">
	#homeIndex {}
	
	#homeIndex ul {
		overflow: hidden;
	}
	
	#homeIndex li {
		list-style: none;
		float: left;
		width: 100px;
	}
</style>