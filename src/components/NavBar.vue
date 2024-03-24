<template>
  <v-app-bar color="blue" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="$emit('openClose')"></v-app-bar-nav-icon>

    <v-toolbar-title>Portal Berita</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn variant="text" color="white" icon="mdi-logout" @click="logoutUser"></v-btn>
  </v-app-bar>
</template>
<script setup>
import { useAuthStores } from '../stores/AuthStore';
defineEmits(['openClose'])

//Store
const auth = useAuthStores()

//action
const {logoutUser} = auth
</script>
