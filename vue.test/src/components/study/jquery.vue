<template>
	<div id="bootstrap">
			<h1>我的第一个 Bootstrap 页面</h1>
			<p>重置浏览器窗口大小查看效果！<br/>重置浏览器窗口大小查看效果！</p>

			<div class="btn-toolbar" role="toolbar" aria-label="...">
				<div class="btn-group" role="group" aria-label="...">
					<button type="button" class="btn btn-default">1</button>
					<button type="button" class="btn btn-default">2</button>
					<button type="button" class="btn btn-default">3</button>
				</div>
				<div class="btn-group" role="group" aria-label="...">
					<button type="button" class="btn btn-default">Left</button>
					<button type="button" class="btn btn-default">Middle</button>
					<button type="button" class="btn btn-default">Right</button>
				</div>
				<div class="btn-group" role="group" aria-label="...">
					<div class="dropdown">
						<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					    Dropdown
					    	<span class="caret"></span>
					  	</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
							<li>
								<a href="javascript:alert('action');">Action</a>
							</li>
							<li>
								<a href="#">Another action</a>
							</li>
							<li role="separator" class="divider"></li>
							<li>
								<a href="#">Separated link</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
</template>

<script>
</script>

<style>
</style>