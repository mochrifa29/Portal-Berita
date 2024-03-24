<template>
  <div v-if="!currentUser">Loading</div>
  <div v-else>
    <h1>Hallo {{ currentUser.name }} ({{ currentUser.email }}) 👋</h1>
    <p>Selamat Datang di Website Kami</p>
  </div>
</template>
<script setup>
import { useAuthStores } from '../stores/AuthStore'
import { storeToRefs } from 'pinia'


//Store
const auth = useAuthStores()
const { currentUser } = storeToRefs(auth)
</script>
