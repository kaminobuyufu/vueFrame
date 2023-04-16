<template>
	<div class="main">
		<div class="header">这里是头部</div>
		<div class="body">
			<div id="content">
				<WindowDialog
					v-for="item in componentsList" 
					:key="item.id" 
					:component="item.component"
					:title="item.title"
					:prop="item.prop"
					:zIndex="item.position?.zIndex"
					:initOffset="item.position?.offset"
				/>
			</div>
			<div class="side-list">
				<sideList :componentsList="componentsList"/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import sideList from "@/components/fake-window/side-list/side-list.vue"
import WindowDialog from '@/components/fake-window/window-dialog/dialog.vue'
import A from '@/components/testVue/a.vue'
import B from '@/components/testVue/b.vue'
import C from '@/components/testVue/c.vue'
import { type FakeWindowItemDate } from '@/type/fake-window'

const dialogTableVisible = true

const componentsList:FakeWindowItemDate[] = [
	{
		id: 1,
		title: "a",
		component:A,
		prop:{
			name:'zhangsan'
		}
	},
	{
		id: 2,
		title: "b",
		component:B,
		prop:{
			name:'lisi'
		}
	},
	{
		id: 3,
		title: "c",
		component:C,
		prop:{
			name:'wangwu'
		}
	}
]

const init = ()=>{
	if(componentsList.length) componentsList.forEach((item,index)=>{
		item.position = {
			zIndex:index,
			offset:20*index
		}
		if(!item.img) item.img = item.title.toUpperCase().charAt(0)
	})
}
init()

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
		#content{
			position: relative;
			height: 100%;
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
