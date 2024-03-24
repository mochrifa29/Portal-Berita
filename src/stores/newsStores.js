import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { db } from '../config/firebase'
import { useAuthStores } from './AuthStore'
import { useRouter } from 'vue-router'
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export const useNewsStore = defineStore('News', () => {
  //State
  const news = reactive({
    id: '',
    title: '',
    content: '',
    category: '',
    isUpdate: false
  })

  const formInput = ref(false)
  const newsData = ref(null)

  //Router
  const router = useRouter()

  //State
  const detailNews = ref(null)

  //Storage
  const AuthStore = useAuthStores()

  //Collection
  const newsCollection = collection(db, 'news')

  const handleSubmit = async () => {
    if (news.isUpdate) {
      //update data
      await updateDoc(doc(newsCollection, news.id), {
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name
        }
      })
    } else {
      const now = Date.now()

      //tambah data
      await addDoc(newsCollection, {
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name
        },
        isApprove: false,
        image: null,
        writtenBy: {
          id: AuthStore.currentUser.id,
          name: AuthStore.currentUser.name,
          email: AuthStore.currentUser.email
        },
        createdAt: now
      })
      alert('Data Berhasil Ditambahkan')
    }
    router.push({ name: 'News' })
    // clearInput()
  }

  const clearInput = () => {
    news.id = ''
    news.title = ''
    news.content = ''
    news.category = ''
    news.isUpdate = false
  }

  const updateHandling = async (id) => {
    const docRef = doc(newsCollection, id)
    const docDetail = await getDoc(docRef)

    news.id = docRef.id
    news.title = docDetail.data().title
    news.content = docDetail.data().content
    news.category = docDetail.data().category
    news.isUpdate = true
  }

  const allNews = async () => {
    const dataBerita = await getDocs(newsCollection)
    newsData.value = dataBerita.docs.map((doc) => {
      // console.log(doc.id, doc.data());
      return { ...doc.data(), id: doc.id }
    })
  }

  const detailHandling = async (id) => {
    const docRef = doc(newsCollection, id)
    const docDetail = await getDoc(docRef)

    detailNews.value = docDetail.data()
  }

  const deleteHandling = async (id) => {
    await deleteDoc(doc(newsCollection, id))
    alert('Data Berhasil di hapus')
    allNews()
  }

  return {
    deleteHandling,
    news,
    newsData,
    formInput,
    handleSubmit,
    allNews,
    detailNews,
    detailHandling,
    updateHandling,
    clearInput
  }
})
