<template>
  <h1>Category</h1>
  <v-row class="my-2">
    <v-col cols="12" md="3" v-for="data in categories" :key="data.id">
      <v-sheet
        class="align-center justify-center flex-wrap text-center py-6"
        color="blue-lighten-4"
        height="200"
        rounded="lg"
        width="90%"
        elevation="12"
      >
        <h2 class="text-h5 mb-6">{{ data.name }}</h2>
        <div class="mb-4 text-body-2">
          {{ data.description.substring(0, 50) }} <br />
          <RouterLink
            :to="{ name: 'CategoryById', params: { id: data.id } }"
            clas="text-decoration-none"
            >Read More</RouterLink
          >
        </div>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script setup>
import { useCategoryStore } from '../../stores/CategoryStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

//Store
const categoryStore = useCategoryStore()

//State
const { categories } = storeToRefs(categoryStore)

//Action
const { readCategory } = categoryStore

onMounted(() => {
  readCategory()
})
</script>
