<template>
  <v-layout>
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
    <!-- sidebar -->
    <Sidebar v-model="drawer" />

    <!-- navbar -->
    <NavBar @openClose="drawerOpenClose" />

    <!-- main content -->
    <v-main style="height: 500px">
      <v-card-text>
        <RouterView />
      </v-card-text>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, provide } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import NavBar from '../components/NavBar.vue'

const drawer = ref(true)

const drawerOpenClose = () => {
  drawer.value = !drawer.value
}

provide('username', 'Moch Rifa Maulana N')
</script>
