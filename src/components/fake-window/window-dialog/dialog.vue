<template>
	<div class="zb_dialog">
		<keep-alive>
			<component :is="prop.component" :prop="prop.prop" ></component>
  	</keep-alive>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const {prop,zIndex} = defineProps(['prop','zIndex'])
console.log(prop)
const dialogVisible = ref(true)
</script>

<style scoped lang="scss">
.zb_dialog{
	position: absolute;
	z-index: v-bind(zIndex);
}
</style>
