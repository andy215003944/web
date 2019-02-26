<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>找到啦-帮助别人快乐自己</title>
        <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport"/>
        <meta content="yes" name="apple-mobile-web-app-capable"/>
        <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
        <meta content="telephone=no" name="format-detection"/>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
		<link href="css/style_index.css" rel="stylesheet" type="text/css"/>
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/slider.js"></script>
    </head>
    <body>

        <!--

         * 17素材vip建站专区模块代码
         * 详尽信息请看官网：http://www.17sucai.com/pins/vip
         *
         * Copyright , 温州易站网络科技有限公司版权所有
         *
         * 请尊重原创，未经允许请勿转载。
         * 在保留版权的前提下可应用于个人或商业用途

        -->

        <section class="aui-flexView">

            <div class="divHeight"></div>
              <div class="aui-slide-list">
                  <ul class="aui-slide-item-list">
                  <a href="add1.php">
                        <li class="aui-slide-item-item">
                            <div class="aui-slide-item-it">
                                <h4>我的东西丢了</h4>
                                <p>我想找回我的东西</p>
                            </div>
                            <div class="aui-slide-item-ci">
                                <img src="images/index/ad-im-001.png" alt="">
                            </div>
                            <div class="aui-slide-item-nub">
                                <p>0000件</p>
                            </div>
                        </li></a>
                        <a href="add1.php">
                        <li class="aui-slide-item-item">
                            <div class="aui-slide-item-it">
                                <h4>我捡到了东西</h4>
                                <p>我想找到东西的失主</p>
                            </div>
                            <div class="aui-slide-item-ci">
                                <img src="images/index/ad-im-002.png" alt="">
                            </div>
                            <div class="aui-slide-item-nub">
                                <p>0000件</p>
                            </div>
                        </li></a>
                </ul>
            </div>
            
            
            
            
            
           <div class="divHeight"></div>
              <div class="aui-slide-list">
                  <ul class="aui-slide-item-list">
                        <a href="add1.php">
                        <li class="aui-slide-item-item">
                            <div class="aui-slide-item-it">
                                <h4>我的宠物走失了</h4>
                                <p>我想找回我的宠物</p>
                            </div>
                            <div class="aui-slide-item-ci">
                                <img src="images/index/ad-im-003.png" alt="">
                            </div>
                            <div class="aui-slide-item-nub">
                                <p>0000件</p>
                            </div>
                        </li></a>
                        <a href="add1.php">
                        <li class="aui-slide-item-item">
                            <div class="aui-slide-item-it">
                                <h4>我发现流浪的宠物</h4>
                                <p>我想找到宠物的主人</p>
                            </div>
                            <div class="aui-slide-item-ci">
                                <img src="images/index/ad-im-004.png" alt="">
                            </div>
                            <div class="aui-slide-item-nub">
                                <p>0000件</p>
                            </div>
                        </li></a>
                </ul>
              </div>
              
            
            
           <div class="divHeight"></div>
              <div class="aui-slide-list">
                  <ul class="aui-slide-item-list">
                        <a href="add1.php">
                        <li class="aui-slide-item-item">
                            <div class="aui-slide-item-it">
                                <h4>加入合伙人</h4>
                                <p>合作大家庭</p>
                            </div>
                            <div class="aui-slide-item-ci">
                                <img src="images/index/ad-im-006.png" alt="">
                            </div>
                            <div class="aui-slide-item-nub">
                                <p>0000件</p>
                            </div>
                        </li></a>
                        <a href="add1.php">
                        <li class="aui-slide-item-item">
                            <div class="aui-slide-item-it">
                                <h4>公益爱心</h4>
                                <p>系统平台助力</p>
                            </div>
                            <div class="aui-slide-item-ci">
                                <img src="images/index/ad-im-005.png" alt="">
                            </div>
                            <div class="aui-slide-item-nub">
                                <p>0000件</p>
                            </div>
                        </li></a>
                </ul>
         </div>  
      </section>


      <footer class="aui-footer">
      </body>
      
      
      
          <script type="text/javascript">
		$(".serBox").hover(function () {
			 $(this).children().stop(false,true);
			 $(this).children(".serBoxOn").fadeIn("slow");
			 $(this).children(".pic1").animate({right: -110},400);
			 $(this).children(".pic2").animate({left: 41},400);
			 $(this).children(".txt1").animate({left: -240},400);
			 $(this).children(".txt2").animate({right: 0},400);	
		},function () {
			 $(this).children().stop(false,true);
			 $(this).children(".serBoxOn").fadeOut("slow");
			 $(this).children(".pic1").animate({right:41},400);
			 $(this).children(".pic2").animate({left: -110},400);
			 $(this).children(".txt1").animate({left: 0},400);
			 $(this).children(".txt2").animate({right: -240},400);	
		});

		</script>
        <?php require_once("main/include/foot.php") ?>



</html>
