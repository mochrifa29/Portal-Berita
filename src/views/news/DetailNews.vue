<template>
  <div v-if="detailNews">
    <DetailNewsComponent :data="detailNews" :isUpdate="true" />
  </div>
</template>
<script setup>
import { useNewsStore } from '../../stores/newsStores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DetailNewsComponent from '../../components/news/DetailNewsComponent.vue'

//Storage
const newsStores = useNewsStore()

//Route
const route = useRoute()

//Action
const { detailHandling } = newsStores

//State
const { detailNews } = storeToRefs(newsStores)

onMounted(() => {
  detailHandling(route.params.id)
})
</script>
