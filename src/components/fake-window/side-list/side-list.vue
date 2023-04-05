<template>
	<div class="side-list" @mouseleave.stop="detailMessage" @mouseenter.stop="detailMessage">
		<ul>
			<li v-for="obj in list" :key="obj.id">
				<i>{{ obj.title }}</i>
				<span v-if="unfold">{{ obj.content }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const list = [
	{
		id: 1,
		title: "a",
		content: "qwertyuiop",
	},
	{
		id: 2,
		title: "b",
		content: "asdfghjkl",
	},
	{
		id: 3,
		title: "c",
		content: "zxcvbnm",
	},
]
const unfold = ref(false)
const detailMessage = (e:any) => {
	
	unfold.value = !unfold.value
	}
</script>

<style lang="scss" scoped>
.side-list {
	ul {
		li {
			height: 32px;
			margin: 3px;
			background-color: yellow;
			display: flex;
		}
		i {
			width: 32px;
			font-size: 20px;
			text-indent: 8px;
			background-color: rgba(0, 222, 255, 0.8);
		}
		span {
			animation: open .4s forwards;
			overflow: hidden;
			line-height: 32px;
			text-indent: 0.5rem;
		}
		@keyframes open {
			0% {
				width: 0;
			}
			100%{
				width: 164px;
			}
		}
	}
}
</style>
