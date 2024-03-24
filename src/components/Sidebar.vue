<template>
  <v-navigation-drawer location="left" color="blue">
    <ListSideBar :items="items" />
  </v-navigation-drawer>
</template>

<script setup>
import ListSideBar from './ListSideBar.vue'
import { ref } from 'vue'
const items = ref([
  { text: 'Dashboard', icon: 'mdi-view-dashboard', pathName: 'Dashboard' },
  { text: 'Category', icon: 'mdi-view-list', pathName: 'Category' },
  { text: 'News', icon: 'mdi-newspaper-variant-outline', pathName: 'News' },
  { text: 'Profile', icon: 'mdi-account', pathName: 'User' }
])
</script>
