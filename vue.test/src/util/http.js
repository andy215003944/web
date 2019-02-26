/*
 * 
 2018-11-26 wangwen
 * */
import axios from 'axios'
import qs from 'qs'

//全局设置超时时间
axios.defaults.timeout=10000;

//请求路由拦截 可以做一些判断，看是否是合法用户
axios.interceptors.request.use(
	config=>{
		//config.data=JSON.stringify(config.data);
		baseURL: 'http://local.test.com',
		config.headers={
			//'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
			'Content-Type':'application/json;charset=utf-8',
			//'Access-Control-Allow-Origin': '*',
			//'Access-Control-Allow-Methods': ['POST,GET,OPTIONS']
		}
		return config;
	},error=>{
		return Promise.reject(error);
	}
);

//响应拦截
axios.interceptors.response.use(
	response=>{
		//console.log("响应拦截 "+response.status);
		if(response.status ===200){
			return Promise.resolve(response);
		}else{
			return Promise.reject(response);
		}
	},
	error=>{
		//console.log("response err="+error);
		return Promise.reject("axios "+error);
	}
)













/*
 * 
 * 
 //
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
//别名
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
 
 
 //Promise
 var ajaxPromise = new Promise(function(resolve){
    resolve();
});
ajaxPromise.then(function(){
    $.ajax({
        url:'',
        dataType:'json',
        success: function(data) {
            var id = data.id;
            return id;
        }
    })
}).then(function(id){
    $.ajax({
        url:'',
        dataType:'json',
        data:{"id":id},
        success: function(data){
            console.log(data);
        }
    })
});


//按顺序执行
var promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve(1);
    },3000);
});
var promise2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve(2);
    },1000);
});
Promise.all([promise1,promise2]).then(function(value){
    console.log(value); // 打印[1,2]
});

//任何一个promise变为resolve或reject 的话程序就停止运行
function timerPromise(delay){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(delay);
        },delay);
    });
}
// 
Promise.race([
    timerPromise(1),
    timerPromise(32),
    timerPromise(64),
    timerPromise(128)
]).then(function (value) {
    console.log(value);    // => 1
});


 * */