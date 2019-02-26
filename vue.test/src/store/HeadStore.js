/*
 2018-11-25
 * */
import axios from 'axios'
export default{
	state:{
		headTagsIndex:[
			{name:"推荐"},
			{name:"郑州"},
		]
	},
	actions:{
		getSites({state},urls){
			axios.get(urls)
					.then(function(response) {
						console.log(response.data);
						state.headTagsIndex=response.data.site;
						
					})
					.catch(function(error) {
						console.log(error);
					});
			
		}
	}
}
