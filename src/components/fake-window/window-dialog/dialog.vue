<template>
	<div v-show="active" class="zb_dialog" ref="container">
		<header>
			<h3>{{ title }}</h3>
			<button @click="shrink">_</button>
			<button id="full_screen">口</button>
			<button @click="closeCompontent">X</button>
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
const { active, component, prop, title, zIndex} = defineProps(['active','component','prop','title','zIndex'])
const emit = defineEmits(['closeCompontent', 'update:active'])

const shrink = () => {
	emit('update:active',false)
}

const closeCompontent = () =>{
	emit('closeCompontent')
}

onMounted(()=>{
	initZbDialog(container.value,zIndex)
})
</script>

<style scoped lang="scss">
.zb_dialog{
	position: absolute;
	background-color: #fff;
	border: 2px solid #686868;
	user-select:none;
	header{
		display: flex;
		height: 30px;
		border-bottom: 2px solid #686868;
		h3{
			flex:1;
			margin:0 18px;
		}
		button{
			height: 22px;
			width: 22px;
			margin:3px;
		}
	}
	.body{
		padding: 18px;
	}
}
</style>
