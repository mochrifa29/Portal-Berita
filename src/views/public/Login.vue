<template>
   <formAuthComponent :isLogin="isLogin"/>
</template>

<script setup>
import formAuthComponent from '../../components/public/formAuthComponent.vue';

const isLogin = true

</script>