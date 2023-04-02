<template>
	<div class="side-list">
		<ul>
			<li v-for="obj in list">
				<i>{{ obj.title }}</i>
				<span>{{ obj.content }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup>
const list = [
	{
		title: "123",
		content: "qwertyuiop",
	},
	{
		title: "456",
		content: "asdfghjkl",
	},
	{
		title: "789",
		content: "zxcvbnm",
	},
];
</script>

<style lang="scss" scoped>
.side-list {
	ul {
		margin: 8px 5px;
		li {
			height: 32px;
		}
		i {
			margin: 5px;
		}
	}
}
</style>
