<template>
	<div class="zb_dialog" ref="container">
		<keep-alive>
			<component :is="prop.component" :prop="prop.prop" ></component>
  	</keep-alive>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initZbDialog } from '@/service/set-offset'

const container = ref()
const { prop, zIndex, initOffset} = defineProps(['prop','zIndex','initOffset'])
console.log(initOffset)
const dialogVisible = ref(true)

onMounted(()=>{
	initZbDialog(container.value,initOffset)
	// console.log(container.value.offsetParent.clientWidth)
	// console.log(container.value.offsetParent.clientHeight)
})
</script>

<style scoped lang="scss">
.zb_dialog{
	position: absolute;
	z-index: v-bind(zIndex);
	background-color: #fff;
}
</style>
