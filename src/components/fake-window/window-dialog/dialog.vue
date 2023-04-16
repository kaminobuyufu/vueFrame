<template>
	<div class="zb_dialog" ref="container">
		<header>
			<h3>{{ title }}</h3>

		</header>
		<div class="body">
			<keep-alive>
				<component :is="component" :prop="prop" ></component>
  		</keep-alive>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initZbDialog } from '@/service/set-offset'

const container = ref()
const { component, prop, title, zIndex} = defineProps(['component','prop','title','zIndex'])
const dialogVisible = ref(true)

onMounted(()=>{
	initZbDialog(container.value,zIndex)
	// console.log(container.value.offsetParent.clientWidth)
	// console.log(container.value.offsetParent.clientHeight)
})
</script>

<style scoped lang="scss">
.zb_dialog{
	position: absolute;
	background-color: #fff;
	border: 2px solid #686868;
	user-select:none;
	header{
		padding: 0 18px;
		height: 30px;
		border-bottom: 2px solid #686868;
	}
	.body{
		padding: 18px;
	}
}
</style>
