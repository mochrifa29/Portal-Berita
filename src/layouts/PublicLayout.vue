<template>
  <v-app>
    <!-- Header -->
    <Header />

    <!-- Main -->
    <v-container style="min-height: 100vh" class="my-10">
      <RouterView />
    </v-container>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script setup>
import Header from '../components/public/Header.vue'
import Footer from '../components/public/Footer.vue'
</script>
