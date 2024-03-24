<template>
  <h1>Update Berita</h1>
  <FormInputNews />
</template>
<script setup>
import { useNewsStore } from '@/stores/newsStores'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import FormInputNews from '../../components/news/FormInputNews.vue'

//Store
const newsStore = useNewsStore()

//route
const router = useRoute()

//Action
const {updateHandling} = newsStore

onMounted(() => {
    updateHandling(router.params.id)
})

</script>
