<template>
  <v-toolbar app class="bg-blue">
    <RouterLink :to="{ name: 'Home' }">
      <span class="text-white ml-4">Rnews</span>
    </RouterLink>

    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!currentUser">
      <v-btn flat v-for="item in menuItems" :key="item.title" :to="{ name: `${item.pathName}` }">
        <v-icon left>{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-else>
      <v-btn flat v-for="item in menuAdmin" :key="item.title" :to="{ name: `${item.pathName}` }">
        <v-icon left>{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script setup>
import { inject } from 'vue'

const currentUser = inject('currentUser')

const menuItems = [
  {
    title: 'Category',
    icon: 'mdi-newspaper',
    pathName: 'CategoryPublic'
  },
  {
    title: 'Login',
    icon: 'mdi-login',
    pathName: 'Login'
  },
  {
    title: 'Register',
    icon: 'mdi-account-plus',
    pathName: 'Register'
  }
]

const menuAdmin = [
  {
    title: 'Category',
    icon: 'mdi-newspaper',
    pathName: 'CategoryPublic'
  },
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    pathName: 'Dashboard'
  }
]
</script>
<style scope>
a {
  text-decoration: none;
  cursor: pointer;
}
</style>
