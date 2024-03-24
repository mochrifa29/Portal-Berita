import { auth, db } from '../config/firebase'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { useRouter } from 'vue-router'

export const useAuthStores = defineStore('Auth', () => {
  const formInput = ref(false)
  const router = useRouter()

  // untuk mengatur user yang login
  const currentUser = ref(null)

  const userCollection = collection(db, 'users')

  const user = reactive({
    name: '',
    email: '',
    password: ''
  })

  //Error validasi login
  const isError = ref(false)
  const message = ref(null)

  const userHandler = () => {
    onAuthStateChanged(auth, async (user) => {
      //ketika login
      if (user) {
        //ambil data di firebase di collection users
        const queryId = query(userCollection, where('uid', '==', user.uid))
        const queryData = await getDocs(queryId)
        const queryUser = queryData.docs[0].data()

        currentUser.value = {}
        currentUser.value.email = user.email
        currentUser.value.id = user.uid
        currentUser.value.name = queryUser.name
        currentUser.value.isAdmin = queryUser.isAdmin
      } else {
        //ketika logout
        currentUser.value = null
      }
    })
  }

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        //link untuk kemabli ke halaman home
        router.push({ name: 'Home' })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //tambah data user ke firebase
  const authUser = async (isLogin = false) => {
    isError.value = false
    message.value = null
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, user.email, user.password)
      } else {
        const data = await createUserWithEmailAndPassword(auth, user.email, user.password)

        //masukan data ke database
        await addDoc(userCollection, {
          name: user.name,
          isAdmin: false,
          uid: data.user.uid
        })
      }
    } catch (error) {
      isError.value = true
      message.value = error.message
  
    }

    //kosongkan inputan
    user.email = ''
    user.name = ''
    user.password = ''

    //jika tidak bernilai kosong
    if (!isError.value) {
      //link untuk menuju ke dashboard
      router.push({ name: 'Dashboard' })
    }
  }

  return {
    formInput,
    user,
    authUser,
    currentUser,
    userHandler,
    logoutUser,
    isError,
    message
  }
})
