<template>
	<div class="main">
		<div class="header">这里是头部</div>
		<div class="body">
			<div id="content">
				<!-- <WindowDialog /> -->
				<keep-alive>
					<component v-for="component in componentsList" :key="component.id" :is="component.component"></component>
        </keep-alive>
			</div>
			<div class="side-list">
				<sideList />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted} from 'vue'
import sideList from "@/components/fake-window/side-list/side-list.vue"
import WindowDialog from '@/components/fake-window/window-dialog/dialog.vue'
const componentsList = [
	{
		id: 1,
		title: "a",
		message: "qwertyuiop",
		component:WindowDialog
	},
	{
		id: 2,
		title: "b",
		content: "asdfghjkl",
		component:WindowDialog
	},
	{
		id: 3,
		title: "c",
		content: "zxcvbnm",
		component:WindowDialog
	},
]

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
		.content{
			position: relative;
			flex: 1;
		}
		.side-list {
		position: absolute;
		height: 100%;
		right: 0;
		top: 0;
		background-color: azure;
	}
	}

}
</style>
