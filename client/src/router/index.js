import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import FirstPlayer from '@/components/FirstPlayer'
import SecondPlayer from '@/components/SecondPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main-page',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '',
          name: 'FirstPlayer',
          component: FirstPlayer
        },
        {
          path: '',
          name: 'SecondPlayer',
          component: SecondPlayer
        }
      ]
    }
  ]
})
