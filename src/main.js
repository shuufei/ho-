import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScroll from 'vue-scroll'
import App from './App.vue'
import BlogWrap from './blog/blogWrap.vue'
import Blog from './blog/blog.vue'
import TravelInfo from './travel-info/travelInfo.vue'
import About from './about/about.vue'
import Article from './blog/article.vue'

Vue.use(VueRouter)
Vue.use(VueScroll)

const NotFound = App;
const Home = App;
const BlogPage = BlogWrap;
const BlogDefault = Blog;
const ArticlePage = Article;
// const TravelInfoPage = { template: '<p>trabel info page</p>' }
const TravelInfoPage = TravelInfo;
const AboutPage = About;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    // { path: '*', component: Home },
    { path: '/', component: Home },
    { path: '/blog', component: BlogPage,
      children: [
        {
          path: '',
          component: BlogDefault
        },
        {
          path: 'articles/:id',
          component: ArticlePage,
          props: true
        }
      ]
    },
    { path: '/travelinfo', component: TravelInfoPage },
    { path: '/about', component: AboutPage }
  ]
})

new Vue({
  router,
  // el: '#app',
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
