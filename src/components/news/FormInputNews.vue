<template>
  <div class="mt-8">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="90%" rounded="lg">
      <v-form v-model="formInput" @submit.prevent="handleSubmit()">
        <v-text-field
          density="compact"
          placeholder="Judul Berita"
          class="my-5"
          variant="outlined"
          :rules="titleRules"
          label="Judul Berita"
          v-model="news.title"
        ></v-text-field>

        <v-textarea
          density="compact"
          label="Content Berita"
          class="my-5"
          variant="outlined"
          :rules="contentRules"
          v-model="news.content"
        ></v-textarea>

        <div v-if="categories">
          <v-select
            class="my-5"
            :rules="categoryRules"
            :items="categories"
            item-title="name"
            item-value="id"
            label="category"
            return-object
            variant="outlined"
            v-model="news.category"
          >
          </v-select>
        </div>

        <v-card class="mb-12" color="surface-variant" variant="tonal"> </v-card>

        <v-btn
          block
          :disabled="!formInput"
          type="submit"
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
        >
          Submit
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCategoryStore } from '@/stores/CategoryStore'
import { onMounted } from 'vue'
import { useNewsStore } from '../../stores/newsStores'

//stote
const CategoryStore = useCategoryStore()
const NewsStore = useNewsStore()

//state
const { categories } = storeToRefs(CategoryStore)
const { news, formInput } = storeToRefs(NewsStore)

//action
const { readCategory } = CategoryStore
const { handleSubmit } = NewsStore

//validasi
const titleRules = [
  (value) => {
    if (value) return true
    return 'Judul harus diisi'
  }
]

const contentRules = [
  (value) => {
    if (value) return true
    return 'Content Berita harus diisi'
  }
]

const categoryRules = [
  (value) => {
    if (value) return true
    return 'Coategory Berita harus diisi'
  }
]

onMounted(() => {
  readCategory()
})
</script>
