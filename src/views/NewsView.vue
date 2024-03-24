<template>
  <h1>Halaman News</h1>
  <!-- Tombol tambah -->
  <div class="d-flex justify-end my-6">
    <v-btn color="primary" icon="mdi-plus" @click="addNews()" size="large"></v-btn>
  </div>
  <v-row justify="center">
    <v-col cols="4" v-for="data in newsData" :key="data.id">
      <v-card>
        <v-img
          class="align-end text-white"
          height="300"
          :src="data.image ? data.image : `https://cdn.vuetifyjs.com/images/cards/docks.jpg`"
          cover
        >
        </v-img>
        <v-card-title>{{ data.title.substring(0, 50) }}</v-card-title>

        <v-card-subtitle class="pt-4"> {{ data.category.name }} </v-card-subtitle>

        <v-card-text>
          <div>{{ data.content.substring(0, 200) }}</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" @click="detail(data.id)"> Detail </v-btn>
          <v-btn color="blue" @click="update(data.id)"> Update </v-btn>
          <v-btn color="red" @click="deleteData(data.id)"> Hapus </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { useNewsStore } from '../stores/newsStores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

//Router
const router = useRouter()

//Stores
const newsStores = useNewsStore()

//State
const { newsData } = storeToRefs(newsStores)

//Action
const { allNews, clearInput, deleteHandling } = newsStores

const detail = (id) => {
  router.push({ name: 'DetailNews', params: { id: id } })
}

const update = (id) => {
  router.push({ name: 'DetailUpdateNews', params: { id: id } })
}

const addNews = () => {
  router.push({ name: 'CreateNews' })
  clearInput()
}

const deleteData = (id) => {
  deleteHandling(id)
}

onMounted(() => {
  allNews()
})
</script>
