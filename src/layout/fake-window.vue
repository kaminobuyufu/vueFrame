<template>
	<div class="main">
		<div class="header">这里是头部</div>
		<div class="body">
			<div id="content">
				<WindowDialog v-for="component in componentsList" :key="component.id" :prop="component" :zIndex="component.zIndex"/>
			</div>
			<div class="side-list">
				<sideList :componentsList="componentsList"/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive} from 'vue'
import sideList from "@/components/fake-window/side-list/side-list.vue"
import WindowDialog from '@/components/fake-window/window-dialog/dialog.vue'
import A from '@/components/testVue/a.vue'
import B from '@/components/testVue/b.vue'
import C from '@/components/testVue/c.vue'
import { type FakeWindowItemDate } from '@/type/fake-window'
const componentsList:FakeWindowItemDate[] = [
	{
		id: 1,
		title: "a",
		component:A,
	},
	{
		id: 2,
		title: "b",
		component:B,
	},
	{
		id: 3,
		title: "c",
		component:C,
	}
]

onMounted(()=>{
	if(componentsList.length) componentsList.forEach((item,index)=>{
		item.zIndex = index
		if(!item.img) item.img = item.title.toUpperCase().charAt(0)
	})
})
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
