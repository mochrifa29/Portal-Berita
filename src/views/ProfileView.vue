<template>
  <div>
    <h1>Halaman Profile</h1>
    <h4>Jumlah User : {{ usersData.JumlahUser }}</h4>
    <div v-for="user in usersData.userData" :key="user.name">
      <p>Name : {{ user.name }}</p>
      <p>Email : {{ user.email }}</p>

      <hr />
    </div>
    <v-divider></v-divider>
    <IconLink color="red" icon="mdi-youtube" link="https://www.youtube.com" />
    <IconLink color="blue" icon="mdi-linkedin" link="https://www.youtube.com" />
    <IconLink color="purple" icon="mdi-instagram" link="https://www.instagram.com" />
  </div>
</template>
<script setup>
import IconLink from '../components/IconLink.vue'
import { useUserStorage } from '../stores/UserStorage'

//storage
const usersData = useUserStorage()
</script>
