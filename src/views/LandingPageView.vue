<template>
  <h1 class="my-3">List Berita</h1>
  <v-divider color="info" class="border-opacity-100"></v-divider>

  <v-row class="my-3">
    <v-col cols="12" v-for="data in newsData" :key="data.id">
      <v-card class="mx-auto">
        <v-img
          class="align-end text-white"
          height="400"
          :src="data.image ? data.image : `https://cdn.vuetifyjs.com/images/cards/docks.jpg`"
          cover
        >
        </v-img>
        <v-card-title>{{ data.title.substring(0, 200) }}</v-card-title>

        <v-card-subtitle class="pt-4"> {{ data.category.name }} </v-card-subtitle>

        <v-card-text>
          <div>{{ data.content.substring(0, 200) }} ...</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="info" variant="elevated" type="button" @click="detailNews(data.id)">
            Read More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { useNewsStore } from '@/stores/newsStores'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

//Router
const router = useRouter()

//Store
const newsStore = useNewsStore()

//Action
const { allNews } = newsStore

//State
const { newsData } = storeToRefs(newsStore)

onMounted(() => {
  allNews()
})

const detailNews = (id) => {
  router.push({ name: 'DetailPublicNews', params: { id: id } })
}
</script>
