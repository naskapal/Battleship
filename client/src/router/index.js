import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import StartContent from '@/components/StartContent'
import NewGameContent from '@/components/NewGameContent'
import HiScoreContent from '@/components/HiScoreContent'
import MainPage from '@/components/MainPage'

Vue.use(Router)

export default new Router({
      routes: [{
            path: '/',
            component: HomePage,
            children: [{
                path: "",
                name: 'HomePage',
                component: StartContent
              },
              {
                path: "/newgame",
                name: 'NewGame',
                component: NewGameContent
              },
              {
                path: "/hiscore",
                name: 'HiScore',
                component: HiScoreContent
              },
              {
                path: '/main-page',
                name: 'mainpage',
                component: MainPage
                  // FirstPlayer
                // }
              }
            ]
          }]
        })