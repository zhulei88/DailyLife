<template>
<div>
我是哈哈
	<div v-for="(item,index) in list" :key="index">
	{{ item }}
	</div>
	<div @click="add">往数组里添加数据</div>
	<div>{{obj.name}}</div>
</div>
<div></div>
</template>

<script setup>
	import {onMounted,onUpdated,reactive} from 'vue';
	const list = reactive([1,2,3]);
	const obj = reactive({});
	const add = function(){
		list[0] = 5;
		obj.name = 'hah';
		console.log(list);
		console.log(obj);
	}
	onMounted(()=>{console.log(111)});
	onUpdated(()=>{console.log(222)});
</script>

<style>
</style>
