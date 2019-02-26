<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>找到啦-提交</title>
        <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport"/>
        <meta content="yes" name="apple-mobile-web-app-capable"/>
        <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
        <meta content="telephone=no" name="format-detection"/>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
		<link href="css/style_add1.css" rel="stylesheet" type="text/css"/>
        <script type="text/javascript" src="js/jquery.min.js"></script>
        
        <style>
          .banner{
             width:100%;
			 height:100%;
             border:1px solid #6699CC;
             background-image:url(images/findbanner.jpg);
			 margin-bottom:10px;
             }
        </style>
         
         
    </head>
    <body>
        <section class="aui-flexView" id="navHead">
        
        
        
            <header class="aui-navBar aui-navBar-fixed">
                <a href="add1.php" class="aui-navBar-item">
                    <i class="icon icon-return"></i>
                </a>
                <div class="aui-center">
                    <span class="aui-center-title">全部服务</span>
                </div>
                <a href="add2.php" class="aui-navBar-item">
                    <i class="icon icon-more"></i>
                </a>
            </header>


    
    <div class="pc-kk-form">
         <div class="auo-ad-box">
             <img src="images/ad-001.png" alt="">
         </div>
		<form action="">
          
          <!--选填的捡东西时间、地点
		  <div class="pc-kk-form-list pc-kk-form-list-clear">
				<div class="nice-select" name="nice-select">
				  <input type="text" value="拣获物品的时段？选填" readonly>
					<ul>
                    <li data-value="1">日出前后早上5-7点</li>
                    <li data-value="1">约早高峰时间7-9点</li>
                    <li data-value="2">上午时间稍晚9-11点</li>
                    <li data-value="3">中午前后11-下午2点</li>
                    <li data-value="4">下午上班时段的2-5点</li>
					<li data-value="5">下午下班前后的5-7点</li>
					<li data-value="6">晚高峰热闹的7-9点左右</li>
					<li data-value="7">已经深夜的9-11点左右</li>
					<li data-value="8">午夜的12点-2点左右</li>
                    <li data-value="9">下半夜到凌晨的2-5点</li>
					</ul>

				</div>
				<div class="nice-select" name="nice-select" style="float:right">
				  <input type="text" value="拣获物品的地点？ 选填" readonly>
					<ul>
					<li data-value="1">街道路边捡拾获取</li>
					<li data-value="2">商场饭店等生活点</li>
                    <li data-value="3">车站公交等交通点</li>
                    <li data-value="4">酒店旅馆等住宿点</li>
                    <li data-value="5">影院等娱乐休闲点</li>
                    <li data-value="6">公安等社会治安点</li>
                    <li data-value="7">厕所绿植等荫蔽点</li>
                    <li data-value="8">不便或不想透漏</li>
					<li data-value="9">他人转交委托等</li>
					<li data-value="10">其他情况：附言</li>
					</ul>
				</div>
		  </div>
          可能有点废的填时间、地点-->

            
			<div class="pc-kk-form-list pc-kk-form-list-clear">
			  <div class="nice-select" name="nice-select" style="width:100%">
			    <input type="text" value="关键信息1：物件上的名字" readonly>
		      </div>
			</div>
            


			<div class="pc-kk-form-list pc-kk-form-list-clear">
			  <div class="nice-select" name="nice-select" style="width:100%">
			    <input type="text" value="关键信息2：编号编码数字" readonly>
		      </div>
			</div>
            
            
			<div class="pc-kk-form-list pc-kk-form-list-clear">
			  <div class="nice-select" name="nice-select" style="width:100%">
			    <input type="text" value="关键信息3：其他有用信息" readonly>
		      </div>
			</div>
                
          
			<div class="pc-kk-form-list pc-kk-form-list-clear">
				<div class="nice-select" name="nice-select" style="width:100%">
					<input type="text" value="其它信息4：如颜色等特征" readonly>
					<ul>
						<li data-value="Level1">Level1</li>
						<li data-value="Level2">Level2</li>
						<li data-value="Level3">Level3</li>
					</ul>
				</div>
			</div>
            
            
			<div class="pc-kk-form-list" style="height:auto">
				<textarea>你要说些什么？可以留言。</textarea>
			</div>
			<div class="pc-kk-form-btn">
				<button>确认提交</button>
			</div>
	</form>
	</div>        
	<?php require_once("main/include/foot.php") ?>
</section>
	<script>

        $('[name="nice-select"]').click(function(e){

            $('[name="nice-select"]').find('ul').hide();

            $(this).find('ul').show();

            e.stopPropagation();

        });

        $('[name="nice-select"] li').hover(function(e){

            $(this).toggleClass('on');

            e.stopPropagation();

        });

        $('[name="nice-select"] li').click(function(e){

            var val = $(this).text();

            $(this).parents('[name="nice-select"]').find('input').val(val);

            $('[name="nice-select"] ul').hide();

            e.stopPropagation();

        });

        $(document).click(function(){

            $('[name="nice-select"] ul').hide();

        });

	</script>
    </body>
</html>
