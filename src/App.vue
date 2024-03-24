<template>
  <RouterView />
</template>

<script setup>
import { onMounted, provide } from 'vue';
import { RouterView } from 'vue-router'
import { useAuthStores } from './stores/AuthStore';
import { storeToRefs } from 'pinia';

const auth = useAuthStores()

//state
const {currentUser} = storeToRefs(auth)

//melempar state currenUser menggunakan provide inject
provide('currentUser',currentUser)

onMounted(() => {
  auth.userHandler()
})

</script>
