<!DOCTYPE html>
<?php 
	$type=0;
	if(isset($_GET['t'])){
		$type=$_GET['t'];
	}
	$typeName="";
	if($type==1){
		$typeName="捡到东西";
	}else{
		$typeName="丢失东西";
	}

?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>找到啦-<?php echo $typeName;?>选择证件</title>
        <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport"/>
        <meta content="yes" name="apple-mobile-web-app-capable"/>
        <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
        <meta content="telephone=no" name="format-detection"/>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
        <script type="text/javascript" src="js/jquery.min.js"></script>
         <link href="css/style_add1.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <section class="aui-flexView">
            <header class="aui-navBar aui-navBar-fixed">
                <a href="index.php" class="aui-navBar-item">
                    <i class="icon icon-return"></i>
                </a>
                <div class="aui-center">
                    <span class="aui-center-title">全部服务</span>
                </div>
                <a href="add2.php" class="aui-navBar-item">
                    <i class="icon icon-more"></i>
                </a>
            </header>
            <section class="aui-scrollView">
                <div class="aui-service-box">
                
                
                    <div class="aui-service-title">
                        <i class="icon icon-hot"></i> 常见身份证件一
                    </div>
                    <div class="aui-service-grids">
                        <a href="add2.php" class="aui-service-grids-item">身份证</a>                
                        <a href="add2.php" class="aui-service-grids-item">户口本</a>
                        <a href="add2.php" class="aui-service-grids-item">社保卡</a>
                        <a href="add2.php" class="aui-service-grids-item">驾驶证</a>                        
                    </div>
                    
                        
                    <div class="aui-service-title">
                       <i class="icon icon-hot"></i> 常见身份证件二
                    </div>
                    <div class="aui-service-grids">
                        <a href="add2.php" class="aui-service-grids-item">护照</a>
                        <a href="add2.php" class="aui-service-grids-item">学生证</a>
                        <a href="add2.php" class="aui-service-grids-item">军警证件</a>
                        <a href="add2.php" class="aui-service-grids-item">职工证件</a>
                    </div>
                    


                     <div class="aui-service-title">
                        <i class="icon icon-hot"></i> 其他常见证件
                    </div>
                    <div class="aui-service-grids">
                        <a href="add2.php" class="aui-service-grids-item">银行卡</a>
                        <a href="add2.php" class="aui-service-grids-item">会员卡</a>
                        <a href="add2.php" class="aui-service-grids-item">其他证卡</a>
                    </div>
                    
                    
                    
                    <div class="aui-service-title">
                        <i class="icon icon-car"></i>公司经营类证件
                    </div>
                    <div class="aui-service-grids">
                        <a href="add2.php" class="aui-service-grids-item">营业证章</a>
                        <a href="add2.php" class="aui-service-grids-item">税务证章</a>
                        <a href="add2.php" class="aui-service-grids-item">财务证章</a>
                        <a href="add2.php" class="aui-service-grids-item">其他证章</a>
                    </div>
                    
                    
                    
                    <div class="aui-service-title">
                        <i class="icon icon-car"></i>交通出行类证件
                    </div>
                    <div class="aui-service-grids">
                        <a href="add2.php" class="aui-service-grids-item">行车证</a>
                        <a href="add2.php" class="aui-service-grids-item">公交卡</a>
                        <a href="add2.php" class="aui-service-grids-item">车票类</a>
                        <a href="add2.php" class="aui-service-grids-item">通行证</a>

                    </div>
                    
                    
                    
                    
                    <div class="aui-service-title">
                        <i class="icon icon-people"></i>其他生活类证件
                    </div>
                    <div class="aui-service-grids">
                        <a href="add2.php" class="aui-service-grids-item">婚 恋 孕</a>
                        <a href="add2.php" class="aui-service-grids-item">婴 幼 儿</a>
                        <a href="add2.php" class="aui-service-grids-item">教 学 研</a>
                        <a href="add2.php" class="aui-service-grids-item">身 健 体</a>
                    </div>
                    
                    
                    
                    <div class="aui-service-title">
                        <i class="icon icon-people"></i>其他特殊证件
                    </div>
                    <div class="aui-service-grids">
                        <a href="add2.php" class="aui-service-grids-item">特殊证件</a>
                        <a href="add2.php" class="aui-service-grids-item">特情上报</a>
                    </div>



                </div>
            </section>
			<?php require_once("main/include/foot.php") ?>
        </section>

            
            
            
            
        </section>
        <script type="text/javascript">
            $(document).ready(function() {
                var navHeight = $("#navHead").offset().top;
                var navFix = $("#nav-wrap");
                $(window).scroll(function() {
                    if ($(this).scrollTop() > navHeight) {
                        navFix.addClass("aui-flex");
                    } else {
                        navFix.removeClass("aui-flex");
                    }
                })
            });

            $(document).ready(function() {
                $(".btn-slide").click(function() {
                    $("#show").slideToggle();
                });
            });

            $(function() {
                $(".line").slideUp();
            })
        </script>
    </body>
</html>
