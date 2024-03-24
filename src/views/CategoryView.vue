<template>
  <div>
    <h1>Halaman Category</h1>
    <div class="d-flex justify-end my-6">
      <v-btn color="primary" icon="mdi-plus" size="large" @click="tambahData()" />
    </div>

    <!-- dialog tambah data -->
    <DialogComponent v-model="dialog">
      <template #title>
        <div>{{ category.isUpdate ? 'Update Category' : 'Add Category' }}</div>
      </template>
      <template #content>
        <v-form v-model="form" @submit.prevent="onSubmitData">
          <v-text-field
            v-model="category.name"
            label="Name"
            class="mb-1"
            :rules="nameRules"
          ></v-text-field>
          <v-textarea
            v-model="category.description"
            label="Desription"
            class="mb-1"
            :rules="descriptionRules"
          ></v-textarea>
          <v-btn
            :disabled="!form"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            >{{ category.isUpdate ? 'Update' : 'Add' }}</v-btn
          >
        </v-form>
      </template>
    </DialogComponent>

    <!-- dialog detail -->
    <DialogComponent v-model="dialogDetail">
      <template #title>{{ category.name }}</template>
      <template #content>{{ category.description }}</template>
    </DialogComponent>

    <!-- Dialog Delete -->
    <DialogComponent v-model="dialogDelete">
      <template #title>Delete data</template>
      <template #content>
        <div class="text-h6 text-erroe pad-3">Yakin ingin hapus {{ category.name }}?</div>
        <v-row>
          <v-col>
            <v-btn color="primary" block @click="destroyData(category.id)">Ya</v-btn>
          </v-col>
          <v-col>
            <v-btn color="error" block @click="dialogDelete = false">Tidak</v-btn>
          </v-col>
        </v-row>
      </template>
    </DialogComponent>

    <v-table hover>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Name</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in categories" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td class="text-center">
            <v-btn size="x-small" color="info" icon="mdi-information" @click="getData(item)" />
            <v-btn
              size="x-small"
              color="primary"
              icon="mdi-pencil"
              class="mx-3"
              @click="editData(item)"
            />
            <v-btn size="x-small" color="error" icon="mdi-trash-can" @click="deleteData(item)" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import DialogComponent from '../components/dashboard/dialogComponent.vue'
import { useCategoryStore } from '../stores/CategoryStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
//Storage
const CategoryStorage = useCategoryStore()

//State
const { dialog, form, category, categories, dialogDetail, dialogDelete} =
  storeToRefs(CategoryStorage)

//Action
const { onSubmitData, readCategory, getData, tambahData, editData, deleteData, destroyData } =
  CategoryStorage

//supaya langsung ter render
onMounted(() => {
  readCategory()
})

//Validasi
const nameRules = [
  (value) => {
    if (value) {
      return true
    } else {
      return 'Name harus diisi'
    }
  }
]

const descriptionRules = [
  (value) => {
    if (value) {
      return true
    } else {
      return 'Description harus diisi'
    }
  }
]
</script>
