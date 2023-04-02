<template>
	<div class="main">
		<div class="header">这里是头部</div>
		<div class="body">
			<div class="content">这里是身体</div>
			<div class="side-list">
				<sideList />
			</div>
		</div>
	</div>
</template>

<script setup>
import sideList from "@/components/fake-window/side-list.vue";
</script>

<style lang="scss" scoped>
.main {
	width: 100%;
	height: 100%;
	background: #f9f9f9;
	display: flex;
	flex-direction: column;
	.header {
		height: 80px;
		background-color: #958565;
	}
	.body {
		position: relative;
		flex: 1;
		background-color: skyblue;
	}
	.side-list {
		position: absolute;
		width: 280px;
		height: 100%;
		right: 0;
		top: 0;
		background-color: yellow;
	}
}
</style>
