<template>
  <div class="app-container">
  <!-- 顶部 -->
    <mt-header fixed title="顶部固定"></mt-header>
  <!-- 中间 路由出口：路由匹配到的组件将渲染在这里-->
	<transition>
		<router-view></router-view>
	</transition>
  <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " href="#tabbar" to='/home'>
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-chat" to='member'>
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-contact" to='shoppingcar'>
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" href="#tabbar-with-map" to='search'>
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>

</template>

<script>
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  }

.mui-active {
	color: #007aff;
}

</style>>
