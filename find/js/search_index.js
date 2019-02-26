    $(function(){
   		$('.search_index_content_head li').on('click',function(){
   			$(this).addClass('active').siblings().removeClass('active');
   			$('#search_tishi').hide();
   			$('#city_q_wz,.jdianmp_search_menu_input').val('');
   			var index=$('.search_index_content_head li').index(this);
   			$('.search_index_content_menu > div').eq(index).show().siblings().hide();
   		});
    });
    $(".js_a").bind('click', function(){ 
    	if($('#city_q_wz').val() === ''){
    		tan('toast','????????????????????????');
    		return false;
    	}	
   		$("#form_xltj_search").submit();
    });
    $('.jdmp_btn').bind('click',function(){
    	if($('.jdianmp_search_menu_input').val() === ''){
    		tan('toast','????????????????????????');
    		return false;
    	}	
   		$('#form_jdmp_search').submit();
    })
    $('.lxs_btn').bind('click',function(){
    	if($('.lxs_input_val').val() === ''){
    		tan('toast','??????????????????????');
    		return false;
    	}	
   		$('#form_lxs_search').submit();
    })
//???????????????? ??????
	$('#toCityLists .l_2').click(function(){});
	$(document).delegate('#toCityLists .l_2','click',function(){
		var t = $(this).find('a').html().trim(),

			id = $(this).attr('jd_id');
		$('#toCityLists').hide();
		$('#page_1').find('.destination_input').find('input').val(t);
		$('#to_id').val(id);
		$('#type').val('');
		$('#page_1').show();
		location.hash = '';
		event.stopPropagation();
	})
	$('#fromCityLists .l_2').click(function(){});
	$(document).delegate('#fromCityLists .l_2','click',function(){
		var value = $(this).find('a').html().trim(),id = $(this).attr('zone_id'),en=$(this).attr('data_en');
		$('#city_en').val(en);
		$('#fromCityLists').hide();
		var tv = $('#city_en').val();
		$('.item_x_m a').each(function(){
			var href = $(this).attr('href');
			var str = href.substring(3,href.length-9);
			var newstr=href.replace(str,tv);  
	    	$(this).attr('href',newstr);
		});
		$('#city_input').val(value);
		$('#from_id').val(id);
		$('#search_page_1').show();
		location.hash = '';
		event.stopPropagation();
	})
	$('#toForeignLists .l_2').click(function(){});
	$(document).delegate('#toForeignLists .l_2','click',function(){
		var value = $(this).find('a').html(),
			id = $(this).attr('jd_id');
		$('#toForeignLists').hide();
		$('#page_1').find('.destination_input').find('input').val(value);
		$('#to_id').val(id);
		$('#type').val('');
		$('#page_1').show();
		location.hash = '';
		event.stopPropagation();
	})
//???????????????????? ??????????
	var get_city_jd_mix = function(event,letter,obj,options){
		if($(obj).next().is(':visible')){
			//$(obj).next().hide();
		}else{
			if($(obj).next().html()!=''){
				//$(obj).next().show();
			}else{
				var _data = {letter:letter,inajax:1};
				$.extend(_data,options);
				$request({
					url:'/xianlu/get_all_jd',
					dataType:'json',
					data:_data,
					success:function(d){
						if(d.code == 0){
 							var template = Handlebars.compile($("#mixListsTemplate").html());
							$(obj).next().html(template(d));
						}
					}
				})
			}
		}
		//event.stopPropagation();
	}
//???????????????? ????
	var citySelect = function(){
		$request({
			url:'/xianlu/get_all_city',
			dataType:'json',
			data:{inajax:1},
			success:function(d){
				var ob = new Array();
				for(var key in d.msg){
					if(key){
						var _ob = {};
						_ob['key'] = key;
						_ob['value'] = d.msg[key]
						ob.push(_ob);
					}
				}
				var data = {msg:ob};
				if(location.hash === '#from_city'){
					var template = Handlebars.compile($("#cityListsTemplate").html());
					$('#fromCityLists').find('.u_1').append(template(data));
					//$('#fromCityLists').find('.u_1').append($('#cityListsTemplate').tmpl(ob));
				}
			}
		})
	}
	
	
//???????????? ?????? ??id????
	var fetchForeign = function(event,id,obj,options){
		if($(obj).next().is(':visible')){
			//$(obj).next().hide();
		}else{
			if($(obj).next().html()!=''){
				//$(obj).next().show();
			}else{
				var _data = {zone_id:id,inajax:1};
				$.extend(_data,options);
				$request({
					url:'/xianlu/jdlist',
					data:_data,
					dataType:'json',
					success:function(d){
						if(d.code == 0){
							var template = Handlebars.compile($("#mixListsTemplate").html());
							$(obj).next().html(template(d));
						}
					}
				});
			}
		}
		//event.stopPropagation();
	}
	
	
	var to_city = function(obj){
		location.hash = '#to_city';
		obj.blur();
	}
	
	var from_city = function(obj){
		location.hash = '#from_city';
		obj.blur();
	}
	
/*
	w.to_city = to_city;
	w.from_city = from_city;
*/

	//??????hash??????????????????
	var hashChange = function(){
		var hash = location.hash;
			//??????
			if(location.pathname.match(/chujing/)){
				if(hash == '#from_city'){
					citySelect();
					$('#search_page_1').hide();
					$('#page_1').hide();
					$('#toForeignLists').hide();
					$('#auti_complete').hide();
					$('#fromCityLists').show();
				}else if(hash == '#to_city'){
					$('#page_1').hide();
					$('#auti_complete').hide();
					$('#fromCityLists').hide();
					$('#toForeignLists').show();
				}else{
					$('#search_page_1').show();
					$('#page_1').show();
					$('#fromCityLists').hide();
					$('#auti_complete').hide();
					$('#toForeignLists').hide();
				}
			//?????? ??????
			}else{
				if(hash == '#from_city'){
					citySelect();
					$('#search_page_1').hide();
					$('#page_1').hide();
					$('#auti_complete').hide();
					$('#toCityLists').hide();
					$('#fromCityLists').show();
				}else if(hash == '#to_city'){
					$('#page_1').hide();
					$('#auti_complete').hide();
					$('#fromCityLists').hide();
					$('#toCityLists').show();
				}else{
					$('#search_page_1').show();
					$('#page_1').show();
					$('#auti_complete').hide();
					$('#fromCityLists').hide();
					$('#toCityLists').hide();
				}				
			}
	}
	
	window.addEventListener('hashchange',hashChange,false);
	$(function(){
		var hash = location.hash.slice(1);
		hash && hashChange();
	})
	
	//????????????????
	
	var getKeyWord = function(q){
		
		if(q == ''){
			$('#search_tishi').html('');	
		}
		var csval=$('#city_en').val(); 
		var oScript = document.createElement('script');
		oScript.src = 'http://www.cncn.com/ajax_so.php?c='+csval+'&t=line&q='+q+'';
		document.body.appendChild(oScript);
		oScript.onload = function(){	
			var h='';
			$.each(arrLx,function(j,val){
				h +='<p><a href="javascript:void(0)">'+val[0]+'</a><span></span></p>'
			});
			$('#search_tishi').html(h);
			$('#search_tishi').show();
		}
		$('#search_tishi a').live('click',function(){
			var t=$(this).text();
			$('#city_q_wz').val(t);
			$('#search_tishi').hide();
			$("#form_xltj_search").submit();
		});	
			
	}
	var getKeyWordpl = function(q,xuanz){
		if(q == ''){
			$('#search_tishi').html('');	
		}else{
			var url = 'http://www.cncn.com/ajax_so.php?t='+xuanz+'&q='+q+'';

			var script = document.createElement('script');
			script.setAttribute('src',url);
			$('body').append(script);
			script.onload = function(){	
				var h='';
				$.each(arrLx,function(j,val){
					h +='<p><a href="javascript:void(0)">'+val[0]+'</a><span></span></p>'
				});
				$('#search_tishi').html(h);
				$('#search_tishi').show();

			}
			$('#search_tishi a').live('click',function(){
				var t=$(this).text();
				$('.jdianmp_search_menu_input').val(t);
				$('#search_tishi').hide();
				$('#form_jdmp_search').submit();
			});
		}	
		
	}
	var getKeyWordplxs = function(q,xuanz){
		
		 
		if(q == ''){
			$('#search_tishi').html('');
			
		}else{
			var url = 'http://www.cncn.com/ajax_so.php?t='+xuanz+'&q='+q+'';

			var script = document.createElement('script');
			script.setAttribute('src',url);
			$('body').append(script);
			script.onload = function(){	
				var h='';
				$.each(arrLx,function(j,val){
					h +='<p><a href="javascript:void(0)">'+val[0]+'</a><span></span></p>'
				});
				$('#search_tishi').html(h);
				$('#search_tishi').show();
			}
			$('#search_tishi a').live('click',function(){
				var t=$(this).text();
				$('.lxs_input_val').val(t);
				$('#search_tishi').hide();
				$('#form_lxs_search').submit();
			});
		}	
		
	}
	//w.getKeyWord = getKeyWord;
	$("#city_input").each(function(i){  
		var width=$(this).val().length*13.75;
	    $(this).css('width',width);
	   
	}); 
	








