<template>
  <div class="d-flex justify-center">
    <div>
      <img :src="NotFound" style="width: 60%" />
      <p>Halaman Tidak Ditemukan</p>
      <v-btn color="green" class="my-10" block :to="{ name: 'Home' }">Kembali</v-btn>
    </div>
  </div>
</template>
<script setup>
import NotFound from '../../assets/notFound.svg'
</script>
