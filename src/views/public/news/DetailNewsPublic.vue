<template>
  <div v-if="detailNews">
    <DetailNewsComponent :data="detailNews" />
  </div>
</template>
<script setup>
import { useNewsStore } from '@/stores/newsStores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import  DetailNewsComponent  from '../../../components/news/DetailNewsComponent.vue'

//Store
const newsStore = useNewsStore()

//Route
const route = useRoute()

// State
const { detailNews } = storeToRefs(newsStore)

//Action
const { detailHandling } = newsStore

onMounted(() => {
  detailHandling(route.params.id)
})
</script>
