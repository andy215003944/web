<?php $curPhpName=$_SERVER['PHP_SELF'];?>
<footer class="aui-tabBar aui-tabBar-fixed">
	<a href="we.php" class="aui-tabBar-item <?php if(strpos($curPhpName,"we.php")!==false)echo "aui-tabBar-active"?>">
		<span class="aui-tabBar-icon">
			<i class="icon aui-we"></i>
		</span>
		<span class="aui-tabBar-text">我们</span>
	</a>
	<a href="lost.php" class="aui-tabBar-item <?php if(strpos($curPhpName,"lost.php")!==false)echo "aui-tabBar-active"?>">
		<span class="aui-tabBar-icon">
			<i class="icon aui-lost"></i>
		</span>
		<span class="aui-tabBar-text">丢失列表</span>
	</a>
	<a href="index.php" class="aui-tabBar-item <?php if(strpos($curPhpName,"index.php")!==false)echo "aui-tabBar-active"?>">
		<span class="aui-tabBar-icon">
			<i class="icon aui-home"></i>
		</span>
		<span class="aui-tabBar-text">首页</span>
	</a>
	<a href="find.php" class="aui-tabBar-item <?php if(strpos($curPhpName,"find.php")!==false)echo "aui-tabBar-active"?>">
		<span class="aui-tabBar-icon">
			<i class="icon aui-find"></i>
		</span>
		<span class="aui-tabBar-text">捡到列表</span>
	</a>
	
	<a href="user.php" class="aui-tabBar-item <?php if(strpos($curPhpName,"user.php")!==false)echo "aui-tabBar-active"?>">
		<span class="aui-tabBar-icon">
			<i class="icon aui-me"></i>
		</span>
		<span class="aui-tabBar-text">我的</span>
	</a>
</footer>