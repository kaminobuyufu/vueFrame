<template>
	<div class="main">
		<div class="header">这里是头部</div>
		<div class="body">
			<div id="content">
				<WindowDialog
					v-for="item in dialogList" 
					:key="item.id" 
					v-model:active="item.active"
					@closeCompontent="closeCompontent(item.id)"
					:component="componentsList[item.component]"
					:title="item.title"
					:prop="item.prop"
					:zIndex="item.zIndex"
				/>
			</div>
			<div class="side-list">
				<sideList :componentsList="dialogList" @openItem="openItem"/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Component, reactive, ref, watch, type Ref } from 'vue'
import sideList from "@/components/fake-window/side-list/side-list.vue"
import WindowDialog from '@/components/fake-window/window-dialog/dialog.vue'
import A from '@/components/testVue/a.vue'
import B from '@/components/testVue/b.vue'
import C from '@/components/testVue/c.vue'
import { type FakeWindowItemDate } from '@/type/fake-window'

interface componentsList {
	[propName:string]:Component
}

const componentsList:componentsList = {
	'a':A,
	'b':B,
	'c':C
}

const dialogList = ref<FakeWindowItemDate[]>([
	{
		id: 1,
		title: "a",
		component:'a',
		active:true,
		prop:{
			name:'zhangsan'
		}
	},
	{
		id: 2,
		title: "b",
		component:'b',
		active:true,
		prop:{
			name:'lisi'
		}
	},
	{
		id: 3,
		title: "c",
		component:'c',
		active:true,
		prop:{
			name:'wangwu'
		}
	}
])

const closeCompontent = (id:number) => {
	const newArr:FakeWindowItemDate[] = []
	dialogList.value.forEach((item)=>{
		if(item.id !== id) newArr.push(item)
	})
	dialogList.value = newArr
	console.log(dialogList.value)
}

const openItem = (id:number) => {
	dialogList.value.forEach((item)=>{
		console.log(item.id == id)
		if(item.id == id) item.active = true
	})
}

const init = ()=>{
	if(dialogList.value.length) dialogList.value.forEach((item,index)=>{
		item.zIndex = index
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
