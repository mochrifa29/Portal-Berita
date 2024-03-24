import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import NewsView from '../views/NewsView.vue'
import CategoryView from '../views/CategoryView.vue'
import ProfileView from '../views/ProfileView.vue'
import DetailCategory from '../views/DetailCategory.vue'
import LandingPageView from '../views/LandingPageView.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

//News
import CreateNews from '@/views/news/CreateNews.vue'
import DetailNews from '@/views/news/DetailNews.vue'
import UpdateNews from '@/views/news/UpdateNews.vue'

//public
import PublicLayout from '../layouts/PublicLayout.vue'
import Category from '../views/public/Category.vue'
import Login from '../views/public/Login.vue'
import Register from '../views/public/Register.vue'
import DetailNewsPublic from '@/views/public/news/DetailNewsPublic.vue'
import DetailCategoryPublic from '@/views/public/category/DetailCategoryPublic.vue'

//error
import NotFoundView from '../views/error/NotFoundView.vue'

//auth
import { auth } from '../config/firebase'

const requiredAuth = (to, from, next) => {
  const userAuth = auth.currentUser
  if (!userAuth) {
    alert('Login/Register Dulu Dong')
    next({
      name: 'Login'
    })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    //Dashbord
    {
      path: '/dashboard',
      component: DashboardLayout,
      beforeEnter: requiredAuth,
      children: [
        {
          path: '',
          redirect: { name: 'Dashboard' }
        },
        {
          path: './',
          name: 'Dashboard',
          component: DashboardView
        },
        {
          path: 'news',
          name: 'News',
          component: NewsView
          // component: () => import('../views/AboutView.vue')
        },
        {
          path: 'news/create',
          name: 'CreateNews',
          component: CreateNews
        },
        {
          path: 'news/:id',
          name: 'DetailNews',
          component: DetailNews
        },
        {
          path: 'news/:id/edit',
          name: 'DetailUpdateNews',
          component: UpdateNews
        },
        {
          path: 'category',
          name: 'Category',
          component: CategoryView
        },
        {
          path: 'user',
          name: 'User',
          component: ProfileView
        },
        {
          path: 'category/:name',
          name: 'Category-name',
          component: DetailCategory
        }
      ]
    },
    //public
    {
      path: '/',
      component: PublicLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: LandingPageView
        },
        {
          path: '/news/:id',
          name: 'DetailPublicNews',
          component: DetailNewsPublic
        },
        {
          path: '/categorypublic',
          name: 'CategoryPublic',
          component: Category
        },
        {
          path: '/category/:id',
          name: 'CategoryById',
          component: DetailCategoryPublic
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        }
      ]
    },

    //404
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
